import { useEffect, useState } from "react";
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
import Docs from "./pages/Docs";
import DownloadPage from "./pages/DownloadPage";
import About from "./pages/About";
import Playground from "./pages/Playground";
import Library from "./pages/Library";
import Roadmap from "./pages/Roadmap";
import Support from "./pages/Support";
import Terminal from "./pages/Terminal";
import Updates from "./pages/Updates";
import "./styles/terminal.css";
import "./styles/responsive.css";
import "./styles/responsive-fixes.css";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [route, setRoute] = useState(() => location.hash.slice(1) || "/");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    const atualizar = () => setRoute(location.hash.slice(1) || "/");
    addEventListener("hashchange", atualizar);
    return () => removeEventListener("hashchange", atualizar);
  }, []);

  const pages = {
    "/": <Home />, "/docs": <Docs />, "/download": <DownloadPage />, "/sobre": <About />,
    "/playground": <Playground />, "/biblioteca": <Library />, "/roadmap": <Roadmap />, "/suporte": <Support />,
    "/terminal": <Terminal />, "/atualizacoes": <Updates />
  };

  return <>
    <Navbar route={route} theme={theme} onThemeChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
    <main>{pages[route] || <Home />}</main>
    <Footer />
  </>;
}
