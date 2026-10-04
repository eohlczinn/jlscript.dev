import { PageHeading } from "../components/Ecosystem";

const Code = ({ children }) => <pre className="doc-code"><code>{children}</code></pre>;

const ready = [
  "#api", "#math", "#json", "#watch", "#file", "#database", "#crypto",
  "#process", "#env", "#net", "#thread", "#test", "#log", "#compress",
  "#csv", "#xml", "#cli", "#email", "#image", "#audio",
];

const evolving = ["#system", "#whatsapp", "#connector", "#mobile", "#style", "#ui", "#compiler / #compilador"];

export default function Library() {
  return (
    <>
      <PageHeading
        eyebrow="BIBLIOTECAS OFICIAIS · 3.2.0"
        title="Recursos separados do núcleo."
        text="O JLScript mantém a linguagem central enxuta e move funcionalidades especializadas para módulos oficiais importados com #."
      />

      <section className="library-page">
        <article className="library-intro">
          <h2>Importação atual</h2>
          <p>A sintaxe oficial usa <code>import</code>. Formas antigas como <code>usar(#math)</code>, <code>importe</code>, <code>importa</code> e <code>apelido</code> não pertencem ao parser atual.</p>
          <Code>{`// Uma biblioteca\nimport #json\n\n// Várias bibliotecas\nimport [#api, #database, #file]\n\n// Alias\nimport #api como web`}</Code>
        </article>

        <article className="library-intro api-intro">
          <h2>Servidor HTTP com #api</h2>
          <p>O módulo HTTP atual possui servidor, rotas, request/response, JSON, middlewares e recursos de cliente.</p>
          <Code>{`import #api\n\nva app = api.server({\n    host: "127.0.0.1",\n    port: 3000\n})\n\napp.get("/status", func(req, res) {\n    res.json({\n        linguagem: "JLScript",\n        status: "online"\n    })\n})\n\napp.listen()`}</Code>
        </article>

        <section className="library-compare">
          <h2>Módulos disponíveis</h2>
          <div className="compare-table">
            <div>
              <b>Prontos para uso no estado analisado</b>
              {ready.map((name) => <p key={name}>✓ {name}</p>)}
            </div>
            <div>
              <b>Em evolução / dependentes de ambiente</b>
              {evolving.map((name) => <p key={name}>◌ {name}</p>)}
            </div>
          </div>
        </section>

        <section className="library-philosophy">
          <p>FILOSOFIA DOS MÓDULOS</p>
          <h2>Importe somente o que seu programa precisa.</h2>
          <span>
            Rede, banco de dados, arquivos, criptografia, imagens, áudio,
            processos, interfaces e dispositivos não precisam virar palavras
            reservadas da linguagem. Cada módulo assume sua própria responsabilidade.
          </span>
          <small>
            Alguns módulos dependem de credenciais, drivers, sistema operacional
            ou hardware real. “Existe no runtime” não significa “funciona em qualquer
            máquina sem configuração”. A humanidade ainda não derrotou drivers.
          </small>
        </section>
      </section>
    </>
  );
}
