import { PageHeading } from "../components/Ecosystem";

const groups = [
  [
    "Começar",
    [
      ["jls", "Abre o REPL/JLShell quando executado sem arquivo."],
      ["jls --help", "Mostra ajuda da CLI."],
      ["jls --version", "Mostra a versão instalada."],
      ["jls doctor", "Diagnostica ambiente, executável e toolchains."],
    ],
  ],
  [
    "Projeto",
    [
      ["jls new <nome>", "Cria um projeto JLScript."],
      ["jls create app <nome>", "Cria um aplicativo/projeto usando o fluxo de criação."],
      ["jls init [nome]", "Inicializa um projeto no diretório escolhido."],
      ["jls preview", "Abre o Device Preview quando disponível no ambiente."],
    ],
  ],
  [
    "Execução e build",
    [
      ["jls run app.jls", "Executa código fonte .jls."],
      ["jls build app.jls", "Gera build nativo usando o fluxo de compilação da linguagem."],
      ["jls compile app.jls", "Gera bytecode JLScript .jlb."],
      ["jls verify-bytecode build/app.jlb", "Valida o bytecode gerado."],
      ["jls targets", "Lista targets de build conhecidos."],
      ["jls clean", "Remove intermediários de build."],
    ],
  ],
  [
    "Qualidade",
    [
      ["jls test", "Executa testes do projeto."],
      ["jls lint [arquivo]", "Analisa código JLScript."],
      ["jls fmt [arquivo]", "Formata código."],
      ["jls fix [arquivo]", "Aplica correções seguras suportadas pela CLI."],
    ],
  ],
  [
    "Ambiente",
    [
      ["jls config", "Mostra e altera configurações da CLI."],
      ["jls config theme dark", "Seleciona o tema do terminal."],
      ["jls --no-color", "Desativa cores ANSI."],
      ["jls --verbose", "Exibe diagnóstico interno adicional."],
      ["jls update", "Verifica e instala atualizações pelo fluxo da CLI."],
    ],
  ],
  [
    "JLS AI e desenvolvimento",
    [
      ["jls ai", "Abre ou consulta a JLS AI."],
      ["jls ai <pergunta>", "Envia uma pergunta diretamente para a assistência."],
      ["jls ai --run app.jls", "Executa o fluxo da JLS AI associado a um arquivo."],
      ["jls language", "Cria/executa linguagens definidas com a infraestrutura do #compiler."],
      ["jls linguagem", "Alias em português de jls language."],
      ["jls selfhost", "Ferramentas de self-hosting da JLScript."],
      ["jls dev", "Ferramentas usadas no desenvolvimento do ecossistema."],
    ],
  ],
];

export default function Terminal() {
  return (
    <div className="terminal-page">
      <PageHeading
        eyebrow="CLI OFICIAL · 3.2.0"
        title="Terminal JLScripter."
        text="Execução, projetos, build nativo, bytecode, qualidade, diagnóstico e ferramentas de desenvolvimento em uma única CLI."
      />
      <section className="terminal-intro">
        <div>
          <span>jlscripter&gt;</span><b> jls --help</b>
          <p>Depois da instalação, use <code>jls</code> em um terminal para abrir o ambiente interativo.</p>
        </div>
        <a className="btn" href="#/download">Baixar JLScript ↓</a>
      </section>
      <section className="terminal-groups">
        {groups.map(([title, commands]) => (
          <article key={title}>
            <h2>{title}</h2>
            {commands.map(([command, detail]) => (
              <div className="terminal-command" key={command}>
                <code>$ {command}</code><p>{detail}</p>
              </div>
            ))}
          </article>
        ))}
      </section>
      <section className="terminal-note">
        <h2>O terminal cresceu junto com a linguagem.</h2>
        <p>O que começou com poucos comandos agora cobre boa parte do ciclo de desenvolvimento. Bytecode .jlb pode ser gerado e validado; a execução direta do .jlb não é anunciada aqui porque o CLI atual não a expõe.</p>
        <a className="btn-outline" href="#/docs">Ler documentação →</a>
      </section>
    </div>
  );
}
