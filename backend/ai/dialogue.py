import re
from .normalizer import normalize


GREETINGS = {
    "oi", "ola", "opa", "eae", "iae", "salve", "bom dia", "boa tarde", "boa noite",
}
THANKS = {"obrigado", "obrigada", "vlw", "valeu", "tmj", "thanks", "brigado"}
GOODBYES = {"tchau", "flw", "falou", "ate mais", "ate logo", "vou nessa"}
ACKS = {"blz", "beleza", "entendi", "saquei", "tendi", "show", "ok", "certo"}


def _contains_any(value: str, items: set[str]) -> bool:
    return value in items or any(value.startswith(item + " ") for item in items)


def social_reply(text: str) -> dict | None:
    value = normalize(text)

    if _contains_any(value, GREETINGS):
        return {
            "text": (
                "Opa! Tô aqui. 👋\n\n"
                "Pode falar normal comigo. Se for sobre **JLScript**, eu tento responder direto e, quando fizer sentido, "
                "mostro exemplo `.jls`, comando de terminal e a fonte da documentação."
            ),
            "intent": "saudacao",
            "topic": "saudacao",
            "confidence": 1.0,
            "sources": [],
            "suggestions": [
                "Como instalo a JLScript?",
                "Como crio meu primeiro .jls?",
                "Como funciona va, let e ins?",
            ],
        }

    if _contains_any(value, THANKS):
        return {
            "text": "Tamo junto. Se travar em código, instalação, CLI ou alguma parte do site, manda aqui.",
            "intent": "agradecimento",
            "topic": "conversa",
            "confidence": 1.0,
            "sources": [],
            "suggestions": ["Quero aprender a sintaxe", "Tenho um erro", "Quero ver as bibliotecas"],
        }

    if _contains_any(value, GOODBYES):
        return {
            "text": "Fechou. Quando voltar, continuo daqui com você na JLScript.",
            "intent": "despedida",
            "topic": "conversa",
            "confidence": 1.0,
            "sources": [],
            "suggestions": [],
        }

    if _contains_any(value, ACKS):
        return {
            "text": "Boa. Pode mandar a próxima dúvida sobre JLScript.",
            "intent": "confirmacao",
            "topic": "conversa",
            "confidence": 1.0,
            "sources": [],
            "suggestions": ["Como faço uma função?", "Quero aprender a sintaxe"],
        }

    if any(x in value for x in ["quem e voce", "quem e vc", "o que voce e", "oq vc e", "quem e a jlai"]):
        return {
            "text": (
                "Sou a **JLAI**, a assistente de suporte da JLScript.\n\n"
                "Meu motor usa uma base local da documentação da linguagem. Eu não sou uma IA geral: meu foco é "
                "explicar JLScript, ajudar com o site, instalação, sintaxe, CLI, bibliotecas e erros sem inventar assunto fora do projeto."
            ),
            "intent": "identidade",
            "topic": "conversa",
            "confidence": 1.0,
            "sources": [],
            "suggestions": ["O que você sabe fazer?", "Como começo na JLScript?"],
        }

    if any(x in value for x in ["o que voce sabe", "oq vc sabe", "o que vc faz", "me ajuda", "pode me ajudar"]):
        return {
            "text": (
                "Consigo ajudar com:\n\n"
                "- **sintaxe e exemplos `.jls`**;\n"
                "- **erros** e dúvidas de código;\n"
                "- **instalação**, extensão do VS Code e download;\n"
                "- **CLI `jls`**, build e bytecode;\n"
                "- **bibliotecas oficiais** e `#api`;\n"
                "- **documentação, história e páginas do site**.\n\n"
                "Pode perguntar do seu jeito. Exemplo: `como faço uma função que soma dois números?`"
            ),
            "intent": "capacidades",
            "topic": "conversa",
            "confidence": 1.0,
            "sources": [],
            "suggestions": ["Como faço uma função?", "Como criar uma API?", "Como instalar?"],
        }

    if any(x in value for x in ["tudo bem", "como voce esta", "como vc ta", "vc ta ai", "voce ta ai"]):
        return {
            "text": "Tô online. 😄 Manda a dúvida de JLScript.",
            "intent": "presenca",
            "topic": "conversa",
            "confidence": 1.0,
            "sources": [],
            "suggestions": ["Quero aprender JLScript", "Tenho uma dúvida de sintaxe"],
        }

    return None


