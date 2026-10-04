export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <header>
          <p className="eyebrow">
            <i aria-hidden="true" /> JLScript 3.2.0 · linguagem brasileira · código-fonte fechado
          </p>
          <h1 id="hero-title">
            JL<span>Script</span>
          </h1>
          <h2>Uma linguagem bilíngue com runtime, CLI, compilação e bibliotecas próprias.</h2>
        </header>

        <p className="hero-description">
          Criada no Brasil em 2026, a JLScript combina construções em português e inglês,
          execução interpretada, geração de executável nativo, bytecode <code>.jlb</code>,
          ferramentas de desenvolvimento e um conjunto crescente de módulos oficiais.
        </p>

        <ul className="hero-facts" aria-label="Resumo técnico da JLScript">
          <li><strong>.jls</strong><span>arquivos-fonte</span></li>
          <li><strong>jls</strong><span>CLI e REPL</span></li>
          <li><strong>.jlb</strong><span>bytecode</span></li>
          <li><strong>PT + EN</strong><span>sintaxe bilíngue</span></li>
        </ul>

        <div className="buttons" aria-label="Ações principais">
          <a className="btn" href="#/docs">Começar pela documentação <b aria-hidden="true">→</b></a>
          <a className="btn-outline" href="#/biblioteca">Ver bibliotecas</a>
          <a className="text-link" href="#/download">Download ↓</a>
        </div>
      </div>

      <aside className="hero-terminal" aria-label="Exemplo de servidor HTTP em JLScript">
        <div className="terminal-top">
          <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
          <small>api.jls</small>
          <em>JLScript 3.2.0</em>
        </div>
        <pre><code>
          <span className="tok-keyword">import</span> <span className="tok-lib">#api</span>{"\n\n"}
          <span className="tok-keyword">va</span> app <span className="tok-op">=</span> <span className="tok-function">criarApi</span>(<span className="tok-number">3000</span>){"\n\n"}
          app.<span className="tok-function">get</span>(<span className="tok-string">"/"</span>, <span className="tok-keyword">func</span>(req, res) {"{"}{"\n  "}
          res.<span className="tok-function">json</span>({"{"} linguagem: <span className="tok-string">"JLScript"</span>, status: <span className="tok-string">"online"</span> {"}"}){"\n"}
          {"}"}){"\n\n"}
          app.<span className="tok-function">iniciar</span>()
        </code></pre>
        <div className="terminal-result">✓ servidor HTTP iniciado na porta 3000</div>
      </aside>
    </section>
  );
}
