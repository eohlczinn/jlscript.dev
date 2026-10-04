import{n as e,t}from"./index-DWAPa3Zj.js";var n=e(),r=t(),i=`mostrar("Olá Mundo")

va nome = "Lucas"
va versao = 3.2

mostrar(nome)
mostrar(versao)`,a={"Olá Mundo":`mostrar("Olá Mundo")`,Variáveis:`va nome = "Lucas"
let idade = 19
ins ativo = true
mostrar(nome)
mostrar(idade)
mostrar(ativo)`,Calculadora:`va a = 10
va b = 20
mostrar(a + b)
mostrar(a * b)`,Lista:`va nomes = ["Ana", "Bia", "Carlos"]
mostrar(nomes)`,Condição:`va idade = 19
se (idade >= 18) {
  mostrar("Maior de idade")
}`,Loop:`para (va i = 1; i <= 5; i = i + 1) {
  mostrar(i)
}`,Função:`func saudacao(nome) {
  mostrar("Olá " + nome)
}
saudacao("Lucas")`,Import:`import #json

mostrar("Módulos oficiais usam #")`};function o(e){if(/\b(import|arquivo|sistema|system|terminal|http|api|socket|executar|process)\b/i.test(e))return{type:`warning`,lines:[`Imports, rede, sistema e processos são bloqueados neste sandbox do navegador. Use a CLI local para o runtime completo.`]};if(/\b(se|if|para|for|enquanto|while|func|tente|try|escolha|switch)\b/.test(e))return{type:`warning`,lines:[`A sintaxe foi carregada, mas este Playground demonstra apenas declarações, expressões e mostrar(). Estruturas completas devem ser executadas com jls run.`]};let t={},n=[],r=(e,n)=>{let r=e.trim();if(/^".*"$/.test(r)||/^'.*'$/.test(r))return r.slice(1,-1);if(r===`true`)return!0;if(r===`false`)return!1;if(r===`null`)return null;if(/^\[.*\]$/.test(r))try{return JSON.parse(r.replace(/'/g,`"`))}catch{throw Error(`Lista inválida na linha ${n}`)}if(r in t)return t[r];let i=r.replace(/\b[a-zA-Z_]\w*\b/g,e=>e in t?JSON.stringify(t[e]):e);if(/^[\d\s+\-*/%().,[\]"']+$/.test(i))try{return Function(`"use strict"; return (${i})`)()}catch{throw Error(`Expressão inválida na linha ${n}`)}throw Error(`Valor ou variável "${r}" não reconhecido.`)};try{return e.split(/\r?\n/).forEach((e,i)=>{let a=e.trim();if(!a||a.startsWith(`//`))return;let o=a.match(/^(?:va|let|ins)\s+(\w+)\s*=\s*(.+)$/);if(o){t[o[1]]=r(o[2],i+1);return}let s=a.match(/^(\w+)\s*=\s*(.+)$/);if(s){if(!(s[1]in t))throw Error(`Variável "${s[1]}" não encontrada.`);t[s[1]]=r(s[2],i+1);return}let c=a.match(/^mostrar\((.+)\)$/);if(c){n.push(String(r(c[1],i+1)));return}throw Error(`Comando não suportado pelo sandbox na linha ${i+1}.`)}),{type:`success`,lines:n.length?n:[`Programa executado no sandbox.`]}}catch(e){return{type:`error`,lines:[e.message]}}}function s(){let[e,t]=(0,n.useState)(i),[s,c]=(0,n.useState)({type:`success`,lines:[`Olá Mundo`,`Lucas`,`3.2`]}),[l,u]=(0,n.useState)(`0 ms`),d=(0,n.useRef)(),f=(0,n.useMemo)(()=>e.split(`
`).map((e,t)=>t+1).join(`
`),[e]);return(0,r.jsxs)(`section`,{className:`playground-page`,children:[(0,r.jsxs)(`header`,{className:`playground-heading`,children:[(0,r.jsx)(`p`,{children:`PLAYGROUND · SUBCONJUNTO SEGURO`}),(0,r.jsx)(`h1`,{children:`Playground`}),(0,r.jsxs)(`span`,{children:[`Teste declarações, expressões e mostrar() no navegador. Para executar a linguagem completa, use `,(0,r.jsx)(`code`,{children:`jls run`}),` com a versão 3.2.0 instalada.`]}),(0,r.jsx)(`button`,{className:`btn`,onClick:()=>document.querySelector(`.playground-editor`)?.scrollIntoView({behavior:`smooth`}),children:`Começar a programar →`})]}),(0,r.jsxs)(`div`,{className:`playground-editor`,children:[(0,r.jsxs)(`div`,{className:`ide-toolbar`,children:[(0,r.jsx)(`b`,{children:`arquivo.jls`}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`button`,{onClick:()=>{let t=performance.now();c(o(e)),u(`${Math.max(1,Math.round(performance.now()-t))} ms`)},children:`▶ Executar`}),(0,r.jsx)(`button`,{onClick:()=>t(``),children:`🗑 Limpar`}),(0,r.jsx)(`button`,{onClick:async()=>navigator.clipboard?.writeText(e),children:`📋 Copiar`}),(0,r.jsx)(`button`,{onClick:()=>{let t=URL.createObjectURL(new Blob([e],{type:`text/plain`})),n=document.createElement(`a`);n.href=t,n.download=`arquivo.jls`,n.click(),URL.revokeObjectURL(t)},children:`💾 Baixar`}),(0,r.jsx)(`button`,{onClick:()=>d.current?.click(),children:`📂 Abrir`}),(0,r.jsx)(`button`,{onClick:()=>t(e.replace(/\{\s*/g,`{
  `).replace(/\s*\}/g,`
}`).replace(/\n\s*\n\s*\n/g,`

`)),children:`✨ Formatar`}),(0,r.jsx)(`input`,{ref:d,type:`file`,accept:`.jls`,onChange:e=>{let n=e.target.files?.[0];if(n&&n.name.endsWith(`.jls`)){let e=new FileReader;e.onload=()=>t(String(e.result)),e.readAsText(n)}},hidden:!0})]})]}),(0,r.jsxs)(`div`,{className:`ide-grid`,children:[(0,r.jsxs)(`div`,{className:`editor-pane`,children:[(0,r.jsxs)(`div`,{className:`editor-label`,children:[`EXPLORADOR `,(0,r.jsx)(`span`,{children:`▣ arquivo.jls`})]}),(0,r.jsxs)(`div`,{className:`code-editor`,children:[(0,r.jsx)(`pre`,{"aria-hidden":`true`,children:f}),(0,r.jsx)(`textarea`,{value:e,onChange:e=>t(e.target.value),spellCheck:`false`,"aria-label":`Editor JLScript`})]})]}),(0,r.jsxs)(`div`,{className:`console-pane`,children:[(0,r.jsxs)(`div`,{className:`console-head`,children:[(0,r.jsx)(`b`,{children:`Saída`}),(0,r.jsx)(`button`,{onClick:()=>c({type:`success`,lines:[]}),children:`Limpar console`})]}),(0,r.jsx)(`div`,{className:`console-output ${s.type}`,children:s.lines.map((e,t)=>(0,r.jsxs)(`p`,{children:[s.type===`error`&&`✕ `,s.type===`warning`&&`⚠ `,e]},`${e}-${t}`))})]})]}),(0,r.jsxs)(`footer`,{className:`ide-status`,children:[(0,r.jsx)(`span`,{children:`JLScript 3.2.0`}),(0,r.jsxs)(`span`,{children:[`Tempo: `,l]}),(0,r.jsxs)(`span`,{children:[e.split(`
`).length,` linhas`]}),(0,r.jsx)(`span`,{children:`Sandbox do navegador`})]})]}),(0,r.jsxs)(`section`,{className:`playground-examples`,children:[(0,r.jsxs)(`header`,{children:[(0,r.jsx)(`p`,{children:`EXEMPLOS`}),(0,r.jsx)(`h2`,{children:`Sintaxe atual para explorar.`})]}),(0,r.jsx)(`div`,{children:Object.entries(a).map(([e,n])=>(0,r.jsxs)(`article`,{children:[(0,r.jsx)(`span`,{children:`JLS`}),(0,r.jsx)(`h3`,{children:e}),(0,r.jsx)(`button`,{onClick:()=>{t(n),document.querySelector(`.playground-editor`)?.scrollIntoView({behavior:`smooth`})},children:`Abrir exemplo →`})]},e))}),(0,r.jsx)(`button`,{className:`btn-outline`,onClick:async()=>{await navigator.clipboard?.writeText(window.location.href),c({type:`success`,lines:[`Link do Playground copiado.`]})},children:`Compartilhar Playground`})]})]})}export{s as default};