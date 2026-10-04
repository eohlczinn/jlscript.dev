import { useMemo, useRef, useState } from "react";

import { PageHeading } from "../components/Ecosystem";

import MarkdownMessage from "../components/MarkdownMessage";

import { useJlaiStream } from "../hooks/useJlaiStream";

const greeting = `Olá! Sou a **JLAI**, a assistente oficial de suporte da JLScript.

Posso ajudar com:

- instalação da JLScript;
- extensão no VS Code;
- sintaxe;
- arquivos \`.jls\`;
- CLI;
- bibliotecas;
- erros;
- história;
- documentação;
- downloads;
- uso do site oficial.

Minha base é focada exclusivamente no ecossistema JLScript.`;

export default function Jlai() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: greeting,
      done: true,

      suggestions: [
        "Como instalar a JLScript?",
        "Como criar meu primeiro arquivo .jls?",
        "Como funciona a sintaxe?",
      ],
    },
  ]);

  const [question, setQuestion] = useState("");

  const [error, setError] = useState("");

  const nextId = useRef(2);

  const { ask, stop, loading, status } = useJlaiStream();

  const history = useMemo(
    () =>
      messages
        .filter((message) => message.done)
        .slice(-10)
        .map(({ role, content }) => ({
          role,
          content,
        })),
    [messages],
  );

  function sendText(text) {
    const clean = text.trim();

    if (!clean || loading) {
      return;
    }

    setError("");
    setQuestion("");

    const userId = nextId.current++;

    const assistantId = nextId.current++;

    setMessages((current) => [
      ...current,

      {
        id: userId,
        role: "user",
        content: clean,
        done: true,
      },

      {
        id: assistantId,
        role: "assistant",
        content: "",
        done: false,
        streaming: true,
      },
    ]);

    ask({
      question: clean,
      history,

      onDelta(delta) {
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? {
                  ...message,
                  content: message.content + delta,
                }
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
                }
              : message,
          ),
        );
      },

      onError(err) {
        setError(err.message || "Não foi possível conectar à JLAI.");

        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? {
                  ...message,

                  done: true,

                  streaming: false,

                  content:
                    "Não consegui conectar ao backend da JLAI agora.\n\nVerifique se o servidor Python está rodando em `127.0.0.1:8765`.",
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
    <div className="jlai-page jlai-v2">
      <PageHeading
        eyebrow="SUPORTE OFICIAL JLSCRIPT"
        title="Converse com a JLAI."
        text="Assistente focada exclusivamente na JLScript, sua documentação, sintaxe, ferramentas e suporte do portal."
      />

      <section className="jlai-shell jlai-chatgpt" aria-label="Chat da JLAI">
        <header className="jlai-chat-header">
          <div>
            <i>●</i>

            <span>
              <b>JLAI</b>

              <small>backend local · JLScript 3.2.0</small>
            </span>
          </div>

          <a href="#/docs">Documentação ↗</a>
        </header>

        <main aria-live="polite">
          {messages.map((message) => (
            <article
              className={`jlai-message ${message.role}`}
              key={message.id}
            >
              <div className="jlai-avatar">
                {message.role === "user" ? "V" : "JL"}
              </div>

              <div className="jlai-message-body">
                <b>{message.role === "user" ? "Você" : "JLAI"}</b>

                {message.role === "assistant" ? (
                  <MarkdownMessage text={message.content} />
                ) : (
                  <p className="jlai-user-text">{message.content}</p>
                )}

                {message.streaming && (
                  <span className="jlai-caret" aria-label="JLAI digitando" />
                )}

                {message.sources?.length ? (
                  <div className="jlai-sources">
                    {message.sources.map((source, index) => {
                      if (typeof source === "string") {
                        return <span key={index}>{source}</span>;
                      }

                      return (
                        <a
                          key={index}
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {source.label || "Fonte"} ↗
                        </a>
                      );
                    })}
                  </div>
                ) : null}

                {message.done && message.suggestions?.length ? (
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
              <span />
              <span />
              <span />

              {status}
            </div>
          ) : null}
        </main>

        <form onSubmit={submit} className="jlai-composer">
          <label htmlFor="jlai-question" className="sr-only">
            Pergunte sobre JLScript
          </label>

          <textarea
            id="jlai-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();

                submit(event);
              }
            }}
            placeholder="Pergunte algo sobre JLScript…"
            rows="3"
            maxLength="5000"
          />

          <div>
            <span className="jlai-error">{error}</span>

            {loading ? (
              <button type="button" className="btn-outline" onClick={stop}>
                Parar
              </button>
            ) : (
              <button className="btn" type="submit" disabled={!question.trim()}>
                Enviar ↑
              </button>
            )}
          </div>

          <small>
            A JLAI responde somente sobre JLScript e suporte do site.
          </small>
        </form>
      </section>
    </div>
  );
}
