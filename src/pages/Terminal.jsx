import { PageHeading } from "../components/Ecosystem";

const groups = [
  ["Começar", [["jls", "Abre o terminal interativo do JLScripter."], ["jls --help", "Mostra todos os comandos disponíveis."], ["jls version", "Exibe a versão instalada."], ["jls doctor", "Verifica executável, ambiente e configuração."]]],
  ["Projetos", [["jls new <nome>", "Cria um projeto com app.jls."], ["jls init [nome]", "Inicia a estrutura de um projeto."], ["jls new biblioteca <nome>", "Cria uma biblioteca com manifesto."], ["jls new api <nome>", "Cria uma API pronta para evoluir."]]],
  ["Executar e compilar", [["jls run [arquivo.jls]", "Executa app.jls ou o arquivo informado."], ["jls compile [arquivo.jls]", "Gera bytecode .jlb na pasta build/."], ["jls build [arquivo.jls]", "Gera o executável nativo inicial."], ["jls test", "Valida os arquivos .jls da pasta tests/."], ["jls lint [arquivo.jls]", "Analisa a sintaxe."], ["jls fmt [arquivo.jls]", "Formata espaços no fim das linhas."], ["jls fix [arquivo.jls]", "Aplica correções simples e seguras."]]],
  ["JLAI", [["jls ai", "Abre a assistente oficial local."], ["jls ai update", "Atualiza a base de documentação da JLAI."], ["jls ai error", "Explica o último erro da linguagem."], ["jls ai explain <arquivo>", "Explica um arquivo JLScript."], ["jls ai fix [arquivo]", "Analisa e sugere correções."]]],
  ["Instalação", [["jls update", "Abre a Release oficial mais recente para atualização."], ["jls uninstall", "Mostra o caminho seguro para desinstalar."], ["jls uninstall --yes", "Confirma a remoção em Linux, macOS e Termux."]]]
];

export default function Terminal() {
  return <div className="terminal-page"><PageHeading eyebrow="CLI OFICIAL" title="Terminal JLScripter." text="Tudo para criar, executar, compilar, testar e evoluir projetos JLScript direto do terminal." />
    <section className="terminal-intro"><div><span>jlscripter&gt;</span><b> jls --help</b><p>Use <code>jls</code> em qualquer terminal após instalar a linguagem.</p></div><a className="btn" href="#/download">Baixar JLScript ↓</a></section>
    <section className="terminal-groups">{groups.map(([title, commands]) => <article key={title}><h2>{title}</h2>{commands.map(([command, detail]) => <div className="terminal-command" key={command}><code>$ {command}</code><p>{detail}</p></div>)}</article>)}</section>
    <section className="terminal-note"><h2>Terminal feito para acompanhar você.</h2><p>O JLScripter possui diagnósticos em português, sugestões de correção, comandos de projeto e integração com a JLAI.</p><a className="btn-outline" href="#/docs">Ler documentação →</a></section>
  </div>;
}
