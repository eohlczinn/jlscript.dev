import { documentationGuides, documentationProjects } from "../data/documentation";
import { PageHeading } from "../components/Ecosystem";

function CodeBlock({ code, output }) { return <>{code && <pre className="doc-code"><code>{code}</code></pre>}{output && <p className="doc-output">Saída: <code>{output}</code></p>}</>; }

export default function Docs() {
  return <><PageHeading eyebrow="DOCUMENTAÇÃO" title="Aprenda JLScript." text="A linguagem de programação em português, simples, moderna e intuitiva." />
    <div className="docs-layout">
      <aside className="docs-sidebar"><b>CONTEÚDO</b>{documentationGuides.map(({ id, title }) => <a href={`#${id}`} key={id}>{title}</a>)}<b>EXEMPLOS</b>{documentationProjects.map(({ title }) => <a href={`#${title.toLowerCase().replaceAll(" ", "-")}`} key={title}>{title}</a>)}</aside>
      <article className="docs-content">
        {documentationGuides.map(({ id, title, text, code, output }) => <section id={id} key={id}><h2>{title}</h2>{text && <p>{text}</p>}<CodeBlock code={code} output={output} /></section>)}
        <section><h2>Projetos completos</h2><p>Exemplos para praticar os fundamentos da linguagem em projetos simples.</p>{documentationProjects.map(({ title, code }) => <div className="doc-project" id={title.toLowerCase().replaceAll(" ", "-")} key={title}><h3>{title}</h3><CodeBlock code={code} /></div>)}</section>
        <section id="estrutura"><h2>Estrutura de um projeto</h2><CodeBlock code={'MeuProjeto/\n├── app.jls\n├── bibliotecas/\n├── assets/\n└── README.md'} /><h2>Executando</h2><CodeBlock code="jls run app.jls" /><h2>Corrigindo erros automaticamente</h2><CodeBlock code="jls run app.jls --fix" /></section>
        <section><h2>Extensão VS Code</h2><p>A extensão oficial oferece destaque de sintaxe, autocompletar, diagnóstico de erros, execução rápida e snippets.</p><h2>GitHub e licença</h2><p>A JLScript é Open Source. Acompanhe o desenvolvimento, envie sugestões e contribua com melhorias no repositório oficial.</p></section>
      </article>
    </div>
  </>;
}
