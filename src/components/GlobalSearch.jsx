import { useEffect, useMemo, useState } from "react";
import { documentationGuides, documentationProjects } from "../data/documentation";

const pages = [
  ["Home", "Portal oficial da JLScript", "#/"], ["Documentação", "Guias, sintaxe e exemplos", "#/docs"],
  ["Terminal", "Comandos da CLI JLScripter", "#/terminal"], ["Downloads", "Instaladores e Releases", "#/download"],
  ["Playground", "Editor para experimentar JLScript", "#/playground"], ["Bibliotecas", "Bibliotecas e APIs oficiais", "#/biblioteca"],
  ["JLAI", "Assistente oficial da JLScript", "#/jlai"], ["Roadmap", "Evolução do projeto", "#/roadmap"],
];

export default function GlobalSearch({ open, onClose }) {
  const [query, setQuery] = useState("");
  useEffect(() => { if (!open) setQuery(""); }, [open]);
  useEffect(() => {
    const listener = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", listener); return () => window.removeEventListener("keydown", listener);
  }, [onClose]);
  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("pt-BR");
    if (!needle) return pages.slice(0, 6).map(([title, description, href]) => ({ title, description, href, category: "Página" }));
    const docs = documentationGuides.map((item) => ({ title: item.title, description: item.text || "Documentação oficial", href: `#/docs#${item.id}`, category: "Documentação" }));
    const examples = documentationProjects.map((item) => ({ title: item.title, description: "Exemplo oficial", href: `#/docs#${item.title.toLowerCase().replaceAll(" ", "-")}`, category: "Exemplo" }));
    return [...pages.map(([title, description, href]) => ({ title, description, href, category: "Página" })), ...docs, ...examples]
      .filter((item) => `${item.title} ${item.description}`.toLocaleLowerCase("pt-BR").includes(needle)).slice(0, 10);
  }, [query]);
  if (!open) return null;
  return <div className="global-search-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="global-search" role="dialog" aria-modal="true" aria-label="Pesquisa global" onMouseDown={(event) => event.stopPropagation()}>
      <header><label htmlFor="global-search-input">Pesquisar no portal</label><button type="button" onClick={onClose} aria-label="Fechar pesquisa">×</button></header>
      <input autoFocus id="global-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Documentação, comandos, exemplos e páginas" />
      <div>{results.length ? results.map((item) => <a href={item.href} key={`${item.category}-${item.title}`} onClick={onClose}><span>{item.category}</span><b>{item.title}</b><small>{item.description}</small></a>) : <p>Nenhum resultado encontrado.</p>}</div>
    </section>
  </div>;
}
