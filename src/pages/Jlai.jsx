import { useState } from "react";
import { PageHeading } from "../components/Ecosystem";

const endpoint = "http://127.0.0.1:8765/api/chat";
const greeting = "Olá! Sou a JLAI, a central de suporte da JLScript. Posso explicar como a linguagem funciona, para que serve, onde usar, como instalar e como resolver dúvidas de código.";

export default function Jlai() {
  const [messages, setMessages] = useState([{ role: "assistant", content: greeting }]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const send = async (event) => {
    event.preventDefault();
    const text = question.trim();
    if (!text || loading) return;

    const history = messages.map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, { role: "user", content: text }]);
    setQuestion("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, history }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível consultar a JLAI.");
      setMessages((current) => [...current, { role: "assistant", content: data.text, sources: data.sources }]);
    } catch {
      setError("A central local não está ativa. No seu computador, execute: jls ai serve");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jlai-page">
      <PageHeading
        eyebrow="CENTRAL DE SUPORTE OFICIAL"
        title="Tire dúvidas com a JLAI."
        text="Uma assistente focada exclusivamente em ensinar, explicar e orientar você no ecossistema da JLScript."
      />

      <section className="jlai-intro" aria-label="Sobre a JLAI">
        <div>
          <span className="jlai-badge">● suporte JLScript</span>
          <h2>Aprenda a linguagem com conversa natural.</h2>
          <p>Pergunte o que é a JLScript, onde ela pode ser usada, como criar projetos, APIs, bibliotecas e como corrigir erros. A JLAI responde usando a documentação oficial.</p>
        </div>
        <a className="btn btn-outline" href="mailto:lucasaguiel5@gmail.com?subject=Suporte%20JLScript">Falar com o criador ↗</a>
      </section>

      <section className="jlai-shell">
        <header><div><i>●</i> JLAI — suporte local</div><code>jls ai serve</code></header>
        <main aria-live="polite">
          {messages.map((message, index) => (
            <article className={message.role} key={`${message.role}-${index}`}>
              <b>{message.role === "user" ? "Você" : "JLAI"}</b>
              <p>{message.content}</p>
              {message.sources?.length ? <small>Fontes: {message.sources.join(", ")}</small> : null}
            </article>
          ))}
          {loading && <article className="assistant loading"><b>JLAI</b><p>Pesquisando a documentação oficial…</p></article>}
        </main>
        <form onSubmit={send}>
          <label htmlFor="jlai-question">Qual é sua dúvida sobre a JLScript?</label>
          <textarea id="jlai-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ex.: Para que serve a JLScript?" rows="3" />
          <div><span>{error}</span><button className="btn" type="submit" disabled={loading}>Perguntar à JLAI →</button></div>
        </form>
      </section>

      <section className="jlai-how">
        <h2>Precisa de ajuda direta?</h2>
        <p>A JLAI ensina a linguagem pelo chat. Para falar diretamente com o criador, abrir uma dúvida mais específica ou enviar uma sugestão, use o botão abaixo.</p>
        <a className="text-link" href="mailto:lucasaguiel5@gmail.com?subject=Suporte%20JLScript">lucasaguiel5@gmail.com</a>
        <p className="jlai-note">O botão abre o seu aplicativo de e-mail; nenhuma mensagem é enviada automaticamente.</p>
      </section>
    </div>
  );
}
