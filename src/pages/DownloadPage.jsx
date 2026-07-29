import { DownloadSection, PageHeading } from "../components/Ecosystem";

const systems = [
  ["Windows", "Compatível com Windows 10 e Windows 11.", "jls install", "Ou baixe o instalador .exe."],
  ["Linux", "Compatível com as principais distribuições Linux.", "curl -fsSL https://jlscript.dev/install.sh | bash", "Instalação pelo terminal."],
  ["macOS", "Compatível com Apple Silicon e Intel.", "brew install jls", "Instalação com Homebrew."],
  ["Termux", "Compatível com Android usando o Termux.", "curl -fsSL https://jlscript.dev/install.sh | bash", "Instalação pelo terminal Android."]
];
const Code = ({ children }) => <pre className="doc-code"><code>{children}</code></pre>;

export default function DownloadPage() {
  return <><PageHeading eyebrow="DOWNLOADS" title="Baixe a JLScript." text="Comece a desenvolver em poucos minutos. Escolha a versão compatível com seu sistema." />
    <section className="download-version"><span>VERSÃO ATUAL</span><h2>JLScript <b>v1.0.0</b></h2><div><p>✓ Interpretador oficial</p><p>✓ CLI (Terminal)</p><p>✓ Extensão para VS Code</p><p>✓ Atualizações gratuitas</p><p>✓ Projeto Open Source</p></div></section>
    <DownloadSection />
    <section className="download-details">{systems.map(([name, text, command, note]) => <article key={name}><h2>{name}</h2><p>{text}</p><h3>Instalação</h3><Code>{command}</Code><p className="download-note">{note}</p></article>)}</section>
    <section className="download-docs">
      <article><h2>VS Code Extension</h2><p>A extensão oficial oferece destaque de sintaxe, autocompletar, diagnóstico de erros, snippets, execução rápida, hover com documentação e formatação de código.</p><a className="btn" href="#/suporte">Download da extensão →</a></article>
      <article><h2>Instalação manual</h2><p>Baixe o arquivo correspondente ao seu sistema e siga as instruções do instalador. Depois, confirme a instalação:</p><Code>jls --version</Code><p>Resultado esperado: <code>JLScript v1.0.0</code></p></article>
      <article><h2>Atualizar e desinstalar</h2><h3>Atualizar</h3><Code>jls update</Code><h3>Desinstalar</h3><Code>{"Windows\njls uninstall\n\nLinux\nsudo jls uninstall\n\nmacOS\nbrew uninstall jls"}</Code></article>
      <article><h2>Requisitos</h2><p><b>Windows:</b> Windows 10 ou superior, 100 MB livres e internet.</p><p><b>Linux:</b> Kernel 5.10+, Bash e Curl.</p><p><b>macOS:</b> macOS 12 ou superior e Homebrew opcional.</p><p><b>Termux:</b> Android com Termux, Bash e Curl.</p></article>
      <article><h2>Verificar instalação</h2><p>Use o diagnóstico integrado para verificar instalação, variáveis de ambiente, dependências, permissões e atualizações.</p><Code>jls doctor</Code></article>
      <article><h2>Precisa de ajuda?</h2><p>Para versões anteriores, acesse as Releases no GitHub. Você também pode relatar problemas, sugerir melhorias e contribuir para o código-fonte.</p><a className="btn-outline" href="https://github.com/eohlczinn/JLScript/issues" target="_blank" rel="noreferrer">Abrir issue no GitHub →</a></article>
    </section>
  </>;
}
