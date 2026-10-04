import{n as e,t}from"./index-DWAPa3Zj.js";var n=e(),r=t(),i=new Set(`va.let.ins.func.retorne.if.else.se.senao.for.para.while.enquanto.switch.escolha.case.caso.default.padrao.break.pare.continue.continuar.try.tente.catch.capture.finally.finalmente.import.como.true.false.null.int.float.str.bool`.split(`.`)),a=new Set([`mostrar`,`ler`,`criarApi`,`tamanho`,`adicionar`,`inserir`,`removerEm`,`limpar`,`iniciar`,`json`,`get`,`post`,`put`,`patch`,`remover`]),o=/(\/\/.*$|"(?:\\.|[^"\\])*"|#[A-Za-z_À-ÿ][\wÀ-ÿ]*|[A-Za-z_À-ÿ][\wÀ-ÿ]*|\d+(?:\.\d+)?|==|!=|>=|<=|&&|\|\||\*\*|<<|>>|[+\-*/%=<>!&|^]+|[()[\]{}.,:;])/g;function s(e){return e.startsWith(`//`)?`comment`:e.startsWith(`"`)?`string`:e.startsWith(`#`)?`module`:/^\d/.test(e)?`number`:i.has(e)?`keyword`:a.has(e)?`builtin`:/^(==|!=|>=|<=|&&|\|\||\*\*|<<|>>|[+\-*/%=<>!&|^]+)$/.test(e)?`operator`:/^[()[\]{}.,:;]$/.test(e)?`punctuation`:`plain`}function c({line:e,language:t}){if(t!==`jls`){let t=e.match(/^(\s*)(jls)(\b.*)$/);return t?(0,r.jsxs)(r.Fragment,{children:[t[1],(0,r.jsx)(`span`,{className:`learn-token-command`,children:t[2]}),(0,r.jsx)(`span`,{className:`learn-token-terminal`,children:t[3]})]}):e}let n=[],i=0,a;for(o.lastIndex=0;(a=o.exec(e))!==null;){a.index>i&&n.push(e.slice(i,a.index));let t=a[0],o=s(t);n.push((0,r.jsx)(`span`,{className:`learn-token-${o}`,children:t},`${a.index}-${t}`)),i=a.index+t.length}return i<e.length&&n.push(e.slice(i)),n}function l({title:e,language:t=`jls`,filename:i,code:a,output:o}){let[s,l]=(0,n.useState)(!1);async function u(){try{await navigator.clipboard?.writeText(a),l(!0),window.setTimeout(()=>l(!1),1400)}catch{l(!1)}}let d=String(a||``).split(`
`);return(0,r.jsxs)(`figure`,{className:`learn-code-card`,children:[(0,r.jsxs)(`figcaption`,{className:`learn-code-head`,children:[(0,r.jsxs)(`span`,{className:`learn-code-dots`,"aria-hidden":`true`,children:[(0,r.jsx)(`i`,{}),(0,r.jsx)(`i`,{}),(0,r.jsx)(`i`,{})]}),(0,r.jsxs)(`span`,{className:`learn-code-meta`,children:[(0,r.jsx)(`strong`,{children:e}),(0,r.jsx)(`small`,{children:i||(t===`jls`?`exemplo.jls`:`Terminal`)})]}),(0,r.jsx)(`button`,{type:`button`,onClick:u,className:`learn-copy-btn`,"aria-label":`Copiar ${e}`,children:s?`✓ Copiado`:`Copiar`})]}),(0,r.jsx)(`pre`,{className:`learn-code learn-code--${t}`,children:(0,r.jsx)(`code`,{children:d.map((e,n)=>(0,r.jsxs)(`span`,{className:`learn-code-line`,children:[(0,r.jsx)(`span`,{className:`learn-line-number`,"aria-hidden":`true`,children:String(n+1).padStart(2,`0`)}),(0,r.jsx)(`span`,{className:`learn-line-content`,children:(0,r.jsx)(c,{line:e,language:t})})]},`${n}-${e}`))})}),o&&(0,r.jsxs)(`div`,{className:`learn-code-output`,children:[(0,r.jsx)(`span`,{children:`SAÍDA`}),(0,r.jsx)(`pre`,{children:o})]})]})}var u={version:`3.2.0`,extension:`.jls`,bytecode:`.jlb`,docsUrl:`https://github.com/JLScripter/documentacao_JLScripter`},d=[{id:`comecando`,label:`Começando`},{id:`fundamentos`,label:`Fundamentos`},{id:`logica`,label:`Lógica`},{id:`estruturas`,label:`Estruturas`},{id:`ecossistema`,label:`Ecossistema`},{id:`projetos`,label:`Projetos guiados`}],f=[{id:`visao-geral`,category:`comecando`,order:1,title:`O que é JLScript?`,summary:`Entenda a proposta da linguagem, o que existe na versão 3.2.0 e como o ecossistema se organiza antes de escrever código.`,level:`Iniciante`,duration:`5 min`,learn:[`O papel da extensão .jls`,`Diferença entre interpretar, compilar e gerar bytecode`,`Por que português e inglês coexistem na sintaxe`,`Onde consultar a documentação oficial`],paragraphs:[`JLScript é uma linguagem de programação brasileira criada para oferecer uma escrita direta, permitir construções em português e inglês e reunir ferramentas de desenvolvimento em um mesmo ecossistema.`,`Na versão 3.2.0, o fluxo da linguagem não se resume a executar um arquivo. O projeto possui lexer, parser, AST, interpretador, runtime, CLI própria, build nativo, bytecode .jlb, bibliotecas oficiais e ferramentas de desenvolvimento.`,`O código-fonte da linguagem é fechado na direção atual do projeto. A documentação, exemplos de uso e referência pública continuam sendo o caminho oficial para aprender a sintaxe e os recursos disponíveis.`],facts:[[`Arquivo`,`.jls`],[`CLI`,`jls`],[`Bytecode`,`.jlb`],[`Versão do portal`,`3.2.0`],[`Idiomas`,`Português + Inglês`],[`Código-fonte`,`Fechado`]],callout:{type:`info`,title:`Como estudar esta documentação`,text:`Leia em ordem na primeira vez. Depois use a busca e a barra lateral como referência rápida. Os exemplos foram organizados para ensinar o conceito antes de mostrar uma versão maior do código.`}},{id:`instalacao-cli`,category:`comecando`,order:2,title:`Instalação e primeiros comandos`,summary:`Valide a instalação e conheça os comandos mínimos que você vai usar enquanto aprende.`,level:`Iniciante`,duration:`7 min`,learn:[`Como verificar se o comando jls está disponível`,`Como abrir a ajuda da CLI`,`Como executar um arquivo .jls`,`Como abrir o REPL/JLShell`],paragraphs:[`Depois de instalar o JLScript, o primeiro teste deve ser feito pelo terminal. Isso confirma que o executável está acessível e evita perder tempo tentando depurar um programa quando o problema está na instalação.`,`O comando jls funciona como a porta de entrada do ecossistema. Ele executa arquivos, abre o REPL e também oferece build, bytecode, testes, formatação, diagnóstico e outras ferramentas.`],examples:[{title:`Verificando a instalação`,language:`bash`,filename:`Terminal`,code:`jls --version
jls --help`},{title:`Executando um arquivo`,language:`bash`,filename:`Terminal`,code:`jls run app.jls`},{title:`Abrindo o REPL`,language:`bash`,filename:`Terminal`,code:`jls repl`}],callout:{type:`tip`,title:`Fluxo de estudo recomendado`,text:`Durante o aprendizado, use jls run arquivo.jls. Quando quiser testar uma expressão rapidamente, use o REPL. Deixe build e bytecode para depois que os fundamentos estiverem claros.`},exercise:{title:`Teste rápido`,text:`Abra o terminal, execute jls --version e jls --help. Depois crie uma pasta para seus exemplos de estudo.`}},{id:`primeiro-programa`,category:`comecando`,order:3,title:`Seu primeiro programa`,summary:`Crie um arquivo, declare um valor e mostre uma mensagem no terminal.`,level:`Iniciante`,duration:`8 min`,learn:[`Como criar um arquivo .jls`,`Como declarar uma variável com va`,`Como usar mostrar()`,`Como executar o programa`],paragraphs:[`Crie um arquivo chamado app.jls. O objetivo do primeiro programa não é impressionar ninguém, uma tragédia recorrente em tutoriais de programação. É confirmar o ciclo completo: escrever, salvar, executar e observar a saída.`,`A palavra va introduz uma variável no escopo atual. A função mostrar() envia um valor para o console. A concatenação com + permite juntar texto e valores em uma única mensagem.`],examples:[{title:`Olá, JLScript`,language:`jls`,filename:`app.jls`,code:`va nome = "JLScript"
mostrar("Olá, " + nome + "!")`,output:`Olá, JLScript!`},{title:`Executando`,language:`bash`,filename:`Terminal`,code:`jls run app.jls`}],callout:{type:`info`,title:`O que aconteceu?`,text:`O código foi lido, transformado em tokens, organizado pelo parser e executado pelo runtime. Você não precisa dominar essas etapas agora; basta saber que mostrar() recebe o valor final da expressão e o envia ao console.`},exercise:{title:`Agora faça sem copiar`,text:`Crie duas variáveis, nome e cidade. Mostre uma frase usando as duas. Depois troque os valores e execute novamente.`}},{id:`variaveis-tipos`,category:`fundamentos`,order:4,title:`Variáveis, valores e tipos`,summary:`Aprenda va, let e ins e veja como números, strings, booleanos, listas, objetos e null aparecem no runtime.`,level:`Fundamentos`,duration:`12 min`,learn:[`As três formas de declaração reconhecidas pela linguagem`,`Números inteiros e decimais`,`Strings, booleanos e null`,`Conversões com int(), float(), str() e bool()`],paragraphs:[`O lexer reconhece va, let e ins como formas de declaração. Na prática, as três introduzem um nome no escopo atual e associam esse nome ao resultado de uma expressão.`,`O runtime trabalha com diferentes categorias de valor, entre elas números, strings, booleanos, listas, objetos e null. Existem também valores internos usados por módulos e recursos específicos da linguagem.`,`Dados externos podem chegar como texto. Quando você pretende fazer cálculo ou comparação numérica, converta o valor antes de usar.`],examples:[{title:`Declarações básicas`,language:`jls`,filename:`valores.jls`,code:`va nome = "Lucas"
let idade = 19
ins ativo = true
va preco = 29.90
va vazio = null

