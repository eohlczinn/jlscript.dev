import { useState } from "react";

const links = [["Home", "#/"], ["Sobre", "#/sobre"], ["Documentação", "#/docs"], ["Terminal", "#/terminal"], ["Download", "#/download"], ["Playground", "#/playground"], ["Biblioteca", "#/biblioteca"], ["Roadmap", "#/roadmap"], ["Atualizações", "#/atualizacoes"], ["Suporte", "#/suporte"]];

export default function Navbar({ route, theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return <>
    <nav className="navbar" aria-label="Navegação principal">
      <a className="brand" href="#/" aria-label="Página inicial da JLScript" onClick={() => setOpen(false)}>
        <img src="/jlscript-brand-navbar.png" alt="JLScript" />
      </a>
      <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-principal" onClick={() => setOpen(!open)}><i /><i /><i /></button>
      <div id="menu-principal" className={`nav-links ${open ? "mobile-open" : ""}`}>
        {links.map(([label, href]) => <a className={route === href.slice(1) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-download" href="#/download" onClick={() => setOpen(false)}>Baixar JLScript ↓</a>
      </div>
      <div className="nav-actions">
        <button className="navbar-jlai" type="button" onClick={() => setSupportOpen(true)}>Suporte JLAI</button>
        <button className="theme-toggle" onClick={onThemeChange} aria-label="Alternar tema">{theme === "dark" ? "☀" : "☾"}</button>
        <a className="github-link" href="https://github.com/eohlczinn/JLScript" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </nav>
    {route !== "/jlai" && <div className="jlai-widget">
      {supportOpen && <section className="jlai-popover" aria-label="Chat rápido da JLAI">
        <header><img src="/jlai-support.png" alt="" /><div><b>JLAI</b><small>Especialista em JLScript</small></div><button type="button" onClick={() => setSupportOpen(false)} aria-label="Fechar suporte">×</button></header>
        <div className="jlai-popover-body"><p>Olá! Sou a JLAI.</p><p>Posso ajudar com:</p><ul><li>JLScript e sintaxe</li><li>Código, APIs e bibliotecas</li><li>Erros e documentação</li></ul><p>Como posso ajudar?</p></div>
        <a className="jlai-popover-input" href="#/jlai">Escreva sua dúvida aqui… <span>→</span></a>
      </section>}
      <button className="jlai-fab" type="button" onClick={() => setSupportOpen(!supportOpen)} aria-label="Abrir suporte JLAI" aria-expanded={supportOpen}><img src="/jlai-support.png" alt="" /><b>JLAI</b><small>Suporte inteligente</small></button>
    </div>}
  </>;
}
