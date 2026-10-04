import { useState } from "react";
const DOCS_URL = "https://github.com/JLScripter/documentacao_JLScripter";
const ISSUES_URL = `${DOCS_URL}/issues`;

const shortcuts = [
  ["▤", "Documentação", "#/docs"],
  ["⌘", "Terminal", "#/terminal"],
  ["▣", "Bibliotecas", "#/biblioteca"],
  ["↓", "Downloads", "#/download"],
  ["✦", "JLAI", "#/jlai"],
  ["↗", "Docs no GitHub", DOCS_URL],
];

const faqs = [
  ["Qual é a versão atual?", "O conteúdo deste portal acompanha a JLScript 3.2.0."],
  ["O código-fonte é público?", "Não. O código-fonte da JLScript passou a ser fechado. O repositório público é destinado à documentação."],
  ["Ainda posso reportar bugs?", "Sim. Use a Central JLAI ou as issues do repositório público de documentação para descrever o problema sem depender de acesso ao código-fonte."],
  ["Onde encontro a sintaxe oficial?", "Na página Documentação deste site e no repositório JLScripter/documentacao_JLScripter."],
  ["Como verifico minha instalação?", "Use jls --version, jls --help e jls doctor."],
  ["Como executo um arquivo?", "Use jls run arquivo.jls."],
  ["Como gero um executável?", "Use jls build arquivo.jls e consulte jls targets para os targets disponíveis no ambiente."],
  ["Como gero bytecode?", "Use jls compile arquivo.jls. Para validar um .jlb, use jls verify-bytecode."],
  ["Todas as bibliotecas estão no mesmo nível de maturidade?", "Não. Algumas integrações dependem de sistema operacional, credenciais, drivers ou hardware. A documentação diferencia recursos prontos de áreas em evolução."],
];

function SupportHeading({ title }) {
  return <header className="support-heading"><p>SUPORTE</p><h2>{title}</h2></header>;
}

export default function Support() {
  const [open, setOpen] = useState(0);

  return (
    <section className="support-page-new">
      <section className="support-hero">
        <div>
          <p>CENTRAL OFICIAL · 3.2.0</p>
          <h1>Suporte <span>JLScript</span></h1>
          <h2>Documentação pública, JLAI e canais claros para aprender a linguagem e relatar problemas.</h2>
          <div className="buttons">
            <a className="btn" href="#/jlai">Abrir JLAI →</a>
            <a className="btn-outline" href="#/docs">Ler documentação</a>
          </div>
        </div>
        <div className="support-art"><b>?</b><span>código fechado<br />documentação pública</span></div>
      </section>

      <section className="support-block">
        <SupportHeading title="Encontre o que precisa." />
        <div className="support-shortcuts">
          {shortcuts.map(([icon, label, href]) => (
            <article key={label}>
              <span>{icon}</span><h3>{label}</h3>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">Abrir →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="support-block support-faq">
        <SupportHeading title="Perguntas frequentes." />
        {faqs.map(([question, answer], i) => (
          <article key={question}>
            <button onClick={() => setOpen(open === i ? -1 : i)}>{question}<b>{open === i ? "−" : "+"}</b></button>
            {open === i && <p>{answer}</p>}
          </article>
        ))}
      </section>

      <section className="support-actions">
        <article>
          <span>🐞</span><h2>Reportar um problema</h2>
          <p>Descreva o comportamento, a versão, o comando executado e um exemplo mínimo. Não envie arquivos privados nem conteúdo do código-fonte interno da linguagem.</p>
          <div>
            <a className="btn" href={`${ISSUES_URL}/new`} target="_blank" rel="noreferrer">Abrir issue</a>
            <a className="btn-outline" href={ISSUES_URL} target="_blank" rel="noreferrer">Ver issues</a>
          </div>
        </article>
        <article>
          <span>💡</span><h2>Sugerir recurso</h2>
          <p>Ideias de sintaxe, documentação, ferramentas e experiência de desenvolvimento podem ser discutidas sem que o repositório principal precise ser público.</p>
          <a className="btn-outline" href={`${ISSUES_URL}/new`} target="_blank" rel="noreferrer">Enviar sugestão →</a>
        </article>
      </section>

      <section className="github-official">
        <p>DOCUMENTAÇÃO OFICIAL</p>
        <h2>GitHub público para documentação, não para o código-fonte.</h2>
        <span>O repositório reúne história, comandos, bibliotecas e guias da linguagem. A implementação interna da JLScript permanece privada.</span>
        <code>github.com/JLScripter/documentacao_JLScripter</code>
        <div>
          <a className="btn" href={DOCS_URL} target="_blank" rel="noreferrer">Abrir documentação ↗</a>
          <a className="btn-outline" href={ISSUES_URL} target="_blank" rel="noreferrer">Issues</a>
          <a className="btn-outline" href="#/atualizacoes">Atualizações</a>
        </div>
      </section>

      <section className="support-block">
        <SupportHeading title="Status do projeto." />
        <div className="project-status">
          {["JLScript 3.2.0", "Desenvolvimento ativo", "Código-fonte fechado", "Documentação pública"].map((status) => <p key={status}>● {status}</p>)}
        </div>
      </section>

      <section className="support-help">
        <h2>Precisa de ajuda com código?</h2>
        <p>A JLAI é o canal mais rápido dentro do próprio site. Para referência técnica, use a documentação 3.2.0 e os comandos de diagnóstico da CLI.</p>
        <div>
          <a className="btn" href="#/jlai">Abrir JLAI</a>
          <a className="btn-outline" href="#/docs">Documentação</a>
          <a className="btn-outline" href={DOCS_URL} target="_blank" rel="noreferrer">GitHub da documentação</a>
        </div>
      </section>
    </section>
  );
}
