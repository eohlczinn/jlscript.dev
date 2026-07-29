import { useState } from "react";
const codigo = `mostrar("Olá Mundo")

va nome = "Lucas"

func saudacao(nome) {
    mostrar("Olá " + nome)
}

saudacao(nome)`;
export default function CodePreview() { const [copiado, setCopiado] = useState(false); const copiar = async () => { await navigator.clipboard?.writeText(codigo); setCopiado(true); setTimeout(() => setCopiado(false), 1800); }; return <section className="section code-section"><div><p className="eyebrow">SIMPLES POR DESIGN</p><h2>Escreva menos.<br /><span>Faça mais.</span></h2><p>Uma sintaxe próxima da sua forma de pensar. Menos cerimônia, mais espaço para criar.</p><button className="copy-button" onClick={copiar}>{copiado ? "✓ Código copiado" : "⧉ Copiar código"}</button></div><div className="code-window"><div><span>exemplo.jls</span><small>● Pronto</small></div><pre>{codigo}</pre></div></section>; }
