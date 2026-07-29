import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) return <main className="render-error"><h1>JLScript</h1><p>O site encontrou um erro ao carregar.</p><code>{this.state.error.message}</code></main>;
    return this.props.children;
  }
}
