import { useState } from "react";
import GlobalSearch from "./GlobalSearch";
import "./components-info.css";

const primaryLinks = [
  ["Início", "#/"],
  ["Documentação", "#/docs"],
  ["Playground", "#/playground"],
  ["Download", "#/download"],
];

const exploreLinks = [
  ["Terminal", "CLI, comandos e ferramentas", "#/terminal"],
  ["Bibliotecas", "Módulos oficiais da linguagem", "#/biblioteca"],
  ["Roadmap", "Evolução e próximos passos", "#/roadmap"],
  ["Atualizações", "Versões e mudanças", "#/atualizacoes"],
  ["Sobre", "História, proposta e arquitetura", "#/sobre"],
  ["Suporte", "Ajuda e diagnóstico", "#/suporte"],
];

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.82a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function IconChevron({ open }) {
  return (
    <svg className={`nav-chevron ${open ? "is-open" : ""}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export default function Navbar({ route, theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const exploreActive = exploreLinks.some(([, , href]) => route === href.slice(1));

  const closeMenu = () => {
    setOpen(false);
    setExploreOpen(false);
  };

  return (
    <>
      <nav className="navbar" aria-label="Navegação principal da JLScript">
        <a className="brand" href="#/" aria-label="JLScript, página inicial" onClick={closeMenu}>
          <img src="/favicon-jlscript.png" alt="" />
          <span>JLScript</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu principal" : "Abrir menu principal"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen(!open)}
        >
          <i /><i /><i />
        </button>

        <div id="menu-principal" className={`nav-links ${open ? "mobile-open" : ""}`}>
          {primaryLinks.map(([label, href]) => (
            <a
              className={route === href.slice(1) ? "active" : ""}
              href={href}
              key={href}
              aria-current={route === href.slice(1) ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <div className={`nav-explore ${exploreOpen ? "open" : ""}`}>
            <button
              type="button"
              className={`nav-explore-trigger ${exploreActive ? "active" : ""}`}
              aria-expanded={exploreOpen}
              aria-controls="menu-explorar"
              onClick={() => setExploreOpen(!exploreOpen)}
            >
              Explorar
              <IconChevron open={exploreOpen} />
            </button>

            {exploreOpen && (
              <div id="menu-explorar" className="nav-explore-menu" aria-label="Mais áreas do portal">
                {exploreLinks.map(([label, description, href]) => (
                  <a
                    className={route === href.slice(1) ? "active" : ""}
                    href={href}
                    key={href}
                    aria-current={route === href.slice(1) ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <span><strong>{label}</strong><small>{description}</small></span>
                    <b aria-hidden="true">→</b>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="nav-actions" aria-label="Ferramentas rápidas">
          <button
            className="nav-icon-btn"
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Pesquisar documentação, comandos e bibliotecas"
            title="Pesquisar"
          >
            <IconSearch />
          </button>

          <button
            className="navbar-jlai"
            type="button"
            onClick={() => setSupportOpen(true)}
            aria-label="Abrir JLAI"
          >
            <img src="/jlai-support.png" alt="" />
            <span>JLAI</span>
          </button>

          <a
            className="nav-icon-btn github-link"
            href="https://github.com/JLScripter/documentacao_JLScripter"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir documentação pública da JLScript no GitHub"
            title="Documentação pública"
          >
            <IconGithub />
          </a>

          <button
            className="nav-icon-btn"
            type="button"
            onClick={onThemeChange}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            title="Alternar tema"
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </nav>

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {route !== "/jlai" && (
        <aside className="jlai-widget" aria-label="Suporte JLAI">
          {supportOpen && (
            <section className="jlai-popover" aria-labelledby="jlai-quick-title">
              <header>
                <img src="/jlai-support.png" alt="" />
                <div>
                  <b id="jlai-quick-title">JLAI</b>
                  <small>Assistência para o ecossistema JLScript</small>
                </div>
                <button type="button" onClick={() => setSupportOpen(false)} aria-label="Fechar suporte">×</button>
              </header>

              <div className="jlai-popover-body">
                <p>Use a JLAI como apoio para navegar pela linguagem e suas ferramentas.</p>
                <ul>
                  <li>Sintaxe: variáveis, funções, condições, laços e objetos</li>
                  <li>Bibliotecas oficiais e importações com <code>#</code></li>
                  <li>CLI: run, build, compile, lint, doctor e outros comandos</li>
                  <li>Erros, diagnóstico e caminhos de documentação</li>
                </ul>
                <p>A documentação continua sendo a referência pública principal da linguagem.</p>
              </div>

              <a className="jlai-popover-input" href="#/jlai" onClick={() => setSupportOpen(false)}>
                Abrir conversa completa <span aria-hidden="true">→</span>
              </a>
            </section>
          )}

          <button
            className="jlai-fab"
            type="button"
            onClick={() => setSupportOpen(!supportOpen)}
            aria-label={supportOpen ? "Fechar suporte JLAI" : "Abrir suporte JLAI"}
            aria-expanded={supportOpen}
          >
            <img src="/jlai-support.png" alt="" />
            <b>JLAI</b>
            <small>Suporte inteligente</small>
          </button>
        </aside>
      )}
    </>
  );
}
