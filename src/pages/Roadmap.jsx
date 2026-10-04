import { PageHeading } from "../components/Ecosystem";

const roadmap = [
  {
    area: "Linguagem e runtime",
    progress: 92,
    items: [
      ["done", "Sintaxe bilíngue", "Português e inglês nas principais estruturas de controle."],
      ["done", "Funções, listas e objetos", "Runtime com escopo, chamadas, coleções e valores estruturados."],
      ["done", "Tratamento de erros", "try/catch/finally e tente/capture/finalmente fazem parte do parser atual."],
      ["building", "Sistema de tipos", "Área que pode ganhar validações e diagnósticos mais profundos."],
    ],
  },
  {
    area: "Execução e compilação",
    progress: 90,
    items: [
      ["done", "Interpretador", "Execução de arquivos .jls pelo runtime da linguagem."],
      ["done", "Build nativo", "Fluxo de geração de C++ e compilação para executável."],
      ["done", "Bytecode .jlb", "Compilação e verificação de bytecode pela CLI."],
      ["planned", "Execução direta de .jlb", "O CLI atual valida bytecode, mas não anuncia execução direta do formato."],
    ],
  },
  {
    area: "CLI e ferramentas",
    progress: 94,
    items: [
      ["done", "Projetos e execução", "run, new, create, init, preview e REPL."],
      ["done", "Qualidade", "test, lint, fmt, fix e doctor."],
      ["done", "Build e ambiente", "targets, clean, build, compile, config e update."],
      ["building", "Developer experience", "language/linguagem, selfhost, dev e integrações continuam amadurecendo."],
    ],
  },
  {
    area: "Bibliotecas oficiais",
    progress: 84,
    items: [
      ["done", "Dados e sistema", "JSON, arquivos, SQLite, CSV, XML, env, log, processos e compressão."],
      ["done", "Rede e serviços", "API HTTP, net, threads, e-mail e watch."],
      ["done", "Mídia e segurança", "Imagem, áudio e criptografia."],
      ["building", "UI, dispositivos e compiler", "#ui, #style, #connector, #mobile e partes do #compiler ainda dependem de evolução e ambiente."],
    ],
  },
];

const timeline = [
  ["2026", "Nascimento", "Primeiros testes da linguagem e a decisão de criar uma sintaxe própria."],
  ["1.0.0", "Primeira versão", "Condições, funções, switch, laços e um CLI pequeno tornaram a linguagem executável."],
  ["2.x", "Ecossistema", "Runtime, bibliotecas, build, bytecode, documentação e ferramentas cresceram rapidamente."],
  ["3.2.0", "Maturidade técnica", "Mais comandos, módulos e infraestrutura, com o código-fonte agora fechado e documentação pública."],
  ["Próximo", "Experiência de desenvolvimento", "Mais maturidade em LSP, depuração, packages, interfaces e multiplataforma."],
];

export default function Roadmap() {
  return (
    <div className="roadmap-page">
      <PageHeading eyebrow="ROADMAP · 3.2.0" title="O que existe e o que vem depois." text="O roadmap agora parte do estado real do runtime e das ferramentas, em vez de planejar de novo coisas que já foram implementadas." />

      <div className="roadmap-legend">
        <span className="done">Concluído</span>
        <span className="building">Em evolução</span>
        <span className="planned">Planejado</span>
      </div>

      <section className="roadmap-categories">
        {roadmap.map((group) => (
          <article key={group.area}>
            <header><div><h2>{group.area}</h2><span>Visão pública do estado atual</span></div><b>{group.progress}%</b></header>
            <div className="progress"><i style={{ width: `${group.progress}%` }} /></div>
            <div className="roadmap-items">
              {group.items.map(([status, title, text]) => (
                <div key={title}><span className={status}>●</span><p><b>{title}</b><small>{text}</small></p></div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="roadmap-timeline">
        <header><p>LINHA DE EVOLUÇÃO</p><h2>De experimento a ecossistema.</h2></header>
        {timeline.map(([version, title, text]) => (
          <article key={`${version}-${title}`}><span>{version}</span><div><h3>{title}</h3><p>{text}</p></div></article>
        ))}
      </section>

      <section className="roadmap-update">
        <h2>O roadmap não é um contrato gravado em pedra.</h2>
        <p>Áreas experimentais podem mudar conforme o runtime amadurece. A referência técnica continua sendo a documentação da versão instalada e os comandos expostos pela CLI.</p>
        <div className="buttons"><a className="btn" href="#/docs">Documentação</a><a className="btn-outline" href="#/atualizacoes">Ver atualizações</a></div>
      </section>
    </div>
  );
}