mostrar(nome)
mostrar(idade)
mostrar(ativo)`},{title:`Conversões`,language:`jls`,filename:`conversoes.jls`,code:`va textoIdade = "19"
va idade = int(textoIdade)
va preco = float("29.90")
va numeroTexto = str(120)
va ligado = bool(true)

mostrar(idade)
mostrar(preco)
mostrar(numeroTexto)
mostrar(ligado)`}],callout:{type:`tip`,title:`Pense em referência, não em caixa mágica`,text:`Quando você escreve va nome = "Lucas", o nome passa a referenciar aquele valor no escopo atual. As próximas expressões podem usar nome sem repetir o texto original.`},exercise:{title:`Exercício`,text:`Crie nome, idade e nota. Converta idade e nota a partir de strings e mostre um pequeno resumo no console.`}},{id:`entrada-comentarios`,category:`fundamentos`,order:5,title:`Entrada, saída e comentários`,summary:`Use o terminal para receber dados e documente o código sem transformar cada linha em um romance.`,level:`Fundamentos`,duration:`9 min`,learn:[`Como usar ler()`,`Quando converter entradas`,`Comentários de linha com //`,`Comentários de bloco com /* */`],paragraphs:[`A função ler() recebe entrada do usuário pelo terminal. Como dados digitados normalmente chegam como texto, é comum combinar ler() com conversões.`,`Comentários são ignorados pelo lexer. Use-os para explicar decisões importantes, não para narrar linha por linha aquilo que o próprio código já deixa evidente.`],examples:[{title:`Lendo dados`,language:`jls`,filename:`entrada.jls`,code:`va nome = ler("Nome: ")
va idade = int(ler("Idade: "))

