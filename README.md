# JLScript

### Parte 1 — História, origem, identidade e primeiros passos

> **Código que fala a sua língua.**

JLScript é uma linguagem de programação brasileira criada por **Lucas Aguiel**.

Ela nasceu de uma pergunta simples, mas que acabou levando o projeto muito mais longe do que o planejado:

> **“Como uma linguagem de programação funciona por dentro?”**

O que começou como curiosidade virou experimentos com sintaxe.  
Os experimentos viraram um interpretador.  
Depois vieram bibliotecas, ferramentas, terminal, extensão para VS Code, documentação e um ecossistema próprio.

Este README não foi criado para ensinar toda a sintaxe da linguagem.

Essa parte fica para a continuação:

## Parte 2 — Sintaxe do JLScript

Aqui, primeiro, a ideia é contar **de onde o JLScript veio, por que ele existe e como começar a usá-lo**.

---

# O que é JLScript?

**JLScript é uma linguagem de programação brasileira em desenvolvimento**, criada com foco em uma escrita simples, legível e próxima de quem está aprendendo programação.

Uma de suas características mais importantes é permitir construções em **português e inglês**.

A proposta nunca foi simplesmente pegar uma linguagem existente e traduzir algumas palavras.

O projeto foi crescendo para possuir sua própria estrutura, ferramentas e identidade.

Hoje, quando falamos em JLScript, não estamos falando apenas do arquivo `.jls`.

Também fazem parte do projeto:

- linguagem JLScript;
- runtime;
- interpretador;
- CLI;
- JLShell;
- bibliotecas;
- módulos;
- integração com Visual Studio Code;
- JLS AI;
- documentação;
- ferramentas de desenvolvimento;
- sites e materiais oficiais.

O objetivo é que alguém consiga começar com um programa simples e, conforme aprende, tenha ferramentas para construir projetos cada vez maiores.

---

# Onde o JLScript nasceu?

JLScript nasceu no **Brasil**.

Não surgiu dentro de uma grande empresa.

Não começou como produto de uma equipe gigantesca.

Também não nasceu em um laboratório com dezenas de engenheiros trabalhando em um compilador.

Começou como um projeto pessoal.

Lucas estudava programação e começou a se interessar não apenas por usar linguagens, mas por entender **como elas funcionavam**.

Quando você está começando, normalmente aprende algo assim:

```text
escreva isso
rode o programa
veja o resultado
```

Mas em algum momento apareceu outra curiosidade:

**o que acontece entre o código escrito e o resultado aparecer na tela?**

Como o computador entende uma variável?

Como ele reconhece uma função?

Como sabe onde começa e termina uma condição?

Como uma palavra como `if` passa a ter significado dentro de uma linguagem?

Foi dessa curiosidade que o JLScript começou a surgir.

---

# De onde veio a ideia?

A ideia não começou com:

> “Vou criar a próxima linguagem que vai substituir todas as outras.”

Seria uma bela maneira de começar completamente fora da realidade.

A ideia era muito mais simples:

> **“E se eu criasse minha própria linguagem?”**

No começo, o objetivo principal era aprender.

Criar algumas palavras.

Fazer o programa reconhecer comandos.

Testar variáveis.

Criar condições.

Fazer funções funcionarem.

Errar.

Arrumar.

Quebrar outra coisa.

Arrumar novamente.

E entender o que estava acontecendo no processo.

A partir daí, o projeto começou a mudar.

Em vez de apenas testar como uma linguagem poderia funcionar, surgiu a vontade de criar uma linguagem que tivesse **identidade própria**.

---

# A identidade do JLScript

JLScript carrega uma característica que esteve presente desde cedo:

## português + inglês

Programação é extremamente ligada ao inglês.

Isso faz sentido historicamente e continuará fazendo parte da área.

Mas isso não significa que experimentar outras formas de escrever código seja inútil.

JLScript permite trabalhar com conceitos em português e também utilizar alternativas em inglês.

A ideia não é esconder conceitos tradicionais da programação.

É permitir que alguém encontre esses conceitos através de uma sintaxe mais próxima da sua língua e, ao mesmo tempo, possa conhecer as formas utilizadas internacionalmente.

Um pequeno exemplo:

```jls
va nome = "Lucas"
let linguagem = "JLScript"
ins ativo = true

mostrar(nome)
```

`va`, `let` e `ins` fazem parte das formas de declaração existentes na linguagem.

Mas isso é assunto para a **Parte 2**.

---

# Por que o nome JLScript?

O nome não nasceu de um gerador de nomes aleatórios.

Ele possui significado pessoal.

## J

O **J** representa **Joicy Costa**.

## L

O **L** representa **Lucas Aguiel**.

## Script

**Script** representa a própria linguagem e sua relação com programação.

Juntando tudo:

# J + L + Script

# JLScript

O nome passou a acompanhar o projeto enquanto ele deixava de ser um pequeno experimento e começava a ganhar ferramentas próprias.

---

# E a logo?

A identidade não precisava apenas de um nome.

Também precisava de uma imagem.

Quando o projeto começou a crescer, surgiu a necessidade de criar uma logo que combinasse tanto com o criador quanto com a linguagem.

A solução foi utilizar justamente as duas letras que representam o projeto:

# JL

O símbolo atual trabalha o **J** e o **L** como uma única identidade visual.

A logo utiliza principalmente:

**preto**, **branco**, **ciano**, **azul**, **roxo** e detalhes próximos do rosa.

As cores acabaram sendo utilizadas também em partes do ecossistema, como sites, materiais, interfaces e ferramentas.

A intenção nunca foi apenas colocar duas letras dentro de um quadrado.

A logo precisava funcionar:

- pequena dentro do VS Code;
- no terminal;
- em sites;
- em documentação;
- em redes sociais;
- em projetos relacionados ao JLScript.

Com o tempo, o símbolo `JL` acabou virando uma das partes mais reconhecíveis da identidade do projeto.

---

# Quem criou o JLScript?

JLScript foi criado por **Lucas Aguiel**.

O projeto surgiu durante seus estudos de programação.

Antes de pensar em criar uma linguagem, Lucas já estava estudando tecnologias e tentando entender desenvolvimento de software de maneira mais profunda.

O interesse deixou de ser apenas:

> “Como eu faço um programa?”

e começou a chegar em:

> **“Como as ferramentas que fazem o programa funcionar foram construídas?”**

Linguagens de programação passaram a chamar especialmente a atenção.

Criar JLScript virou uma forma de estudar vários assuntos ao mesmo tempo:

compiladores, interpretadores, parsing, estruturas de dados, organização de projetos, desenvolvimento de ferramentas, bibliotecas, interfaces e experiência de desenvolvimento.

Boa parte da evolução do JLScript veio exatamente dessa maneira.

Uma funcionalidade levava a outra.

Para ter variáveis, era necessário entendê-las.

Para ter condições, era necessário interpretar expressões.

Para ter funções, era necessário lidar com escopo.

Para ter bibliotecas, era necessário pensar em módulos.

Para ter uma experiência melhor, foi necessário criar ferramentas para o editor.

E assim o projeto foi crescendo.

---

# Como o JLScript foi montado?

O JLScript não apareceu pronto.

Ele foi construído em etapas.

No início existiam ideias de sintaxe.

Depois foi necessário fazer o computador entender aquela sintaxe.

Isso levou à criação das partes internas da linguagem.

De forma simplificada, o caminho envolve conceitos como:

```text
Código .jls
      ↓
Lexer
      ↓
Parser
      ↓
AST
      ↓
Runtime / execução
      ↓
Resultado
```

O **lexer** ajuda a reconhecer as partes escritas no código.

O **parser** entende como essas partes estão organizadas.

A **AST** representa a estrutura do programa.

O **runtime** trabalha com a execução e os valores utilizados pela linguagem.

Conforme isso foi funcionando, começaram a aparecer outras camadas.

```text
JLScript
├── Linguagem
├── Runtime
├── CLI
├── Bibliotecas
├── JLShell
├── VS Code Extension
├── JLS AI
└── Ecossistema
```

É essa evolução que fez o projeto deixar de ser somente uma experiência de sintaxe.

---

# Em qual linguagem o JLScript foi feito?

O núcleo principal do **JLScript foi desenvolvido principalmente em C++**.

A escolha combina com o tipo de projeto que estava sendo construído.

C++ permite trabalhar em um nível mais próximo do sistema e oferece controle importante para componentes como runtime, parser, execução e ferramentas nativas.

Isso não significa que absolutamente tudo relacionado ao JLScript seja C++.

O ecossistema utiliza outras tecnologias quando elas fazem sentido.

Sites, extensões, ferramentas auxiliares e integrações podem utilizar tecnologias diferentes.

Mas quando falamos do **núcleo da linguagem**, C++ possui um papel central.

---

# O JLScript é open source?

## Não.

O **núcleo atual do JLScript é de código fechado**.

Essa informação é importante porque materiais antigos do projeto chegaram a utilizar descrições diferentes.

Repositórios públicos, documentação, exemplos e sites públicos **não significam que o código-fonte completo do núcleo da linguagem esteja aberto**.

O projeto disponibiliza publicamente o que é necessário para conhecer, aprender e utilizar o JLScript.

A implementação interna privada continua fechada.

Um programa criado por outra pessoa utilizando `.jls` é outra história.

O autor desse programa pode escolher como deseja distribuir e licenciar o próprio projeto.

---

# O que tornou o JLScript diferente?

Uma das coisas mais importantes do projeto é que ele não parou no parser.

Com o tempo começaram a surgir ferramentas ao redor da linguagem.

## JLShell

Um ambiente de terminal criado para trabalhar com JLScript.

Ele permite interagir com a linguagem, executar código e trabalhar com ferramentas do ecossistema.

## Visual Studio Code

JLScript possui suporte próprio para Visual Studio Code.

A extensão ajuda com coisas como:

- reconhecimento de arquivos `.jls`;
- destaque de sintaxe;
- autocomplete;
- IntelliSense;
- snippets;
- diagnósticos;
- execução;
- integração com ferramentas do JLScript.

## JLS AI

JLS AI nasceu como uma assistência voltada especificamente para quem está programando com JLScript.

A ideia é ajudar com código, erros, projetos e recursos da linguagem.

## Bibliotecas

O projeto também possui módulos para diferentes áreas, permitindo que o JLScript cresça além das construções básicas da linguagem.

---

# Pontos fortes

JLScript ainda está sendo desenvolvido, então seria estranho fingir que tudo nele é perfeito.

Mas existem algumas características que representam bem seus pontos fortes atuais.

### Identidade própria

JLScript possui nome, sintaxe, extensão `.jls`, CLI, terminal, ferramentas, documentação e identidade visual próprias.

### Português e inglês

A linguagem pode aproximar conceitos de programação de quem fala português sem abandonar construções em inglês.

### Sintaxe legível

Grande parte da linguagem busca manter o código fácil de identificar visualmente.

### Ecossistema

JLScript não está sendo desenvolvido apenas como um interpretador.

Existem ferramentas ao redor dele.

### Integração com VS Code

A extensão deixa o desenvolvimento em `.jls` muito mais próximo da experiência de outras linguagens conhecidas.

### Projeto educacional e real ao mesmo tempo

O JLScript nasceu como aprendizado, mas sua evolução não ficou limitada a exemplos de aula.

---

# Pontos fracos

Seria fácil criar uma seção chamada “vantagens” e fingir que a linguagem caiu pronta do céu.

Não caiu.

JLScript possui limitações reais.

### Ainda está em desenvolvimento

