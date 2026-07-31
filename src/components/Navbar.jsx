const links = [["Home", "#/"], ["Sobre", "#/sobre"], ["Documentação", "#/docs"], ["Download", "#/download"], ["Playground", "#/playground"], ["Biblioteca", "#/biblioteca"], ["Roadmap", "#/roadmap"], ["Suporte", "#/suporte"]];

export default function Navbar({ route, theme, onThemeChange }) {
  return <nav className="navbar" aria-label="Navegação principal">
    <a className="brand" href="#/" aria-label="Página inicial da JLScript"><img src="/favicon-jlscript.jpg" alt="Logo JLScript" /><span>JLS</span>cript</a>
    <div className="nav-links">{links.map(([label, href]) => <a className={route === href.slice(1) ? "active" : ""} href={href} key={href}>{label}</a>)}</div>
    <div className="nav-actions"><button className="theme-toggle" onClick={onThemeChange} aria-label="Alternar tema">{theme === "dark" ? "☀" : "☾"}</button><a className="github-link" href="https://github.com/eohlczinn/JLScript" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </nav>;
}
