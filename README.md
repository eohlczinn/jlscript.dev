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

Do primeiro:

```jls
mostrar("Olá, mundo!")
```

até projetos maiores.

---

## Continua na Parte 2

### **JLScript — Sintaxe: do primeiro código aos recursos avançados**

---

<p align="center">
  <strong>JLScript</strong><br>
  Código que fala a sua língua.
</p>

<p align="center">
  🇧🇷 Criado no Brasil · 💻 Arquivos .jls · ⚡ C++ · 🧩 Ecossistema próprio
</p>