Recursos podem mudar, receber melhorias ou ainda não ter a mesma maturidade encontrada em linguagens com décadas de existência.

### Ecossistema menor

Python, JavaScript, C++, Java e outras linguagens possuem bibliotecas e comunidades gigantescas.

JLScript obviamente ainda não possui esse tamanho.

### Documentação precisa acompanhar o projeto

Como a linguagem muda rápido, documentação antiga pode ficar desatualizada.

Esse é um dos motivos para existirem novos portais e materiais oficiais.

### Código-fonte fechado

Manter o núcleo fechado também significa que desenvolvedores externos não podem simplesmente entrar na implementação principal e modificar qualquer parte dela.

É uma escolha atual do projeto e também uma limitação para alguns tipos de colaboração.

### Compatibilidade ainda está crescendo

Nem todas as plataformas e cenários possuem o mesmo nível de suporte.

Esse trabalho continua fazendo parte da evolução do projeto.

---

# Como instalar o JLScript

Começar não precisa ser complicado.

Existem duas partes importantes:

1. instalar o **JLScript**;
2. instalar a **extensão do Visual Studio Code**.

A extensão ajuda você a escrever código.

O JLScript instalado no computador é quem realmente executa seus arquivos.

---

# 1. Entre no site oficial

Abra:

### https://jlscript-oficial.lucasaguiel5.workers.dev/

Esse é o portal principal do JLScript.

---

# 2. Vá até Download

No menu do site, clique em:

## Download

Escolha a opção disponível para instalar o JLScript no computador.

Depois conclua a instalação normalmente.

Com isso, você terá acesso às ferramentas responsáveis por executar arquivos `.jls`.

---

# 3. Abra o Visual Studio Code

Com o JLScript instalado, abra o:

## Visual Studio Code

Depois abra a página de extensões.

Você pode clicar no ícone **Extensions** na barra lateral ou utilizar:

```text
Ctrl + Shift + X
```

---

# 4. Pesquise por JLScript

Na busca da loja de extensões, escreva:

```text
JLScript
```

Procure pela extensão oficial:

## JLScript Language

Ela também está disponível no Visual Studio Marketplace:

https://marketplace.visualstudio.com/items?itemName=EohLczin.jlscripter

---

# 5. Instale a extensão

Clique em:

## Install

Depois da instalação, arquivos `.jls` passam a receber o suporte da extensão.

---

# 6. Crie seu primeiro arquivo

Crie um arquivo:

```text
main.jls
```

Agora você já possui o ambiente necessário para começar.

A extensão ajuda durante a escrita.

A instalação do JLScript fornece as ferramentas para execução.

---

# 7. Execute

Um arquivo pode ser executado pela CLI.

Por exemplo:

```bash
jls run main.jls
```

E pronto.

Sem precisar montar um ritual arcano envolvendo doze dependências só para imprimir uma frase.

---

# Instalação resumida

```text
Site oficial
    ↓
Download
    ↓
Instalar JLScript
    ↓
Abrir VS Code
    ↓
Extensions
    ↓
Pesquisar "JLScript"
    ↓
Instalar JLScript Language
    ↓
Criar arquivo .jls
    ↓
Programar
```

**Simples. Rápido. Direto.**

---

# Onde acompanhar o projeto?

### Portal oficial

https://jlscript-oficial.lucasaguiel5.workers.dev/

O ponto central do ecossistema.

### Blog JLScript

https://blog-jlscript.netlify.app/

Notícias, artigos, novidades e evolução do projeto.

### Documentação e sintaxe

https://jlscripter.netlify.app/

Referência para aprender e consultar a linguagem.

### Visual Studio Marketplace

https://marketplace.visualstudio.com/items?itemName=EohLczin.jlscripter

Extensão oficial para Visual Studio Code.

---

# E agora?

Até aqui você conheceu:

- o que é JLScript;
- onde ele nasceu;
- de onde surgiu a ideia;
- quem criou;
- por que recebeu esse nome;
- como nasceu sua identidade;
- como a linguagem foi construída;
- por que C++ faz parte do núcleo;
- pontos fortes;
- limitações atuais;
- como instalar;
- como preparar o Visual Studio Code.

Mas ainda falta justamente a parte mais importante para quem quer programar:

# escrever JLScript.

E é aí que começa a próxima parte.

---

# Parte 2 — A sintaxe do JLScript

Na Parte 2 vamos entrar de verdade na linguagem.

Começando pelas três declarações:

```jls
va
let
ins
```

E avançando por:

```text
variáveis
tipos
entrada e saída
operadores
condições
loops
funções
listas
objetos
tratamento de erros
imports
módulos
bibliotecas
APIs
e recursos mais avançados
```

<div align="center">

# JLScript 4.2.0

## Parte 2 — Sintaxe, lógica e programação

### Entendendo como a linguagem pensa antes de construir projetos maiores

**Core · Variáveis · Funções · Coleções · Bibliotecas · HTTP · API · UI · Style**

</div>

---

> [!IMPORTANT]
> Esta parte não é uma lista de comandos para decorar.  
> O objetivo é entender a lógica da JLScript: como os valores são criados, como o programa toma decisões, como os dados são transformados e como os recursos da linguagem se conectam.

A Parte 1 apresentou o projeto.

A partir daqui começa a programação de verdade.

A JLScript foi construída para permitir código relativamente simples de ler sem esconder conceitos importantes de programação. Variáveis continuam sendo variáveis. Uma requisição HTTP continua tendo método, resposta e status. Uma lista continua tendo posições e operações. Uma função continua recebendo argumentos e retornando valores.

A diferença está na forma como essas ideias são apresentadas.

```jls
va nome = "Lucas"
va idade = 19

se (idade >= 18) {
    mostrar(nome + " pode continuar.")
} senao {
    mostrar("Acesso negado.")
}
```

O código acima já apresenta quatro partes fundamentais da linguagem:

```text
dados
↓
variáveis
↓
lógica
↓
resultado
```

Essa sequência aparece em praticamente qualquer programa JLScript.

---

# 1. Como pensar em JLScript

Antes de estudar cada recurso isoladamente, existe um modelo simples que ajuda a entender a linguagem.

```text
Entrada
   ↓
Valores
   ↓
Variáveis / Objetos / Listas
   ↓
Funções
   ↓
Regras e decisões
   ↓
Saída / Arquivo / API / UI / Processo
```

Um programa pode ser pequeno:

```jls
va nome = chat("Nome: ")

mostrar("Olá, " + nome)
```

ou possuir várias camadas:

```text
UI
↓
função
↓
validação
↓
API
↓
objeto
↓
arquivo
↓
resultado
```

A lógica continua sendo a mesma.

Um bom programa não é o que possui mais recursos.

É o que deixa claro:

- de onde os dados vieram;
- como foram transformados;
- quais regras foram aplicadas;
- qual resultado deve sair.

---

# 2. Arquivos JLScript

O código-fonte JLScript utiliza a extensão:

```text
.jls
```

Exemplo:

```text
main.jls
usuarios.jls
servidor.jls
app.jls
```

Um programa simples pode começar diretamente com uma declaração:

```jls
va linguagem = "JLScript"

mostrar(linguagem)
```

Ponto e vírgula não é obrigatório na maioria das construções comuns:

```jls
va nome = "Lucas"
mostrar(nome)
```

Também pode aparecer:

```jls
va nome = "Lucas";
mostrar(nome);
```

Para manter consistência, prefira um único estilo no projeto.

---

# 3. Variáveis

JLScript possui três declaradores oficiais:

```text
va
let
ins
```

Exemplo:

```jls
va nome = "Lucas"
let idade = 19
ins ativo = true
```

Na JLScript 4.2.0, os três entram no mesmo modelo de declaração do runtime.

Isso significa que:

```jls
va a = 10
let b = 20
ins c = 30
```

criam valores utilizáveis normalmente:

```jls
mostrar(a)
mostrar(b)
mostrar(c)
```

Saída:

```text
10
20
30
```

## Qual devo usar?

Para código JLScript escrito principalmente em português, `va` é uma boa convenção padrão:

```jls
va usuario = "Lucas"
va conectado = true
va tentativas = 3
```

`let` pode ser útil para quem vem de JavaScript ou prefere uma palavra conhecida:

```jls
let usuario = "Lucas"
```

`ins` também é uma declaração válida da linguagem.

O mais importante em um projeto profissional não é trocar entre as três sem motivo.

É manter consistência.

### Evite

```jls
va nome = "Lucas"
let idade = 19
ins email = "email@exemplo.com"
va cidade = "Brasília"
```

quando não existe uma razão para alternar.

### Prefira

```jls
va nome = "Lucas"
va idade = 19
va email = "email@exemplo.com"
va cidade = "Brasília"
```

Um padrão previsível torna o código mais fácil de revisar.

---

# 4. Valores e tipos

Uma variável recebe um valor.

```jls
va numero = 42
va decimal = 3.14
va nome = "JLScript"
va ativo = true
va nada = null
```

Os tipos mais básicos incluem:

| Valor | Exemplo |
| --- | --- |
| Número inteiro | `10` |
| Número decimal | `10.5` |
| String | `"JLScript"` |
| Booleano | `true` / `false` |
| Nulo | `null` |
| Lista | `[1, 2, 3]` |
| Objeto | `{nome: "Lucas"}` |
| Bytes | dados binários |
| Cor | `#50fa7b` |
| Duração | `2 seconds`, `200 ms` |

A linguagem também reconhece conversões globais:

```jls
va numero = int("42")
va decimal = float("3.14")
va texto = str(42)
va ativo = bool("true")
```

Strings também possuem conversões mais estritas:

```jls
va idade = "19"

mostrar(idade.paraInt())
```

Quando estiver trabalhando com entrada de usuário, prefira conversões que validem o valor em vez de assumir que qualquer texto é válido.

---

# 5. Strings

Strings representam texto:

```jls
va linguagem = "JLScript"
```

Podem ser concatenadas:

```jls
va nome = "Lucas"

mostrar("Olá, " + nome)
```

A JLScript possui métodos nativos de String sem exigir import.

```jls
va texto = "  JLScript  "

mostrar(texto.aparar())
mostrar(texto.maiusculo())
mostrar(texto.minusculo())
```

Alguns exemplos:

```jls
va frase = "JLScript é uma linguagem"

mostrar(frase.contem("JLScript"))
mostrar(frase.comecaCom("JL"))
mostrar(frase.terminaCom("linguagem"))
```

Divisão:

```jls
va nomes = "Lucas,Ana,Pedro".dividir(",")

mostrar(nomes)
```

Palavras:

```jls
va frase = "programar com JLScript"

va palavras = frase.palavras()

mostrar(palavras)
```

Substituição:

```jls
va texto = "Olá mundo"

va novoTexto = texto.substituir("mundo", "JLScript")

mostrar(novoTexto)
```

Validação:

```jls
va idade = "19"

se (idade.eInteiro()) {
    mostrar(idade.paraInt())
}
```

Outros métodos importantes incluem:

```text
tamanho()
vazio()
capitalizar()
titulo()
apararInicio()
apararFim()

indiceDe()
ultimoIndiceDe()
contar()

substituir()
substituirTudo()

fatiar()
substring()
caractere()

repetir()
inverter()

linhas()
palavras()

igualIgnorandoCaso()

normalizarEspacos()
removerEspacos()

eNumero()
eInteiro()
eDecimal()
eAlfabetico()
eAlfanumerico()

paraInt()
paraFloat()
paraBool()
```

A linguagem também fornece aliases em inglês para esses métodos.

Exemplo:

```jls
va texto = "JLScript"

mostrar(texto.length())
mostrar(texto.upper())
mostrar(texto.contains("Script"))
```