mostrar("Olá, " + nome)
mostrar("Idade: " + idade)`},{title:`Comentários`,language:`jls`,filename:`comentarios.jls`,code:`// Comentário de uma linha
va ativo = true

/*
   Comentário de bloco.
   Pode ocupar várias linhas.
*/
mostrar(ativo)`}],exercise:{title:`Exercício`,text:`Peça nome e idade. Mostre uma mensagem diferente depois de converter a idade para número.`}},{id:`operadores`,category:`fundamentos`,order:6,title:`Operadores e expressões`,summary:`Faça cálculos, compare valores e combine condições com operadores aritméticos, relacionais e lógicos.`,level:`Fundamentos`,duration:`12 min`,learn:[`Aritmética com +, -, *, /, % e **`,`Comparações com ==, !=, <, <=, > e >=`,`Lógica booleana com &&, || e !`,`Operadores bit a bit quando você realmente precisar deles`],paragraphs:[`Expressões são combinações de valores, variáveis, chamadas e operadores que produzem um resultado. Você usa expressões em cálculos, condições, argumentos de função e atribuições.`,`O operador + também pode participar da concatenação quando uma string está envolvida. Para cálculos, mantenha os operandos numéricos sempre que possível.`],examples:[{title:`Aritmética`,language:`jls`,filename:`operadores.jls`,code:`va a = 10
va b = 3

mostrar(a + b)
mostrar(a - b)
mostrar(a * b)
mostrar(a / b)
mostrar(a % b)
mostrar(a ** 2)`},{title:`Comparação e lógica`,language:`jls`,filename:`logica.jls`,code:`va idade = 19
va documento = true

va maior = idade >= 18
va podeEntrar = maior && documento

mostrar(maior)
mostrar(podeEntrar)
mostrar(idade != 20)`}],callout:{type:`warning`,title:`Bitwise existe, mas não precisa aparecer no seu primeiro dia`,text:`A linguagem reconhece &, |, ^, << e >>. Eles são úteis em máscaras, flags e tarefas de baixo nível. Aprenda o restante primeiro e volte quando houver um problema real que peça esse recurso.`}},{id:`condicoes`,category:`logica`,order:7,title:`Condições: se/senao e if/else`,summary:`Tome decisões no programa usando a forma em português ou a forma em inglês.`,level:`Lógica`,duration:`10 min`,learn:[`Como uma condição escolhe um bloco`,`Forma em português`,`Forma em inglês`,`Como combinar comparações e operadores lógicos`],paragraphs:[`Uma condição avalia uma expressão booleana. Quando o resultado é verdadeiro, o primeiro bloco é executado. Caso contrário, o bloco alternativo pode ser usado.`,`JLScript reconhece construções em português e inglês. Mantenha a mesma família dentro da estrutura: se combina com senao; if combina com else.`],examples:[{title:`Português`,language:`jls`,filename:`condicao.jls`,code:`va idade = 19

se (idade >= 18) {
    mostrar("Maior de idade")
} senao {
    mostrar("Menor de idade")
}`,output:`Maior de idade`},{title:`English`,language:`jls`,filename:`condition.jls`,code:`va active = true

if (active) {
    mostrar("Active")
} else {
    mostrar("Inactive")
}`,output:`Active`}],exercise:{title:`Exercício`,text:`Crie uma variável nota. Se a nota for maior ou igual a 7, mostre Aprovado. Caso contrário, mostre Reprovado.`}},{id:`lacos`,category:`logica`,order:8,title:`Laços: para/for e enquanto/while`,summary:`Repita tarefas sem copiar a mesma linha vinte vezes como um ritual de sofrimento administrativo.`,level:`Lógica`,duration:`14 min`,learn:[`Laço contado com para/for`,`Laço condicionado com enquanto/while`,`Interrupção com pare/break`,`Continuação com continuar/continue`],paragraphs:[`Use para quando você já conhece a estrutura de inicialização, condição e atualização. Use enquanto quando a repetição depende principalmente de uma condição que pode mudar ao longo da execução.`,`pare/break encerra o laço atual. continuar/continue pula o restante da iteração atual e segue para a próxima.`],examples:[{title:`Contagem com para`,language:`jls`,filename:`para.jls`,code:`para (va i = 1; i <= 5; i = i + 1) {
    mostrar(i)
}`,output:`1
2
3
4
5`},{title:`Enquanto`,language:`jls`,filename:`enquanto.jls`,code:`va contador = 0

