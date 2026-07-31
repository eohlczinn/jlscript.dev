export default function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-copy">
      <p className="eyebrow"><i /> Linguagem brasileira, open source e em evolucao</p>
      <h1>JL<span>Script</span></h1>
      <h2>Uma linguagem de programacao em portugues, simples, moderna e poderosa.</h2>
      <p className="hero-description">Desenvolvida para facilitar o aprendizado e acelerar o desenvolvimento de aplicacoes, com uma sintaxe intuitiva inspirada nas linguagens modernas.</p>
      <div className="buttons"><a className="btn" href="#/docs">Começar agora <b>→</b></a><a className="btn-outline" href="#/docs">Documentação</a><a className="text-link" href="#/download">Download ↓</a></div>
    </div>
    <div className="hero-terminal" aria-label="Exemplo de codigo JLScript">
      <div className="terminal-top"><span><i /><i /><i /></span><small>ola.jls</small><em>JLScript</em></div>
      <pre><code><mark>importe</mark> <b>#api</b>{"\n\n"}<mark>api</mark> app = <strong>criarApi</strong>(3000){"\n\n"}app.<strong>get</strong>(<q>"/"</q>, <mark>func</mark>(req, res) {'{'}{"\n"}  res.<strong>enviar</strong>(<q>"Ola, Brasil!"</q>){"\n"}{'}'}){"\n\n"}app.<strong>iniciar</strong>()</code></pre>
      <div className="terminal-result">✓ Servidor iniciado em http://localhost:3000</div>
    </div>
  </section>;
}
