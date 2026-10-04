import { useState } from "react";

const DOCS_URL = "https://github.com/JLScripter/documentacao_JLScripter";

const principles = [
  ["◇", "Simplicidade"],
  ["Aa", "Legibilidade"],
  ["BR", "Identidade brasileira"],
  ["↔", "Português + inglês"],
  [">_", "Ferramentas próprias"],
  ["▣", "Arquitetura modular"],
  ["◌", "Segurança"],
  ["⌘", "Aprendizado"],
];

const uses = [
  "APIs HTTP",
  "Automação",
  "Scripts",
  "Ferramentas CLI",
  "Processamento de dados",
  "Projetos didáticos",
  "Serviços locais",
  "Protótipos de interface",
  "Integrações com dispositivos",
];

const faq = [
  [
    "O que é a JLScript?",
    "JLScript é uma linguagem de programação brasileira criada em 2026, com sintaxe própria, construções em português e inglês, runtime, CLI, compilação nativa, bytecode e bibliotecas oficiais.",
  ],
  [
    "Qual é a versão atual?",
    "O portal e a documentação desta edição acompanham a JLScript 3.2.0.",
  ],
  [
    "A JLScript é Open Source?",
    "Não. O código-fonte da linguagem passou a ser fechado. A documentação pública continua disponível para ensinar a sintaxe, as bibliotecas, os comandos e o uso do ecossistema.",
  ],
  [
    "A documentação continua pública?",
    "Sim. A documentação oficial permanece pública no GitHub e pode ser usada para estudar a linguagem sem expor a implementação interna.",
  ],
  [
    "A linguagem possui interpretador e compilador?",
    "Sim. O projeto possui interpretador/runtime, geração de C++ para build nativo e compilador de bytecode no formato .jlb.",
  ],
  [
    "JLScript aceita português e inglês?",
    "Sim. Estruturas como se/senao e if/else, enquanto/while e para/for fazem parte da sintaxe. Em uma mesma estrutura, mantenha o idioma coerente.",
  ],
  [
    "Como importo uma biblioteca oficial?",
    "Use import #biblioteca. Também é possível importar várias bibliotecas juntas ou criar um alias com como.",
  ],
  [
    "Existe uma IDE oficial?",
    "O ecossistema possui integração com VS Code. IDE própria, depuração avançada e LSP mais completo continuam como áreas de evolução.",
  ],
  [
    "Como reporto um problema?",
    "Use a Central de Suporte/JLAI ou abra uma issue no repositório público da documentação. O repositório do código-fonte não é usado como canal público.",
  ],
  [
    "O Playground executa toda a linguagem?",
    "Não. O Playground do site é um sandbox demonstrativo. Para executar o runtime completo, use a CLI jls instalada no computador.",
  ],
];

function Heading({ eyebrow, title, text }) {
  return (
    <header className="about-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </header>
  );
}

