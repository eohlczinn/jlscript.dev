import { useMemo, useRef, useState } from "react";

const initialCode = `mostrar("Olá Mundo")\n\nva nome = "Lucas"\nva versao = 3.2\n\nmostrar(nome)\nmostrar(versao)`;

const examples = {
  "Olá Mundo": 'mostrar("Olá Mundo")',
  Variáveis: 'va nome = "Lucas"\nlet idade = 19\nins ativo = true\nmostrar(nome)\nmostrar(idade)\nmostrar(ativo)',
  Calculadora: 'va a = 10\nva b = 20\nmostrar(a + b)\nmostrar(a * b)',
  Lista: 'va nomes = ["Ana", "Bia", "Carlos"]\nmostrar(nomes)',
  Condição: 'va idade = 19\nse (idade >= 18) {\n  mostrar("Maior de idade")\n}',
  Loop: 'para (va i = 1; i <= 5; i = i + 1) {\n  mostrar(i)\n}',
  Função: 'func saudacao(nome) {\n  mostrar("Olá " + nome)\n}\nsaudacao("Lucas")',
  Import: 'import #json\n\nmostrar("Módulos oficiais usam #")',
};

function interpret(code) {
  const blocked = /\b(import|arquivo|sistema|system|terminal|http|api|socket|executar|process)\b/i;
  if (blocked.test(code)) {
    return { type: "warning", lines: ["Imports, rede, sistema e processos são bloqueados neste sandbox do navegador. Use a CLI local para o runtime completo."] };
  }

  if (/\b(se|if|para|for|enquanto|while|func|tente|try|escolha|switch)\b/.test(code)) {
    return { type: "warning", lines: ["A sintaxe foi carregada, mas este Playground demonstra apenas declarações, expressões e mostrar(). Estruturas completas devem ser executadas com jls run."] };
  }

  const values = {};
  const output = [];

  const literal = (raw, line) => {
    const text = raw.trim();
    if (/^".*"$/.test(text) || /^'.*'$/.test(text)) return text.slice(1, -1);
    if (text === "true") return true;
    if (text === "false") return false;
    if (text === "null") return null;
    if (/^\[.*\]$/.test(text)) {
      try { return JSON.parse(text.replace(/'/g, '"')); } catch { throw new Error(`Lista inválida na linha ${line}`); }
    }
    if (text in values) return values[text];
    const expression = text.replace(/\b[a-zA-Z_]\w*\b/g, (key) => key in values ? JSON.stringify(values[key]) : key);
    if (/^[\d\s+\-*/%().,[\]"']+$/.test(expression)) {
      try { return Function(`"use strict"; return (${expression})`)(); }
      catch { throw new Error(`Expressão inválida na linha ${line}`); }
    }
    throw new Error(`Valor ou variável "${text}" não reconhecido.`);
  };

  try {
    code.split(/\r?\n/).forEach((line, index) => {
      const clean = line.trim();
      if (!clean || clean.startsWith("//")) return;
      const variable = clean.match(/^(?:va|let|ins)\s+(\w+)\s*=\s*(.+)$/);
      if (variable) { values[variable[1]] = literal(variable[2], index + 1); return; }
      const assign = clean.match(/^(\w+)\s*=\s*(.+)$/);
      if (assign) {
        if (!(assign[1] in values)) throw new Error(`Variável "${assign[1]}" não encontrada.`);
        values[assign[1]] = literal(assign[2], index + 1); return;
      }
      const show = clean.match(/^mostrar\((.+)\)$/);
      if (show) { output.push(String(literal(show[1], index + 1))); return; }
      throw new Error(`Comando não suportado pelo sandbox na linha ${index + 1}.`);
    });
    return { type: "success", lines: output.length ? output : ["Programa executado no sandbox."] };
  } catch (error) {
    return { type: "error", lines: [error.message] };
  }
}

export default function Playground() {
  const [code, setCode] = useState(initialCode);
  const [consoleState, setConsoleState] = useState({ type: "success", lines: ["Olá Mundo", "Lucas", "3.2"] });
  const [time, setTime] = useState("0 ms");
  const fileInput = useRef();
  const lineNumbers = useMemo(() => code.split("\n").map((_, i) => i + 1).join("\n"), [code]);

  const run = () => {
    const start = performance.now();
    setConsoleState(interpret(code));
    setTime(`${Math.max(1, Math.round(performance.now() - start))} ms`);
  };
  const copy = async () => navigator.clipboard?.writeText(code);
  const download = () => {
    const url = URL.createObjectURL(new Blob([code], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url; a.download = "arquivo.jls"; a.click(); URL.revokeObjectURL(url);
  };
  const open = (event) => {
    const file = event.target.files?.[0];
    if (file && file.name.endsWith(".jls")) {
      const reader = new FileReader(); reader.onload = () => setCode(String(reader.result)); reader.readAsText(file);
    }
  };
  const format = () => setCode(code.replace(/\{\s*/g, "{\n  ").replace(/\s*\}/g, "\n}").replace(/\n\s*\n\s*\n/g, "\n\n"));
  const share = async () => {
    await navigator.clipboard?.writeText(window.location.href);
    setConsoleState({ type: "success", lines: ["Link do Playground copiado."] });
  };

  return (
    <section className="playground-page">
      <header className="playground-heading">
        <p>PLAYGROUND · SUBCONJUNTO SEGURO</p>
        <h1>Playground</h1>
        <span>Teste declarações, expressões e mostrar() no navegador. Para executar a linguagem completa, use <code>jls run</code> com a versão 3.2.0 instalada.</span>
        <button className="btn" onClick={() => document.querySelector(".playground-editor")?.scrollIntoView({ behavior: "smooth" })}>Começar a programar →</button>
      </header>

      <div className="playground-editor">
        <div className="ide-toolbar">
          <b>arquivo.jls</b>
          <div>
            <button onClick={run}>▶ Executar</button><button onClick={() => setCode("")}>🗑 Limpar</button><button onClick={copy}>📋 Copiar</button><button onClick={download}>💾 Baixar</button><button onClick={() => fileInput.current?.click()}>📂 Abrir</button><button onClick={format}>✨ Formatar</button>
            <input ref={fileInput} type="file" accept=".jls" onChange={open} hidden />
          </div>
        </div>
        <div className="ide-grid">
          <div className="editor-pane">
            <div className="editor-label">EXPLORADOR <span>▣ arquivo.jls</span></div>
            <div className="code-editor"><pre aria-hidden="true">{lineNumbers}</pre><textarea value={code} onChange={(event) => setCode(event.target.value)} spellCheck="false" aria-label="Editor JLScript" /></div>
          </div>
          <div className="console-pane">
            <div className="console-head"><b>Saída</b><button onClick={() => setConsoleState({ type: "success", lines: [] })}>Limpar console</button></div>
            <div className={`console-output ${consoleState.type}`}>
              {consoleState.lines.map((line, i) => <p key={`${line}-${i}`}>{consoleState.type === "error" && "✕ "}{consoleState.type === "warning" && "⚠ "}{line}</p>)}
            </div>
          </div>
        </div>
        <footer className="ide-status"><span>JLScript 3.2.0</span><span>Tempo: {time}</span><span>{code.split("\n").length} linhas</span><span>Sandbox do navegador</span></footer>
      </div>

      <section className="playground-examples">
        <header><p>EXEMPLOS</p><h2>Sintaxe atual para explorar.</h2></header>
        <div>
          {Object.entries(examples).map(([name, value]) => (
            <article key={name}><span>JLS</span><h3>{name}</h3><button onClick={() => { setCode(value); document.querySelector(".playground-editor")?.scrollIntoView({ behavior: "smooth" }); }}>Abrir exemplo →</button></article>
          ))}
        </div>
        <button className="btn-outline" onClick={share}>Compartilhar Playground</button>
      </section>
    </section>
  );
}
