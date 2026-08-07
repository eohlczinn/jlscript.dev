import { lazy, Suspense, useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import "./styles/pages.css";
import "./styles/download.css";
import "./styles/download-callout.css";
import "./styles/playground.css";
import "./styles/about.css";
import "./styles/support.css";
import "./styles/library.css";
import "./styles/roadmap.css";
import "./styles/hero-art.css";
import "./styles/page-motion.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/terminal.css";
import "./styles/responsive.css";
import "./styles/responsive-fixes.css";
import "./styles/termux.css";
import "./styles/jlai.css";

const Docs = lazy(() => import("./pages/Docs"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const About = lazy(() => import("./pages/About"));
const Playground = lazy(() => import("./pages/Playground"));
const Library = lazy(() => import("./pages/Library"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const Support = lazy(() => import("./pages/Support"));
const Terminal = lazy(() => import("./pages/Terminal"));
const Updates = lazy(() => import("./pages/Updates"));
const Jlai = lazy(() => import("./pages/Jlai"));

function NotFound() {
  return <section className="page-heading app-error"><p>ERRO 404</p><h1>Página não encontrada.</h1><span>O endereço informado não existe no portal oficial da JLScript.</span><a className="btn" href="#/">Voltar ao início</a></section>;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("jls-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  const [route, setRoute] = useState(() => location.hash.slice(1) || "/");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("jls-theme", theme);
  }, [theme]);
  useEffect(() => {
    const atualizar = () => setRoute(location.hash.slice(1) || "/");
    addEventListener("hashchange", atualizar);
    return () => removeEventListener("hashchange", atualizar);
  }, []);

  const pages = {
    "/": <Home />, "/docs": <Docs />, "/download": <DownloadPage />, "/sobre": <About />,
    "/playground": <Playground />, "/biblioteca": <Library />, "/roadmap": <Roadmap />, "/suporte": <Support />,
    "/terminal": <Terminal />, "/atualizacoes": <Updates />, "/jlai": <Jlai />
  };

  return <>
    <Navbar route={route} theme={theme} onThemeChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
    <main><Suspense fallback={<p className="page-loading" role="status">Carregando página…</p>}>{pages[route] || <NotFound />}</Suspense></main>
    <Footer />
  </>;
}
