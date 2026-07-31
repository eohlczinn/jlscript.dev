import { useState } from "react";
import { PageHeading } from "../components/Ecosystem";

const endpoint = "http://127.0.0.1:8765/api/chat";

export default function Jlai() {
  const [messages, setMessages] = useState([{ role: "assistant", content: "Olá! Eu sou a JLAI. Inicie a API local com `jls ai serve` e pergunte sobre a JLScript." }]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const send = async (event) => {
    event.preventDefault();
    const text = question.trim();
    if (!text || loading) return;
    const history = messages.map(({ role, content }) => ({ role, content }));
    setMessages((current) => [...current, { role: "user", content: text }]);
    setQuestion(""); setLoading(true); setError("");
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: text, history }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível consultar a JLAI.");
      setMessages((current) => [...current, { role: "assistant", content: data.text, sources: data.sources }]);
    } catch {
      setError("A API local não está ativa. No terminal, execute: jls ai serve");
    } finally { setLoading(false); }
  };
  return <div className="jlai-page"><PageHeading eyebrow="ASSISTENTE OFICIAL" title="Converse com a JLAI." text="A mesma assistente do terminal, baseada exclusivamente na documentação oficial da JLScript." />
    <section className="jlai-shell"><header><div><i>●</i> JLAI local</div><code>jls ai serve</code></header><main aria-live="polite">{messages.map((message, index) => <article className={message.role} key={`${message.role}-${index}`}><b>{message.role === "user" ? "Você" : "JLAI"}</b><p>{message.content}</p>{message.sources?.length ? <small>Fontes: {message.sources.join(", ")}</small> : null}</article>)}{loading && <article className="assistant loading"><b>JLAI</b><p>Pensando…</p></article>}</main><form onSubmit={send}><label htmlFor="jlai-question">Pergunte sobre JLScript</label><textarea id="jlai-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ex.: Como criar uma API?" rows="3" /><div><span>{error}</span><button className="btn" type="submit" disabled={loading}>Enviar →</button></div></form></section>
    <section className="jlai-how"><h2>Como usar no navegador</h2><ol><li>Instale a JLScript.</li><li>Execute <code>jls ai serve</code> no seu computador.</li><li>Abra este chat e envie uma pergunta.</li></ol><p>A API permanece local: seus projetos e perguntas não são enviados para um serviço externo.</p></section>
  </div>;
}
