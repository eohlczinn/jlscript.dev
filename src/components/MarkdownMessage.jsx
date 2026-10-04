import { useState } from "react";

function Inline({ text }) {
  const parts = String(text).split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return <span key={index}>{part}</span>;
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
      <header>
        <span>{language || "code"}</span>

        <button type="button" onClick={copy}>
          {copied ? "Copiado ✓" : "Copiar"}
        </button>
      </header>

      <pre>
        <code>{code}</code>
      </pre>
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

    const flushList = () => {
      if (!list.length) {
        return;
      }

      nodes.push(
        <ul key={`${keyPrefix}-list-${nodes.length}`}>
          {list.map((item, index) => (
            <li key={index}>
              <Inline text={item} />
            </li>
          ))}
        </ul>,
      );

      list = [];
    };

    lines.forEach((raw, index) => {
      const line = raw.trimEnd();

      if (!line.trim()) {
        flushList();
        return;
      }

      if (/^[-*] /.test(line)) {
        list.push(line.replace(/^[-*] /, ""));

        return;
      }

      flushList();

      if (/^### /.test(line)) {
        nodes.push(
          <h3 key={`${keyPrefix}-${index}`}>
            <Inline text={line.slice(4)} />
          </h3>,
        );
      } else if (/^## /.test(line)) {
        nodes.push(
          <h2 key={`${keyPrefix}-${index}`}>
            <Inline text={line.slice(3)} />
          </h2>,
        );
      } else if (/^# /.test(line)) {
        nodes.push(
          <h2 key={`${keyPrefix}-${index}`}>
            <Inline text={line.slice(2)} />
          </h2>,
        );
      } else if (/^> /.test(line)) {
        nodes.push(
          <blockquote key={`${keyPrefix}-${index}`}>
            <Inline text={line.slice(2)} />
          </blockquote>,
        );
      } else {
        nodes.push(
          <p key={`${keyPrefix}-${index}`}>
            <Inline text={line} />
          </p>,
        );
      }
    });

    flushList();
  }

  while ((match = fence.exec(text))) {
    pushText(text.slice(last, match.index), `text-${last}`);

    nodes.push(
      <CodeBlock
        key={`code-${match.index}`}
        language={match[1].trim()}
        code={match[2].replace(/\n$/, "")}
      />,
    );

    last = fence.lastIndex;
  }

  pushText(text.slice(last), `tail-${last}`);

  return <div className="jlai-markdown">{nodes}</div>;
}
