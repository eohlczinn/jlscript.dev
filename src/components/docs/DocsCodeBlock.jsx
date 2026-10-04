import { useState } from "react";

const KEYWORDS = new Set([
  "va", "let", "ins", "func", "retorne", "if", "else", "se", "senao",
  "for", "para", "while", "enquanto", "switch", "escolha", "case", "caso",
  "default", "padrao", "break", "pare", "continue", "continuar", "try",
  "tente", "catch", "capture", "finally", "finalmente", "import", "como",
  "true", "false", "null", "int", "float", "str", "bool",
]);

const BUILTINS = new Set([
  "mostrar", "ler", "criarApi", "tamanho", "adicionar", "inserir", "removerEm",
  "limpar", "iniciar", "json", "get", "post", "put", "patch", "remover",
]);

const TOKEN_RE = /(\/\/.*$|"(?:\\.|[^"\\])*"|#[A-Za-z_À-ÿ][\wÀ-ÿ]*|[A-Za-z_À-ÿ][\wÀ-ÿ]*|\d+(?:\.\d+)?|==|!=|>=|<=|&&|\|\||\*\*|<<|>>|[+\-*/%=<>!&|^]+|[()[\]{}.,:;])/g;

function classify(token) {
  if (token.startsWith("//")) return "comment";
  if (token.startsWith('"')) return "string";
  if (token.startsWith("#")) return "module";
  if (/^\d/.test(token)) return "number";
  if (KEYWORDS.has(token)) return "keyword";
  if (BUILTINS.has(token)) return "builtin";
  if (/^(==|!=|>=|<=|&&|\|\||\*\*|<<|>>|[+\-*/%=<>!&|^]+)$/.test(token)) return "operator";
  if (/^[()[\]{}.,:;]$/.test(token)) return "punctuation";
  return "plain";
}

function HighlightedLine({ line, language }) {
  if (language !== "jls") {
    const match = line.match(/^(\s*)(jls)(\b.*)$/);
    if (!match) return line;
    return (
      <>
        {match[1]}
        <span className="learn-token-command">{match[2]}</span>
        <span className="learn-token-terminal">{match[3]}</span>
      </>
    );
  }

  const parts = [];
  let last = 0;
  let match;
  TOKEN_RE.lastIndex = 0;

  while ((match = TOKEN_RE.exec(line)) !== null) {
    if (match.index > last) parts.push(line.slice(last, match.index));
    const token = match[0];
    const type = classify(token);
    parts.push(
      <span key={`${match.index}-${token}`} className={`learn-token-${type}`}>
        {token}
      </span>,
    );
    last = match.index + token.length;
  }

  if (last < line.length) parts.push(line.slice(last));
  return parts;
}

export default function DocsCodeBlock({ title, language = "jls", filename, code, output }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard?.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  const lines = String(code || "").split("\n");

  return (
    <figure className="learn-code-card">
      <figcaption className="learn-code-head">
        <span className="learn-code-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="learn-code-meta">
          <strong>{title}</strong>
          <small>{filename || (language === "jls" ? "exemplo.jls" : "Terminal")}</small>
        </span>
        <button type="button" onClick={copyCode} className="learn-copy-btn" aria-label={`Copiar ${title}`}>
          {copied ? "✓ Copiado" : "Copiar"}
        </button>
      </figcaption>

      <pre className={`learn-code learn-code--${language}`}><code>
        {lines.map((line, index) => (
          <span className="learn-code-line" key={`${index}-${line}`}>
            <span className="learn-line-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span className="learn-line-content"><HighlightedLine line={line} language={language} /></span>
          </span>
        ))}
      </code></pre>

      {output && (
        <div className="learn-code-output">
          <span>SAÍDA</span>
          <pre>{output}</pre>
        </div>
      )}
    </figure>
  );
}