Português e inglês chamam a mesma operação interna.

---

# 6. Strings multilinha

JLScript também aceita texto multilinha.

```jls
va codigo = """va nome = "Lucas"
mostrar(nome)"""

mostrar(codigo)
```

Isso é útil para:

- templates;
- arquivos;
- SQL;
- conteúdo textual;
- código usado como dado.

As quebras de linha são preservadas.

---

# 7. Operadores

## Matemáticos

```jls
va soma = 10 + 5
va subtracao = 10 - 5
va multiplicacao = 10 * 5
va divisao = 10 / 5
va resto = 10 % 3
```

## Comparação

```jls
10 == 10
10 != 20

10 > 5
10 < 20

10 >= 10
10 <= 10
```

## Lógicos

```jls
true && true
true || false
!false
```

Exemplo:

```jls
va idade = 19
va autorizado = true

se (idade >= 18 && autorizado) {
    mostrar("Entrada permitida")
}
```

## Atualização

```jls
va contador = 0

contador++
contador--
contador += 10
contador -= 2
contador *= 3
contador /= 2
contador %= 2
```

Também existem operadores bitwise:

```text
&
|
^
<<
>>
```

Para código comum de aplicação, provavelmente você usará os operadores lógicos e matemáticos com muito mais frequência.

---

# 8. Condições

Uma condição decide qual parte do programa será executada.

## Forma em português

```jls
va idade = 19

se (idade >= 18) {
    mostrar("Maior de idade")
} senao {
    mostrar("Menor de idade")
}
```

## Forma em inglês

```jls
if (idade >= 18) {
    mostrar("Maior de idade")
} else {
    mostrar("Menor de idade")
}
```

A recomendação é manter o mesmo idioma dentro da estrutura.

### Bom

```jls
se (ativo) {
    mostrar("Ativo")
} senao {
    mostrar("Inativo")
}
```

### Evite misturar

```text
se (...) { ... } else { ... }
```

Além de ser menos consistente, algumas estruturas da linguagem validam essa combinação.

---

# 9. Condições encadeadas

Você pode colocar outra condição dentro do `senao`:

```jls
va nota = 8

se (nota >= 9) {
    mostrar("Excelente")
} senao {
    se (nota >= 7) {
        mostrar("Aprovado")
    } senao {
        mostrar("Reprovado")
    }
}
```

Para decisões com muitos valores fixos, `escolha` costuma ser mais organizado.

---

# 10. Escolha múltipla

```jls
va opcao = 2

escolha (opcao) {

    caso 1 {
        mostrar("Cadastrar")
    }

    caso 2 {
        mostrar("Entrar")
    }

    padrao {
        mostrar("Opção inválida")
    }
}
```

Aliases:

```text
escolha  / switch
caso     / case
padrao   / default
```

Use esse tipo de estrutura quando estiver comparando o mesmo valor contra várias opções conhecidas.

---

# 11. Loops

Loops repetem uma operação.

## Enquanto

```jls
va contador = 1

enquanto (contador <= 5) {
    mostrar(contador)
    contador++
}
```

Forma inglesa:

```jls
while (contador <= 5) {
    mostrar(contador)
    contador++
}
```

## Para

```jls
para (va i = 0; i < 5; i++) {
    mostrar(i)
}
```

Também existe:

```jls
for (va i = 0; i < 5; i++) {
    mostrar(i)
}
```

Controle:

```text
pare       / break
continuar  / continue
```

Exemplo:

```jls
para (va i = 0; i < 10; i++) {

    se (i == 5) {
        pare
    }

    mostrar(i)
}
```

---

# 12. Funções

Funções servem para dar nome a uma tarefa.

```jls
func somar(a, b) {
    retorne a + b
}
```

Uso:

```jls
va resultado = somar(10, 20)

mostrar(resultado)
```

Resultado:

```text
30
```

Você também pode utilizar `return`:

```jls
func dobro(numero) {
    return numero * 2
}
```

## Parâmetros padrão

```jls
func saudacao(nome = "Visitante") {
    mostrar("Olá, " + nome)
}

saudacao()
saudacao("Lucas")
```

Uma regra importante é colocar parâmetros obrigatórios antes dos parâmetros com valor padrão.

---

# 13. Funções anônimas

Funções também podem ser valores.

```jls
va dobro = func(numero) {
    retorne numero * 2
}

mostrar(dobro(5))
```

Elas são muito utilizadas em listas:

```jls
va numeros = [1, 2, 3, 4]

va dobrados = numeros.mapear(func(numero) {
    retorne numero * 2
})

mostrar(dobrados)
```

---

# 14. Listas

Uma lista armazena vários valores.

```jls
va nomes = [
    "Lucas",
    "Ana",
    "Pedro"
]
```

Você pode adicionar:

```jls
nomes.adicionar("Maria")
```

Consultar tamanho:

```jls
mostrar(nomes.tamanho())
```

Verificar conteúdo:

```jls
se (nomes.contem("Lucas")) {
    mostrar("Encontrado")
}
```

---

# 15. Uma regra muito importante sobre índices

Historicamente, listas JLScript utilizam posições começando em **1**.

```jls
va numeros = [10, 20, 30]

mostrar(numeros[1])
```

Resultado:

```text
10
```

Por compatibilidade, `0` também é um alias do primeiro elemento:

```jls
mostrar(numeros[0])
```

também retorna:

```text
10
```

Mas:

```jls
mostrar(numeros[2])
```

retorna:

```text
20
```

Isso significa que JLScript **não utiliza exatamente a mesma indexação do JavaScript**.

Guarde essa regra.

Ela evita uma quantidade particularmente desagradável de bugs.

---

# 16. Transformando listas

Imagine:

```jls
va numeros = [1, 2, 3, 4, 5]
```

## Mapear

```jls
va dobrados = numeros.mapear(func(numero) {
    retorne numero * 2
})
```

Resultado:

```text
[2, 4, 6, 8, 10]
```

## Filtrar

```jls
va pares = numeros.filtrar(func(numero) {
    retorne numero % 2 == 0
})
```

Resultado:

```text
[2, 4]
```

## Reduzir

```jls
va total = numeros.reduzir(
    func(soma, numero) {
        retorne soma + numero
    },
    0
)

mostrar(total)
```

Resultado:

```text
15
```

Esse trio é especialmente útil:

```text
mapear
filtrar
reduzir
```

porque permite escrever transformações de dados sem controlar manualmente cada índice.

---

# 17. Outros recursos de lista

JLScript possui uma coleção extensa de operações.

Algumas das mais úteis:

```text
tamanho()
vazia()

adicionar()
adicionarInicio()
inserir()

remover()
removerEm()
retirar()
retirarInicio()

primeiro()
ultimo()

ordenar()
ordenarPor()
inverter()
embaralhar()

mapear()
filtrar()
reduzir()

encontrar()
algum()
todos()
paraCada()

unicos()
duplicados()
achatar()
compactar()

agruparPor()
particionar()

intersecao()
uniao()
diferenca()

soma()
media()
minimo()
maximo()
```

Não tente decorar tudo de uma vez.

Aprenda primeiro:

```text
adicionar
remover
tamanho
contem
mapear
filtrar
reduzir
encontrar
paraCada
```

O restante passa a fazer sentido conforme os projetos exigirem.

---

# 18. Objetos

Objetos armazenam valores associados a propriedades.

```jls
va usuario = {
    nome: "Lucas",
    idade: 19,
    ativo: true
}
```

Acesso:

```jls
mostrar(usuario.nome)
```

Também:

```jls
mostrar(usuario["nome"])
```

Alteração:

```jls
usuario.nome = "Pedro"
```

ou:

```jls
usuario["nome"] = "Pedro"
```

---

# 19. Métodos de objeto

Exemplos:

```jls
mostrar(usuario.tamanho())

mostrar(usuario.tem("nome"))

mostrar(usuario.chaves())

mostrar(usuario.valores())
```

Definir:

```jls
usuario.definir("cidade", "Brasília")
```

Remover:

```jls
usuario.remover("idade")
```

Selecionar algumas propriedades:

```jls
va publico = usuario.selecionar([
    "nome",
    "cidade"
])
```

Omitir:

```jls
va seguro = usuario.omitir([
    "senha"
])
```

Objetos também possuem operações mais avançadas:

```text
mesclar()
atualizar()

mapear()
mapearValores()
mapearChaves()
filtrar()

congelar()
congelado()

mesclarProfundo()
clonarProfundo()

obterCaminho()
definirCaminho()
removerCaminho()
```

---

# 20. Cópia rasa e profunda

Existe uma diferença importante.

Uma cópia comum:

```jls
va copia = objeto.copiar()
```

é superficial.

Estruturas internas podem continuar compartilhadas.

Quando você realmente precisa separar objetos/listas internas:

```jls
va copia = objeto.clonarProfundo()
```

Não use clone profundo automaticamente em tudo.

Ele existe para situações em que separar toda a árvore de dados realmente é necessário.

---

# 21. Tratamento de erros

Erros fazem parte da execução normal de programas reais.

Arquivos podem não existir.

APIs podem cair.

Dados podem ser inválidos.

Usuários podem fornecer informação errada.

Em vez de esconder isso, JLScript fornece tratamento estruturado.

Sintaxe moderna:

```jls
tenta {

    mostrar("Executando")

} pegar (falha) {

    mostrar(falha.mensagem)

} fim {

    mostrar("Finalizado")
}
```

Também existem as formas anteriores:

```text
try / catch / finally

tente / capture / finalmente
```

---

# 22. Lançando erros

Você pode interromper a execução de uma operação:

```jls
func dividir(a, b) {

    se (b == 0) {
        lanca erro("Não é possível dividir por zero")
    }

    retorne a / b
}
```

Uso:

```jls
tenta {

    mostrar(dividir(10, 0))

} pegar (falha) {

    mostrar(falha.mensagem)
}
```

Um erro pode possuir informações como:

```text
tipo
mensagem
codigo
funcao
parametro
esperado
recebido
dica
causa
```

Não transforme todos os erros em:

```jls
mostrar("deu erro")
```

Quanto mais contexto você preserva, mais fácil fica descobrir o problema.

---

# 23. Código assíncrono

JLScript possui um fluxo assíncrono próprio.

Mapeamento principal:

| JLScript | Conceito conhecido |
| --- | --- |
| `fluxo func` | `async function` |
| `aguarda` | `await` |
| `tenta` | `try` |
| `pegar` | `catch` |
| `entao` | `then` |
| `fim` | `finally` |
| `lanca` | `throw` |

Exemplo:

```jls
fluxo func executar() {

    tenta {

        va resultado = aguarda algumaOperacao()

        mostrar(resultado)

    } pegar (falha) {

        mostrar(falha.mensagem)

    } fim {

        mostrar("Fim")
    }
}
```

Uma regra importante:

> `aguarda` deve ser usado dentro de contexto assíncrono.

Portanto, evite:

```jls
va res = aguarda api.get(url)
```

no topo de um programa comum.

Prefira:

```jls
fluxo func buscar() {
    va res = aguarda api.get(url)
    mostrar(res.dados)
}

buscar()
```

---

# 24. API HTTP nativa

Consumir uma API não exige importar `#api`.

O cliente HTTP faz parte do Core.

```jls
va backend = api(
    "https://api.exemplo.com"
)
```

A partir disso:

```jls
backend.get()
backend.post()
backend.put()
backend.patch()
backend.delete()
```

Os nomes dos métodos HTTP permanecem universais.