export default function About() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="about-hero">
        <div>
          <p>JLSCRIPT 3.2.0 · BRASIL</p>
          <h1>
            Sobre a <span>JLScript</span>
          </h1>
          <h2>
            Uma linguagem criada no Brasil para experimentar uma forma mais
            direta de programar, sem esconder os conceitos reais por trás do
            código.
          </h2>
          <a className="btn" href="#/docs">Conhecer a documentação →</a>
        </div>
        <div className="about-art">
          <i>▣</i>
          <b>func criar(futuro) {"{"}</b>
          <small>português + inglês · runtime próprio</small>
          <em>{"}"}</em>
        </div>
      </section>

      <section className="about-section history">
        <Heading
          eyebrow="HISTÓRIA"
          title="Começou como curiosidade. Virou um ecossistema."
          text="A JLScript começou a ser desenvolvida em julho de 2026 por Lucas Aguiel Dos Santos De Oliveira. O objetivo inicial era entender como uma linguagem funciona por dentro e testar decisões próprias de sintaxe."
        />
        <div className="timeline">
          <div><b>Julho de 2026</b><span>Primeiros testes, sintaxe e execução da linguagem.</span></div>
          <div><b>1.0.0</b><span>Condições, funções, switch, laços e um CLI inicial provaram que a ideia funcionava.</span></div>
          <div><b>Evolução</b><span>Lexer, parser, AST, interpretador, runtime, módulos e bibliotecas ganharam responsabilidades próprias.</span></div>
          <div><b>3.2.0</b><span>CLI ampliada, build nativo, bytecode .jlb, JLS AI e um ecossistema de bibliotecas oficiais.</span></div>
        </div>
      </section>

      <section className="about-section mission">
        <Heading eyebrow="PROPOSTA" title="Simples para começar. Estruturada para crescer." />
        <div>
          {[
            "Reduzir ruído sintático desnecessário",
            "Permitir construções em português e inglês",
            "Ensinar conceitos reais de programação",
            "Oferecer CLI e ferramentas integradas",
            "Separar recursos em bibliotecas oficiais",
            "Evoluir sem depender de expor o código-fonte",
          ].map((item) => <p key={item}>✓ {item}</p>)}
        </div>
      </section>

      <section className="about-section">
        <Heading eyebrow="FILOSOFIA" title="Princípios que guiam o projeto." />
        <div className="principles">
          {principles.map(([icon, name]) => (
            <article key={name}><span>{icon}</span><h3>{name}</h3></article>
          ))}
        </div>
      </section>

      <section className="about-section reasons">
        <Heading eyebrow="POR QUE JLSCRIPT?" title="A linguagem não é só sintaxe." />
        <div>
          {[
            "va, let e ins para declarações",
            "se/senao e if/else",
            "para/for e enquanto/while",
            "funções normais, curtas e anônimas",
            "try/catch/finally e tente/capture/finalmente",
            "módulos oficiais com import #modulo",
            "build nativo por geração de C++",
            "bytecode próprio .jlb",
            "CLI com testes, lint, fmt, fix e doctor",
            "bibliotecas para API, dados, arquivos, rede e mais",
          ].map((x) => <p key={x}>✓ {x}</p>)}
        </div>
      </section>

      <section className="about-section objectives">
        <Heading eyebrow="ESTADO ATUAL" title="O que existe na 3.2.0." />
        <div>
          {[
            "Lexer, parser e AST",
            "Interpretador e runtime",
            "Compilação nativa",
            "Bytecode .jlb",
            "JLShell / REPL",
            "CLI de desenvolvimento",
            "Bibliotecas oficiais",
            "JLS AI",
          ].map((x, i) => (
            <article key={x}><b>{String(i + 1).padStart(2, "0")}</b><span>{x}</span></article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <Heading eyebrow="ROADMAP" title="O próximo passo é maturidade, não maquiagem." />
        <div className="about-roadmap">
          <article>
            <h3>Disponível</h3>
            <p>✅ Interpretador e runtime</p>
            <p>✅ Build nativo e bytecode</p>
            <p>✅ CLI e REPL</p>
            <p>✅ Bibliotecas oficiais</p>
          </article>
          <article>
            <h3>Em evolução</h3>
            <p>🚧 UI e style</p>
            <p>🚧 Conectores e mobile</p>
            <p>🚧 Ferramentas do #compiler</p>
            <p>🚧 Integrações externas</p>
          </article>
          <article>
            <h3>Direção</h3>
            <p>🔵 LSP e depuração melhores</p>
            <p>🔵 Mais targets de build</p>
            <p>🔵 Ecossistema de pacotes</p>
            <p>🔵 Experiência de IDE mais completa</p>
          </article>
        </div>
      </section>

      <section className="about-section">
        <Heading eyebrow="CASOS DE USO" title="Onde a linguagem já faz sentido." />
        <div className="uses">
          {uses.map((use) => <article key={use}>◈ <span>{use}</span></article>)}
        </div>
      </section>

      <section className="about-section faq">
        <Heading eyebrow="PERGUNTAS FREQUENTES" title="Dúvidas comuns." />
        {faq.map(([question, answer], index) => (
          <article className={open === index ? "open" : ""} key={question}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
              {question}<b>{open === index ? "−" : "+"}</b>
            </button>
            {open === index && <p>{answer}</p>}
          </article>
        ))}
      </section>

      <section className="about-section tech">
        <Heading eyebrow="ARQUITETURA" title="Construída como linguagem de verdade." />
        <div>
          {["C++", "Lexer", "Parser", "AST", "Runtime", "Bytecode", "CLI", "HTTP", "SQLite"].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="about-community">
        <p>DOCUMENTAÇÃO PÚBLICA · CÓDIGO-FONTE FECHADO</p>
        <h2>Aprenda a linguagem sem depender da implementação interna.</h2>
        <span>
          A documentação oficial continua pública com história, sintaxe,
          comandos, bibliotecas e exemplos. Sugestões e relatórios de problemas
          continuam bem-vindos pelos canais de suporte.
        </span>
        <div>
          <a className="btn" href="#/docs">Ler documentação</a>
          <a className="btn-outline" href={DOCS_URL} target="_blank" rel="noreferrer">Documentação no GitHub ↗</a>
          <a className="btn-outline" href="#/download">Download</a>
        </div>
      </section>
    </>
  );
}
