import{t as e}from"./index-DWAPa3Zj.js";import{t}from"./Ecosystem-D_tLFwDr.js";var n=e(),r=({children:e})=>(0,n.jsx)(`pre`,{className:`doc-code`,children:(0,n.jsx)(`code`,{children:e})}),i=[`#api`,`#math`,`#json`,`#watch`,`#file`,`#database`,`#crypto`,`#process`,`#env`,`#net`,`#thread`,`#test`,`#log`,`#compress`,`#csv`,`#xml`,`#cli`,`#email`,`#image`,`#audio`],a=[`#system`,`#whatsapp`,`#connector`,`#mobile`,`#style`,`#ui`,`#compiler / #compilador`];function o(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{eyebrow:`BIBLIOTECAS OFICIAIS · 3.2.0`,title:`Recursos separados do núcleo.`,text:`O JLScript mantém a linguagem central enxuta e move funcionalidades especializadas para módulos oficiais importados com #.`}),(0,n.jsxs)(`section`,{className:`library-page`,children:[(0,n.jsxs)(`article`,{className:`library-intro`,children:[(0,n.jsx)(`h2`,{children:`Importação atual`}),(0,n.jsxs)(`p`,{children:[`A sintaxe oficial usa `,(0,n.jsx)(`code`,{children:`import`}),`. Formas antigas como `,(0,n.jsx)(`code`,{children:`usar(#math)`}),`, `,(0,n.jsx)(`code`,{children:`importe`}),`, `,(0,n.jsx)(`code`,{children:`importa`}),` e `,(0,n.jsx)(`code`,{children:`apelido`}),` não pertencem ao parser atual.`]}),(0,n.jsx)(r,{children:`// Uma biblioteca
import #json

// Várias bibliotecas
import [#api, #database, #file]

// Alias
import #api como web`})]}),(0,n.jsxs)(`article`,{className:`library-intro api-intro`,children:[(0,n.jsx)(`h2`,{children:`Servidor HTTP com #api`}),(0,n.jsx)(`p`,{children:`O módulo HTTP atual possui servidor, rotas, request/response, JSON, middlewares e recursos de cliente.`}),(0,n.jsx)(r,{children:`import #api

va app = api.server({
    host: "127.0.0.1",
    port: 3000
})

app.get("/status", func(req, res) {
    res.json({
        linguagem: "JLScript",
        status: "online"
    })
})

app.listen()`})]}),(0,n.jsxs)(`section`,{className:`library-compare`,children:[(0,n.jsx)(`h2`,{children:`Módulos disponíveis`}),(0,n.jsxs)(`div`,{className:`compare-table`,children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`b`,{children:`Prontos para uso no estado analisado`}),i.map(e=>(0,n.jsxs)(`p`,{children:[`✓ `,e]},e))]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`b`,{children:`Em evolução / dependentes de ambiente`}),a.map(e=>(0,n.jsxs)(`p`,{children:[`◌ `,e]},e))]})]})]}),(0,n.jsxs)(`section`,{className:`library-philosophy`,children:[(0,n.jsx)(`p`,{children:`FILOSOFIA DOS MÓDULOS`}),(0,n.jsx)(`h2`,{children:`Importe somente o que seu programa precisa.`}),(0,n.jsx)(`span`,{children:`Rede, banco de dados, arquivos, criptografia, imagens, áudio, processos, interfaces e dispositivos não precisam virar palavras reservadas da linguagem. Cada módulo assume sua própria responsabilidade.`}),(0,n.jsx)(`small`,{children:`Alguns módulos dependem de credenciais, drivers, sistema operacional ou hardware real. “Existe no runtime” não significa “funciona em qualquer máquina sem configuração”. A humanidade ainda não derrotou drivers.`})]})]})]})}export{o as default};