Não existe motivo para esconder `POST` atrás de um nome diferente quando todo o ecossistema HTTP já conhece `POST`.

---

# 25. GET

```jls
fluxo func usuarios() {

    tenta {

        va res = aguarda api.get(
            "https://api.exemplo.com/usuarios"
        )

        se (!res.ok) {
            lanca erro(
                "HTTP " + res.status
            )
        }

        mostrar(res.dados)

    } pegar (falha) {

        mostrar(falha.mensagem)
    }
}

usuarios()
```

---

# 26. POST

```jls
fluxo func criarUsuario() {

    va users = api(
        "https://api.exemplo.com/usuarios"
    )

    tenta {

        va res = aguarda users.post({
            nome: "Lucas",
            email: "lucas@email.com"
        })

        se (!res.ok) {
            lanca erro(
                "HTTP " + res.status
            )
        }

        mostrar(res.dados)

    } pegar (falha) {

        mostrar(falha.mensagem)
    }
}

criarUsuario()
```

Quando um Object ou List é enviado como corpo, o cliente pode serializá-lo como JSON e configurar os headers adequados.

Isso elimina a necessidade de repetir manualmente:

```text
JSON.stringify(...)
Content-Type: application/json
```

em todo request simples.

---

# 27. PUT, PATCH e DELETE

```jls
va usuarios = api(
    "https://api.exemplo.com/usuarios"
)
```

Atualização completa:

```jls
usuarios.put("/10", {
    nome: "Lucas",
    email: "novo@email.com"
})
```

Atualização parcial:

```jls
usuarios.patch("/10", {
    nome: "Lucas Aguiel"
})
```

Remoção:

```jls
usuarios.delete("/10")
```

---

# 28. Configuração do cliente HTTP

Você pode configurar um cliente:

```jls
va backend = api(
    "https://api.exemplo.com"
)

backend.cfg({
    timeout: 5000,

    headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json"
    },

    query: {
        pagina: 1
    }
})
```

Depois reutilizar:

```jls
va req = backend.get("/usuarios")
```

Isso é melhor do que repetir URL, token e configuração em todas as funções.

---

# 29. Request e Response

Uma chamada HTTP cria uma requisição.

```text
ApiClient
↓
ApiRequest
↓
ApiResponse
↓
dados
```

Exemplo:

```jls
va req = backend.get("/usuarios")
```

A requisição possui estados como:

```text
req.carregando
req.feito
req.falhou
req.cancelado
```

Depois de aguardar:

```jls
va res = aguarda req
```

a resposta fornece:

```text
res.status
res.ok
res.url
res.metodo
res.headers
res.tipo
res.tamanho
res.tempo
res.dados
```

---

# 30. `res.dados`

A JLScript tenta entregar o conteúdo em um tipo útil.

JSON:

```json
{
    "nome": "Lucas",
    "idade": 19
}
```

vira um Object JLScript.

Então:

```jls
mostrar(res.dados.nome)
```

Uma lista JSON vira List.

Texto vira String.

Corpo binário vira Bytes.

Resposta sem conteúdo pode resultar em `null`.

Também existem conversões explícitas:

```jls
res.json()
res.txt()
res.bytes()
```

Úteis quando o servidor informa um `Content-Type` errado ou quando você quer controlar a interpretação manualmente.

---

# 31. HTTP 404 não é o mesmo que falha de rede

Essa regra é importante.

Uma resposta:

```text
404
500
403
```

ainda é uma resposta HTTP.

Portanto:

```jls
res.ok
```

será:

```text
false
```

mas você ainda pode acessar:

```jls
res.status
res.dados
res.headers
```

Já problemas como:

```text
DNS
conexão
TLS
timeout
cancelamento
```

são falhas da operação e podem chegar ao tratamento de erro.

Essa separação deixa o programa decidir como tratar cada situação.

---

# 32. Pipeline HTTP

Você não é obrigado a utilizar apenas `aguarda`.

Também existe pipeline:

```jls
api("https://api.exemplo.com/usuarios")
    .get()

    .entao(func(res) {
        retorne res.dados
    })

    .entao(func(dados) {
        mostrar(dados)
    })

    .pegar(func(falha) {
        mostrar(falha.mensagem)
    })

    .fim(func() {
        mostrar("Finalizado")
    })
```

O valor retornado por um `entao` é enviado ao próximo.

```text
request
↓
response
↓
dados
↓
processamento
```

---

# 33. Bibliotecas

JLScript possui dois grupos importantes de recursos:

```text
Core
```

e:

```text
Bibliotecas oficiais
```

Recursos do Core não precisam necessariamente de import.

Exemplo:

```jls
mostrar("Olá")

arquivo.escrever("dados.txt", "JLScript")

va cliente = api("https://exemplo.com")
```

Bibliotecas oficiais usam:

```jls
import #nome
```

Exemplo:

```jls
import #math
```

---

# 34. Importando várias bibliotecas

```jls
import [
    #math,
    #json,
    #fs
]
```

Você também pode criar aliases:

```jls
import #fs como disco
```

ou:

```jls
import #fs as disk
```

Depois:

```jls
disco.write(...)
```

Quando um módulo recebe alias, use esse alias no escopo.

---

# 35. Algumas bibliotecas do ecossistema

Entre os módulos existentes estão:

| Biblioteca | Área |
| --- | --- |
| `#math` | matemática |
| `#json` | JSON |
| `#fs` | filesystem avançado |
| `#database` | banco de dados |
| `#crypto` | criptografia |
| `#process` | processos |
| `#env` | variáveis de ambiente |
| `#net` | rede |
| `#thread` | tarefas concorrentes |
| `#test` | testes |
| `#log` | logging |
| `#compress` | ZIP/GZIP |
| `#csv` | CSV |
| `#xml` | XML |
| `#cli` | aplicações de terminal |
| `#email` | SMTP |
| `#api` | servidor HTTP |
| `#ui` | interface |
| `#style` | apresentação e estilo |

A biblioteca antiga:

```text
#file
```

continua existindo por compatibilidade, mas o nome avançado atual é:

```text
#fs
```

Para operações básicas, o Core também possui:

```text
arquivo
file
```

sem import.

---

# 36. Arquivos nativos

Escrever:

```jls
arquivo.escrever(
    "dados.txt",
    "Olá JLScript"
)
```

Ler:

```jls
va conteudo = arquivo.ler(
    "dados.txt"
)

mostrar(conteudo)
```

Verificar:

```jls
se (arquivo.existe("dados.txt")) {
    mostrar("Arquivo encontrado")
}
```

Adicionar:

```jls
arquivo.adicionarLinha(
    "log.txt",
    "Aplicação iniciada"
)
```

Metadata:

```jls
va info = arquivo.info("dados.txt")

mostrar(info.tamanho)
```

A ideia é que scripts simples não precisem importar uma biblioteca inteira só para ler ou escrever um arquivo.

---

# 37. Matemática

```jls
import #math

va raiz = math.raiz(81)

mostrar(raiz)
```

Resultado:

```text
9
```

Outros exemplos:

```jls
va numeros = [5, 10, 15, 20]

mostrar(math.media(numeros))
```

Vetores:

```jls
va produto = math.produtoEscalar(
    [1, 2, 3],
    [4, 5, 6]
)

mostrar(produto)
```

Uma chamada importante:

```jls
math.subtrair(10, 2)
```

recebe dois argumentos.

Isto:

```jls
math.subtrair(10 - 2)
```

envia apenas **um argumento**, porque `10 - 2` é uma expressão calculada antes da chamada.

Entender essa diferença evita muitos erros de assinatura.

---

# 38. Criando uma API com `#api`

Consumir API é nativo.

Criar servidor utiliza `#api`.

```jls
import #api

va app = api.servidor({
    host: "127.0.0.1",
    port: 3000
})
```

Criando uma rota:

```jls
app.get("/usuarios/:id", func(req, res) {

    res.json({
        id: req.param("id")
    })
})
```

POST:

```jls
app.post("/usuarios", func(req, res) {

    va dados = req.json()

    res.status(201)

    res.json({
        criado: true,
        usuario: dados
    })
})
```

Depois:

```jls
app.iniciar()
```

A distinção oficial é:

```text
api nativa
→ consumir APIs

#api
→ criar/servir APIs
```

---

# 39. A lógica da UI

`#ui` não é HTML.

Ele constrói uma árvore visual JLScript e utiliza um renderer próprio.

```jls
import [#ui, #style]

va app = ui.janela()

app.titulo("Minha aplicação")

app.ui({

    main {

        h1("Olá mundo")

        p("Aplicação feita em JLScript")

        button("Continuar")
    }
})

app.abrir()
```

Conceitualmente:

```text
Janela
└── Documento
    └── Body automático
        └── Main
            ├── H1
            ├── P
            └── Button
```

O documento possui um `body` automático.

Você não precisa colocar:

```jls
body {
}
```

em toda interface.

---

# 40. Elementos UI

Entre os elementos disponíveis estão estruturas como:

```text
div
section
main
header
footer
nav
aside
article
```

Texto:

```text
h1 até h6
p
span
text
strong
em
small
code
pre
```

Formulários:

```text
form
input
textarea
select
option
button
checkbox
radio
switch
progress
```

Organização:

```text
ul
ol
li
details
summary
dialog
```

Tabelas:

```text
table
thead
tbody
tr
th
td
```

---

# 41. Atributos UI

Exemplo:

```jls
input(
    type="email",
    placeholder="Seu e-mail",
    required
)
```

Classes:

```jls
button(
    class="primario"
) {
    text = "Entrar"
}
```

ID:

```jls
h1(
    id="titulo"
) = "JLScript"
```

Estados booleanos incluem conceitos como:

```text
disabled
checked
selected
readonly
required
hidden
multiple
autofocus
```

com aliases em português em partes da API.

---

# 42. Style V3

Style deixou de ser apenas uma forma de estilizar UI.

Na V3, Style é um sistema de **apresentação de valores**.

```jls
va status = "Servidor online"

status.style {
    cor: #50fa7b
    negrito: true
}

mostrar(status)
```

O ponto mais importante é:

```text
status continua sendo String
```

O style não transforma o texto em uma String contendo códigos ANSI.

Ele adiciona metadata de apresentação.

```text
Value
↓
StyleMetadata
↓
Renderer
```

---

# 43. Style em qualquer valor

String:

```jls
va texto = "Sucesso"

texto.style {
    cor: #50fa7b
}
```

Número:

```jls
va progresso = 90

progresso.style {
    cor: #50fa7b
}
```

Booleano:

```jls
va conectado = true

conectado.style {
    negrito: true
}
```

Lista e objeto também podem carregar metadata de estilo.

O valor lógico continua funcionando normalmente.

---

# 44. Cores

Cores hex são valores reconhecidos:

```jls
#fff
#000
#50fa7b
#ff5555
#bd93f9
```

Exemplo:

```jls
va principal = #bd93f9

va titulo = "JLScript"

titulo.style {
    cor: principal
}
```

Também existem nomes como:

```text
branco / white
preto / black
vermelho / red
verde / green
azul / blue
```

---

# 45. Style condicional

Style utiliza a lógica normal da JLScript.

```jls
va erro = false

va mensagem = "Servidor"

mensagem.style {

    se (erro) {
        cor: #ff5555
    } senao {
        cor: #50fa7b
    }
}
```

Não existe necessidade de inventar outra linguagem apenas para decidir uma cor.

O mesmo `se/senao` do programa é utilizado.

---

# 46. Contextos de Style

Você pode separar apresentação por renderer:

```jls
va status = "Online"

status.style {

    cor: #50fa7b

    terminal {
        negrito: true
    }

    ui {
        tamanhoFonte: 18px
    }
}
```

