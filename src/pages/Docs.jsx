import { useMemo, useState } from "react";
import { PageHeading } from "../components/Ecosystem";

const DOCS_URL = "https://github.com/JLScripter/documentacao_JLScripter";

const guides = [
  {
    id: "visao-geral",
    title: "JLScript 3.2.0",
    text: "JLScript é uma linguagem brasileira com extensão .jls, CLI própria, interpretador/runtime, build nativo, bytecode .jlb e bibliotecas oficiais. O código-fonte é fechado; a documentação continua pública.",
    code: `jls --version\njls --help\njls run app.jls`,
  },
  {
    id: "primeiro-programa",
    title: "Primeiro programa",
    text: "Crie um arquivo app.jls e execute com jls run app.jls.",
    code: `va nome = "JLScript"\nmostrar("Olá, " + nome)`,
    output: "Olá, JLScript",
  },
  {
    id: "variaveis",
    title: "Variáveis e valores",
    text: "O lexer reconhece va, let e ins como formas de declaração. O runtime trabalha com números, strings, booleanos, listas, objetos e null.",
    code: `va nome = "Lucas"\nlet idade = 19\nins ativo = true\n\nmostrar(nome)\nmostrar(idade)\nmostrar(ativo)`,
  },
  {
    id: "condicoes",
    title: "Condições em português e inglês",
    text: "A linguagem possui construções bilíngues. Mantenha o mesmo idioma dentro da mesma estrutura: se combina com senao; if combina com else.",
    code: `se (idade >= 18) {\n    mostrar("Maior de idade")\n} senao {\n    mostrar("Menor de idade")\n}\n\nif (ativo) {\n    mostrar("Active")\n} else {\n    mostrar("Inactive")\n}`,
  },
  {
    id: "switch",
    title: "Switch sem break obrigatório",
    text: "Cada case/caso usa seu próprio bloco. O fechamento do bloco encerra o caso, evitando um break apenas para marcar o fim.",
    code: `escolha (opcao) {\n    caso 1 {\n        mostrar("Iniciar")\n    }\n\n    caso 2 {\n        mostrar("Configurações")\n    }\n\n    padrao {\n        mostrar("Sair")\n    }\n}`,
  },
  {
    id: "loops",
    title: "Laços",
    text: "Os laços atuais são para/for e enquanto/while. Os controles pare/break e continuar/continue também fazem parte da sintaxe.",
    code: `para (va i = 1; i <= 5; i = i + 1) {\n    mostrar(i)\n}\n\nva contador = 0\nenquanto (contador < 3) {\n    contador = contador + 1\n    mostrar(contador)\n}`,
  },
  {
    id: "funcoes",
    title: "Funções",
    text: "JLScript suporta função declarada com func, forma curta e função anônima usada como valor ou callback.",
    code: `func soma(a, b) {\n    retorne a + b\n}\n\nmultiplicar(a, b) {\n    retorne a * b\n}\n\nva dobro = func(n) {\n    retorne n * 2\n}\n\nmostrar(soma(5, 7))`,
  },
  {
    id: "listas-objetos",
    title: "Listas e objetos",
    text: "Listas agrupam valores e objetos armazenam propriedades. A indexação atual das listas é baseada em 1.",
    code: `va nomes = ["Ana", "Bia"]\nnomes.adicionar("Carlos")\nmostrar(nomes[1])\n\nva usuario = {\n    nome: "Lucas",\n    linguagem: "JLScript"\n}\n\nmostrar(usuario.nome)`,
  },
  {
    id: "erros",
    title: "Tratamento de erros",
    text: "A sintaxe possui try/catch/finally e seus equivalentes tente/capture/finalmente.",
    code: `tente {\n    mostrar("Executando")\n} capture (erro) {\n    mostrar(erro)\n} finalmente {\n    mostrar("Fim")\n}`,
  },
  {
    id: "imports",
    title: "Imports e aliases",
    text: "Bibliotecas oficiais usam #. A sintaxe antiga importa/importe/usar/apelido não faz parte do parser atual. Para alias, use como.",
    code: `import #json\nimport [#api, #database, #file]\nimport #api como web`,
  },
  {
    id: "api-http",
    title: "API HTTP",
    text: "O módulo #api possui servidor HTTP, rotas, objetos de request/response e recursos de cliente. Este exemplo usa a interface atual documentada.",
    code: `import #api\n\nva app = api.server({\n    host: "127.0.0.1",\n    port: 3000\n})\n\napp.get("/", func(req, res) {\n    res.json({\n        linguagem: "JLScript",\n        versao: "3.2.0"\n    })\n})\n\napp.listen()`,
  },
  {
    id: "cli",
    title: "CLI e build",
    text: "A CLI não serve apenas para executar arquivos. Ela cobre criação de projeto, build nativo, bytecode, testes, qualidade, diagnóstico, atualização e ferramentas de desenvolvimento.",
    code: `jls run app.jls\njls build app.jls\njls compile app.jls\njls verify-bytecode build/app.jlb\njls test\njls lint\njls fmt\njls fix\njls doctor\njls repl`,
  },
  {
    id: "codigo-fonte",
    title: "Código-fonte e documentação",
    text: "A partir da direção atual do projeto, o código-fonte da JLScript é fechado. A documentação oficial permanece pública e é o canal correto para consultar sintaxe, bibliotecas, comandos e história.",
  },
];

