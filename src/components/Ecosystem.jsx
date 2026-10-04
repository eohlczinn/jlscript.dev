const documentationUrl = "https://github.com/JLScripter/documentacao_JLScripter";

export function PageHeading({ eyebrow, title, text, children }) {
  return (
    <header className="page-heading">
      {eyebrow && <p>{eyebrow}</p>}
      <h1>{title}</h1>
      {text && <span>{text}</span>}
      {children}
    </header>
  );
}

export function SectionTitle({ eyebrow, title, text, id }) {
  return (
    <header className="section-heading">
      {eyebrow && <p>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <span>{text}</span>}
    </header>
  );
}

export function InstallSection() {
  const entries = [
    ["Windows", "Instalador e executável portátil disponíveis na área de download", "#/download"],
    ["Terminal", "Depois de instalar, valide com jls --version e jls doctor", "#/terminal"],
    ["Outros ambientes", "Consulte documentação, targets e estado atual de compatibilidade", "#/docs"],
  ];

  return (
    <section className="section install-section" aria-labelledby="install-title">
      <SectionTitle
        id="install-title"
        eyebrow="INSTALAÇÃO"
        title="Instale, valide e conheça o ambiente."
        text="A distribuição pública atual concentra os binários fornecidos para Windows. A CLI também possui diagnóstico de toolchains e targets."
      />

      <div className="install-grid">
        {entries.map(([title, text, href]) => (
          <article className="install-card" key={title}>
            <span>{title}</span>
            <p>{text}</p>
            <a href={href}>Abrir →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DownloadSection() {
  const items = [
    {
      name: "Executável portátil",
      detail: "jls.exe fornecido para uso direto no Windows.",
      icon: ">_",
      href: "/downloads/jls.exe",
    },
    {
      name: "Instalador Windows x64",
      detail: "Pacote de instalação fornecido para Windows 64 bits.",
      icon: "WIN",
      href: "/downloads/JLScript-2.3.0-windows-x64-setup.exe",
    },
    {
      name: "Documentação pública",
      detail: "História, sintaxe, bibliotecas e comandos do ecossistema JLScript.",
      icon: "DOC",
      href: documentationUrl,
      external: true,
    },
    {
      name: "Guia da versão",
      detail: "Consulte a página de download para notas, hashes e instruções de verificação.",
      icon: "3.2",
      href: "#/download",
    },
  ];

  return (
    <section className="section download-section" aria-labelledby="ecosystem-download-title">
      <SectionTitle
        id="ecosystem-download-title"
        eyebrow="DOWNLOAD"
        title="Arquivos, integridade e documentação no mesmo lugar."
        text="A linguagem está documentada como JLScript 3.2.0. Os binários fornecidos para distribuição devem ser conferidos individualmente na página de downloads."
      />

      <div className="download-grid">
        {items.map((item) => (
          <article className="download-card" key={item.name}>
            <span aria-hidden="true">{item.icon}</span>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <a
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : { download: item.href.startsWith("/downloads/") || undefined })}
            >
              {item.external ? "Abrir referência ↗" : item.href.startsWith("/downloads/") ? "Baixar arquivo ↓" : "Ver detalhes →"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

const updates = [
  [
    "JLScript 3.2.0",
    "A versão atual do portal reúne a linguagem bilíngue, runtime, CLI, build nativo, bytecode, bibliotecas oficiais e JLS AI.",
    "VERSÃO",
    "#/atualizacoes",
  ],
  [
    "CLI e ferramentas",
    "Run, REPL, criação de projetos, preview, targets, build, compile, testes, formatter, lint, fix, doctor, config, update e ferramentas avançadas.",
    "FERRAMENTAS",
    "#/terminal",
  ],
  [
    "Documentação pública",
    "A documentação fica pública e separada do código-fonte fechado da linguagem, com áreas de história, comandos e bibliotecas.",
    "DOCUMENTAÇÃO",
    documentationUrl,
  ],
];

export function BlogSection() {
  return (
    <section className="section blog-section" aria-labelledby="news-title">
      <SectionTitle
        id="news-title"
        eyebrow="ESTADO DO PROJETO"
        title="O que a versão atual representa."
        text="Um resumo das áreas que ajudam a entender o estágio atual do ecossistema."
      />

      <div className="blog-grid">
        {updates.map(([title, text, tag, href]) => (
          <article className="blog-card" key={title}>
            <span>{tag}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              Ler mais {href.startsWith("http") ? "↗" : "→"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="community-section" aria-labelledby="community-title">
      <p className="eyebrow">DOCUMENTAÇÃO E SUPORTE</p>
      <h2 id="community-title">Aprenda pela documentação pública. Desenvolva com a linguagem instalada.</h2>
      <p>
        O código-fonte da JLScript não é aberto. O conteúdo público continua disponível para aprender a sintaxe,
        consultar bibliotecas, entender comandos, acompanhar a história do projeto e obter suporte.
      </p>
      <div>
        <a className="btn" href={documentationUrl} target="_blank" rel="noreferrer">Documentação no GitHub ↗</a>
        <a className="btn-outline" href="#/docs">Guia no site</a>
        <a className="btn-outline" href="#/suporte">Central de suporte</a>
      </div>
    </section>
  );
}
