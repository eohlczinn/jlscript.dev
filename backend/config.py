import os
from dataclasses import dataclass


def _int(name: str, default: int) -> int:
    try:
        return int(os.getenv(name, str(default)))
    except ValueError:
        return default


@dataclass(frozen=True)
class Settings:
    host: str = os.getenv("JLAI_HOST", "127.0.0.1")
    port: int = _int("JLAI_PORT", 8765)
    env: str = os.getenv("JLAI_ENV", "development")
    allowed_origins_raw: str = os.getenv(
        "JLAI_ALLOWED_ORIGINS",
        "http://localhost:5173,http://127.0.0.1:5173,https://jlscript-oficial.lucasaguiel5.workers.dev",
    )
    min_think_ms: int = _int("JLAI_MIN_THINK_MS", 420)
    max_think_ms: int = _int("JLAI_MAX_THINK_MS", 950)
    stream_chunk_min: int = _int("JLAI_STREAM_CHUNK_MIN", 3)
    stream_chunk_max: int = _int("JLAI_STREAM_CHUNK_MAX", 10)
    stream_delay_min_ms: int = _int("JLAI_STREAM_DELAY_MIN_MS", 8)
    stream_delay_max_ms: int = _int("JLAI_STREAM_DELAY_MAX_MS", 24)
    max_question_chars: int = _int("JLAI_MAX_QUESTION_CHARS", 5000)
    rate_limit_per_minute: int = _int("JLAI_RATE_LIMIT_PER_MINUTE", 40)

    @property
    def allowed_origins(self) -> list[str]:
        return [x.strip() for x in self.allowed_origins_raw.split(",") if x.strip()]


settings = Settings()