Isso permite usar o mesmo valor em ambientes diferentes sem misturar regra de negócio com renderização.

---

# 47. Style reutilizável

```jls
import #style

va erro = style {
    cor: #ff5555
    negrito: true
}
```

Aplicação:

```jls
va mensagem = "Falhou"

mensagem.style(erro)

mostrar(mensagem)
```

Também existem recursos de composição, temas e seleção por:

```text
tipo
classe
id
```

---

# 48. Folha de estilo da UI

A UI possui uma folha própria por janela.

Exemplo:

```jls
app.style({

    button {
        cor = #fff
        fundo = #7c3aed
    }

    .primario {
        fundo = #50fa7b
    }

    #cancelar {
        fundo = #ff5555
    }
})
```

A precedência segue a ideia:

```text
default
↓
tipo
↓
classe
↓
ID
↓
inline
```

Uma regra mais específica vence uma regra mais genérica.

---

# 49. Uma regra importante sobre Style

Style deve cuidar de apresentação.

Não de regra de negócio.

### Ruim

```jls
mensagem.style {
    arquivo.remover("dados.txt")
}
```

### Correto

```jls
mensagem.style {
    se (erro) {
        cor: #ff5555
    }
}
```

A apresentação pode depender do estado.

Mas não deveria apagar arquivo, enviar requisição ou iniciar processo apenas porque um texto está sendo renderizado.

---

# 50. Regras importantes da JLScript

Estas regras merecem atenção especial.

### 1. `va`, `let` e `ins` são declarações válidas

Na versão atual, compartilham o mesmo comportamento básico.

---

### 2. Listas usam base histórica 1

```jls
lista[1]
```

é o primeiro item.

`0` também referencia o primeiro por compatibilidade.

---

### 3. Não misture idiomas sem necessidade

Escolha uma convenção.

```jls
se (...) {
} senao {
}
```

ou:

```jls
if (...) {
} else {
}
```

---

### 4. Use `#fs` em código novo

`#file` permanece como compatibilidade.

---

### 5. API cliente e servidor são conceitos diferentes

```text
api(...)
```

cliente HTTP nativo.

```text
import #api
```

recursos de servidor.

---

### 6. HTTP 404 não é falha de transporte

Sempre confira:

```jls
res.ok
```

---

### 7. `aguarda` precisa de contexto assíncrono

Use dentro de:

```jls
fluxo func
```

---

### 8. Style não modifica o valor lógico

Ele modifica a forma como o valor é apresentado.

---

### 9. UI JLScript não é DOM

Os elementos possuem aparência familiar, mas são parte da árvore visual e renderer da JLScript.

---

### 10. Nunca esconda erro importante

Capturar erro apenas para ignorá-lo geralmente cria problemas maiores.

---

# 51. Como escrever código melhor

Programar melhor não significa escrever código mais complicado.

Na maior parte do tempo significa o contrário.

## Dê nomes que expliquem o valor

Evite:

```jls
va x = 19
va a = true
va z = [...]
```

Prefira:

```jls
va idade = 19
va usuarioAtivo = true
va usuarios = [...]
```

---

# 52. Uma função deve fazer uma tarefa clara

Evite uma função gigantesca que:

```text
lê arquivo
consulta API
valida usuário
salva banco
cria UI
imprime relatório
```

Separe responsabilidades.

```jls
func validarUsuario(usuario) {
    ...
}

func salvarUsuario(usuario) {
    ...
}

func mostrarUsuario(usuario) {
    ...
}
```

Isso facilita:

```text
entender
testar
reutilizar
corrigir
```

---

# 53. Retorne valores em vez de depender de estado escondido

Prefira:

```jls
func calcularTotal(valores) {
    retorne valores.soma()
}

va total = calcularTotal(precos)
```

em vez de modificar várias variáveis externas sem necessidade.

---

# 54. Use listas como transformação de dados

Quando sua intenção for transformar:

```jls
va nomes = usuarios.mapear(func(usuario) {
    retorne usuario.nome
})
```

Quando for filtrar:

```jls
va ativos = usuarios.filtrar(func(usuario) {
    retorne usuario.ativo
})
```

Um loop continua sendo perfeitamente válido.

Use `mapear`, `filtrar` e `reduzir` quando eles deixam a intenção mais clara, não apenas porque parecem mais avançados.

---

# 55. Valide entrada antes de usar

```jls
va idadeTexto = chat("Idade: ")

se (!idadeTexto.eInteiro()) {
    lanca erro("Idade inválida")
}

va idade = idadeTexto.paraInt()
```

Não confie automaticamente em dados externos.

Isso inclui:

```text
usuário
arquivo
API
banco
env
terminal
```

---

# 56. Não repita configuração de API

Ruim:

```jls
api.get("https://api.exemplo.com/users", ...)
api.get("https://api.exemplo.com/posts", ...)
api.get("https://api.exemplo.com/comments", ...)
```

Melhor:

```jls
va backend = api(
    "https://api.exemplo.com"
)

backend.cfg({
    timeout: 5000
})
```

Depois:

```jls
backend.get("/users")
backend.get("/posts")
backend.get("/comments")
```

---

# 57. Não coloque segredo no código

Evite:

```jls
va token = "TOKEN_REAL_AQUI"
```

Prefira configuração externa e variáveis de ambiente quando possível.

Credenciais não deveriam aparecer em:

```text
Git
README
biblioteca publicada
print
log
erro
```

---

# 58. Trate o erro no nível correto

Não envolva todo o programa em um único:

```jls
tenta {
    ...
} pegar (erro) {
    mostrar("erro")
}
```

Trate perto da operação que realmente pode falhar.

Exemplo:

```jls
func carregarConfig() {

    tenta {
        retorne arquivo.ler("config.json")

    } pegar (falha) {

        lanca erro(
            "Não foi possível carregar a configuração: "
            + falha.mensagem
        )
    }
}
```

---

# 59. Código profissional é código previsível

Uma boa regra:

> Se outra pessoa precisar adivinhar o que uma função faz, o nome ou a estrutura provavelmente precisam melhorar.

Prefira:

```jls
func buscarUsuarioPorId(id)
```

a:

```jls
func fazerCoisa(x)
```

Isso parece básico.

E é justamente por isso que é tão importante.

---

# 60. Como começar um projeto JLScript

Para projetos pequenos, comece simples.

```text
meu-projeto/
│
├── main.jls
├── dados/
├── config/
└── tests/
```

Não crie vinte pastas antes de existir código suficiente para justificar vinte pastas.

Comece com:

```text
main.jls
```

Quando crescer, separe.

Uma evolução comum:

```text
src/
├── main.jls
├── usuarios.jls
├── config.jls
└── api.jls
```

O objetivo da organização é facilitar o trabalho.

Não impressionar quem abrir o Explorer.

---

# 61. Pequeno projeto — Verificador de senha

```jls
va senhaCorreta = "12345"

va senha = chat(
    "Digite a senha: "
)

se (senha == senhaCorreta) {

    mostrar("Acesso permitido")

} senao {

    mostrar("Senha incorreta")
}
```

Esse projeto ensina:

```text
variável
entrada
comparação
if/se
saída
```

---

# 62. Pequeno projeto — Estatísticas

```jls
va notas = [
    8,
    10,
    7,
    9
]

va media = notas.media()
va maior = notas.maximo()
va menor = notas.minimo()

mostrar(
    "Média: " + str(media)
)

mostrar(
    "Maior: " + str(maior)
)

mostrar(
    "Menor: " + str(menor)
)
```

Aqui você pratica:

```text
listas
métodos
números
variáveis
conversão
```

---

# 63. Pequeno projeto — Filtrar usuários

```jls
va usuarios = [

    {
        nome: "Lucas",
        ativo: true
    },

    {
        nome: "Ana",
        ativo: false
    },

    {
        nome: "Pedro",
        ativo: true
    }
]

va ativos = usuarios.filtrar(
    func(usuario) {
        retorne usuario.ativo
    }
)

ativos.paraCada(
    func(usuario) {
        mostrar(usuario.nome)
    }
)
```

Esse pequeno projeto já trabalha com:

```text
lista
objeto
função
callback
filtro
iteração
```

---

# 64. Pequeno projeto — Consultar API

```jls
fluxo func carregarUsuarios() {

    va backend = api(
        "https://api.exemplo.com"
    )

    tenta {

        va res = aguarda backend.get(
            "/usuarios"
        )

        se (!res.ok) {

            lanca erro(
                "Servidor respondeu "
                + str(res.status)
            )
        }

        res.dados.paraCada(
            func(usuario) {
                mostrar(usuario.nome)
            }
        )

    } pegar (falha) {

        mostrar(
            "Não foi possível carregar: "
            + falha.mensagem
        )

    } fim {

        mostrar("Consulta finalizada")
    }
}

carregarUsuarios()
```

Esse exemplo reúne boa parte da linguagem:

```text
função assíncrona
API
await
erro
if
objeto
lista
callback
```

---

# 65. Pequeno projeto — Interface

```jls
import [#ui, #style]

va app = ui.janela()

app.titulo(
    "Meu primeiro app"
)

app.ui({

    main(class="pagina") {

        h1("JLScript")

        p(
            "Meu primeiro projeto visual"
        )

        input(
            placeholder="Digite seu nome"
        )

        button(
            class="primario"
        ) {
            text = "Continuar"
        }
    }
})

app.style({

    .pagina {
        padding = 24px
    }

    .primario {
        fundo = #7c3aed
        cor = #fff
        raio = 8px
    }
})

app.abrir()
```

Aqui entram:

```text
bibliotecas
janela
árvore UI
atributos
classes
Style
renderer
```

---

# 66. Como evoluir de iniciante para projetos maiores

Uma progressão saudável é:

```text
1. valores e variáveis
↓
2. condições
↓
3. loops
↓
4. funções
↓
5. listas e objetos
↓
6. arquivos
↓
7. tratamento de erros
↓
8. bibliotecas
↓
9. APIs
↓
10. UI
↓
11. projetos completos
```

Não existe vantagem em tentar aprender tudo ao mesmo tempo.

Aprender programação significa construir uma ideia em cima da outra.

---

# 67. O que um bom programador JLScript deve saber

Você não precisa decorar cada método da linguagem.

Precisa entender:

```text
como guardar dados
como transformar dados
como tomar decisões
como repetir operações
como separar código em funções
como tratar erros
como usar bibliotecas
como ler documentação
como depurar um problema
```

Depois disso, métodos específicos podem ser consultados conforme necessário.

Essa habilidade é mais útil do que decorar 200 nomes de funções.

---

# 68. Quando seu código começar a ficar ruim

Alguns sinais:

```text
função com centenas de linhas
muitas variáveis com nomes x, y, z
mesmo código copiado várias vezes
if dentro de if dentro de if
erros ignorados
URLs repetidas
tokens dentro do código
uma função fazendo cinco trabalhos
objetos sendo modificados em dezenas de lugares
```

Quando perceber isso, não continue adicionando código por cima.

Refatore.

Separe responsabilidades.

Dê nomes melhores.

Crie funções menores.

Remova duplicação.

O melhor momento para organizar um programa não é depois que ninguém mais entende o que ele faz.

---

# 69. Uma regra para projetos JLScript

Ao criar qualquer recurso, tente responder quatro perguntas:

```text
Qual dado entra?

O que eu faço com ele?

O que pode dar errado?

Qual resultado deve sair?
```

Exemplo:

```text
Entrada:
ID do usuário

Processamento:
GET /usuarios/:id

Possíveis erros:
timeout
404
JSON inválido

Saída:
objeto usuario
```