enquanto (contador < 3) {
    contador = contador + 1
    mostrar(contador)
}`,output:`1
2
3`},{title:`Controle do laço`,language:`jls`,filename:`controle.jls`,code:`para (va i = 1; i <= 10; i = i + 1) {
    se (i == 3) {
        continuar
    }

    se (i == 7) {
        pare
    }

    mostrar(i)
}`}],callout:{type:`tip`,title:`Evite laços infinitos`,text:`No enquanto, alguma parte do bloco precisa aproximar a condição do fim. Se contador nunca mudar, contador < 3 continuará verdadeiro para sempre.`},exercise:{title:`Exercício`,text:`Mostre os números de 1 a 20, ignore o número 5 com continuar e encerre quando chegar a 12 usando pare.`}},{id:`switch`,category:`logica`,order:9,title:`Escolha/switch sem break obrigatório`,summary:`Organize múltiplos caminhos quando uma expressão pode assumir opções conhecidas.`,level:`Lógica`,duration:`9 min`,learn:[`escolha/caso/padrao`,`switch/case/default`,`Por que o bloco já encerra cada caso`],paragraphs:[`No JLScript, cada caso possui seu próprio bloco. Por isso, você não precisa adicionar um break apenas para marcar o fim do caso.`,`A versão em português usa escolha, caso e padrao. A versão em inglês usa switch, case e default.`],examples:[{title:`Forma em português`,language:`jls`,filename:`menu.jls`,code:`va opcao = 2

escolha (opcao) {
    caso 1 {
        mostrar("Iniciar")
    }

    caso 2 {
        mostrar("Configurações")
    }

    padrao {
        mostrar("Sair")
    }
}`,output:`Configurações`}],callout:{type:`info`,title:`Menos ruído de sintaxe`,text:`O fechamento } já delimita o caso. A ideia é não exigir outra instrução apenas para repetir uma informação que a estrutura do bloco já expressa.`}},{id:`funcoes`,category:`estruturas`,order:10,title:`Funções`,summary:`Separe responsabilidades, receba parâmetros, retorne valores e use funções como valores quando necessário.`,level:`Estruturas`,duration:`15 min`,learn:[`Declaração com func`,`Forma curta de função`,`retorne para devolver um valor`,`Funções anônimas e parâmetros padrão`],paragraphs:[`Funções agrupam uma responsabilidade em um nome reutilizável. Isso reduz repetição e ajuda a transformar um programa grande em partes menores.`,`O parser também reconhece uma forma curta quando a estrutura nome(parametros) { ... } deixa claro que o bloco é uma função.`,`Funções anônimas podem ser armazenadas em variáveis ou passadas como callbacks. Parâmetros também podem possuir valores padrão, desde que parâmetros obrigatórios não apareçam depois deles.`],examples:[{title:`Declaração tradicional`,language:`jls`,filename:`funcoes.jls`,code:`func soma(a, b) {
    retorne a + b
}

mostrar(soma(5, 7))`,output:`12`},{title:`Forma curta`,language:`jls`,filename:`curta.jls`,code:`multiplicar(a, b) {
    retorne a * b
}

mostrar(multiplicar(4, 3))`,output:`12`},{title:`Função anônima`,language:`jls`,filename:`callback.jls`,code:`va dobro = func(n) {
    retorne n * 2
}

mostrar(dobro(6))`,output:`12`},{title:`Parâmetro padrão`,language:`jls`,filename:`padrao.jls`,code:`func saudacao(nome, prefixo = "Olá") {
    mostrar(prefixo + ", " + nome)
}

saudacao("Lucas")`,output:`Olá, Lucas`}],exercise:{title:`Exercício`,text:`Crie uma função calcularMedia(a, b, c) que retorne a média dos três números. Mostre o resultado usando mostrar().`}},{id:`listas-objetos`,category:`estruturas`,order:11,title:`Listas e objetos`,summary:`Agrupe coleções de valores e organize dados com propriedades nomeadas.`,level:`Estruturas`,duration:`16 min`,learn:[`Criação de listas`,`Indexação baseada em 1`,`tamanho(), adicionar(), inserir(), removerEm() e limpar()`,`Objetos e acesso por propriedade`],paragraphs:[`Listas representam uma sequência de valores. No runtime atual do JLScript, a indexação de listas é baseada em 1. Isso significa que o primeiro elemento é acessado com lista[1].`,`O runtime fornece operações para consultar o tamanho e modificar a coleção. Objetos, por outro lado, armazenam pares de propriedade e valor e são acessados por membros.`],examples:[{title:`Lista`,language:`jls`,filename:`listas.jls`,code:`va nomes = ["Ana", "Bia"]

nomes.adicionar("Carlos")
mostrar(nomes.tamanho())
mostrar(nomes[1])

nomes.inserir(2, "Davi")
nomes.removerEm(1)
mostrar(nomes.tamanho())`},{title:`Objeto`,language:`jls`,filename:`objetos.jls`,code:`va usuario = {
    nome: "Lucas",
    linguagem: "JLScript",
    ativo: true
}

