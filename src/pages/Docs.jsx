import { useMemo, useState } from "react";
import { documentationGuides, documentationProjects } from "../data/documentation";
import { PageHeading } from "../components/Ecosystem";

function CodeBlock({ code, output }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText(code || "");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return <>{code && <div className="doc-code-wrap"><button type="button" className="copy-button" onClick={copy}>{copied ? "✓ Copiado" : "Copiar código"}</button><pre className="doc-code"><code>{code}</code></pre></div>}{output && <p className="doc-output">Saída: <code>{output}</code></p>}</>;
}

export default function Docs() {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLocaleLowerCase("pt-BR");
  const guides = useMemo(() => documentationGuides.filter((item) => !normalized || `${item.title} ${item.text || ""} ${item.code || ""}`.toLocaleLowerCase("pt-BR").includes(normalized)), [normalized]);
  const projects = useMemo(() => documentationProjects.filter((item) => !normalized || `${item.title} ${item.code || ""}`.toLocaleLowerCase("pt-BR").includes(normalized)), [normalized]);
  return <><PageHeading eyebrow="DOCUMENTAÇÃO" title="Aprenda JLScript." text="A linguagem de programação em português, simples, moderna e intuitiva." />
    <div className="docs-search"><label htmlFor="docs-search">Pesquisar documentação, funções e exemplos</label><input id="docs-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: variáveis, API, repita, mostrar" />{normalized && <span>{guides.length + projects.length} resultado(s)</span>}</div>
    <div className="docs-layout">
      <aside className="docs-sidebar"><b>CONTEÚDO</b>{guides.map(({ id, title }) => <a href={`#${id}`} key={id}>{title}</a>)}<b>EXEMPLOS</b>{projects.map(({ title }) => <a href={`#${title.toLowerCase().replaceAll(" ", "-")}`} key={title}>{title}</a>)}</aside>
      <article className="docs-content">
        {!guides.length && !projects.length && <p className="empty-state">Nenhum resultado na documentação atual.</p>}
        {guides.map(({ id, title, text, code, output }) => <section id={id} key={id}><h2>{title}</h2>{text && <p>{text}</p>}<CodeBlock code={code} output={output} /></section>)}
        {!!projects.length && <section><h2>Projetos completos</h2><p>Exemplos para praticar os fundamentos da linguagem em projetos simples.</p>{projects.map(({ title, code }) => <div className="doc-project" id={title.toLowerCase().replaceAll(" ", "-")} key={title}><h3>{title}</h3><CodeBlock code={code} /></div>)}</section>}
      </article>
    </div>
  </>;
}