Depois disso, o código praticamente começa a se organizar sozinho.

---

# 70. O objetivo da sintaxe JLScript

JLScript não tenta criar nomes diferentes apenas para parecer diferente.

HTTP continua usando:

```text
GET
POST
PUT
PATCH
DELETE
```

JSON continua sendo JSON.

Uma API continua tendo:

```text
request
response
status
headers
body
```

Uma lista continua tendo:

```text
map
filter
reduce
```

com aliases em português:

```text
mapear
filtrar
reduzir
```

A identidade da linguagem está em tornar esses conceitos próximos do programador sem esconder o que eles realmente significam.

---

<div align="center">

# JLScript 4.2.0

## Parte 3 — Terminal, ferramentas e ecossistema

### JLShell · CLI · comandos · projetos · pacotes · JLS AI · Registry · VS Code

> Escrever código é apenas metade do trabalho.  
> A outra metade é executar, testar, organizar, corrigir, compilar e manter esse código.

</div>

---

# Antes de começar

Na Parte 2 vimos a lógica da linguagem.

Agora muda o foco.

Aqui não estamos mais perguntando apenas:

> “Como escrevo JLScript?”

A pergunta passa a ser:

> **“Como trabalho com JLScript todos os dias?”**

É aí que entram:

```text
JLShell
CLI
VS Code
JLS AI
Package Manager
Preview
Build
Registry
```

Essas ferramentas não deveriam funcionar como produtos separados.

A ideia da JLScript é que todas elas façam parte do mesmo ambiente.

```text
                  JLScript
                     │
        ┌────────────┼────────────┐
        │            │            │
     JLShell        CLI         VS Code
        │            │            │
        ├──────── Runtime ─────────┤
        │                         │
      JLS AI                   Preview
        │
     Registry
```

O runtime continua sendo a fonte principal de execução.

---

# Escolha o que você quer fazer

<details open>
<summary><strong>▶ Quero apenas executar um arquivo .jls</strong></summary>

<br>

Use:

```bash
jls run main.jls
```

Ou, dependendo do contexto:

```bash
jls main.jls
```

No VS Code, use **Executar JLS**.

</details>

<details>
<summary><strong>⌨ Quero programar diretamente no terminal</strong></summary>

<br>

Abra o JLShell:

```bash
jls
```

ou:

```bash
jls repl
```

Você entra em uma sessão persistente onde variáveis, funções e imports continuam disponíveis.

</details>

<details>
<summary><strong>🧪 Quero testar meu projeto</strong></summary>

<br>

```bash
jls test
```

Para analisar código:

```bash
jls lint arquivo.jls
```

Para formatar:

```bash
jls fmt arquivo.jls
```

</details>

<details>
<summary><strong>📦 Quero instalar uma dependência</strong></summary>

<br>

```bash
jls install nome-do-pacote
```

Exemplo:

```bash
jls install postgresql
```

</details>

<details>
<summary><strong>🤖 Quero usar a JLS AI</strong></summary>

<br>

```bash
jls ai
```

Também pode ser acessada dentro do JLShell:

```text
.ai
```

</details>

<details>
<summary><strong>🖥 Quero abrir uma interface JLScript</strong></summary>

<br>

Execute normalmente:

```bash
jls run app.jls
```

ou use o preview:

```bash
jls preview app.jls
```

</details>

<details>
<summary><strong>🏗 Quero gerar uma aplicação</strong></summary>

<br>

O fluxo de build utiliza:

```bash
jls build
```

e opções específicas de target quando necessárias.

</details>

---

# 1. O que é o JLShell?

JLShell é o terminal interativo oficial da JLScript.

Ele não foi pensado apenas como:

```text
prompt que executa uma linha
```

A ideia é que ele funcione como um ambiente persistente de desenvolvimento.

Você abre:

```bash
jls
```

ou:

```bash
jls repl
```

e entra em uma sessão JLScript.

Exemplo:

```jls
va x = 10
```

Depois:

```jls
x
```

Resultado:

```text
10
```

Depois:

```jls
x + 5
```

Resultado:

```text
15
```

A variável continua existindo.

Isso é importante.

O JLShell mantém contexto.

---

# 2. Sessão persistente

Considere:

```jls
va nome = "Lucas"

func ola() {
    mostrar("Olá, " + nome)
}
```

Mais tarde, na mesma sessão:

```jls
ola()
```

continua funcionando.

Você não precisa redefinir tudo a cada linha.

O mesmo vale para:

```text
variáveis
funções
imports
objetos
listas
estado da sessão
```

até que a sessão seja encerrada ou resetada.

---

# 3. `clear` não é `reset`

Essa diferença é importante.

## `clear`

```text
clear
```

limpa a tela.

Mas preserva:

```text
variáveis
funções
imports
histórico
contexto
```

Exemplo:

```jls
va numero = 100
```

Depois:

```text
clear
```

E:

```jls
numero
```

continua retornando:

```text
100
```

---

## `.reset`

```text
.reset
```

reinicia o contexto da sessão.

Variáveis e funções da sessão deixam de existir.

Use quando realmente quiser começar novamente.

---

# 4. Comandos internos do JLShell

Comandos especiais normalmente começam com:

```text
.
```

Exemplo:

```text
.help
```

Eles controlam o ambiente do JLShell.

Isso é diferente de código JLScript.

```jls
mostrar("Olá")
```

é código.

```text
.help
```

é comando do shell.

---

# 5. Ajuda

Use:

```text
.help
```

para visualizar os comandos disponíveis.

Para um comando específico:

```text
.help run
```

ou:

```text
.help build
```

O sistema de ajuda utiliza o registro real de comandos.

A ideia é evitar uma documentação dizendo uma coisa enquanto o terminal implementa outra.

---

# 6. Comandos de sessão

<details>
<summary><strong>Ver comandos da sessão</strong></summary>

<br>

Alguns comandos importantes:

```text
.editor
.break
.reset
.vars
.modules
.history
.debug
.version
.info
.status
.context
clear
sair
```

### `.vars`

Lista variáveis da sessão:

```text
.vars
```

Para inspecionar uma:

```text
.vars nome
```

### `.modules`

Mostra módulos carregados:

```text
.modules
```

### `.history`

Mostra o histórico:

```text
.history
```

### `.status`

Mostra informações da sessão:

```text
.status
```

### `.version`

```text
.version
```

mostra a versão do ambiente.

</details>

---

# 7. Editor multilinha

Para escrever blocos maiores diretamente no terminal:

```text
.editor
```

Depois você pode escrever:

```jls
func calcular(a, b) {

    va resultado = a + b

    retorne resultado
}
```

O editor continua acumulando o bloco.

Quando terminar, conclua com:

```text
Ctrl + D
```

Para cancelar:

```text
Ctrl + C
```

ou:

```text
.break
```

---

# 8. Atalhos do JLShell

| Ação | Atalho |
| --- | --- |
| Cursor | `←` / `→` |
| Palavra anterior/próxima | `Ctrl + ← / →` |
| Início da linha | `Home` |
| Fim da linha | `End` |
| Histórico | `↑ / ↓` |
| Busca no histórico | `Ctrl + R` |
| Sugestões | `Tab` |
| Sugestões alternativas | `Ctrl + Space` |
| Próxima sugestão | `Tab / ↓` |
| Sugestão anterior | `Shift + Tab / ↑` |
| Aceitar | `Enter` |
| Fechar sugestões | `Esc` |
| Limpar terminal | `Ctrl + L` |
| Interromper execução | `Ctrl + C` |
| Sair com linha vazia | `Ctrl + D / Ctrl + Z` |

---

# 9. Autocomplete

O JLShell possui autocomplete contextual.

Imagine:

```jls
va usuarios = []
```

Depois:

```text
usuarios.
```

O shell pode sugerir métodos compatíveis com List.

Exemplos:

```text
adicionar
remover
mapear
filtrar
reduzir
tamanho
```

O autocomplete utiliza metadata da própria linguagem.

Isso é importante porque evita manter manualmente uma lista diferente no terminal.

---

# 10. Destaque em tempo real

Com cores habilitadas, o shell consegue diferenciar comandos reconhecidos enquanto você digita.

Conceitualmente:

```text
comando conhecido   → destaque
comando desconhecido → aviso visual
```

Isso não executa nada.

É apenas apresentação.

O parser oficial continua sendo responsável por dizer se o código realmente está correto.

---

# 11. Arquivos e projetos dentro do JLShell

<details>
<summary><strong>Comandos para arquivos e projeto</strong></summary>

<br>

```text
.load "arquivo.jls"
.run "arquivo.jls"
.reload
.time <codigo>

.build
.compile
.test
.fmt
.lint
.preview
```

### Executar

```text
.run "main.jls"
```

### Recarregar

```text
.reload
```

### Medir execução

```text
.time mostrar("teste")
```

### Testar

```text
.test
```

### Lint

```text
.lint
```

### Formatador

```text
.fmt
```

### Preview

```text
.preview
```

Esses comandos devem encaminhar para os mesmos mecanismos utilizados pela CLI.

Não existe uma segunda linguagem escondida dentro do JLShell.

</details>

---

# 12. Diretório atual

Mostrar:

```text
.cwd
```

Alterar:

```text
.cd "D:/projetos/meu-app"
```

Isso permite trabalhar no projeto sem sair do shell.

---

# 13. Comandos de arquivos do terminal

O JLShell também possui utilitários como:

```text
.ls
.dir
.tree
.cat
.open
.which
.where
```

Exemplo:

```text
.tree
```

pode ajudar a visualizar a estrutura do projeto.

```text
.cat "config.json"
```

pode visualizar um arquivo textual.

---

# 14. Comandos do sistema operacional

Por segurança, texto desconhecido não é enviado automaticamente ao sistema operacional.

Isso:

```text
git status
```

não deveria simplesmente virar comando de sistema.

Para executar externamente:

```text
! git status
```

Outro exemplo:

```text
! npm --version
```

O prefixo:

```text
!
```

deixa sua intenção explícita.

Essa é uma regra de segurança importante.

---

> [!WARNING]
> Um comando depois de `!` deixa de ser código JLScript e passa a poder executar um programa do sistema operacional.
>
> Leia o comando antes de confirmar ou executar.

---

# 15. Por que não executar tudo automaticamente?

Imagine digitar por engano:

```text
remove alguma-coisa
```

Se todo texto desconhecido fosse enviado para o shell do sistema, um erro de sintaxe poderia virar uma operação real no computador.

Então o JLShell segue uma regra simples:

```text
JLScript é JLScript

comando externo precisa ser explícito
```

---

# 16. Informações do sistema

O shell também possui comandos de diagnóstico:

```text
.system info
.system cpu
.system memory
.system disk
.system network
.system processes
```

Exemplo:

```text
.system memory
```

é útil para verificar ambiente quando você está testando algo mais pesado.

---

# 17. CLI JLScript

O JLShell é interativo.

A CLI é usada diretamente no terminal do sistema:

```bash
jls <comando>
```

Exemplo:

```bash
jls run main.jls
```

A ideia é que CLI e JLShell compartilhem os mesmos handlers sempre que possível.

---

# 18. Comandos principais

<details open>
<summary><strong>Execução e desenvolvimento</strong></summary>

<br>

```bash
jls run arquivo.jls
jls repl
jls preview arquivo.jls
```

</details>

<details>
<summary><strong>Análise de código</strong></summary>

<br>

```bash
jls lint arquivo.jls
jls fmt arquivo.jls
jls fmt --check arquivo.jls
```

</details>

