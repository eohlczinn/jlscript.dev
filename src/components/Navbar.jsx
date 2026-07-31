import { useState } from "react";

const links = [["Home", "#/"], ["Sobre", "#/sobre"], ["Documentação", "#/docs"], ["Terminal", "#/terminal"], ["Download", "#/download"], ["Playground", "#/playground"], ["Biblioteca", "#/biblioteca"], ["Roadmap", "#/roadmap"], ["Atualizações", "#/atualizacoes"], ["Suporte", "#/suporte"]];

export default function Navbar({ route, theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  return <nav className="navbar" aria-label="Navegação principal">
    <a className="brand" href="#/" aria-label="Página inicial da JLScript" onClick={() => setOpen(false)}><img src="/favicon-jlscript.jpg" alt="Logo JLScript" /><span>JLS</span>cript</a>
    <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(!open)}><i /><i /><i /></button>
    <div id="menu-principal" className={`nav-links ${open ? "mobile-open" : ""}`}>{links.map(([label, href]) => <a className={route === href.slice(1) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobile-download" href="#/download" onClick={() => setOpen(false)}>Baixar JLScript ↓</a></div>
    <div className="nav-actions"><a className="navbar-download" href="#/download">Baixar JLScript</a><button className="theme-toggle" onClick={onThemeChange} aria-label="Alternar tema">{theme === "dark" ? "☀" : "☾"}</button><a className="github-link" href="https://github.com/eohlczinn/JLScript" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </nav>;
}
