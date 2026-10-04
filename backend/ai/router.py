import re
from .normalizer import normalize


LIBRARY_NAMES = {
    "math", "json", "watch", "file", "database", "crypto", "process", "env", "net", "thread",
    "test", "log", "compress", "csv", "xml", "cli", "email", "image", "audio", "system",
    "whatsapp", "connector", "mobile", "style", "ui", "compiler",
}


def explicit_document_id(text: str) -> str | None:
    """Rotas óbvias ganham do fuzzy matcher.

    O matcher continua útil para frases livres, mas não faz sentido deixar perguntas como
    'como instalo?' ou '#json' disputarem com 55 documentos por similaridade.
    """
    value = normalize(text)

    # Bibliotecas oficiais.
    lib_match = re.search(r"#([a-z0-9_]+)", value)
    if lib_match:
        name = lib_match.group(1)
        if "erro" in value or "falha" in value:
            return "erro-geral"
        if name == "api":
            return "api-http"
        if name in LIBRARY_NAMES:
            return f"lib-{name}"

    rules: list[tuple[tuple[str, ...], str]] = [
        (("como instalo", "como instalar", "instalo passo a passo", "preciso baixar para comecar", "o que eu preciso baixar", "oq eu preciso baixar"), "instalacao-oficial"),
        (("verificar a instalacao", "verifico a instalacao", "confirmar instalacao", "jls --version"), "instalacao-cli"),
        (("onde baixo", "download oficial", "baixar a linguagem", "quero baixar"), "download-site"),
        (("extensao vscode", "extensao jlscript", "jlscript no vscode", "syntax highlight"), "vscode-extension"),
        (("meu primeiro .jls", "primeiro arquivo .jls", "criar app.jls", "primeiro programa", "como executo um .jls"), "primeiro-programa"),
        (("va let e ins", "variavel", "variaveis", "tipos"), "variaveis-tipos"),
        (("se e senao", "if e else", "condicao", "condicoes"), "condicoes"),
        (("switch", "escolha", "case"), "switch"),
        (("funcao", "funcoes", "func ", "retorne"), "funcoes"),
        (("laco", "lacos", "enquanto", "while", "for ", "para "), "lacos"),
        (("lista", "listas", "objeto", "objetos"), "listas-objetos"),
        (("import", "alias", "aliases", "modulo", "modulos"), "imports-modulos"),
        (("criar api", "servidor http", "rota get", "rota post", "api http"), "api-http"),
        (("comandos do terminal", "comandos terminal", "jls lint", "jls build", "jls compile", "bytecode", "jlb", "como atualizo", "jls update"), "cli-build-bytecode"),
        (("lexer", "parser", "ast", "runtime", "como o codigo passa", "arquitetura"), "arquitetura-execucao"),
        (("linguagem bilingue", "bilíngue", "bilingue", "palavras em portugues", "portugues e ingles"), "bilingue"),
        (("historia", "como surgiu", "origem", "como a jlscript evoluiu", "o que e jlscripter", "jlscripter"), "historia"),
        (("qual versao", "versao atual"), "versao"),
        (("entrar em contato", "falar com criador", "suporte humano", "contato"), "contato"),
        (("reporto um erro", "reportar erro", "erro de sintaxe", "meu erro", "deu erro", "tenho um erro"), "erro-geral"),
        (("aprender a sintaxe", "duvida de sintaxe", "quero aprender jlscript", "como comeco na jlscript", "o que e jlscript", "oq e jlscript"), "visao-geral"),
        (("como comeco na pratica", "como comeco do zero", "quero comecar na pratica"), "instalacao-oficial"),
    ]

    for needles, document_id in rules:
        if any(needle in value for needle in needles):
            return document_id

    return None