<details>
<summary><strong>Testes</strong></summary>

<br>

```bash
jls test
```

</details>

<details>
<summary><strong>Build</strong></summary>

<br>

```bash
jls build
jls compile
jls clean
```

</details>

<details>
<summary><strong>Projeto</strong></summary>

<br>

```bash
jls new
jls init
```

</details>

<details>
<summary><strong>Diagnóstico</strong></summary>

<br>

```bash
jls doctor
jls --version
jls --help
```

</details>

---

# 19. Help da CLI

Sempre que não lembrar de uma opção:

```bash
jls --help
```

Para um comando:

```bash
jls build --help
```

ou:

```bash
jls run --help
```

Isso deveria ser sua primeira tentativa antes de procurar internamente no projeto.

---

# 20. `run`

Forma básica:

```bash
jls run main.jls
```

Arquivos interativos podem precisar de terminal real.

Exemplos:

```text
chat()
#ui
CLI interativa
servidor
processo
```

A integração do VS Code analisa o programa e escolhe o ambiente adequado quando o modo automático está ativo.

---

# 21. Build

Um projeto pode ser construído por:

```bash
jls build
```

ou com opções específicas:

```bash
jls build app.jls --target windows --release
```

Modo debug:

```bash
jls build app.jls --target windows --debug
```

Antes do executável final existir, o pipeline precisa validar:

```text
sintaxe
imports
dependências
target
assets
configuração
```

Não faz sentido criar um executável de um programa que nem passa pelo parser.

---

# 22. Preview

Para interfaces:

```bash
jls preview app.jls
```

Também existem opções de viewport/target em partes do sistema.

Exemplo conceitual:

```bash
jls preview app.jls --device mobile --platform windows
```

Preview deve usar a mesma base de UI/Style da aplicação.

Caso contrário aparece o clássico:

> funciona no preview, quebra no app.

Uma tradição da computação que JLScript não precisa herdar.

---

# 23. Package Manager

JLScript possui gerenciamento de pacotes e providers.

Instalar:

```bash
jls install postgresql
```

Versão específica:

```bash
jls install postgresql@1.0.0
```

Última versão disponível:

```bash
jls install postgresql@latest
```

---

# 24. Confirmações

Para confirmar automaticamente:

```bash
jls install postgresql --yes
```

Forma curta:

```bash
jls install postgresql -y
```

Ver o que aconteceria sem escrever nada:

```bash
jls install postgresql --dry-run
```

Esse é um comando excelente antes de alterações maiores.

---

# 25. Outros comandos de pacote

```bash
jls uninstall postgresql
jls update postgresql
jls list
jls search database
jls info postgresql
```

Atualizar dependências:

```bash
jls update --packages
```

---

# 26. Manifesto e lock

Projetos maiores podem trabalhar com:

```text
jls.json
jls.lock
```

`jls.json` descreve o projeto e suas dependências.

`jls.lock` registra versões resolvidas de forma mais precisa.

Isso ajuda a evitar:

```text
funciona no meu computador
```

mas quebra no computador de outra pessoa porque uma dependência mudou.

---

# 27. Criando comandos próprios com `#cli`

A própria JLScript pode criar aplicações de terminal.

```jls
import #cli

va app = cli.criar(
    "minha-ferramenta"
)
```

A API de CLI possui conceitos como:

```text
comando
arg
flag
versao
executar
```

Argumentos podem chegar depois do arquivo:

```bash
jls run app.jls ola --nome Lucas
```

A ideia é construir ferramentas de terminal usando JLScript em vez de precisar escrever o CLI em outra linguagem.

---

# 28. O objetivo futuro dos comandos extensíveis

Uma direção importante do ecossistema é permitir bibliotecas registrarem funcionalidades e comandos de forma organizada.

Conceitualmente:

```text
biblioteca
↓
metadata
↓
Command Registry
↓
JLShell / CLI
```

Isso evita alterar o C++ do runtime só para adicionar uma ferramenta de alto nível.

---

# 29. Configuração

Abra:

```bash
jls config
```

A configuração concentra preferências de:

```text
terminal
JLS AI
permissões
comportamento
```

---

# 30. Configuração do terminal

```bash
jls config terminal
```

Ler:

```bash
jls config get terminal.promptStyle
```

Alterar:

```bash
jls config set terminal.promptStyle context
```

Outro exemplo:

```bash
jls config set terminal.historyLimit 1000
```

Tema:

```bash
jls config set terminal.theme jls
```

---

# 31. Preferências do JLShell

Entre as configurações existentes estão conceitos como:

| Configuração | Uso |
| --- | --- |
| `theme` | tema |
| `promptStyle` | aparência do prompt |
| `inlineSuggestions` | sugestões inline |
| `syntaxHighlight` | cores da sintaxe |
| `bracketMatching` | destaque de delimitadores |
| `completionMenu` | menu de autocomplete |
| `history` | histórico |
| `historyLimit` | limite do histórico |
| `gitContext` | contexto Git |
| `externalCommands` | comandos com `!` |
| `vscodeBridge` | ponte com VS Code |
| `scrollFollowInput` | acompanhar entrada |

---

# 32. Temas do JLShell

Exemplos:

```text
inherit
dark
light
mono
jls
```

Você pode configurar:

```bash
jls config set terminal.theme jls
```

---

# 33. Prompt

O prompt pode ser mais simples ou trazer contexto.

Exemplo conceitual:

```text
D:\projeto >
```

ou:

```text
JLScript · meu-projeto · main >
```

O objetivo é mostrar contexto útil sem transformar cada linha em painel de avião.

---

# 34. VS Code + JLShell

A extensão pode abrir o JLShell diretamente.

Comandos disponíveis incluem:

```text
JLScript: Abrir JLShell

JLScript: Executar arquivo no JLShell
```

O botão normal de execução utiliza o runtime JLScript.

Programas que precisam de interação podem ser enviados ao terminal.

Programas simples podem usar Output.

---

# 35. Execução inteligente

A extensão consegue classificar o programa antes de executar.

Exemplo:

```text
programa simples
→ Output

chat()
→ terminal

#ui
→ terminal

CLI
→ terminal

servidor
→ terminal
```

A análise serve apenas para escolher o ambiente.

Ela não executa o programa durante a análise.

---

# 36. JLS AI

JLS AI é o assistente integrado ao ecossistema JLScript.

Abra:

```bash
jls ai
```

Também:

```text
.ai
```

dentro do JLShell.

Outros atalhos podem encaminhar para o mesmo diálogo:

```text
jlsai
jlai
```

---

# 37. O papel da JLS AI

JLS AI não é necessária para executar JLScript.

Ela é uma camada de assistência.

Pode ajudar com:

```text
explicação
código
diagnóstico
autocomplete
erros
propostas de alteração
execução assistida
```

Se a IA não estiver configurada, o runtime JLScript continua existindo.

Essa separação é importante.

---

# 38. Três papéis de modelo

A arquitetura da JLS AI pode utilizar modelos diferentes para funções diferentes:

```text
chat
code
agent
```

### Chat

Conversa e explicação.

### Code

Código, completions e análise.

### Agent

Propostas de ações, correções e operações assistidas.

Isso permite escolher modelos diferentes conforme a tarefa.

---

# 39. Iniciando conversa

```bash
jls ai
```

Depois escreva normalmente:

```text
Como faço uma função em JLScript?
```

A resposta chega em streaming.

---

# 40. Comandos dentro da conversa

<details>
<summary><strong>Modo agente</strong></summary>

<br>

Alternar:

```text
/agent
```

ou:

```text
/agente
```

Forçar ativado:

```text
/agent on
```

Desativar:

```text
/agent off
```

</details>

<details>
<summary><strong>Executar um comando explícito</strong></summary>

<br>

```text
/exec jls --version
```

O comando é explícito.

Você não precisa pedir para o modelo inventar o comando.

</details>

<details>
<summary><strong>Configuração</strong></summary>

<br>

```text
/config
```

Exemplo:

```text
/config speed fast
```

```text
/config speed balanced
```

```text
/config speed quality
```

</details>

<details>
<summary><strong>Memória e histórico</strong></summary>

<br>

```text
/memory
/cache

/memory clear
/history clear
/cache clear
```

</details>

---

# 41. Limpar a tela da IA

Dentro da sessão:

```text
clear
```

pode limpar a apresentação da conversa conforme o modo/configuração.

Para retornar ao JLShell:

```text
sair
```

---

# 42. Permissões da JLS AI

A JLS AI deve separar ações diferentes.

Conversar não significa automaticamente permitir:

```text
ler arquivo
enviar arquivo
executar comando
alterar arquivo
aplicar diff
```

Essas ações precisam respeitar permissões próprias.

Isso evita transformar:

> “me explica esse erro”

em:

> “alterei metade do projeto enquanto você piscava”.

---

# 43. Execução pelo agente

Quando o agente propõe executar algo, a proposta deve mostrar o comando.

Exemplo:

```text
jls test
```

O usuário pode revisar.

Só depois a operação é autorizada.

Não existe motivo para esconder o comando real.

---

# 44. Uma ação por pedido

O agente atual é deliberadamente limitado.

Uma proposta pode executar uma ação autorizada.

Isso é diferente de entregar controle irrestrito do computador para um loop autônomo.

Para ferramentas de desenvolvimento, previsibilidade costuma valer mais do que espetáculo.

---

# 45. JLS AI e arquivos

Existem comandos voltados a análise de arquivos.

Exemplo:

```bash
jls ai explain arquivo.jls
```

Para diagnóstico do parser:

```bash
jls ai check arquivo.jls
```

Para pedir correção assistida:

```bash
jls ai fix arquivo.jls
```

Essas operações possuem implicações diferentes.

`check`, por exemplo, pode utilizar o parser oficial sem necessariamente precisar pedir uma resposta ao modelo.

---

# 46. Configurando provedores

A JLS AI pode trabalhar com diferentes provedores.

O arquivo de ambiente pode ser localizado por:

```bash
jls ai env
```

Para escolher outro:

```bash
jls ai env use "D:/config/jls-ai.env"
```

O arquivo contém configuração e credenciais.

Ele não deveria entrar no Git.

---

# 47. Modelos

Listar:

```bash
jls ai models
```

Escolher:

```bash
jls ai model NOME
```

Status:

```bash
jls ai status
```

---

# 48. GGUF local

Também existe suporte para modelos GGUF locais através de um engine compatível.

Exemplo conceitual:

```bash
jls ai gguf chat "conversa.gguf"
jls ai gguf code "codigo.gguf"
jls ai gguf agent "agente.gguf"
```

Configurar o engine:

```bash
jls ai gguf engine "llama-server.exe"
```

Consultar:

```bash
jls ai gguf
```

Assim você pode separar:

```text
modelo para conversar
modelo para programar
modelo para agente
```

---

# 49. JLS AI e Copilot

A integração com VS Code pode fornecer sugestões inline.

A ideia é:

```text
código atual
+
metadata JLScript
+
contexto permitido
↓
sugestão
```

Mas sugestões locais da própria extensão não precisam obrigatoriamente de IA.

Autocomplete da linguagem e Copilot são coisas diferentes.

---

# 50. Autocomplete não é IA

Essa distinção é importante.

Quando você escreve:

```jls
lista.
```

e aparece:

```text
adicionar
mapear
filtrar
```

isso pode vir da metadata oficial da linguagem.

Não significa que um modelo de IA precisou pensar na resposta.

Esse tipo de autocomplete deve continuar funcionando mesmo sem API de IA.

---

# 51. Registry de pacotes x JLS Registry

Existe uma diferença importante.

