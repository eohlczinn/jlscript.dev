import { assetUrl, detectDownload, VERSION } from "../data/downloads";

const benefits = ["Interpretador oficial", "CLI e terminal modernos", "Extensao para VS Code", "Atualizacoes gratuitas"];

export default function Download() {
  const platform = detectDownload();
  return <section id="download" className="download-callout" aria-labelledby="download-title">
    <div className="download-callout__content">
      <p className="eyebrow">VERSAO ATUAL · V{VERSION}</p>
      <h2 id="download-title">Comece a programar com JLScript.</h2>
      <p>Detectamos <b>{platform.name}</b>. Baixe a versao correta e comece a criar em poucos minutos.</p>
      <ul>{benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul>
      <div className="download-callout__actions">
        <a className="btn" href={assetUrl(platform.asset)}>Baixar JLScript ↓</a>
        <a className="btn-outline" href="#/download">Ver todas as plataformas</a>
      </div>
    </div>
    <aside className="download-callout__badge" aria-label={`Arquivo recomendado para ${platform.name}`}>
      <span>JLS</span><b>{platform.name}</b><small>Release oficial</small>
    </aside>
  </section>;
}