def direct_site_reply(text: str) -> dict | None:
    """Ações simples do portal que não precisam passar pelo matcher."""
    value = normalize(text)

    if value in {"abrir documentacao oficial", "onde fica a documentacao", "documentacao oficial"}:
        return {
            "text": "A documentação oficial está na página **Documentação** do portal. Use o link logo abaixo.",
            "intent": "site:documentacao",
            "topic": "site",
            "confidence": 1.0,
            "sources": [{
                "label": "Documentação oficial JLScript 3.2.0",
                "url": "https://jlscript-oficial.lucasaguiel5.workers.dev/#/docs",
            }],
            "suggestions": ["Quero aprender a sintaxe", "Como crio meu primeiro .jls?"],
        }

    if value in {"abrir a pagina de download", "abrir pagina de download", "onde fica o download"}:
        return {
            "text": "O download oficial fica na página **Download** do portal. Use o link abaixo e evite executáveis de fontes aleatórias.",
            "intent": "site:download",
            "topic": "download",
            "confidence": 1.0,
            "sources": [{
                "label": "Download oficial JLScript",
                "url": "https://jlscript-oficial.lucasaguiel5.workers.dev/#/download",
            }],
            "suggestions": ["Como instalo passo a passo?", "Como verifico a instalação?"],
        }

    return None


def followup_mode(text: str) -> str | None:
    value = normalize(text)

    if any(x in value for x in [
        "onde isso aparece na documentacao", "onde aparece na documentacao", "qual a fonte",
        "de onde saiu isso", "onde ta isso na documentacao", "onde fica isso na documentacao",
    ]):
        return "source"
    if any(x in value for x in ["nao entendi", "explica melhor", "como assim", "mais simples", "explica de novo"]):
        return "simplify"
    if any(x in value for x in ["me da um exemplo", "manda exemplo", "mostra exemplo", "mostre um exemplo", "um exemplo", "exemplo disso"]):
        return "example"
    if any(x in value for x in ["como executo isso", "como rodo isso", "como executar isso", "como testo isso"]):
        return "execute"
    if any(x in value for x in ["passo a passo", "me guia", "me ensina passo a passo"]):
        return "steps"
    if any(x in value for x in ["resume", "resuma", "bem resumido", "resumido"]):
        return "summary"
    if any(x in value for x in ["e depois", "continua", "e agora", "proximo passo", "proximo"]):
        return "continue"

    return None


def _remove_first_heading(answer: str) -> str:
    lines = answer.strip().splitlines()
    if lines and lines[0].lstrip().startswith("#"):
        lines = lines[1:]
        while lines and not lines[0].strip():
            lines.pop(0)
    return "\n".join(lines).strip()


def _blocks(answer: str) -> list[str]:
    value = _remove_first_heading(answer)
    return [x.strip() for x in re.split(r"\n\s*\n", value) if x.strip()]


def _first_paragraphs(answer: str, count: int = 2) -> str:
    selected = []
    for block in _blocks(answer):
        if block.startswith("```"):
            continue
        selected.append(block)
        if len(selected) >= count:
            break
    return "\n\n".join(selected)


def _first_code(answer: str) -> str | None:
    match = re.search(r"```([^\n]*)\n([\s\S]*?)```", answer)
    if not match:
        return None
    lang = match.group(1).strip() or "jls"
    code = match.group(2).rstrip()
    return f"```{lang}\n{code}\n```"


def _first_shell_code(answer: str) -> str | None:
    for match in re.finditer(r"```([^\n]*)\n([\s\S]*?)```", answer):
        lang = match.group(1).strip().lower()
        code = match.group(2).strip()
        if lang in {"bash", "shell", "powershell", "ps1", "cmd", "terminal"} or "jls " in code:
            return f"```{lang or 'bash'}\n{code}\n```"
    return None


def _numbered_steps(answer: str) -> str | None:
    lines = answer.splitlines()
    found = []
    for line in lines:
        stripped = line.strip()
        if re.match(r"^\d+\.\s+", stripped):
            found.append(stripped)
    if not found:
        return None
    return "\n".join(found)


def _continuation(answer: str) -> str:
    blocks = _blocks(answer)
    # Pula os dois primeiros blocos já normalmente apresentados em resumo/explicação inicial.
    remaining = [b for b in blocks[2:] if b]
    if not remaining:
        return "Não há uma continuação específica cadastrada nesse tópico. Posso explicar um exemplo ou mostrar a fonte da documentação."
    return "\n\n".join(remaining[:4])