mostrar(usuario.nome)
mostrar(usuario.linguagem)`},{title:`Objeto nomeado`,language:`jls`,filename:`config.jls`,code:`configuracao {
    porta: 3000,
    modo: "dev"
}`}],callout:{type:`warning`,title:`Atenção à indexação`,text:`Se você veio de JavaScript, Python ou C++, o primeiro índice provavelmente é 0. No runtime atual do JLScript, listas começam em 1.`},exercise:{title:`Exercício`,text:`Crie uma lista com três tarefas, adicione uma quarta, mostre o primeiro item e depois mostre o tamanho da lista.`}},{id:`tratamento-erros`,category:`estruturas`,order:12,title:`Tratamento de erros`,summary:`Proteja operações que podem falhar e trate o problema sem derrubar todo o fluxo do programa.`,level:`Estruturas`,duration:`10 min`,learn:[`tente/capture/finalmente`,`try/catch/finally`,`Quando usar tratamento de erro`],paragraphs:[`Operações de arquivo, rede, conversão e integração externa podem falhar. O tratamento de erros permite capturar o problema e decidir como o programa deve reagir.`,`Uma estrutura precisa possuir capture/catch, finalmente/finally ou ambos. O bloco final é útil para tarefas de encerramento que precisam acontecer mesmo quando existe erro.`],examples:[{title:`Forma em português`,language:`jls`,filename:`erros.jls`,code:`tente {
    mostrar("Executando")
} capture (erro) {
    mostrar("Falhou: " + erro)
} finalmente {
    mostrar("Fim")
}`},{title:`English`,language:`jls`,filename:`errors.jls`,code:`try {
    mostrar("Running")
} catch (error) {
    mostrar(error)
} finally {
    mostrar("Done")
}`}],callout:{type:`tip`,title:`Não esconda o erro`,text:`Capturar tudo e continuar como se nada tivesse acontecido costuma criar bugs mais difíceis. Trate aquilo que você consegue resolver ou explique claramente o que falhou.`}},{id:`imports-modulos`,category:`ecossistema`,order:13,title:`Imports, módulos e aliases`,summary:`Use recursos oficiais sem jogar toda a complexidade para dentro do núcleo da linguagem.`,level:`Ecossistema`,duration:`12 min`,learn:[`Import de módulo oficial com #`,`Import de vários módulos`,`Alias com como`,`Sintaxes antigas que não devem ser usadas`],paragraphs:[`Bibliotecas oficiais usam o prefixo #. O import deixa explícito quais recursos especializados o programa utiliza e mantém o núcleo da linguagem separado de funcionalidades como HTTP, arquivos, JSON, banco de dados e outras integrações.`,`A sintaxe atual utiliza import e pode aplicar um alias com como. Formas antigas como importa, importe, usar e apelido foram removidas da sintaxe atual.`],examples:[{title:`Um módulo`,language:`jls`,filename:`modulos.jls`,code:`import #json`},{title:`Vários módulos`,language:`jls`,filename:`modulos.jls`,code:`import [#api, #json, #file]`},{title:`Alias`,language:`jls`,filename:`alias.jls`,code:`import #api como web`}],callout:{type:`warning`,title:`Sintaxe atual`,text:`Não use importa, importe, usar ou apelido em código novo. A forma suportada é import #modulo e import #modulo como alias.`}},{id:`api-http`,category:`ecossistema`,order:14,title:`Criando uma API HTTP`,summary:`Transforme um programa JLScript em um servidor HTTP com rotas e respostas JSON.`,level:`Ecossistema`,duration:`18 min`,learn:[`Como importar #api`,`Como criar um servidor`,`Como registrar uma rota GET`,`Como responder JSON e iniciar o servidor`],paragraphs:[`O módulo #api oferece um servidor HTTP embutido. O servidor pode ser criado com uma porta e recebe rotas que associam um caminho a uma função.`,`Callbacks de rota recebem request e response. A resposta pode enviar texto ou JSON, dependendo do que a rota precisa devolver.`,`O servidor também possui operações para outros métodos HTTP e aliases em português, além de recursos de cliente HTTP no próprio módulo.`],examples:[{title:`API local mínima`,language:`jls`,filename:`api.jls`,code:`import #api

va app = criarApi(3000)

app.get("/", func(req, res) {
    res.json({
        linguagem: "JLScript",
        status: "online"
    })
})

app.iniciar()`},{title:`Executando`,language:`bash`,filename:`Terminal`,code:`jls run api.jls`},{title:`Servidor com host e porta pelo módulo`,language:`jls`,filename:`api-config.jls`,code:`import #api

va app = api.servidor({
    host: "127.0.0.1",
    porta: 3000
})

app.get("/status", func(req, res) {
    res.json({ status: "online" })
})

