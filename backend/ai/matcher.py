from difflib import SequenceMatcher
from .normalizer import normalize, tokens


def _similarity(a: str, b: str) -> float:
    return SequenceMatcher(None, a, b).ratio()


def _token_overlap(query_tokens: set[str], candidate_tokens: set[str]) -> float:
    if not query_tokens or not candidate_tokens:
        return 0.0
    inter = len(query_tokens & candidate_tokens)
    return inter / max(1, len(query_tokens))


def score_document(query: str, document: dict, context_text: str = "") -> float:
    q = normalize(query)
    q_tokens = set(tokens(query))
    priority = float(document.get("priority", 1.0))
    score = 0.0

    aliases = [normalize(x) for x in document.get("aliases", []) if x]
    title = normalize(document.get("title", ""))
    summary = normalize(document.get("summary", ""))
    keywords = {normalize(x) for x in document.get("keywords", []) if x}

    for alias in aliases:
        if not alias:
            continue
        alias_words = alias.split()
        if q == alias:
            score += 130
        elif alias in q:
            score += 18 if len(alias_words) == 1 and len(alias) <= 5 else 72
        elif q in alias and len(q) >= 4:
            score += 38
        else:
            sim = _similarity(q, alias)
            if sim >= .88:
                score += 42 * sim
            elif sim >= .72:
                score += 16 * sim

    if title:
        sim = _similarity(q, title)
        if sim >= .75:
            score += 24 * sim

    hit_keywords = q_tokens & keywords
    score += len(hit_keywords) * 13
    score += _token_overlap(q_tokens, set(tokens(title + " " + summary))) * 32

    if context_text and len(q_tokens) <= 7:
        ctx_tokens = set(tokens(context_text))
        doc_tokens = keywords | set(tokens(title + " " + summary))
        score += len(ctx_tokens & doc_tokens) * 1.8

    return score * priority


def ranked_matches(query: str, documents: list[dict], context_text: str = "", limit: int = 5) -> list[tuple[dict, float]]:
    ranked: list[tuple[dict, float]] = []
    for doc in documents:
        score = score_document(query, doc, context_text=context_text)
        if score > 0:
            ranked.append((doc, score))
    ranked.sort(key=lambda item: item[1], reverse=True)
    return ranked[:max(1, limit)]


def best_match(query: str, documents: list[dict], context_text: str = "") -> tuple[dict | None, float]:
    ranked = ranked_matches(query, documents, context_text=context_text, limit=1)
    if not ranked:
        return None, 0.0
    return ranked[0]
