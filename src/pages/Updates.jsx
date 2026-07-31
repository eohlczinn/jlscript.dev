import { PageHeading } from "../components/Ecosystem";

const updates = [
  ["2.1.0", "Atualização do ecossistema", "Nova identidade visual do site oficial, página de Downloads por plataforma, scripts de instalação e guia de terminal."],
  ["2.1.0", "JLAI e documentação", "A JLAI agora usa a documentação oficial como base de conhecimento e ajuda a explicar erros e sintaxe."],
  ["2.1.0", "CLI mais completa", "Comandos para projetos, compilação, bytecode, testes, análise, formatação, correções e diagnóstico."],
  ["2.1.0", "Biblioteca #math", "Base da biblioteca matemática com operações, estatística, vetores, matrizes e constantes."],
  ["2.1.0", "Ferramentas para VS Code", "Extensão com destaque de sintaxe, snippets, execução de código e atalho para a JLAI."],
  ["Em evolução", "Compilador e múltiplas plataformas", "O compilador inicial, instaladores e Releases estão sendo preparados para crescer com Windows, Linux, macOS e Termux."]
];

export default function Updates() { return <div className="updates-page"><PageHeading eyebrow="NOVIDADES" title="Atualizações da JLScript." text="Acompanhe os recursos e melhorias que chegam ao ecossistema oficial." /><section className="updates-list">{updates.map(([version, title, text], index) => <article key={title}><span>{version}</span><i>{index + 1}</i><div><h2>{title}</h2><p>{text}</p></div></article>)}</section><section className="updates-footer"><h2>O projeto continua evoluindo.</h2><p>Participe enviando sugestões, reportando problemas e acompanhando o desenvolvimento aberto.</p><a className="btn" href="https://github.com/eohlczinn/JLScript" target="_blank" rel="noreferrer">Acompanhar no GitHub ↗</a></section></div>; }
