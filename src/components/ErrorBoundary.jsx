import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    if (import.meta.env?.DEV) {
      console.error("[JLScript portal] Erro de renderização", error, info);
    }
  }

  render() {
    if (this.state.error) {
      return (
        <main className="render-error" aria-labelledby="render-error-title">
          <section className="app-error" role="alert">
            <p className="eyebrow">ERRO DE INTERFACE</p>
            <h1 id="render-error-title">Não foi possível renderizar esta parte do portal.</h1>
            <p>
              Recarregue a página. Se o problema continuar, consulte a área de suporte e informe qual rota estava aberta.
            </p>
            {import.meta.env?.DEV && <code>{this.state.error?.message || "Erro desconhecido"}</code>}
            <div className="buttons">
              <button className="btn" type="button" onClick={() => window.location.reload()}>Recarregar página</button>
              <a className="btn-outline" href="#/suporte">Abrir suporte</a>
            </div>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
