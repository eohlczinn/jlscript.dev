import { useMemo, useRef, useState } from "react";

const initialCode = `mostrar("Olá Mundo")

va nome = "Lucas"

mostrar(nome)`;

const examples = {
  "Olá Mundo": 'mostrar("Olá Mundo")',
  "Variáveis": 'va nome = "Lucas"\nva idade = 19\nmostrar(nome)\nmostrar(idade)',
  "Condições": 'va idade = 19\nse(idade >= 18){\n  mostrar("Maior de idade")\n}',
  Loops: 'repita(va i = 1; i <= 5; i++){\n  mostrar(i)\n}',
  Funções: 'func saudacao(nome){\n  mostrar("Olá " + nome)\n}\nsaudacao("Lucas")',
  Calculadora: 'va a = 10\nva b = 20\nmostrar(a + b)',
  Tabuada: 'va numero = 7\nrepita(va i = 1; i <= 10; i++){\n  mostrar(numero * i)\n}',
  Login: 'va usuario = "admin"\nva senha = "123"\nse(usuario == "admin" && senha == "123"){\n  mostrar("Bem-vindo")\n}',
  Agenda: 'va contatos = ["Lucas", "Maria"]\nmostrar(contatos)',
  "Sistema Bancário": 'va saldo = 1000\nva deposito = 500\nsaldo = saldo + deposito\nmostrar(saldo)'
};

function interpret(code) {
  const blocked = /\b(importe|import|arquivo|sistema|terminal|http|api|socket|executar)\b/i;
  if (blocked.test(code)) return { type: "warning", lines: ["Este recurso não está disponível no Playground por segurança."] };
  const values = {}; const output = [];
  const literal = (raw, line) => {
    const text = raw.trim();
    if (/^".*"$/.test(text) || /^'.*'$/.test(text)) return text.slice(1, -1);
    if (text === "true") return true; if (text === "false") return false;
    const expression = text.replace(/\b[a-zA-Z_]\w*\b/g, key => key in values ? JSON.stringify(values[key]) : key);
    if (/^[\d\s+\-*/%().,\[\]"']+$/.test(expression)) { try { return Function(`"use strict"; return (${expression})`)(); } catch { throw new Error(`Expressão inválida na linha ${line}`); } }
    if (text in values) return values[text];
    throw new Error(`Variável "${text}" não encontrada.`);
  };
  try {
    code.split(/\r?\n/).forEach((line, index) => {
      const clean = line.trim(); if (!clean || clean.startsWith("//") || clean === "{" || clean === "}") return;
      const variable = clean.match(/^(?:va|ins)\s+(\w+)\s*=\s*(.+)$/);
      if (variable) { values[variable[1]] = literal(variable[2], index + 1); return; }
      const assign = clean.match(/^(\w+)\s*=\s*(.+)$/);
      if (assign) { if (!(assign[1] in values)) throw new Error(`Variável "${assign[1]}" não encontrada.`); values[assign[1]] = literal(assign[2], index + 1); return; }
      const show = clean.match(/^mostrar\((.+)\)$/);
      if (show) { output.push(String(literal(show[1], index + 1))); return; }
      if (/^(func|se|senao|repita|enquanto|retorne|\w+\()/.test(clean)) return;
      throw new Error(`Comando não reconhecido na linha ${index + 1}.`);
    });
    return { type: "success", lines: output.length ? output : ["Programa executado com sucesso."] };
  } catch (error) { return { type: "error", lines: [error.message] }; }
}

export default function Playground() {
  const [code, setCode] = useState(initialCode); const [consoleState, setConsoleState] = useState({ type: "success", lines: ["Olá Mundo", "Lucas"] }); const [time, setTime] = useState("0 ms"); const fileInput = useRef();
  const lineNumbers = useMemo(() => code.split("\n").map((_, i) => i + 1).join("\n"), [code]);
  const run = () => { const start = performance.now(); setConsoleState(interpret(code)); setTime(`${Math.max(1, Math.round(performance.now() - start))} ms`); };
  const copy = async () => navigator.clipboard?.writeText(code);
  const download = () => { const url = URL.createObjectURL(new Blob([code], { type: "text/plain" })); const a = document.createElement("a"); a.href = url; a.download = "arquivo.jls"; a.click(); URL.revokeObjectURL(url); };
  const open = event => { const file = event.target.files?.[0]; if (file && file.name.endsWith(".jls")) { const reader = new FileReader(); reader.onload = () => setCode(String(reader.result)); reader.readAsText(file); } };
  const format = () => setCode(code.replace(/\{\s*/g, "{\n  ").replace(/\s*\}/g, "\n}").replace(/\n\s*\n\s*\n/g, "\n\n"));
  const share = async () => { await navigator.clipboard?.writeText(window.location.href); setConsoleState({ type: "success", lines: ["Link copiado. Em breve ele também guardará seu código."] }); };
  return <section className="playground-page"><header className="playground-heading"><p>PLAYGROUND OFICIAL</p><h1>Playground</h1><span>Escreva, execute e experimente códigos em JLScript diretamente no navegador.</span><button className="btn" onClick={() => document.querySelector(".playground-editor")?.scrollIntoView({ behavior: "smooth" })}>Começar a programar →</button></header>
    <div className="playground-editor"><div className="ide-toolbar"><b>arquivo.jls</b><div><button onClick={run}>▶ Executar</button><button onClick={() => setCode("")}>🗑 Limpar</button><button onClick={copy}>📋 Copiar</button><button onClick={download}>💾 Baixar</button><button onClick={() => fileInput.current?.click()}>📂 Abrir</button><button onClick={format}>✨ Formatar</button><input ref={fileInput} type="file" accept=".jls" onChange={open} hidden /></div></div><div className="ide-grid"><div className="editor-pane"><div className="editor-label">EXPLORADOR <span>▣ arquivo.jls</span></div><div className="code-editor"><pre aria-hidden="true">{lineNumbers}</pre><textarea value={code} onChange={event => setCode(event.target.value)} spellCheck="false" aria-label="Editor JLScript" /></div></div><div className="console-pane"><div className="console-head"><b>Saída</b><button onClick={() => setConsoleState({ type: "success", lines: [] })}>Limpar console</button></div><div className={`console-output ${consoleState.type}`}>{consoleState.lines.map((line, i) => <p key={`${line}-${i}`}>{consoleState.type === "error" && "✕ "}{consoleState.type === "warning" && "⚠ "}{line}</p>)}</div></div></div><footer className="ide-status"><span>JLScript v1.5.0</span><span>Tempo: {time}</span><span>{code.split("\n").length} linhas</span><span>Memória: segura</span></footer></div>
    <section className="playground-examples"><header><p>EXEMPLOS PRONTOS</p><h2>Comece por um exemplo.</h2></header><div>{Object.entries(examples).map(([name, value]) => <article key={name}><span>JLS</span><h3>{name}</h3><button onClick={() => { setCode(value); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Abrir exemplo →</button></article>)}</div><button className="btn-outline" onClick={share}>Compartilhar código</button></section>
  </section>;
}