app.iniciar()`}],callout:{type:`info`,title:`O que existe por trás`,text:`O servidor registra rotas, abre a porta configurada e aceita conexões em sua própria infraestrutura. Para aprender HTTP, comece com GET e JSON antes de partir para middleware, CORS e múltiplos métodos.`},exercise:{title:`Projeto rápido`,text:`Crie /status retornando nome, versão e status. Depois adicione uma segunda rota /sobre com uma mensagem diferente.`}},{id:`cli-build-bytecode`,category:`ecossistema`,order:15,title:`CLI, build e bytecode`,summary:`Conheça as ferramentas que levam o mesmo código do desenvolvimento até build nativo e representação .jlb.`,level:`Ecossistema`,duration:`16 min`,learn:[`Execução e REPL`,`Build nativo`,`Compilação para .jlb`,`Testes, lint, formatação e diagnóstico`],paragraphs:[`A CLI do JLScript foi criada para concentrar tarefas comuns. Você não precisa decorar todos os comandos no primeiro dia; use os grupos conforme o projeto crescer.`,`O fluxo build trabalha com a infraestrutura da linguagem e geração de C++ antes da compilação nativa. O comando compile produz a representação de bytecode .jlb implementada pelo projeto.`],examples:[{title:`Execução`,language:`bash`,filename:`Terminal`,code:`jls run app.jls
jls repl`},{title:`Build e bytecode`,language:`bash`,filename:`Terminal`,code:`jls build app.jls
jls compile app.jls
jls verify-bytecode build/app.jlb`},{title:`Qualidade e diagnóstico`,language:`bash`,filename:`Terminal`,code:`jls test
jls lint
jls fmt
jls fix
jls doctor`},{title:`Atualização e desenvolvimento`,language:`bash`,filename:`Terminal`,code:`jls update check
jls update
jls dev
jls dev status`}],callout:{type:`tip`,title:`Não confunda build, compile e execução`,text:`build está ligado ao fluxo de geração/compilação nativa. compile gera o bytecode .jlb em build/ por padrão. O runtime atual executa .jls; arquivos .jlb podem ser validados com verify-bytecode, mas não são executados por jls run.`}},{id:`arquitetura-execucao`,category:`ecossistema`,order:16,title:`Como o código passa pela linguagem`,summary:`Tenha uma visão mental do caminho entre arquivo .jls e execução sem precisar estudar o código-fonte interno.`,level:`Conceito`,duration:`8 min`,learn:[`O papel do lexer`,`O papel do parser e da AST`,`O papel do interpretador e runtime`,`Onde build e bytecode entram`],paragraphs:[`Quando você executa um arquivo, a linguagem precisa primeiro entender o texto. O lexer separa o código em tokens; o parser usa esses tokens para reconhecer estruturas; a AST representa o programa; o interpretador e o runtime executam o comportamento correspondente.`,`Os caminhos de build e bytecode reutilizam partes dessa infraestrutura, mas produzem saídas diferentes. Essa separação permite que a linguagem cresça sem colocar todas as responsabilidades em um único componente.`],pipeline:[`Código .jls`,`Lexer`,`Parser`,`AST`,`Interpretador / Runtime`,`Saída`],callout:{type:`info`,title:`Você não precisa saber isso para começar`,text:`Essa visão é útil para entender mensagens de erro e evolução da linguagem. Para programar, a prioridade continua sendo dominar sintaxe, lógica, funções e dados.`}},{id:`projeto-tarefas`,category:`projetos`,order:17,title:`Projeto: lista de tarefas`,summary:`Junte listas, funções e repetição em um programa pequeno, mas organizado.`,level:`Projeto`,duration:`20 min`,learn:[`Separar estado e comportamento`,`Criar funções para adicionar e listar`,`Percorrer uma lista 1-based`],paragraphs:[`Este projeto usa uma lista como estado do programa e funções para esconder os detalhes de manipulação. É pequeno o suficiente para entender inteiro e grande o suficiente para mostrar por que funções ajudam.`],examples:[{title:`Lista de tarefas`,language:`jls`,filename:`tarefas.jls`,code:`va tarefas = []

func adicionar(tarefa) {
    tarefas.adicionar(tarefa)
}

func listar() {
    para (va i = 1; i <= tarefas.tamanho(); i = i + 1) {
        mostrar(i + " - " + tarefas[i])
    }
}

adicionar("Estudar JLScript")
adicionar("Criar um projeto")
adicionar("Testar o programa")

listar()`}],callout:{type:`tip`,title:`Próximo passo`,text:`Adicione uma função remover(indice). Depois tente salvar as tarefas em arquivo usando uma biblioteca apropriada do ecossistema.`},exercise:{title:`Desafio`,text:`Implemente remover(indice), uma função quantidade() e uma mensagem quando a lista estiver vazia.`}},{id:`projeto-api`,category:`projetos`,order:18,title:`Projeto: API local`,summary:`Crie um pequeno serviço HTTP com duas rotas e respostas estruturadas.`,level:`Projeto`,duration:`25 min`,learn:[`Criar servidor HTTP`,`Registrar rotas`,`Responder JSON`,`Executar e testar localmente`],paragraphs:[`Agora o objetivo é juntar módulo, função callback, objeto e execução contínua em um único exemplo. O servidor abaixo expõe uma rota de status e uma rota sobre a linguagem.`],examples:[{title:`Servidor completo`,language:`jls`,filename:`servidor.jls`,code:`import #api

va app = criarApi(3000)

app.get("/status", func(req, res) {
    res.json({
        status: "online",
        porta: 3000
    })
})

app.get("/sobre", func(req, res) {
    res.json({
        nome: "JLScript",
        versao: "3.2.0",
        origem: "Brasil"
    })
})

