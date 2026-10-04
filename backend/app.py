import asyncio
import json
import random
import time
from collections import defaultdict, deque
from contextlib import asynccontextmanager
from typing import AsyncIterator

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse

from ai.engine import JLAIEngine
from config import settings
from models import ChatRequest, ChatResponse


engine = JLAIEngine()
_request_times: dict[str, deque[float]] = defaultdict(deque)


def _rate_limit(client: str) -> None:
    now = time.monotonic()
    bucket = _request_times[client]
    while bucket and now - bucket[0] > 60:
        bucket.popleft()
    if len(bucket) >= settings.rate_limit_per_minute:
        raise HTTPException(status_code=429, detail="Muitas perguntas em pouco tempo. Aguarde alguns segundos.")
    bucket.append(now)


def _history(payload: ChatRequest) -> list[dict]:
    return [x.model_dump() for x in payload.history[-12:]]


def _validate_question(question: str) -> str:
    question = question.strip()
    if not question:
        raise HTTPException(status_code=400, detail="A pergunta está vazia.")
    if len(question) > settings.max_question_chars:
        raise HTTPException(status_code=400, detail="A pergunta ultrapassa o limite permitido.")
    return question


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Falha cedo se a base estiver inválida.
    engine.reload()
    yield


app = FastAPI(
    title="JLAI Support API",
    version="1.0.0",
    description="Assistente local de suporte da JLScript, sem API externa de IA.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Accept"],
)


@app.get("/")
def root():
    return {
        "name": "JLAI",
        "status": "online",
        "scope": "JLScript support only",
        "knowledge_documents": len(engine.kb.documents),
        "jlscript_version": engine.kb.meta.get("jlscript_version", "3.2.0"),
    }


@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "knowledge_documents": len(engine.kb.documents),
        "engine": "local-json-retrieval",
        "external_ai_api": False,
    }


@app.get("/api/topics")
def topics():
    # Só expõe metadados públicos, não a base inteira.
    items = [
        {"id": d.get("id"), "title": d.get("title"), "category": d.get("category")}
        for d in engine.kb.documents
    ]
    return {"count": len(items), "topics": items}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(payload: ChatRequest, request: Request):
    client = request.client.host if request.client else "unknown"
    _rate_limit(client)
    question = _validate_question(payload.question)
    await asyncio.sleep(random.uniform(settings.min_think_ms, settings.max_think_ms) / 1000)
    return engine.answer(question, _history(payload))


async def _stream_answer(answer: dict) -> AsyncIterator[bytes]:
    # NDJSON: uma linha JSON por evento. Fácil de consumir com fetch() streaming.
    yield (json.dumps({"type": "status", "text": "Consultando a documentação da JLScript…"}, ensure_ascii=False) + "\n").encode()
    await asyncio.sleep(random.uniform(settings.min_think_ms, settings.max_think_ms) / 1000)

    text = answer.get("text", "")
    i = 0
    while i < len(text):
        size = random.randint(settings.stream_chunk_min, settings.stream_chunk_max)
        chunk = text[i:i + size]
        i += size
        yield (json.dumps({"type": "delta", "text": chunk}, ensure_ascii=False) + "\n").encode()
        await asyncio.sleep(random.uniform(settings.stream_delay_min_ms, settings.stream_delay_max_ms) / 1000)

    yield (json.dumps({
        "type": "done",
        "intent": answer.get("intent"),
        "topic": answer.get("topic"),
        "confidence": answer.get("confidence"),
        "sources": answer.get("sources", []),
        "suggestions": answer.get("suggestions", []),
        "context_id": answer.get("context_id"),
    }, ensure_ascii=False) + "\n").encode()


@app.post("/api/chat/stream")
async def chat_stream(payload: ChatRequest, request: Request):
    client = request.client.host if request.client else "unknown"
    _rate_limit(client)
    question = _validate_question(payload.question)
    answer = engine.answer(question, _history(payload))
    return StreamingResponse(
        _stream_answer(answer),
        media_type="application/x-ndjson; charset=utf-8",
        headers={"Cache-Control": "no-store", "X-Accel-Buffering": "no"},
    )


@app.post("/api/reload")
def reload_knowledge(request: Request):
    # Útil no desenvolvimento local. Não recebe caminho nem conteúdo do cliente.
    if settings.env.lower() == "production":
        raise HTTPException(status_code=404, detail="Not found")
    return {"status": "ok", "knowledge_documents": engine.reload()}
