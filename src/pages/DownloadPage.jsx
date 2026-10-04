import { useState } from "react";
import { PageHeading } from "../components/Ecosystem";

const DOCS_URL = "https://github.com/JLScripter/documentacao_JLScripter";
const downloads = [
  {
    title: "Executável direto",
    file: "jls.exe",
    href: "/downloads/jls.exe",
    detail: "Windows x64 · executável da CLI fornecido com este pacote",
    size: "6,15 MB",
    sha: "d672f89bc3a146fc1e76d5d06e20b41cd62ae07f5577e1204503614304e89667",
  },
  {
    title: "Instalador Windows x64",
    file: "JLScript-2.3.0-windows-x64-setup.exe",
    href: "/downloads/JLScript-2.3.0-windows-x64-setup.exe",
    detail: "Instalador fornecido · identifica-se internamente como 2.3.0",
    size: "9,03 MB",
    sha: "82bfbbd551325dd0bf6097a68ab041290782e9c0465da0737fe1317d1ae3672d",
  },
];

function Code({ children }) {
  return <pre className="doc-code"><code>{children}</code></pre>;
}

function DownloadCard({ item }) {
  const [copied, setCopied] = useState(false);
  const copyHash = async () => {
    await navigator.clipboard?.writeText(item.sha);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <article>
      <span>WINDOWS</span>
      <h2>{item.title}</h2>
      <p>{item.detail}</p>
      <code>{item.file}</code>
      <p><small>Tamanho aproximado: {item.size}</small></p>
      <div>
        <a className="btn" href={item.href} download>Baixar ↓</a>
        <button className="btn-outline" type="button" onClick={copyHash}>{copied ? "✓ SHA-256 copiado" : "Copiar SHA-256"}</button>
      </div>
    </article>
  );
}

export default function DownloadPage() {
  return (
    <>
      <PageHeading
        eyebrow="DOWNLOADS"
        title="Baixe a JLScript."
        text="O portal acompanha a versão 3.2.0 da linguagem. Abaixo estão os binários Windows fornecidos para distribuição neste pacote."
      />

      <section className="download-version">
        <span>VERSÃO DA LINGUAGEM</span>
        <h2>JLScript <b>3.2.0</b></h2>
        <p>
          A documentação e as páginas deste portal foram atualizadas para a
          3.2.0. Os dois executáveis enviados para esta distribuição ainda
          carregam metadados internos 2.3.0, então o site os identifica sem
          fingir uma versão que o binário não possui.
        </p>
        <div>
          <a className="btn" href="#downloads">Ver downloads ↓</a>
          <a className="btn-outline" href={DOCS_URL} target="_blank" rel="noreferrer">Documentação oficial ↗</a>
        </div>
      </section>

      <section id="downloads" className="download-details">
        {downloads.map((item) => <DownloadCard item={item} key={item.file} />)}
      </section>

      <section className="download-docs">
        <article>
          <h2>Executar</h2>
          <p>Depois de instalar ou colocar o executável no PATH:</p>
          <Code>{`jls --version\njls --help\njls run app.jls`}</Code>
        </article>
        <article>
          <h2>Diagnosticar</h2>
          <p>Verifique o ambiente e as ferramentas detectadas pela CLI:</p>
          <Code>jls doctor</Code>
        </article>
        <article>
          <h2>Atualizar</h2>
          <p>A infraestrutura de atualização é acessada pela própria CLI:</p>
          <Code>{`jls update\njls config update-check on`}</Code>
        </article>
        <article>
          <h2>Outras plataformas</h2>
          <p>Este pacote inclui somente os arquivos Windows enviados. Consulte a documentação oficial para o estado de Linux, macOS e Termux antes de anunciar um instalador que não existe.</p>
          <a className="btn-outline" href={DOCS_URL} target="_blank" rel="noreferrer">Consultar documentação →</a>
        </article>
      </section>

      <section className="terminal-note">
        <h2>Integridade dos arquivos.</h2>
        <p>Os hashes SHA-256 exibidos acima pertencem exatamente aos dois binários incluídos neste ZIP. Isso permite verificar se o download chegou sem alteração.</p>
      </section>
    </>
  );
}