def tailor_answer(question: str, doc: dict, mode: str | None = None) -> str:
    answer = str(doc.get("answer", "")).strip()
    title = str(doc.get("title", "JLScript"))
    value = normalize(question)

    if mode == "source":
        source = doc.get("source") or {}
        label = source.get("label") or "documentação oficial"
        return (
            f"Isso aparece em **{title}**.\n\n"
            f"A resposta anterior veio da seção/fonte **{label}**. O link exato está logo abaixo desta mensagem.\n\n"
            f"Trecho principal relacionado:\n\n{_first_paragraphs(answer, 1)}"
        )

    if mode == "simplify":
        intro = _first_paragraphs(answer, 2)
        code = _first_code(answer)
        parts = [f"Claro. Em palavras mais simples, **{title}** funciona assim:", intro]
        if code:
            parts.extend(["Um exemplo direto:", code])
        return "\n\n".join(x for x in parts if x)

    if mode == "example":
        code = _first_code(answer)
        if code:
            return f"Aqui vai um exemplo direto de **{title}**:\n\n{code}\n\nSe alguma linha não fizer sentido, pode mandar `explica melhor`."
        return f"Nesse tópico não há um bloco de código específico cadastrado. O ponto principal é:\n\n{_first_paragraphs(answer, 2)}"

    if mode == "execute":
        shell = _first_shell_code(answer)
        if shell:
            return f"Para executar/testar **{title}**, use este fluxo:\n\n{shell}"
        code = _first_code(answer)
        if code:
            return (
                "Se esse exemplo for um programa `.jls`, salve-o em um arquivo, por exemplo `app.jls`, e execute:\n\n"
                "```bash\njls run app.jls\n```\n\n"
                "Se o exemplo depender de alguma biblioteca ou configuração específica, siga também a seção indicada na fonte abaixo."
            )
        return (
            "Para um arquivo JLScript comum, salve como `.jls` e rode:\n\n"
            "```bash\njls run app.jls\n```\n\n"
            "Se você me disser qual exemplo quer executar, eu direciono pelo tópico certo."
        )

    if mode == "steps":
        steps = _numbered_steps(answer)
        if steps:
            return f"Beleza. O passo a passo de **{title}** é:\n\n{steps}"
        return f"Vamos por etapas em **{title}**:\n\n{_first_paragraphs(answer, 3)}"

    if mode == "summary":
        return f"Resumindo **{title}**:\n\n{_first_paragraphs(answer, 2)}"

    if mode == "continue":
        return f"Continuando **{title}**:\n\n{_continuation(answer)}"

    body = _remove_first_heading(answer)

    if value.startswith("como ") or " como " in f" {value} ":
        return f"Dá pra fazer assim.\n\n## {title}\n\n{body}"

    if any(value.startswith(x) for x in ["o que e ", "oq e ", "pra que serve ", "para que serve "]):
        return f"Basicamente:\n\n## {title}\n\n{body}"

    if "erro" in value or "nao funciona" in value or "deu ruim" in value:
        return f"Vamos por partes.\n\n## {title}\n\n{body}"

    return f"Sobre **{title}**:\n\n{body}"


def suggestions_for_doc(doc: dict, exclude_mode: str | None = None) -> list[str]:
    """Sugestões contextuais. Cada botão retornado aqui possui rota/follow-up testado."""
    answer = str(doc.get("answer", ""))
    category = str(doc.get("category", ""))
    topic = str(doc.get("topic", ""))
    doc_id = str(doc.get("id", ""))

    if doc_id in {"instalacao-oficial", "instalacao-cli", "download-site", "vscode-extension"}:
        suggestions = ["Me mostra o passo a passo", "Como verifico a instalação?", "Onde isso aparece na documentação?"]
    elif doc_id == "visao-geral":
        suggestions = ["Como começo na prática?", "Explique mais simples", "Onde isso aparece na documentação?"]
    elif doc_id == "historia":
        suggestions = ["Resume isso", "Como a JLScript evoluiu?", "Onde isso aparece na documentação?"]
    elif topic.startswith("library:") or doc_id == "bibliotecas-catalogo":
        suggestions = ["Mostre um exemplo simples", "Explique mais simples", "Onde isso aparece na documentação?"]
    elif category in {"fundamentos", "logica", "estruturas", "syntax", "project", "projetos"} or doc_id in {"api-http", "primeiro-programa"}:
        suggestions = ["Mostre um exemplo simples", "Como executo isso?", "Onde isso aparece na documentação?"]
    elif doc_id == "cli-build-bytecode":
        suggestions = ["Explique mais simples", "Como executo isso?", "Onde isso aparece na documentação?"]
    else:
        suggestions = ["Explique mais simples", "Resume isso", "Onde isso aparece na documentação?"]

    mode_to_label = {
        "source": "Onde isso aparece na documentação?",
        "simplify": "Explique mais simples",
        "example": "Mostre um exemplo simples",
        "execute": "Como executo isso?",
        "steps": "Me mostra o passo a passo",
        "summary": "Resume isso",
        "continue": "E depois?",
    }
    blocked = mode_to_label.get(exclude_mode)

    unique: list[str] = []
    for item in suggestions:
        if item == blocked:
            continue
        if item not in unique:
            unique.append(item)
    return unique[:3]

def context_query_from_history(history: list[dict]) -> str:
    for item in reversed(history[-12:]):
        if item.get("role") != "user":
            continue
        content = str(item.get("content", "")).strip()
        value = normalize(content)
        if not value:
            continue
        if _contains_any(value, ACKS | THANKS | GOODBYES | GREETINGS):
            continue
        # Perguntas genéricas de continuação não viram a nova âncora de contexto.
        if followup_mode(content):
            continue
        return content
    return ""
