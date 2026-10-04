import re
import unicodedata

STOPWORDS = {
    "a", "o", "os", "as", "um", "uma", "uns", "umas", "de", "da", "do", "das", "dos",
    "e", "ou", "em", "no", "na", "nos", "nas", "pra", "para", "por", "com", "sem", "que",
    "como", "qual", "quais", "me", "eu", "vc", "voce", "voces", "isso", "isto", "esse", "essa",
    "tem", "ter", "faz", "fazer", "meu", "minha", "meus", "minhas", "ai", "aqui", "la", "lá",
}


def strip_accents(text: str) -> str:
    normalized = unicodedata.normalize("NFD", text or "")
    return "".join(ch for ch in normalized if unicodedata.category(ch) != "Mn")


def normalize(text: str) -> str:
    text = strip_accents(text).lower().strip()
    text = re.sub(r"[^a-z0-9_#.+*/<>=!&|%\-\s]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def tokens(text: str, drop_stopwords: bool = True) -> list[str]:
    parts = re.findall(r"[#a-z0-9_][#a-z0-9_.+-]*", normalize(text))
    if not drop_stopwords:
        return parts
    return [p for p in parts if p not in STOPWORDS and len(p) > 1]
