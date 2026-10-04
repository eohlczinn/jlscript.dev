import { useEffect, useMemo, useRef, useState } from "react";
import {
  documentationGuides,
  documentationProjects,
} from "../data/documentation";

const pages = [
  ["Home", "Visão geral da JLScript 3.2.0", "#/", "Página"],
  ["Documentação", "Sintaxe, conceitos, primeiros passos e exemplos", "#/docs", "Página"],
  ["Terminal", "Comandos da CLI jls e fluxo de desenvolvimento", "#/terminal", "Ferramenta"],
  ["Downloads", "Binários, instalação, hashes e verificação", "#/download", "Página"],
  ["Playground", "Editor no navegador para experimentar sintaxe", "#/playground", "Ferramenta"],
  ["Bibliotecas", "Módulos oficiais com prefixo #", "#/biblioteca", "Referência"],
  ["JLAI", "Assistência integrada ao ecossistema JLScript", "#/jlai", "Ferramenta"],
  ["Roadmap", "Evolução e próximos passos do projeto", "#/roadmap", "Projeto"],
  ["Atualizações", "Versões e mudanças recentes", "#/atualizacoes", "Projeto"],
  ["Sobre", "História, origem, proposta e arquitetura", "#/sobre", "Projeto"],
  ["Suporte", "Ajuda, documentação e caminhos de diagnóstico", "#/suporte", "Ajuda"],
];

const quickTerms = [
  ["va / let / ins", "Declarações de variáveis", "#/docs", "Sintaxe"],
  ["se / senao", "Condições em português", "#/docs", "Sintaxe"],
  ["func", "Funções, parâmetros e retorno", "#/docs", "Sintaxe"],
  ["import #api", "Servidor HTTP e recursos de API", "#/biblioteca", "Biblioteca"],
  [".jlb", "Bytecode da JLScript", "#/terminal", "Compilação"],
  ["jls doctor", "Diagnóstico do ambiente e toolchains", "#/terminal", "CLI"],
  ["jls build", "Build para executável nativo", "#/terminal", "CLI"],
  ["jls compile", "Geração de bytecode", "#/terminal", "CLI"],
  ["#compiler", "Language Development Kit", "#/biblioteca", "Biblioteca"],
];

export default function GlobalSearch({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => inputRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const listener = (event) => {
      if (open && event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [open, onClose]);

  const results = useMemo(() => {
    const docs = documentationGuides.map((item) => ({
      title: item.title,
      description: item.text || "Documentação da linguagem",
      href: `#/docs#${item.id}`,
      category: "Documentação",
    }));

    const examples = documentationProjects.map((item) => ({
      title: item.title,
      description: "Exemplo ou projeto guiado",
      href: `#/docs#${item.title.toLowerCase().replaceAll(" ", "-")}`,
      category: "Exemplo",
    }));

    const staticItems = [
      ...pages.map(([title, description, href, category]) => ({ title, description, href, category })),
      ...quickTerms.map(([title, description, href, category]) => ({ title, description, href, category })),
    ];

    const all = [...staticItems, ...docs, ...examples];
    const needle = query.trim().toLocaleLowerCase("pt-BR");

    if (!needle) return all.slice(0, 9);

    return all
      .filter((item) =>
        `${item.title} ${item.description} ${item.category}`
          .toLocaleLowerCase("pt-BR")
          .includes(needle),
      )
      .slice(0, 14);
  }, [query]);

  if (!open) return null;

  return (
    <div className="global-search-backdrop" onMouseDown={onClose}>
      <section
        className="global-search"
        role="dialog"
        aria-modal="true"
        aria-labelledby="global-search-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <b id="global-search-title">Pesquisar no portal</b>
            <small>Documentação, sintaxe, CLI, bibliotecas e páginas</small>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar pesquisa">×</button>
        </header>

        <input
          ref={inputRef}
          id="global-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex.: jls build, #api, funções, bytecode..."
          autoComplete="off"
          aria-label="Pesquisar conteúdo da JLScript"
        />

        <div role="list" aria-label={`${results.length} resultados`}>
          {results.length ? (
            results.map((item) => (
              <a
                role="listitem"
                href={item.href}
                key={`${item.category}-${item.title}`}
                onClick={onClose}
              >
                <span>{item.category}</span>
                <b>{item.title}</b>
                <small>{item.description}</small>
              </a>
            ))
          ) : (
            <p>Nenhum conteúdo encontrado para “{query}”. Tente outro termo.</p>
          )}
        </div>
      </section>
    </div>
  );
}
