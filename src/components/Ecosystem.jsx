import { downloads } from "../data/downloads";
import { useLatestRelease } from "../hooks/useLatestRelease";
import { selectReleaseAsset } from "../services/github";

export function PageHeading({ eyebrow, title, text }) {
  return <header className="page-heading"><p>{eyebrow}</p><h1>{title}</h1><span>{text}</span></header>;
}

export function SectionTitle({ eyebrow, title, text }) {
  return <header className="section-heading"><p>{eyebrow}</p><h2>{title}</h2>{text && <span>{text}</span>}</header>;
}

export function InstallSection() {
  const entries = [["Windows", "Baixe o instalador recomendado"], ["Linux e macOS", "curl -fsSL https://jlscript.dev/install.sh | bash"], ["Termux", "curl -fsSL https://jlscript.dev/install-termux.sh | bash"]];
  return <section className="section install-section"><SectionTitle eyebrow="INSTALAÇÃO" title="Pronta para seu sistema." /><div className="install-grid">{entries.map(([os, command]) => <article className="install-card" key={os}><span>{os}</span><code>$ {command}</code></article>)}</div></section>;
}

export function DownloadSection() {
  const { status, release, error } = useLatestRelease();
  const description = status === "ready" ? `Versão atual: ${release.tag} · publicada nas Releases oficiais.` : "Os pacotes são verificados diretamente nas Releases oficiais.";
  return <section className="section download-section" aria-busy={status === "loading"}>
    <SectionTitle eyebrow="DOWNLOAD" title="Escolha sua plataforma." text={description} />
    {status === "loading" && <p className="release-state">Consultando a última Release oficial…</p>}
    {status === "error" && <p className="release-state release-state--error">{error} Tente novamente em alguns instantes.</p>}
    {status === "empty" && <p className="release-state">Ainda não existe uma versão disponível para download.</p>}
    <div className="download-grid">{downloads.map((item) => {
      const asset = selectReleaseAsset(release, item.platform, item.architecture);
      return <article className="download-card" key={item.id}><span aria-hidden="true">{item.icon}</span><h3>{item.name}</h3><p>{item.detail}</p>{asset ? <a href={asset.downloadUrl} download>Baixar agora ↓</a> : <span className="download-unavailable">Versão ainda não disponível.</span>}</article>;
    })}</div>
  </section>;
}

const updates = [["Lançamento da versão 2.3", "CLI, interpretador, compilação inicial e JLAI disponíveis.", "RELEASE"], ["Extensão para VS Code", "Destaque de sintaxe, snippets e execução rápida.", "FERRAMENTAS"], ["Ecossistema em evolução", "Bibliotecas, APIs e documentação oficial em expansão.", "COMUNIDADE"]];
export function BlogSection() { return <section className="section blog-section"><SectionTitle eyebrow="BLOG" title="O que está acontecendo." /><div className="blog-grid">{updates.map(([title, text, tag]) => <article className="blog-card" key={title}><span>{tag}</span><h3>{title}</h3><p>{text}</p><a href="https://github.com/eohlczinn/JLScript" target="_blank" rel="noreferrer">Ler no GitHub →</a></article>)}</div></section>; }
export function CommunitySection() { return <section className="community-section"><p className="eyebrow">COMUNIDADE</p><h2>Vamos construir a JLScript juntos.</h2><p>A linguagem cresce quando ideias, código e pessoas se encontram.</p><div><a className="btn" href="https://github.com/eohlczinn/JLScript" target="_blank" rel="noreferrer">GitHub ↗</a><a className="btn-outline" href="#/docs">Documentação</a><a className="btn-outline" href="https://github.com/eohlczinn/JLScript/issues" target="_blank" rel="noreferrer">Reportar Bug</a></div></section>; }
