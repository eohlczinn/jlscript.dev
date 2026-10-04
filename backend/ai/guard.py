from .normalizer import normalize, tokens

GREETINGS = {
    "oi", "ola", "opa", "eae", "iae", "salve", "bom dia", "boa tarde", "boa noite",
}

DOMAIN_TERMS = {
    "jlscript", "jls", "jlai", ".jls", ".jlb", "sintaxe", "codigo", "programa", "programacao",
    "variavel", "funcao", "func", "se", "senao", "if", "else", "while", "enquanto", "for", "para",
    "switch", "case", "api", "http", "biblioteca", "modulo", "import", "runtime", "lexer", "parser", "ast",
    "terminal", "cli", "build", "compile", "bytecode", "doctor", "lint", "fmt", "erro", "bug", "vscode",
    "extensao", "instalar", "download", "baixar", "site", "documentacao", "suporte", "contato", "criador",
    "historia", "origem", "versao", "playground", "roadmap", "arquivo", "executar",
}


def is_greeting(text: str) -> bool:
    value = normalize(text)
    return value in GREETINGS or any(value.startswith(g + " ") for g in GREETINGS)


def in_domain(text: str, history: list[dict] | None = None) -> bool:
    if is_greeting(text):
        return True
    q_tokens = set(tokens(text, drop_stopwords=False))
    normalized = normalize(text)
    if any(term in normalized for term in DOMAIN_TERMS if len(term) > 3):
        return True
    if q_tokens & DOMAIN_TERMS:
        return True

    # Follow-ups curtos como "e em inglês?" são aceitos se a conversa anterior era JLScript.
    if history and len(q_tokens) <= 6:
        previous = " ".join(str(x.get("content", "")) for x in history[-4:])
        previous_norm = normalize(previous)
        if any(term in previous_norm for term in DOMAIN_TERMS if len(term) > 3):
            return True
    return False


def off_topic_answer() -> dict:
    return {
        "text": (
            "Eu fico focada **somente em JLScript e no suporte do site oficial**.\n\n"
            "Posso ajudar com sintaxe, instalação, extensão do VS Code, downloads, CLI, bibliotecas, "
            "erros, documentação, história da linguagem e navegação do portal.\n\n"
            "Se sua dúvida tiver relação com JLScript, reformule mencionando o que você quer fazer na linguagem."
        ),
        "intent": "off_topic",
        "topic": "escopo",
        "confidence": 1.0,
        "sources": [],
        "suggestions": ["Como instalo a JLScript?", "Como crio uma função?", "Onde fica a documentação?"],
    }
