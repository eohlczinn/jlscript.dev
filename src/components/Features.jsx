const pilares = [
  ["PT/EN", "Sintaxe bilíngue", "Condições, laços, retornos e outras construções podem ser escritas com formas suportadas em português ou inglês."],
  [">_", "CLI completa", "A CLI jls reúne execução, REPL, criação de projetos, build, bytecode, testes, lint, formatter, diagnóstico, atualização e configuração."],
  ["01", "Interpretador + build", "O mesmo ecossistema executa arquivos .jls pelo runtime, gera bytecode .jlb e possui fluxo de build para executável nativo."],
  ["#", "Módulos oficiais", "Recursos especializados ficam fora do núcleo e são importados com #, mantendo a linguagem organizada e extensível."],
  ["AST", "Arquitetura própria", "Lexer, parser, AST, interpretador, runtime, resolvedor de módulos e compiladores formam a base técnica da linguagem."],
  ["AI", "JLS AI", "A CLI possui uma área de assistência para consulta, diagnóstico e apoio ao desenvolvimento sem tornar IA um requisito da linguagem."],
  ["UI", "UI e estilo", "O ecossistema inclui módulos dedicados à interface, estilo e preview de dispositivos para experiências visuais construídas com JLScript."],
  ["LDK", "Desenvolvimento de linguagens", "O módulo #compiler e o comando jls language formam uma base experimental para definir, validar e executar outras linguagens."],
];

const arquitetura = [
  ["1", "Lexer", "Transforma o texto do arquivo .jls em tokens."],
  ["2", "Parser", "Organiza os tokens em estruturas sintáticas e AST."],
  ["3", "Interpretador", "Avalia expressões, declarações, funções e controle de fluxo."],
  ["4", "Runtime", "Mantém valores, escopos, listas, objetos, funções e objetos nativos."],
  ["5", "Módulos", "Resolve bibliotecas oficiais e separa recursos especializados do núcleo."],
  ["6", "Compilação", "Oferece geração de C++/executável nativo e bytecode .jlb."],
];

const comandos = [
  "run", "repl", "new", "create", "init", "preview", "targets", "build", "clean",
  "compile", "verify-bytecode", "test", "fmt", "lint", "fix", "doctor", "config",
  "update", "ai", "language", "dev", "selfhost",
];

const gruposModulos = [
  ["Web e dados", ["#api", "#json", "#xml", "#csv", "#database"], "HTTP, serialização, formatos estruturados e persistência de dados."],
  ["Sistema e arquivos", ["#system", "#file", "#env", "#log", "#process", "#compress"], "Arquivos, ambiente, logs, processos e utilidades do sistema."],
  ["Rede e dispositivos", ["#net", "#connector", "#mobile", "#whatsapp", "#email"], "Conexões, rede, dispositivos móveis e integrações externas."],
  ["Interface e mídia", ["#ui", "#style", "#image", "#audio"], "Interface, estilização, imagens e áudio dentro do ecossistema."],
  ["Computação", ["#math", "#crypto", "#thread", "#watch"], "Matemática, criptografia, tarefas concorrentes e observação de mudanças."],
  ["Desenvolvimento", ["#test", "#cli", "#compiler / #compilador"], "Testes, criação de CLIs e ferramentas para desenvolvimento de linguagens."],
];

export default function Features() {
  return (
    <>
      <section className="section" aria-labelledby="features-title">
        <header className="section-heading">
          <p>O QUE EXISTE NA 3.2.0</p>
          <h2 id="features-title">Mais que uma sintaxe bonita.</h2>
          <span>
            A JLScript já reúne linguagem, runtime, ferramentas de terminal, build, bytecode,
            bibliotecas nativas, integração de IA e infraestrutura para projetos maiores.
          </span>
        </header>

        <div className="features">
          {pilares.map(([icon, titulo, texto]) => (
            <article className="feature-card card" key={titulo}>
              <span className="feature-icon" aria-hidden="true">{icon}</span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="architecture-title">
        <header className="section-heading">
          <p>POR BAIXO DOS PANOS</p>
          <h2 id="architecture-title">Da linha de código até a execução.</h2>
          <span>
            O projeto cresceu de um interpretador pequeno para uma arquitetura separada por responsabilidades.
          </span>
        </header>

        <div className="roadmap-list" role="list" aria-label="Pipeline principal da linguagem">
          {arquitetura.map(([numero, titulo, texto]) => (
            <div role="listitem" key={titulo}>
              <span className="feito" aria-hidden="true">{numero}</span>
              <strong>{titulo}</strong> · {texto}
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="cli-title">
        <header className="section-heading">
          <p>JLSHELL / CLI</p>
          <h2 id="cli-title">Um comando para o ciclo inteiro de desenvolvimento.</h2>
          <span>
            A CLI não serve apenas para executar arquivos. Ela também cria projetos, inspeciona o ambiente,
            formata, analisa, compila, verifica bytecode, gerencia configuração e oferece ferramentas avançadas.
          </span>
        </header>

        <div className="library-box">
          <pre aria-label="Principais comandos da CLI"><code>{comandos.map((cmd) => `jls ${cmd}\n`).join("")}</code></pre>
          <div className="library-box-copy">
            <h3>Ferramentas integradas</h3>
            <p>
              <code>jls run</code> executa source, <code>jls build</code> gera build nativo,
              <code>jls compile</code> cria <code>.jlb</code> e <code>jls verify-bytecode</code> valida o bytecode.
            </p>
            <p>
              Para qualidade e manutenção existem <code>test</code>, <code>fmt</code>, <code>lint</code>,
              <code>fix</code>, <code>doctor</code>, <code>config</code> e <code>update</code>.
            </p>
            <a className="btn-outline" href="#/terminal">Explorar o terminal →</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="modules-title">
        <header className="section-heading">
          <p>BIBLIOTECA PADRÃO</p>
          <h2 id="modules-title">Recursos oficiais sem entupir o núcleo da linguagem.</h2>
          <span>
            Os módulos oficiais usam o prefixo <code>#</code>. Isso deixa explícito quando o programa usa uma
            capacidade do ecossistema JLScript.
          </span>
        </header>

        <div className="features" aria-label="Áreas dos módulos oficiais conhecidos pela versão atual">
          {gruposModulos.map(([titulo, nomes, texto]) => (
            <article className="feature-card card" key={titulo}>
              <span className="feature-icon" aria-hidden="true">#</span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
              <code>{nomes.join(" · ")}</code>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