app.iniciar()`},{title:`Iniciando`,language:`bash`,filename:`Terminal`,code:`jls run servidor.jls`}],callout:{type:`warning`,title:`Porta ocupada`,text:`Se a porta 3000 já estiver em uso, escolha outra porta, por exemplo criarApi(3001).`},exercise:{title:`Desafio`,text:`Crie uma terceira rota /saudacao que devolva um objeto JSON com uma mensagem e o horário ou outra informação disponível no seu programa.`}}];function p(e){return String(e||``).toLocaleLowerCase(`pt-BR`).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``)}function m(e){return p([e.title,e.summary,e.level,...e.learn||[],...e.paragraphs||[],...(e.facts||[]).flat(),...(e.examples||[]).flatMap(e=>[e.title,e.code,e.output]),e.callout?.title,e.callout?.text,e.exercise?.title,e.exercise?.text].join(` `))}function h(e){let t=document.getElementById(e);if(!t)return;let n=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;t.scrollIntoView({behavior:n?`auto`:`smooth`,block:`start`})}function g({item:e}){return e?(0,r.jsxs)(`aside`,{className:`learn-callout learn-callout--${e.type||`info`}`,children:[(0,r.jsx)(`span`,{className:`learn-callout-icon`,"aria-hidden":`true`,children:e.type===`warning`?`!`:e.type===`tip`?`✓`:`i`}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`strong`,{children:e.title}),(0,r.jsx)(`p`,{children:e.text})]})]}):null}function _({items:e}){return e?.length?(0,r.jsxs)(`div`,{className:`learn-goals`,children:[(0,r.jsx)(`div`,{className:`learn-goals-title`,children:`Você vai aprender`}),(0,r.jsx)(`ul`,{children:e.map(e=>(0,r.jsxs)(`li`,{children:[(0,r.jsx)(`span`,{"aria-hidden":`true`,children:`✓`}),e]},e))})]}):null}function v({items:e}){return e?.length?(0,r.jsx)(`dl`,{className:`learn-facts`,children:e.map(([e,t])=>(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`dt`,{children:e}),(0,r.jsx)(`dd`,{children:t})]},e))}):null}function y({items:e}){return e?.length?(0,r.jsx)(`div`,{className:`learn-pipeline`,"aria-label":`Fluxo de execução da JLScript`,children:e.map((t,n)=>(0,r.jsxs)(`div`,{className:`learn-pipeline-step`,children:[(0,r.jsx)(`span`,{children:String(n+1).padStart(2,`0`)}),(0,r.jsx)(`strong`,{children:t}),n<e.length-1&&(0,r.jsx)(`i`,{"aria-hidden":`true`,children:`→`})]},t))}):null}function b({item:e}){return e?(0,r.jsxs)(`details`,{className:`learn-exercise`,children:[(0,r.jsxs)(`summary`,{children:[(0,r.jsx)(`span`,{children:`DESAFIO`}),(0,r.jsx)(`strong`,{children:e.title}),(0,r.jsx)(`i`,{"aria-hidden":`true`,children:`+`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{children:e.text}),(0,r.jsx)(`small`,{children:`Faça primeiro sem copiar outro exemplo. Depois compare sua solução e simplifique o que estiver repetido.`})]})]}):null}function x({query:e,onQueryChange:t,activeId:i,visibleLessons:a,onNavigate:o}){let s=(0,n.useMemo)(()=>{let e=new Map;for(let t of d)e.set(t.id,[]);for(let t of a)e.has(t.category)||e.set(t.category,[]),e.get(t.category).push(t);return e},[a]);return(0,r.jsxs)(`aside`,{className:`learn-sidebar`,"aria-label":`Navegação da documentação`,children:[(0,r.jsxs)(`div`,{className:`learn-sidebar-top`,children:[(0,r.jsx)(`span`,{children:`DOCUMENTAÇÃO`}),(0,r.jsxs)(`strong`,{children:[`JLScript `,u.version]})]}),(0,r.jsxs)(`label`,{className:`learn-sidebar-search`,children:[(0,r.jsx)(`span`,{children:`Pesquisar`}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`i`,{"aria-hidden":`true`,children:`⌕`}),(0,r.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`funções, API, build...`,"aria-label":`Pesquisar na documentação`})]})]}),(0,r.jsx)(`nav`,{className:`learn-sidebar-nav`,children:d.map(e=>{let t=s.get(e.id)||[];return t.length?(0,r.jsxs)(`section`,{children:[(0,r.jsx)(`h2`,{children:e.label}),t.map(e=>(0,r.jsxs)(`button`,{type:`button`,className:i===e.id?`is-active`:``,onClick:()=>o(e.id),"aria-current":i===e.id?`location`:void 0,children:[(0,r.jsx)(`span`,{children:String(e.order).padStart(2,`0`)}),(0,r.jsx)(`em`,{children:e.title})]},e.id))]},e.id):null})}),(0,r.jsxs)(`a`,{className:`learn-sidebar-external`,href:u.docsUrl,target:`_blank`,rel:`noreferrer`,children:[(0,r.jsx)(`span`,{children:`Documentação pública`}),(0,r.jsx)(`strong`,{children:`GitHub ↗`})]})]})}function S(){let[e,t]=(0,n.useState)(``),[i,a]=(0,n.useState)(f[0]?.id||``),o=p(e.trim()),s=(0,n.useMemo)(()=>o?f.filter(e=>m(e).includes(o)):f,[o]);(0,n.useEffect)(()=>{s.length&&!s.some(e=>e.id===i)&&a(s[0].id)},[s,i]),(0,n.useEffect)(()=>{if(!s.length)return;let e=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio);t[0]?.target?.id&&a(t[0].target.id)},{rootMargin:`-110px 0px -62% 0px`,threshold:[.08,.2,.45]});return s.forEach(t=>{let n=document.getElementById(t.id);n&&e.observe(n)}),()=>e.disconnect()},[s]);function c(e){a(e),h(e)}let S=s[0];return(0,r.jsxs)(`main`,{className:`learn-docs-page`,children:[(0,r.jsxs)(`header`,{className:`learn-docs-hero`,children:[(0,r.jsxs)(`div`,{className:`learn-docs-kicker`,children:[(0,r.jsx)(`span`,{children:`GUIA OFICIAL`}),(0,r.jsx)(`i`,{"aria-hidden":`true`}),(0,r.jsxs)(`span`,{children:[`VERSÃO `,u.version]})]}),(0,r.jsxs)(`div`,{className:`learn-docs-hero-grid`,children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`h1`,{children:`Aprenda JLScript de verdade.`}),(0,r.jsxs)(`p`,{children:[`Um guia progressivo para sair do primeiro `,(0,r.jsx)(`code`,{children:`.jls`}),` e chegar a funções, listas, APIs, CLI, build e bytecode entendendo o que cada recurso faz.`]}),(0,r.jsxs)(`div`,{className:`learn-docs-actions`,children:[(0,r.jsxs)(`button`,{type:`button`,className:`learn-primary-btn`,onClick:()=>c(`primeiro-programa`),children:[`Começar pelo primeiro programa `,(0,r.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]}),(0,r.jsx)(`a`,{className:`learn-secondary-btn`,href:u.docsUrl,target:`_blank`,rel:`noreferrer`,children:`Ver referência pública ↗`})]})]}),(0,r.jsxs)(`div`,{className:`learn-docs-status`,"aria-label":`Resumo da linguagem`,children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`span`,{children:`01`}),(0,r.jsx)(`strong`,{children:`Português + Inglês`}),(0,r.jsx)(`small`,{children:`Sintaxe bilíngue no mesmo ecossistema.`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`span`,{children:`02`}),(0,r.jsx)(`strong`,{children:`Runtime + CLI`}),(0,r.jsx)(`small`,{children:`Execução, REPL e ferramentas integradas.`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`span`,{children:`03`}),(0,r.jsx)(`strong`,{children:`Build + .jlb`}),(0,r.jsx)(`small`,{children:`Fluxo nativo e bytecode próprio.`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`span`,{children:`04`}),(0,r.jsx)(`strong`,{children:`Bibliotecas oficiais`}),(0,r.jsx)(`small`,{children:`HTTP, dados, sistema e outros módulos.`})]})]})]}),(0,r.jsxs)(`div`,{className:`learn-path`,"aria-label":`Trilha de aprendizado`,children:[(0,r.jsx)(`span`,{children:`Fundamentos`}),(0,r.jsx)(`i`,{children:`→`}),(0,r.jsx)(`span`,{children:`Lógica`}),(0,r.jsx)(`i`,{children:`→`}),(0,r.jsx)(`span`,{children:`Estruturas`}),(0,r.jsx)(`i`,{children:`→`}),(0,r.jsx)(`span`,{children:`Ecossistema`}),(0,r.jsx)(`i`,{children:`→`}),(0,r.jsx)(`span`,{children:`Projetos`})]})]}),(0,r.jsxs)(`div`,{className:`learn-docs-shell`,children:[(0,r.jsx)(x,{query:e,onQueryChange:t,activeId:i,visibleLessons:s,onNavigate:c}),(0,r.jsxs)(`article`,{className:`learn-docs-content`,children:[o&&(0,r.jsxs)(`div`,{className:`learn-search-summary`,role:`status`,children:[(0,r.jsx)(`span`,{children:`Busca`}),(0,r.jsxs)(`strong`,{children:[s.length,` capítulo(s) encontrado(s) para “`,e.trim(),`”`]}),(0,r.jsx)(`button`,{type:`button`,onClick:()=>t(``),children:`Limpar`})]}),!s.length&&(0,r.jsxs)(`section`,{className:`learn-empty`,children:[(0,r.jsx)(`span`,{children:`0 resultados`}),(0,r.jsx)(`h2`,{children:`Nada encontrado.`}),(0,r.jsx)(`p`,{children:`Tente pesquisar por “variáveis”, “laços”, “API”, “build”, “funções” ou “import”.`}),(0,r.jsx)(`button`,{type:`button`,className:`learn-secondary-btn`,onClick:()=>t(``),children:`Mostrar todos os capítulos`})]}),s.map(e=>(0,r.jsxs)(`section`,{className:`learn-lesson`,id:e.id,"data-category":e.category,children:[(0,r.jsxs)(`header`,{className:`learn-lesson-head`,children:[(0,r.jsx)(`div`,{className:`learn-lesson-number`,children:String(e.order).padStart(2,`0`)}),(0,r.jsxs)(`div`,{children:[(0,r.jsxs)(`div`,{className:`learn-lesson-meta`,children:[(0,r.jsx)(`span`,{children:d.find(t=>t.id===e.category)?.label}),(0,r.jsx)(`i`,{"aria-hidden":`true`}),(0,r.jsx)(`span`,{children:e.level}),(0,r.jsx)(`i`,{"aria-hidden":`true`}),(0,r.jsx)(`span`,{children:e.duration})]}),(0,r.jsx)(`h2`,{children:e.title}),(0,r.jsx)(`p`,{children:e.summary})]})]}),(0,r.jsx)(_,{items:e.learn}),(0,r.jsx)(`div`,{className:`learn-prose`,children:(e.paragraphs||[]).map(e=>(0,r.jsx)(`p`,{children:e},e))}),(0,r.jsx)(v,{items:e.facts}),(0,r.jsx)(y,{items:e.pipeline}),(e.examples||[]).map(t=>(0,r.jsx)(l,{...t},`${e.id}-${t.title}`)),(0,r.jsx)(g,{item:e.callout}),(0,r.jsx)(b,{item:e.exercise})]},e.id)),!!s.length&&(0,r.jsxs)(`footer`,{className:`learn-docs-footer`,children:[(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`span`,{children:`FIM DA TRILHA ATUAL`}),(0,r.jsx)(`h2`,{children:`Agora transforme exemplo em projeto.`}),(0,r.jsx)(`p`,{children:`Documentação ensina o caminho. A parte que fixa o conhecimento continua sendo escrever, executar, provocar erro e corrigir.`})]}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`button`,{type:`button`,className:`learn-primary-btn`,onClick:()=>c(S?.id||`visao-geral`),children:`Voltar ao início da trilha ↑`}),(0,r.jsx)(`a`,{className:`learn-secondary-btn`,href:`#/playground`,children:`Abrir Playground`})]})]})]})]})]})}export{S as default};