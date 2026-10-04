import { useMemo, useState } from "react";

const exemplos = {
  basico: {
    label: "Sintaxe",
    title: "Código direto e legível",
    description: "Variáveis, função, condição e retorno usando construções reais da linguagem.",
    raw: `va nome = "Lucas"\nlet idade = 19\n\nfunc apresentar(nome, idade) {\n    se (idade >= 18) {\n        mostrar("Olá, " + nome)\n        retorne true\n    }\n\n    retorne false\n}\n\napresentar(nome, idade)`,
    code: (
      <>
        <span className="tok-keyword">va</span> nome <span className="tok-op">=</span> <span className="tok-string">"Lucas"</span>{"\n"}
        <span className="tok-keyword">let</span> idade <span className="tok-op">=</span> <span className="tok-number">19</span>{"\n\n"}
        <span className="tok-keyword">func</span> <span className="tok-function">apresentar</span>(nome, idade) {"{"}{"\n    "}
        <span className="tok-keyword">se</span> (idade <span className="tok-op">&gt;=</span> <span className="tok-number">18</span>) {"{"}{"\n        "}
        <span className="tok-function">mostrar</span>(<span className="tok-string">"Olá, "</span> <span className="tok-op">+</span> nome){"\n        "}
        <span className="tok-keyword">retorne</span> <span className="tok-number">true</span>{"\n    "}{"}"}{"\n\n    "}
        <span className="tok-keyword">retorne</span> <span className="tok-number">false</span>{"\n"}{"}"}{"\n\n"}
        <span className="tok-function">apresentar</span>(nome, idade)
      </>
    ),
  },
  api: {
    label: "API",
    title: "Servidor HTTP embutido",
    description: "A biblioteca #api cria um servidor real com rotas e respostas JSON.",
    raw: `import #api\n\nva app = criarApi(3000)\n\napp.get("/status", func(req, res) {\n    res.json({\n        linguagem: "JLScript",\n        versao: "3.2.0",\n        status: "online"\n    })\n})\n\napp.iniciar()`,
    code: (
      <>
        <span className="tok-keyword">import</span> <span className="tok-lib">#api</span>{"\n\n"}
        <span className="tok-keyword">va</span> app <span className="tok-op">=</span> <span className="tok-function">criarApi</span>(<span className="tok-number">3000</span>){"\n\n"}
        app.<span className="tok-function">get</span>(<span className="tok-string">"/status"</span>, <span className="tok-keyword">func</span>(req, res) {"{"}{"\n    "}
        res.<span className="tok-function">json</span>({"{"}{"\n        "}linguagem: <span className="tok-string">"JLScript"</span>,{"\n        "}
        versao: <span className="tok-string">"3.2.0"</span>,{"\n        "}status: <span className="tok-string">"online"</span>{"\n    "}{"}"}){"\n"}
        {"}"}){"\n\n"}app.<span className="tok-function">iniciar</span>()
      </>
    ),
  },
  modulos: {
    label: "Módulos",
    title: "Importações explícitas",
    description: "Bibliotecas oficiais usam # e várias podem ser carregadas de uma vez.",
    raw: `import [#json, #math, #file]\n\nva dados = {\n    linguagem: "JLScript",\n    versao: "3.2.0"\n}\n\nmostrar(dados.linguagem)`,
    code: (
      <>
        <span className="tok-keyword">import</span> [<span className="tok-lib">#json</span>, <span className="tok-lib">#math</span>, <span className="tok-lib">#file</span>]{"\n\n"}
        <span className="tok-keyword">va</span> dados <span className="tok-op">=</span> {"{"}{"\n    "}
        linguagem: <span className="tok-string">"JLScript"</span>,{"\n    "}
        versao: <span className="tok-string">"3.2.0"</span>{"\n"}{"}"}{"\n\n"}
        <span className="tok-function">mostrar</span>(dados.linguagem)
      </>
    ),
  },
};

export default function CodePreview() {
  const [ativo, setAtivo] = useState("basico");
  const [copiado, setCopiado] = useState(false);
  const exemplo = useMemo(() => exemplos[ativo], [ativo]);

  const copiar = async () => {
    await navigator.clipboard?.writeText(exemplo.raw);
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 1800);
  };

  return (
    <section className="section code-section" aria-labelledby="code-preview-title">
      <div>
        <header>
          <p className="eyebrow">SINTAXE REAL</p>
          <h2 id="code-preview-title">
            {exemplo.title}.<br />
            <span>Sem esconder a lógica.</span>
          </h2>
        </header>

        <p>{exemplo.description}</p>
        <p>
          A JLScript mantém conceitos tradicionais de programação, mas tenta reduzir ruído de sintaxe,
          oferecer aliases em português e concentrar ferramentas importantes no próprio ecossistema.
        </p>

        <div className="buttons" role="tablist" aria-label="Exemplos de JLScript">
          {Object.entries(exemplos).map(([id, item]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={ativo === id}
              className={ativo === id ? "btn" : "btn-outline"}
              onClick={() => setAtivo(id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="copy-button" type="button" onClick={copiar}>
          {copiado ? "✓ Código copiado" : "⧉ Copiar exemplo"}
        </button>
      </div>

      <figure className="code-window dracula-window">
        <figcaption className="code-window-head">
          <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
          <b>{ativo === "api" ? "api.jls" : "exemplo.jls"}</b>
          <small>● JLScript 3.2.0</small>
        </figcaption>
        <pre><code>{exemplo.code}</code></pre>
      </figure>
    </section>
  );
}
