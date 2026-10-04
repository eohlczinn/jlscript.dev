import json
from pathlib import Path
from typing import Any


class KnowledgeBase:
    def __init__(self, path: Path):
        self.path = path
        self.meta: dict[str, Any] = {}
        self.documents: list[dict[str, Any]] = []
        self.reload()

    def reload(self) -> None:
        payload = json.loads(self.path.read_text(encoding="utf-8"))
        self.meta = payload.get("meta", {})
        self.documents = payload.get("documents", [])
        if not isinstance(self.documents, list):
            raise ValueError("knowledge.json inválido: documents precisa ser uma lista")

    def by_id(self, doc_id: str) -> dict[str, Any] | None:
        for document in self.documents:
            if document.get("id") == doc_id:
                return document
        return None
