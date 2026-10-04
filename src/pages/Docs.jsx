import { useEffect, useMemo, useState } from "react";
import DocsCodeBlock from "../components/docs/DocsCodeBlock";
import { docsCategories, docsLessons, docsMeta } from "../data/docsContent";
import "../styles/docs.css";

function normalize(value) {
  return String(value || "")
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function lessonSearchText(lesson) {
  return normalize([
    lesson.title,
    lesson.summary,
    lesson.level,
    ...(lesson.learn || []),
    ...(lesson.paragraphs || []),
    ...(lesson.facts || []).flat(),
    ...(lesson.examples || []).flatMap((item) => [item.title, item.code, item.output]),
    lesson.callout?.title,
    lesson.callout?.text,
    lesson.exercise?.title,
    lesson.exercise?.text,
  ].join(" "));
}

function scrollToLesson(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function LessonCallout({ item }) {
  if (!item) return null;
  return (
    <aside className={`learn-callout learn-callout--${item.type || "info"}`}>
      <span className="learn-callout-icon" aria-hidden="true">
        {item.type === "warning" ? "!" : item.type === "tip" ? "✓" : "i"}
      </span>
      <div>
        <strong>{item.title}</strong>
        <p>{item.text}</p>
      </div>
    </aside>
  );
}

function LearningGoals({ items }) {
  if (!items?.length) return null;
  return (
    <div className="learn-goals">
      <div className="learn-goals-title">Você vai aprender</div>
      <ul>
        {items.map((item) => (
          <li key={item}><span aria-hidden="true">✓</span>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Facts({ items }) {
  if (!items?.length) return null;
  return (
    <dl className="learn-facts">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Pipeline({ items }) {
  if (!items?.length) return null;
  return (
    <div className="learn-pipeline" aria-label="Fluxo de execução da JLScript">
      {items.map((item, index) => (
        <div className="learn-pipeline-step" key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}

function Exercise({ item }) {
  if (!item) return null;
  return (
    <details className="learn-exercise">
      <summary>
        <span>DESAFIO</span>
        <strong>{item.title}</strong>
        <i aria-hidden="true">+</i>
      </summary>
      <div>
        <p>{item.text}</p>
        <small>Faça primeiro sem copiar outro exemplo. Depois compare sua solução e simplifique o que estiver repetido.</small>
      </div>
    </details>
  );
}

function DocsSidebar({ query, onQueryChange, activeId, visibleLessons, onNavigate }) {
  const grouped = useMemo(() => {
    const map = new Map();
    for (const category of docsCategories) map.set(category.id, []);
    for (const lesson of visibleLessons) {
      if (!map.has(lesson.category)) map.set(lesson.category, []);
      map.get(lesson.category).push(lesson);
    }
    return map;
  }, [visibleLessons]);

  return (
    <aside className="learn-sidebar" aria-label="Navegação da documentação">
      <div className="learn-sidebar-top">
        <span>DOCUMENTAÇÃO</span>
        <strong>JLScript {docsMeta.version}</strong>
      </div>

      <label className="learn-sidebar-search">
        <span>Pesquisar</span>
        <div>
          <i aria-hidden="true">⌕</i>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="funções, API, build..."
            aria-label="Pesquisar na documentação"
          />
        </div>
      </label>

      <nav className="learn-sidebar-nav">
        {docsCategories.map((category) => {
          const lessons = grouped.get(category.id) || [];
          if (!lessons.length) return null;
          return (
            <section key={category.id}>
              <h2>{category.label}</h2>
              {lessons.map((lesson) => (
                <button
                  type="button"
                  key={lesson.id}
                  className={activeId === lesson.id ? "is-active" : ""}
                  onClick={() => onNavigate(lesson.id)}
                  aria-current={activeId === lesson.id ? "location" : undefined}
                >
                  <span>{String(lesson.order).padStart(2, "0")}</span>
                  <em>{lesson.title}</em>
                </button>
              ))}
            </section>
          );
        })}
      </nav>

      <a className="learn-sidebar-external" href={docsMeta.docsUrl} target="_blank" rel="noreferrer">
        <span>Documentação pública</span>
        <strong>GitHub ↗</strong>
      </a>
    </aside>
  );
}

export default function Docs() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(docsLessons[0]?.id || "");
  const search = normalize(query.trim());

  const visibleLessons = useMemo(() => {
    if (!search) return docsLessons;
    return docsLessons.filter((lesson) => lessonSearchText(lesson).includes(search));
  }, [search]);

  useEffect(() => {
    if (visibleLessons.length && !visibleLessons.some((lesson) => lesson.id === activeId)) {
      setActiveId(visibleLessons[0].id);
    }
  }, [visibleLessons, activeId]);

  useEffect(() => {
    if (!visibleLessons.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -62% 0px", threshold: [0.08, 0.2, 0.45] },
    );

    visibleLessons.forEach((lesson) => {
      const element = document.getElementById(lesson.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [visibleLessons]);

  function navigate(id) {
    setActiveId(id);
    scrollToLesson(id);
  }

  const firstVisible = visibleLessons[0];

  return (
    <main className="learn-docs-page">
      <header className="learn-docs-hero">
        <div className="learn-docs-kicker">
          <span>GUIA OFICIAL</span>
          <i aria-hidden="true" />
          <span>VERSÃO {docsMeta.version}</span>
        </div>

        <div className="learn-docs-hero-grid">
          <div>
            <h1>Aprenda JLScript de verdade.</h1>
            <p>
              Um guia progressivo para sair do primeiro <code>.jls</code> e chegar a funções,
              listas, APIs, CLI, build e bytecode entendendo o que cada recurso faz.
            </p>
            <div className="learn-docs-actions">
              <button type="button" className="learn-primary-btn" onClick={() => navigate("primeiro-programa")}>
                Começar pelo primeiro programa <span aria-hidden="true">→</span>
              </button>
              <a className="learn-secondary-btn" href={docsMeta.docsUrl} target="_blank" rel="noreferrer">
                Ver referência pública ↗
              </a>
            </div>
          </div>

          <div className="learn-docs-status" aria-label="Resumo da linguagem">
            <div><span>01</span><strong>Português + Inglês</strong><small>Sintaxe bilíngue no mesmo ecossistema.</small></div>
            <div><span>02</span><strong>Runtime + CLI</strong><small>Execução, REPL e ferramentas integradas.</small></div>
            <div><span>03</span><strong>Build + .jlb</strong><small>Fluxo nativo e bytecode próprio.</small></div>
            <div><span>04</span><strong>Bibliotecas oficiais</strong><small>HTTP, dados, sistema e outros módulos.</small></div>
          </div>
        </div>

        <div className="learn-path" aria-label="Trilha de aprendizado">
          <span>Fundamentos</span><i>→</i><span>Lógica</span><i>→</i><span>Estruturas</span><i>→</i><span>Ecossistema</span><i>→</i><span>Projetos</span>
        </div>
      </header>

      <div className="learn-docs-shell">
        <DocsSidebar
          query={query}
          onQueryChange={setQuery}
          activeId={activeId}
          visibleLessons={visibleLessons}
          onNavigate={navigate}
        />

        <article className="learn-docs-content">
          {search && (
            <div className="learn-search-summary" role="status">
              <span>Busca</span>
              <strong>{visibleLessons.length} capítulo(s) encontrado(s) para “{query.trim()}”</strong>
              <button type="button" onClick={() => setQuery("")}>Limpar</button>
            </div>
          )}

          {!visibleLessons.length && (
            <section className="learn-empty">
              <span>0 resultados</span>
              <h2>Nada encontrado.</h2>
              <p>Tente pesquisar por “variáveis”, “laços”, “API”, “build”, “funções” ou “import”.</p>
              <button type="button" className="learn-secondary-btn" onClick={() => setQuery("")}>Mostrar todos os capítulos</button>
            </section>
          )}

          {visibleLessons.map((lesson) => (
            <section className="learn-lesson" id={lesson.id} key={lesson.id} data-category={lesson.category}>
              <header className="learn-lesson-head">
                <div className="learn-lesson-number">{String(lesson.order).padStart(2, "0")}</div>
                <div>
                  <div className="learn-lesson-meta">
                    <span>{docsCategories.find((item) => item.id === lesson.category)?.label}</span>
                    <i aria-hidden="true" />
                    <span>{lesson.level}</span>
                    <i aria-hidden="true" />
                    <span>{lesson.duration}</span>
                  </div>
                  <h2>{lesson.title}</h2>
                  <p>{lesson.summary}</p>
                </div>
              </header>

              <LearningGoals items={lesson.learn} />

              <div className="learn-prose">
                {(lesson.paragraphs || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              <Facts items={lesson.facts} />
              <Pipeline items={lesson.pipeline} />

              {(lesson.examples || []).map((example) => (
                <DocsCodeBlock key={`${lesson.id}-${example.title}`} {...example} />
              ))}

              <LessonCallout item={lesson.callout} />
              <Exercise item={lesson.exercise} />
            </section>
          ))}

          {!!visibleLessons.length && (
            <footer className="learn-docs-footer">
              <div>
                <span>FIM DA TRILHA ATUAL</span>
                <h2>Agora transforme exemplo em projeto.</h2>
                <p>Documentação ensina o caminho. A parte que fixa o conhecimento continua sendo escrever, executar, provocar erro e corrigir.</p>
              </div>
              <div>
                <button type="button" className="learn-primary-btn" onClick={() => navigate(firstVisible?.id || "visao-geral")}>Voltar ao início da trilha ↑</button>
                <a className="learn-secondary-btn" href="#/playground">Abrir Playground</a>
              </div>
            </footer>
          )}
        </article>
      </div>
    </main>
  );
}
