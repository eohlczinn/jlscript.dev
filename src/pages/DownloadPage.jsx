import { useState } from "react";
import { DownloadSection, PageHeading } from "../components/Ecosystem";
import { useLatestRelease } from "../hooks/useLatestRelease";

const termuxCommand = "pkg install curl\ncurl -fsSL https://jlscript.dev/install-termux.sh | bash";
const guides = [
  ["Windows", "O instalador oficial adiciona a CLI ao PATH e oferece atalho opcional.", "Baixe o instalador disponível acima e execute-o."],
  ["Linux", "Escolha o arquivo compatível nas Releases ou use o instalador oficial.", "curl -fsSL https://jlscript.dev/install.sh | bash"],
  ["macOS", "Escolha Intel ou Apple Silicon na lista de assets publicada.", "curl -fsSL https://jlscript.dev/install.sh | bash"],
];

function Code({ children }) { return <pre className="doc-code"><code>{children}</code></pre>; }

function TermuxGuide() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText(termuxCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return <section className="termux-guide"><div><p>ANDROID · TERMUX</p><h2>JLScript no seu celular.</h2><span>O instalador detecta Termux e configura o ambiente automaticamente quando houver um pacote publicado.</span><Code>{termuxCommand}</Code></div><aside><b>Depois de instalar</b><code>jls --version</code><code>jls new MeuProjeto</code><code>jls ai</code><div><button className="btn" onClick={copy}>{copied ? "✓ Copiado" : "Copiar comando"}</button><a className="btn-outline" href="#/terminal">Abrir terminal</a></div></aside></section>;
}

export default function DownloadPage() {
  const { status, release, error } = useLatestRelease();
  return <>
    <PageHeading eyebrow="DOWNLOADS" title="Baixe a JLScript." text="Instalação simples para Windows, Linux, macOS e Android com Termux." />
    <section className="download-version">
      <span>VERSÃO OFICIAL</span>
      {status === "ready" ? <><h2>{release.name} <b>{release.tag}</b></h2><p>Publicada em {new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(release.publishedAt))}.</p><div><a className="btn" href="#downloads">Baixar versão atual ↓</a><a className="btn-outline" href={release.url} target="_blank" rel="noreferrer">Ver changelog ↗</a></div></> : <><h2>Downloads em <b>verificação</b></h2><p>{status === "error" ? error : "Consultando a última Release oficial no GitHub."}</p></>}
    </section>
    <div id="downloads"><DownloadSection /></div>
    <TermuxGuide />
    <section className="download-details">{guides.map(([name, description, command]) => <article key={name}><h2>{name}</h2><p>{description}</p><h3>Instalação</h3><Code>{command}</Code><p className="download-note">Depois confirme com: <code>jls --version</code></p></article>)}</section>
    <section className="download-docs"><article><h2>Atualizar</h2><p>Quando uma nova Release estiver disponível:</p><Code>jls update</Code></article><article><h2>Desinstalar</h2><p>Windows: use Aplicativos instalados. No Termux:</p><Code>jls uninstall</Code></article><article><h2>Verificar</h2><p>Diagnostique PATH, executável e ambiente:</p><Code>jls doctor</Code></article><article><h2>Releases e integridade</h2><p>Os assets e hashes publicados pertencem à Release oficial.</p>{release ? <a className="btn-outline" href={release.url} target="_blank" rel="noreferrer">Abrir Release →</a> : <span className="download-unavailable">Release ainda não disponível.</span>}</article></section>
  </>;
}