const projects = [
  {
    title: "Saudação",
    code: `va nome = "Programador"\n\nfunc saudacao(nome) {\n    mostrar("Olá, " + nome)\n}\n\nsaudacao(nome)`,
  },
  {
    title: "Lista de tarefas",
    code: `va tarefas = []\n\nfunc adicionar(tarefa) {\n    tarefas.adicionar(tarefa)\n}\n\nadicionar("Estudar JLScript")\nadicionar("Criar projeto")\n\npara (va i = 1; i <= tarefas.tamanho(); i = i + 1) {\n    mostrar(tarefas[i])\n}`,
  },
  {
    title: "API local",
    code: `import #api\n\nva app = api.server({host: "127.0.0.1", port: 3000})\n\napp.get("/status", func(req, res) {\n    res.json({status: "online"})\n})\n\napp.listen()`,
  },
];

function slug(title) {
  return title.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function CodeBlock({ code, output }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText(code || "");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {code && (
        <div className="doc-code-wrap">
          <button type="button" className="copy-button" onClick={copy}>{copied ? "✓ Copiado" : "Copiar código"}</button>
          <pre className="doc-code"><code>{code}</code></pre>
        </div>
      )}
      {output && <p className="doc-output">Saída: <code>{output}</code></p>}
    </>
  );
}

export default function Docs() {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLocaleLowerCase("pt-BR");
  const filteredGuides = useMemo(() => guides.filter((item) => !normalized || `${item.title} ${item.text || ""} ${item.code || ""}`.toLocaleLowerCase("pt-BR").includes(normalized)), [normalized]);
  const filteredProjects = useMemo(() => projects.filter((item) => !normalized || `${item.title} ${item.code || ""}`.toLocaleLowerCase("pt-BR").includes(normalized)), [normalized]);

  return (
    <>
      <PageHeading eyebrow="DOCUMENTAÇÃO · 3.2.0" title="Aprenda JLScript." text="Sintaxe, runtime, bibliotecas e ferramentas com exemplos alinhados ao estado atual da linguagem." />
      <div className="docs-search">
        <label htmlFor="docs-search">Pesquisar documentação, comandos e exemplos</label>
        <input id="docs-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: variáveis, para, import, API, bytecode" />
        {normalized && <span>{filteredGuides.length + filteredProjects.length} resultado(s)</span>}
      </div>
      <div className="docs-layout">
        <aside className="docs-sidebar">
          <b>CONTEÚDO</b>
          {filteredGuides.map(({ id, title }) => <a href={`#${id}`} key={id}>{title}</a>)}
          <b>PROJETOS</b>
          {filteredProjects.map(({ title }) => <a href={`#${slug(title)}`} key={title}>{title}</a>)}
          <b>DOCUMENTAÇÃO COMPLETA</b>
          <a href={DOCS_URL} target="_blank" rel="noreferrer">Abrir repositório público ↗</a>
        </aside>
        <article className="docs-content">
          {!filteredGuides.length && !filteredProjects.length && <p className="empty-state">Nenhum resultado encontrado.</p>}
          {filteredGuides.map(({ id, title, text, code, output }) => (
            <section id={id} key={id}><h2>{title}</h2>{text && <p>{text}</p>}<CodeBlock code={code} output={output} /></section>
          ))}
          {!!filteredProjects.length && (
            <section>
              <h2>Projetos completos</h2>
              <p>Exemplos curtos para juntar os fundamentos sem inventar sintaxe que o parser não conhece.</p>
              {filteredProjects.map(({ title, code }) => (
                <div className="doc-project" id={slug(title)} key={title}><h3>{title}</h3><CodeBlock code={code} /></div>
              ))}
            </section>
          )}
        </article>
      </div>
    </>
  );
}
