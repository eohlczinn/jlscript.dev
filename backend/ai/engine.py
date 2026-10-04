from pathlib import Path
from .dialogue import (
    context_query_from_history,
    direct_site_reply,
    followup_mode,
    social_reply,
    suggestions_for_doc,
    tailor_answer,
)
from .guard import in_domain, off_topic_answer
from .knowledge import KnowledgeBase
from .matcher import best_match, ranked_matches
from .normalizer import tokens
from .router import explicit_document_id


class JLAIEngine:
    def __init__(self, knowledge_path: Path | None = None):
        if knowledge_path is None:
            knowledge_path = Path(__file__).resolve().parent.parent / "knowledge" / "knowledge.json"
        self.kb = KnowledgeBase(knowledge_path)

    def reload(self) -> int:
        self.kb.reload()
        return len(self.kb.documents)

    @staticmethod
    def _context(history: list[dict]) -> str:
        user_messages = [str(x.get("content", "")) for x in history[-12:] if x.get("role") == "user"]
        return " ".join(user_messages[-3:])

    def _find_by_id(self, document_id: str | None) -> dict | None:
        if not document_id:
            return None
        for doc in self.kb.documents:
            if doc.get("id") == document_id:
                return doc
        return None

    def _doc_from_history(self, history: list[dict]) -> tuple[dict | None, float]:
        # v3: usa primeiro o metadata do último retorno da própria JLAI.
        # Isso torna follow-ups como "onde isso aparece?" determinísticos.
        for item in reversed(history[-12:]):
            if item.get("role") != "assistant":
                continue
            context_id = str(item.get("context_id") or "")
            if context_id:
                doc = self._find_by_id(context_id)
                if doc:
                    return doc, 999.0
            intent = str(item.get("intent") or "")
            if intent and not intent.startswith(("followup:", "site:", "off_topic", "saudacao", "conversa")):
                doc = self._find_by_id(intent)
                if doc:
                    return doc, 999.0

        previous = context_query_from_history(history)
        if not previous:
            return None, 0.0

        routed = explicit_document_id(previous)
        if routed:
            doc = self._find_by_id(routed)
            if doc:
                return doc, 500.0

        return best_match(previous, self.kb.documents)

    def _answer_doc(self, question: str, doc: dict, score: float, mode: str | None = None) -> dict:
        source = doc.get("source")
        confidence = min(0.99, max(0.18, score / 150.0)) if score < 900 else 0.99
        return {
            "text": tailor_answer(question, doc, mode=mode),
            "intent": f"followup:{mode}" if mode else doc.get("id", "knowledge"),
            "topic": doc.get("topic", doc.get("id", "jlscript")),
            "confidence": round(confidence, 3),
            "sources": [source] if source else [],
            "suggestions": suggestions_for_doc(doc, exclude_mode=mode),
            "context_id": doc.get("id"),
        }

    def answer(self, question: str, history: list[dict] | None = None) -> dict:
        history = history or []
        question = question.strip()

        social = social_reply(question)
        if social:
            social["context_id"] = None
            return social

        site_action = direct_site_reply(question)
        if site_action:
            site_action["context_id"] = None
            return site_action

        mode = followup_mode(question)
        if mode and history:
            doc, score = self._doc_from_history(history)
            if doc:
                return self._answer_doc(question, doc, score, mode=mode)

        # Perguntas muito explícitas não precisam disputar fuzzy matching.
        routed_id = explicit_document_id(question)
        if routed_id:
            doc = self._find_by_id(routed_id)
            if doc:
                return self._answer_doc(question, doc, 500.0)

        if not in_domain(question, history):
            result = off_topic_answer()
            result["context_id"] = None
            return result

        context = self._context(history)
        ranked = ranked_matches(question, self.kb.documents, context_text=context, limit=4)
        doc, score = ranked[0] if ranked else (None, 0.0)

        if (not doc or score < 18) and len(tokens(question)) <= 7 and history:
            previous_doc, previous_score = self._doc_from_history(history)
            if previous_doc:
                doc, score = previous_doc, max(previous_score, 50.0)
            else:
                previous = context_query_from_history(history)
                combined = f"{previous} {question}".strip()
                if combined:
                    doc, score = best_match(combined, self.kb.documents, context_text=previous)

        if not doc or score < 16:
            return {
                "text": (
                    "Entendi que é sobre **JLScript**, mas não consegui identificar exatamente qual parte.\n\n"
                    "Me fala o objetivo de forma concreta, por exemplo:\n\n"
                    "- `quero instalar do zero`;\n"
                    "- `como faço uma função?`;\n"
                    "- `deu esse erro no jls run: ...`;\n"
                    "- `como uso #api?`.\n\n"
                    "Se você colar o erro ou um trecho `.jls`, eu uso isso para direcionar a resposta."
                ),
                "intent": "fallback_domain",
                "topic": "jlscript",
                "confidence": 0.0,
                "sources": [{
                    "label": "Documentação oficial JLScript",
                    "url": "https://jlscript-oficial.lucasaguiel5.workers.dev/#/docs",
                }],
                "suggestions": ["Como instalo a JLScript?", "Como crio meu primeiro .jls?", "Como funciona va, let e ins?"],
                "context_id": None,
            }

        return self._answer_doc(question, doc, score)
