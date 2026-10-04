const checks = [
  ["Executar", "jls run app.jls"],
  ["Ver versão", "jls --version"],
  ["Diagnosticar", "jls doctor"],
  ["Ajuda", "jls --help"],
];

export default function Download() {
  return (
    <section className="download-callout" aria-labelledby="download-home-title">
      <div className="download-callout__content">
        <header>
          <p className="eyebrow">JLSCRIPT 3.2.0</p>
          <h2 id="download-home-title">Instale a linguagem e valide o ambiente pelo próprio terminal.</h2>
        </header>

        <p>
          A área de downloads reúne os binários Windows fornecidos para distribuição, informações de
          integridade e um passo a passo para confirmar se o comando <code>jls</code> está disponível.
        </p>

        <ul>
          <li>Runtime, interpretador e CLI no mesmo ecossistema</li>
          <li>Build nativo e compilação para bytecode <code>.jlb</code></li>
          <li>Diagnóstico de ambiente e toolchains com <code>jls doctor</code></li>
          <li>Documentação pública separada do código-fonte privado</li>
        </ul>

        <div className="install-grid" aria-label="Comandos para conferir a instalação">
          {checks.map(([label, command]) => (
            <article className="install-card" key={command}>
              <span>{label}</span>
              <code>$ {command}</code>
            </article>
          ))}
        </div>

        <div className="download-callout__actions">
          <a className="btn" href="#/download">Abrir downloads ↓</a>
          <a className="btn-outline" href="#/docs">Guia de primeiros passos</a>
          <a className="text-link" href="#/terminal">Ver comandos da CLI →</a>
        </div>
      </div>

      <aside className="download-callout__badge" aria-label="Informações da versão atual da linguagem">
        <span>JLS</span>
        <b>3.2.0</b>
        <small>versão da linguagem</small>
        <p>.jls · jls · .jlb</p>
      </aside>
    </section>
  );
}