## Package Registry

É a infraestrutura usada pelo gerenciador de pacotes/providers.

Exemplo:

```bash
jls install postgresql
```

## JLS Registry

É a ideia maior de um serviço conectado ao ecossistema para publicar bibliotecas e APIs JLScript.

Eles não devem ser confundidos.

---

# 52. JLS Registry

> [!CAUTION]
> **O JLS Registry descrito nesta seção ainda está em desenvolvimento e não deve ser tratado como serviço pronto.**

A ideia do Registry é criar uma ponte entre:

```text
programador
↓
JLShell
↓
Registry
↓
bibliotecas / APIs
↓
outros projetos JLScript
```

O objetivo é permitir publicar recursos diretamente do ambiente JLScript.

---

# 53. Fluxo pensado para login

Conceito:

```bash
jlsr login google
```

ou:

```bash
jlsr login github
```

Atalhos planejados:

```text
g
gh
f
```

para provedores suportados.

O terminal gera/recebe uma autorização e o navegador confirma a conta.

A ideia é evitar copiar tokens manualmente sem necessidade.

---

# 54. Publicando biblioteca

Fluxo conceitual:

```bash
jlsr send minha-lib.jls --lib
```

Antes da publicação, o sistema deve verificar:

```text
login
nome
versão
arquivo
sintaxe
metadata
conflitos
segurança
```

Se o código não for válido, publicação deve falhar.

Não faz sentido armazenar biblioteca quebrada apenas porque o upload chegou ao servidor.

---

# 55. Publicando API

Conceito:

```bash
jlsr send api.jls --api
```

API e biblioteca são dois tipos diferentes.

O Registry não precisa virar uma gaveta genérica de qualquer arquivo.

O foco é:

```text
biblioteca
API
```

---

# 56. Verificando uma publicação

Conceito:

```bash
jlsr minha-api --api check
```

ou:

```bash
jlsr minha-lib --lib check
```

Para APIs hospedadas futuramente, também foi pensado algo na linha de:

```bash
jlsr minha-api --api port
```

Esses comandos representam o desenho do sistema.

Não são apresentados aqui como garantia de serviço público já operacional.

---

# 57. Configurações do Registry

A ideia também inclui:

```bash
jlsr setting
```

para configurações como:

```text
segurança
confirmações
publicação
criptografia
conta
```

Operações sensíveis devem exigir confirmação clara.

---

# 58. Instalação de bibliotecas publicadas

O objetivo futuro é aproximar:

```bash
jls install biblioteca
```

do Registry/ecossistema.

Fluxo:

```text
buscar
↓
resolver versão
↓
validar pacote
↓
verificar integridade
↓
instalar
↓
registrar lock
```

A instalação não deveria ser simplesmente “baixar um ZIP e torcer”.

---

# 59. Como tudo se conecta

```text
                   VS Code
                      │
                      ▼
                  JLShell
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
       Runtime      JLS AI       CLI
          │                       │
          │                       ▼
          │                   Packages
          │
          ├─────────────┐
          │             │
          ▼             ▼
         UI          API/Server
          │
          ▼
       Preview

              Futuro
                │
                ▼
           JLS Registry
```

---

# 60. Um fluxo real de desenvolvimento

Imagine que você quer criar:

```text
meu-app/
```

Primeiro:

```bash
jls init
```

Depois escreve:

```text
main.jls
```

Executa:

```bash
jls run main.jls
```

Analisa:

```bash
jls lint main.jls
```

Formata:

```bash
jls fmt main.jls
```

Testa:

```bash
jls test
```

Se tiver interface:

```bash
jls preview main.jls
```

Depois:

```bash
jls build
```

Esse é o tipo de fluxo que a CLI tenta organizar.

---

# 61. Trabalhando dentro do JLShell

Também seria possível ficar dentro da sessão:

```text
.run "main.jls"

.lint

.test

.preview

.build
```

O objetivo é evitar sair constantemente do ambiente para tarefas básicas.

---

# 62. Quando usar CLI e quando usar JLShell?

Use a CLI quando:

```text
script automatizado
CI
comando único
build
instalação
execução externa
```

Use JLShell quando:

```text
exploração
REPL
debug
teste manual
sessão persistente
desenvolvimento interativo
```

Nenhum substitui completamente o outro.

---

# 63. Quando usar JLS AI?

Use quando você precisa:

```text
entender erro
revisar código
explicar recurso
gerar ideia
propor correção
analisar saída
```

Não use como substituto de:

```text
parser
testes
lint
documentação
controle de versão
```

A IA pode sugerir.

O runtime decide se o código realmente funciona.

---

# 64. Regra de ouro: teste o que a IA escreveu

Mesmo quando uma resposta parece perfeita:

```bash
jls lint arquivo.jls
jls test
```

Depois execute.

Código convincente ainda pode estar errado.

Essa frase vale para qualquer linguagem, qualquer modelo e, infelizmente, praticamente qualquer ser humano com acesso a teclado.

---

# 65. Dicas importantes para usar o terminal melhor

## Aprenda `.help`

Não tente decorar todos os comandos.

```text
.help
```

existe justamente para isso.

---

## Use histórico

Se acabou de executar um comando grande:

```text
↑
```

é melhor do que digitar tudo novamente.

---

## Use `Ctrl + R`

Procure no histórico em vez de repetir comandos manualmente.

---

## Não confunda `clear` com `.reset`

```text
clear
```

limpa visual.

```text
.reset
```

limpa contexto.

---

## Use `.vars`

Quando estiver perdido sobre o estado da sessão:

```text
.vars
```

---

## Use `.status`

Para descobrir o estado do ambiente antes de culpar o código.

Às vezes o problema é realmente o código.

Às vezes é o terminal.

E às vezes, numa demonstração excepcional de cooperação, são os dois.

---

# 66. Dicas para escrever comandos melhores

Se você criar uma CLI com JLScript:

### Tenha `--help`

O usuário não deveria precisar abrir seu código para descobrir como usar o programa.

### Tenha mensagens de erro claras

Ruim:

```text
erro
```

Melhor:

```text
Arquivo config.json não encontrado.
Use --config <arquivo> ou crie config.json no diretório atual.
```

### Use exit codes corretamente

Automação depende deles.

### Não misture saída normal com erro

Quando possível, mantenha a separação conceitual.

### Não peça confirmação em CI

Ofereça opções como:

```text
--yes
--dry-run
```

---

# 67. Mais dicas para ser um programador melhor

## Entenda a ferramenta antes de automatizá-la

Se você não consegue explicar manualmente o processo, automatizar costuma apenas esconder a confusão.

---

## Leia a mensagem de erro inteira

Programadores têm uma tradição quase religiosa de ler a primeira linha e ignorar as oito linhas que explicam exatamente o problema.

Evite essa tradição.

---

## Corrija a causa, não apenas o sintoma

Se toda execução exige reiniciar o terminal, não aceite isso como “normal”.

Descubra por quê.

Esse princípio foi importante no próprio desenvolvimento do JLShell.

---

## Teste o caminho feliz e o caminho ruim

Não teste apenas:

```text
arquivo existe
API responde 200
usuário digita corretamente
```

Teste também:

```text
arquivo não existe
API responde 500
timeout
entrada inválida
permissão negada
```

---

## Escreva programas que expliquem seus erros

Uma aplicação profissional não deve simplesmente morrer.

Ela deve dizer:

```text
o que aconteceu
onde aconteceu
o que era esperado
o que pode ser feito
```

---

# 68. Não dependa da memória

Se uma configuração é importante para o projeto, registre-a.

Use:

```text
manifest
config
lockfile
documentação
```

Não:

> “eu lembro como configurei isso três meses atrás.”

Você não vai lembrar.

Ninguém lembra.

---

# 69. Antes de instalar alguma coisa

Pergunte:

```text
eu realmente preciso disso?
```

Uma dependência nova traz:

```text
código
versão
manutenção
bugs
segurança
compatibilidade
```

Uma biblioteca útil vale a pena.

Uma dependência usada para evitar escrever três linhas talvez não.

---

# 70. Use `--dry-run`

Quando disponível:

```bash
jls install pacote --dry-run
```

Veja o plano antes da alteração.

Essa prática é especialmente útil em:

```text
instalações
atualizações
builds
deploys
migrações
```

---

# 71. Proteja credenciais

Nunca coloque:

```text
API key
token
senha
credencial
```

diretamente em:

```text
README
Git
biblioteca pública
comando compartilhado
screenshot
log
```

Use configuração apropriada.

---

# 72. Não execute comando que você não entende

Especialmente:

```text
! alguma-coisa-enorme
```

e propostas de agente.

Leia.

Entenda pelo menos:

```text
programa
argumentos
diretório
efeito esperado
```

Depois execute.

---

# 73. Deixe o terminal ajudar

Use:

```text
autocomplete
history
help
doctor
status
lint
test
```

Essas ferramentas existem para reduzir erro humano.

Não existe prêmio por fazer tudo manualmente.

---

# 74. Não trate warning como decoração

Um warning normalmente significa:

> “Ainda funciona, mas existe alguma coisa suspeita.”

Ignorar todos os warnings porque o programa “roda” é uma excelente estratégia para criar um problema que aparece três semanas depois.

---

# 75. Tenha pequenos ciclos

Em vez de:

```text
programar por 4 horas
↓
executar
↓
descobrir 37 erros
```

prefira:

```text
alteração pequena
↓
run
↓
lint
↓
test
↓
próxima alteração
```

Isso reduz muito o espaço onde o bug pode estar.

---

# 76. Não faça build final para testar sintaxe

Durante desenvolvimento:

```bash
jls run
```

ou:

```bash
jls lint
```

são mais rápidos.

Build final deve vir depois que a base já está funcionando.

---

# 77. Saiba quando reiniciar uma sessão

JLShell é persistente.

Isso é vantagem.

Mas também significa que você pode estar carregando:

```text
variáveis antigas
imports antigos
estado anterior
```

Se o comportamento ficar estranho:

```text
.status
.vars
.modules
```

e, quando necessário:

```text
.reset
```

---

# 78. Depois de atualizar o runtime

Uma sessão antiga pode continuar usando uma build anterior já carregada.

Depois de mudanças profundas no runtime, abra uma nova sessão quando necessário.

O mesmo vale para extensões do VS Code que já estavam carregadas na memória.

---

# 79. Faça o terminal trabalhar para você

O terminal não precisa ser só:

```text
digitar comando
esperar resultado
```

Ele pode ser:

```text
editor
REPL
debugger leve
gerenciador de projeto
entrada para build
entrada para AI
entrada para Registry
```

É por isso que o JLShell ocupa uma posição central no ecossistema JLScript.

---

# 80. Regra final do JLShell

O terminal deve facilitar o uso da linguagem.

Não criar uma segunda linguagem para aprender.

```text
mesmo runtime
mesmos módulos
mesmos comandos principais
mesmos diagnósticos
mesma metadata
```

Quanto menos diferenças existirem entre:

```text
arquivo
REPL
VS Code
terminal
build
```

mais previsível a linguagem se torna.

---

<div align="center">

# JLScript não termina no `.jls`.

O código precisa de um ambiente para:

**executar · testar · corrigir · organizar · instalar · compilar · publicar**

E é esse o papel do ecossistema ao redor da linguagem.

---

### JLScript 4.2.0

## Fim da Parte 3 — JLShell, CLI, JLS AI e Registry

---

**Parte 1**  
Projeto, história e identidade.

**Parte 2**  
Sintaxe, lógica e programação.

**Parte 3**  
Terminal, ferramentas e ecossistema.

</div>


