import { detectDownload } from "../data/downloads";
import { useLatestRelease } from "../hooks/useLatestRelease";
import { selectReleaseAsset } from "../services/github";

const benefits = ["Interpretador oficial", "CLI e terminal modernos", "Extensão para VS Code", "Atualizações gratuitas"];

export default function Download() {
  const platform = detectDownload();
  const { status, release } = useLatestRelease();
  const asset = selectReleaseAsset(release, platform.platform, platform.architecture);
  const label = status === "ready" ? release.tag : "verificando Release";

  return <section id="download" className="download-callout" aria-labelledby="download-title">
    <div className="download-callout__content">
      <p className="eyebrow">VERSÃO OFICIAL · {label}</p>
      <h2 id="download-title">Comece a programar com JLScript.</h2>
      <p>Detectamos <b>{platform.name}</b>. {asset ? "O pacote oficial compatível está disponível agora." : "O pacote compatível será exibido quando a Release for publicada."}</p>
      <ul>{benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul>
      <div className="download-callout__actions">
        {asset ? <a className="btn" href={asset.downloadUrl} download>Baixar para {platform.name} ↓</a> : <span className="download-unavailable">Versão ainda não disponível.</span>}
        <a className="btn-outline" href="#/download">Ver todas as plataformas</a>
      </div>
    </div>
    <aside className="download-callout__badge" aria-label={`Arquivo recomendado para ${platform.name}`}>
      <span>JLS</span><b>{platform.name}</b><small>{asset ? "Release oficial" : "Aguardando Release"}</small>
    </aside>
  </section>;
}
