import { useEffect, useMemo, useRef, useState } from "react";
import MarkdownMessage from "./MarkdownMessage";
import { useJlaiStream } from "./useJlaiStream";
import "./jlai-ai.css";

const greeting = `Oi! Sou a **JLAI**. 👋\n\nMe pergunta qualquer coisa sobre **JLScript**. Posso explicar código, sintaxe, erros, instalação, bibliotecas e o próprio site.`;

export default function Jlai() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: greeting,
      done: true,
      suggestions: [
        "Como começo na JLScript?",
        "Me mostra um exemplo simples",
        "Como funciona va, let e ins?",
      ],
    },
  ]);
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const nextId = useRef(2);
  const bottomRef = useRef(null);
  const { ask, stop, loading, status } = useJlaiStream();

  const history = useMemo(
    () =>
      messages
        .filter((message) => message.done)
        .slice(-12)
        .map(({ role, content, intent, topic, context_id }) => ({ role, content, intent, topic, context_id })),
    [messages],
  );

  const latestAssistantId = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i -= 1) {
      if (messages[i].role === "assistant") return messages[i].id;
    }
    return null;
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: loading ? "auto" : "smooth", block: "end" });
  }, [messages, loading, status]);

  function sendText(text) {
    const clean = text.trim();
    if (!clean || loading) return;

    setError("");
    setQuestion("");

    const userId = nextId.current++;
    const assistantId = nextId.current++;

    setMessages((current) => [
      ...current,
      { id: userId, role: "user", content: clean, done: true },
      { id: assistantId, role: "assistant", content: "", done: false, streaming: true },
    ]);

    ask({
      question: clean,
      history,
      onDelta(delta) {
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? { ...message, content: message.content + delta }
              : message,
          ),
        );
      },
      onDone(meta) {
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? {
                  ...message,
                  done: true,
                  streaming: false,
                  sources: meta.sources || [],
                  suggestions: meta.suggestions || [],
                  intent: meta.intent || null,
                  topic: meta.topic || null,
                  context_id: meta.context_id || null,
                }
              : message,
          ),
        );
      },
      onError(err) {
        setError(err?.message || "Não foi possível conectar à JLAI.");
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? {
                  ...message,
                  done: true,
                  streaming: false,
                  content:
                    "Não consegui falar com o backend agora. Confira se a JLAI Python está rodando em `127.0.0.1:8765`.",
                }
              : message,
          ),
        );
      },
    });
  }

  function submit(event) {
    event.preventDefault();
    sendText(question);
  }

  return (
    <div className="jlai-page jlai-v3">
      <section className="jlai-shell jlai-chatgpt" aria-label="Chat da JLAI">
        <header className="jlai-chat-header">
          <div className="jlai-chat-title">
            <span className="jlai-status-dot" />
            <span>
              <b>JLAI</b>
              <small>Assistente JLScript 3.2.0</small>
            </span>
          </div>
          <a href="#/docs">Documentação</a>
        </header>

        <main className="jlai-chat-messages" aria-live="polite">
          {messages.map((message) => (
            <article className={`jlai-message ${message.role}`} key={message.id}>
              {message.role === "assistant" && <div className="jlai-avatar">JL</div>}

              <div className="jlai-message-body">
                {message.role === "assistant" ? (
                  <MarkdownMessage text={message.content} />
                ) : (
                  <p className="jlai-user-text">{message.content}</p>
                )}

                {message.streaming && <span className="jlai-caret" aria-label="JLAI digitando" />}

                {message.sources?.length ? (
                  <div className="jlai-sources">
                    {message.sources.map((source, index) => (
                      <a key={index} href={source.url} target="_blank" rel="noreferrer">
                        {source.label || "Fonte"} ↗
                      </a>
                    ))}
                  </div>
                ) : null}

                {message.done && message.id === latestAssistantId && message.suggestions?.length ? (
                  <div className="jlai-suggestions">
                    {message.suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => sendText(suggestion)}
                        disabled={loading}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}

          {loading && status ? (
            <div className="jlai-thinking">
              <div className="jlai-avatar">JL</div>
              <div className="jlai-thinking-content">
                <span /><span /><span />
                <small>{status}</small>
              </div>
            </div>
          ) : null}
          <div ref={bottomRef} />
        </main>

        <form onSubmit={submit} className="jlai-composer">
          <div className="jlai-input-wrap">
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  submit(event);
                }
              }}
              placeholder="Pergunte sobre JLScript..."
              rows="1"
              maxLength="5000"
              aria-label="Mensagem para JLAI"
            />

            {loading ? (
              <button type="button" className="jlai-send jlai-stop" onClick={stop} aria-label="Parar resposta">
                ■
              </button>
            ) : (
              <button type="submit" className="jlai-send" disabled={!question.trim()} aria-label="Enviar mensagem">
                ↑
              </button>
            )}
          </div>

          <div className="jlai-composer-footer">
            <small>Enter envia · Shift+Enter quebra linha · foco exclusivo em JLScript</small>
            {error ? <span className="jlai-error">{error}</span> : null}
          </div>
        </form>
      </section>
    </div>
  );
}
