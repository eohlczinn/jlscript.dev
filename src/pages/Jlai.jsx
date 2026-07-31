import { useState } from "react";
import { PageHeading } from "../components/Ecosystem";

const endpoint = import.meta.env.VITE_JLAI_API_URL || (location.hostname === "localhost" || location.hostname === "127.0.0.1" ? "http://127.0.0.1:8765/api/chat" : null);
const greeting = "Olá! Sou a JLAI, a central de suporte da JLScript. Posso explicar como a linguagem funciona, para que serve, onde usar, como instalar e como resolver dúvidas de código.";

function responderNoSite(question) {
  const texto = question.toLowerCase();
  if (/^(oi|olá|ola|bom dia|boa tarde|boa noite)/.test(texto)) return "Olá! Tudo bem? Sou a JLAI, o suporte oficial da JLScript. Posso explicar a linguagem, ajudar com código, APIs, bibliotecas, instalação e erros.";
  if (/(api|servidor|rota)/.test(texto)) return "A JLScript permite criar APIs com o módulo #api. Você cria uma aplicação, registra rotas como app.get() e inicia o servidor com app.listen() ou app.iniciar(). Consulte a seção Biblioteca para ver exemplos.";
  if (/(instal|download|windows|linux|termux|mac)/.test(texto)) return "Você encontra os instaladores e os comandos para Windows, Linux, macOS e Termux na página Download. Depois de instalar, confirme com: jls --version.";
  if (/(variável|variavel|va |constante|ins )/.test(texto)) return "Use va para uma variável, por exemplo: va nome = \"Lucas\". Para um valor constante, use ins: ins PI = 3.1415.";
  if (/(função|funcao|func )/.test(texto)) return "Funções na JLScript usam func: func saudacao(nome){ mostrar(\"Olá \" + nome) }. Depois, chame saudacao(\"Lucas\").";
  if (/(erro|erro de|corrigir)/.test(texto)) return "Para entender erros, leia a mensagem com arquivo, linha e coluna. A CLI também pode tentar ajustes simples usando: jls run app.jls --fix.";
  return "Posso ajudar você com a JLScript. Pergunte, por exemplo: “Como criar uma função?”, “Como instalar no Termux?” ou “Como criar uma API?”";
}

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
      if (!endpoint) throw new Error("Suporte online");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, history }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível consultar a JLAI.");
      setMessages((current) => [...current, { role: "assistant", content: data.text, sources: data.sources }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: responderNoSite(text) }]);
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
