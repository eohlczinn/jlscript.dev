import { useState } from "react";

function Inline({ text }) {
  const parts = String(text).split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    return <span key={i}>{part}</span>;
  });
}

function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }
  return (
    <div className="jlai-code-block">
      <header><span>{language || "code"}</span><button type="button" onClick={copy}>{copied ? "Copiado ✓" : "Copiar"}</button></header>
      <pre><code>{code}</code></pre>
    </div>
  );
}

export default function MarkdownMessage({ text = "" }) {
  const fence = /```([^\n]*)\n([\s\S]*?)(?:```|$)/g;
  const nodes = [];
  let last = 0;
  let match;

  function pushText(chunk, keyPrefix) {
    const lines = chunk.split("\n");
    let list = [];
    const flush = () => {
      if (list.length) {
        nodes.push(<ul key={`${keyPrefix}-ul-${nodes.length}`}>{list.map((x, i) => <li key={i}><Inline text={x} /></li>)}</ul>);
        list = [];
      }
    };
    lines.forEach((raw, i) => {
      const line = raw.trimEnd();
      if (!line.trim()) { flush(); return; }
      if (/^[-*] /.test(line)) { list.push(line.replace(/^[-*] /, "")); return; }
      flush();
      if (/^### /.test(line)) nodes.push(<h3 key={`${keyPrefix}-${i}`}><Inline text={line.slice(4)} /></h3>);
      else if (/^## /.test(line)) nodes.push(<h2 key={`${keyPrefix}-${i}`}><Inline text={line.slice(3)} /></h2>);
      else if (/^# /.test(line)) nodes.push(<h2 key={`${keyPrefix}-${i}`}><Inline text={line.slice(2)} /></h2>);
      else if (/^> /.test(line)) nodes.push(<blockquote key={`${keyPrefix}-${i}`}><Inline text={line.slice(2)} /></blockquote>);
      else nodes.push(<p key={`${keyPrefix}-${i}`}><Inline text={line} /></p>);
    });
    flush();
  }

  while ((match = fence.exec(text))) {
    pushText(text.slice(last, match.index), `t${last}`);
    nodes.push(<CodeBlock key={`c${match.index}`} language={match[1].trim()} code={match[2].replace(/\n$/, "")} />);
    last = fence.lastIndex;
  }
  pushText(text.slice(last), `tail${last}`);
  return <div className="jlai-markdown">{nodes}</div>;
}
