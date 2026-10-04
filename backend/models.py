from pydantic import BaseModel, Field


class ChatMessage(BaseModel):
    role: str = Field(pattern=r"^(user|assistant)$")
    content: str = Field(min_length=1, max_length=12000)
    # Metadados opcionais tornam follow-ups determinísticos sem quebrar clientes antigos.
    intent: str | None = None
    topic: str | None = None
    context_id: str | None = None


class ChatRequest(BaseModel):
    question: str = Field(min_length=1, max_length=5000)
    history: list[ChatMessage] = Field(default_factory=list, max_length=30)


class Source(BaseModel):
    label: str
    url: str


class ChatResponse(BaseModel):
    text: str
    intent: str
    topic: str
    confidence: float
    sources: list[Source] = Field(default_factory=list)
    suggestions: list[str] = Field(default_factory=list)
    context_id: str | None = None
