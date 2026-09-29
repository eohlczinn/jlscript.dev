<div align="center">

# JLScript

### Uma linguagem de programação brasileira 🇧🇷

**Simples para começar. Estruturada para crescer.**

`JLScript` • `JLS` • `.jls` • `JLScripter`

---

Criada por **Lucas Aguiel Dos Santos De Oliveira**

</div>

---

## Sobre o JLScript

**JLScript (JLS)** é uma linguagem de programação brasileira criada em 2026 por **Lucas Aguiel Dos Santos De Oliveira**.

O projeto nasceu da vontade de criar uma linguagem simples de escrever e entender, mas que não ficasse limitada a pequenos exemplos.

Com o tempo, o JLScript evoluiu para um projeto composto por diferentes partes de uma linguagem de programação real:

```text
JLScript
│
├── Lexer
├── Parser
├── AST
├── Interpretador
├── Runtime
├── Compilação
├── Bytecode
├── CLI
├── Sistema de módulos
├── Bibliotecas nativas
└── Ferramentas de desenvolvimento
```

A proposta do JLScript não é simplesmente copiar Python, JavaScript, C++ ou outra linguagem.

O projeto utiliza conceitos conhecidos da programação, mas também experimenta suas próprias decisões de sintaxe, organização, ferramentas e experiência de desenvolvimento.

---

# A ideia

O JLScript começou a partir de uma pergunta:

> **Como seria uma linguagem se eu pudesse decidir como determinadas coisas deveriam funcionar?**

A resposta começou com um pequeno interpretador.

No início, existiam apenas recursos básicos.

Com o desenvolvimento do projeto, começaram a surgir novos problemas:

```text
Como interpretar código?
Como representar valores?
Como criar funções?
Como organizar escopos?
Como importar bibliotecas?
Como criar um terminal?
Como compilar?
Como gerar bytecode?
Como trabalhar com APIs?
Como criar interfaces?
Como executar tarefas concorrentes?
```

Cada problema levou a uma nova parte da linguagem.

Assim, o JLScript deixou de ser apenas uma experiência com sintaxe e começou a se transformar em um ecossistema.

---

# Filosofia

O desenvolvimento do JLScript segue algumas ideias principais.

### Simplicidade

Uma linguagem não precisa adicionar sintaxe apenas porque outras linguagens fazem daquela maneira.

Quando a própria estrutura do código já deixa uma intenção clara, o JLScript pode tentar eliminar aquilo que considera desnecessário.

### Legibilidade

Código deve ser compreensível tanto para quem está começando quanto para quem precisar manter um projeto maior.

### Produtividade

A linguagem busca reduzir trabalho repetitivo e tornar operações comuns mais diretas.

### Experimentação

O JLScript também funciona como um espaço para experimentar ideias sobre:

- sintaxe;
- interpretadores;
- compiladores;
- runtime;
- bibliotecas;
- interfaces;
- ferramentas para desenvolvedores.

### Aprendizado

Construir a própria linguagem também é uma maneira de aprender aquilo que normalmente fica escondido por trás de uma linguagem pronta.

O desenvolvimento segue frequentemente um ciclo parecido:

```text
Ideia
  ↓
Construção
  ↓
Problema
  ↓
Pesquisa
  ↓
Solução
  ↓
Nova ideia
```

---

# Uma linguagem brasileira

O JLScript nasceu no Brasil e o português faz parte de sua identidade.

A linguagem possui construções em português e inglês.

Por exemplo:

```jls
se (idade >= 18) {
    mostrar('Maior de idade')
} senao {
    mostrar('Menor de idade')
}
```

Também existem construções correspondentes em inglês:

```jls
if (idade >= 18) {
    mostrar('Maior de idade')
} else {
    mostrar('Menor de idade')
}
```

A intenção não é limitar o JLScript ao português.

A proposta é permitir que a linguagem tenha identidade brasileira enquanto continua preparada para uma utilização mais internacional.

---

# Sintaxe

O JLScript busca uma escrita direta e familiar.

## Variáveis

Entre as formas utilizadas pela linguagem estão:

```jls
va nome = 'JLScript'
let versao = 'JLS'
ins ativo = true
```

O runtime trabalha com valores fundamentais como:

```text
STRING
NUMBER
BOOLEAN
NULL
LIST
OBJECT
FUNCTION
```

---

# Condições

```jls
se (usuario.ativo) {
    mostrar('Bem-vindo')
} senao {
    mostrar('Usuário desativado')
}
```

Ou:

```jls
if (usuario.ativo) {
    mostrar('Bem-vindo')
} else {
    mostrar('Usuário desativado')
}
```

---

# Funções

A linguagem possui declaração explícita de funções:

```jls
func saudacao(nome) {
    mostrar('Olá, ' + nome)
}
```

E também possui uma forma curta:

```jls
soma(a, b) {
    retorne a + b
}
```

A ideia é evitar sintaxe adicional quando a estrutura já deixa claro que aquele bloco representa uma função.

---

# Switch sem `break`

Uma das decisões de sintaxe do JLScript aparece no `switch`.

```jls
switch (opcao) {

    case 1 {
        mostrar('Iniciar')
    }

    case 2 {
        mostrar('Configurações')
    }

    default {
        mostrar('Sair')
    }
}
```

Cada `case` possui seu próprio bloco.

Por isso não é necessário adicionar um `break` apenas para indicar que aquele caso terminou.

```text
case
  ↓
{
    código
}
  ↑
fim do case
```

Essa decisão representa uma ideia importante do projeto:

> Se a estrutura do código já informa algo claramente, a linguagem não precisa obrigar o programador a repetir a mesma intenção.

---

# Bibliotecas

Funcionalidades especializadas são organizadas através do sistema de módulos e bibliotecas.

Uma biblioteca pode ser importada:

```jls
import #api
```

Ou várias podem ser utilizadas:

```jls
import [#api, #database, #json]
```

O ecossistema foi crescendo para diferentes áreas:

```text
Bibliotecas
│
├── #api
├── #database
├── #json
├── #ui
├── #style
├── #mobile
├── #connector
├── #compiler
└── outras áreas do runtime
```

A intenção é manter o núcleo da linguagem separado de funcionalidades especializadas.

---

# Interface e estilo

O JLScript também experimenta a construção de interfaces através das bibliotecas `#ui` e `#style`.

Exemplo conceitual:

```jls
import [#ui, #style]

va app = ui.janela()

app.titulo('Login')

app.ui({

    div {
        text = 'Bem-vindo'
        button = 'Entrar'
    }

})

app.style({

    fundo: '#101010',
    cor: '#ffffff',
    largura: 800,
    altura: 600

})

app.abrir()
```

A proposta é permitir que aplicações possam ser construídas utilizando a própria linguagem e seu ecossistema.

---

# CLI

O JLScript possui uma interface de linha de comando própria:

```bash
jls
```

A CLI começou pequena e evoluiu junto com a linguagem.

Entre os comandos desenvolvidos pelo projeto estão:

```text
jls run
jls repl
jls build
jls compile
jls test
jls fmt
jls lint
jls fix
jls doctor
jls update
jls dev
jls config
```

A CLI não existe apenas para executar arquivos.

Ela representa a interface entre o desenvolvedor e as ferramentas do ecossistema JLScript.

---

# Execução

Um arquivo JLScript utiliza a extensão:

```text
.jls
```

Exemplo:

```text
programa.jls
```

O fluxo básico da linguagem pode ser representado assim:

```text
Código .jls
    │
    ▼
  Lexer
    │
    ▼
  Parser
    │
    ▼
   AST
    │
    ▼
Interpretador
    │
    ▼
 Runtime
```

---

# Compilação

O projeto também possui infraestrutura para sair da interpretação tradicional.

Um dos caminhos é a geração de C++:

```text
programa.jls
     │
     ▼
   Lexer
     │
     ▼
   Parser
     │
     ▼
    AST
     │
     ▼
Gerador C++
     │
     ▼
Compilador C++
     │
     ▼
 Executável
```

Esse fluxo permite explorar compilação nativa sem abandonar a sintaxe JLScript.

---

# Bytecode

Outro caminho existente no projeto utiliza bytecode próprio:

```text
programa.jls
     │
     ▼
Compilador
     │
     ▼
 programa.jlb
```

A extensão utilizada é:

```text
.jlb
```

O bytecode representa instruções da linguagem e faz parte das experiências de compilação do projeto.

---

# Arquitetura

À medida que o projeto cresceu, diferentes responsabilidades foram separadas.

```text
JLScript
│
├── Language
│
├── Lexer
│   ├── tokens
│   ├── keywords
│   ├── operators
│   └── literals
│
├── Parser
│   ├── declarations
│   ├── expressions
│   ├── statements
│   └── calls
│
├── AST
│
├── Interpreter
│
├── Runtime
│   ├── Value
│   ├── Scope
│   ├── Function
│   ├── Object
│   ├── List
│   └── NativeObject
│
├── Execution
│
├── Compiler
│   ├── C++ Generator
│   └── Bytecode
│
├── Modules
│
├── CLI
│
└── Standard Library
```

Essa separação permite que cada parte evolua sem transformar todo o projeto em um único arquivo gigantesco, tradição humana que felizmente não precisamos preservar.

---

# JLScripter

Existem alguns nomes diferentes dentro do projeto:

```text
JLScript
    ↓
linguagem

JLS
    ↓
abreviação

.jls
    ↓
extensão dos arquivos

JLScripter
    ↓
identidade do ecossistema
```

O **JLScripter** representa algo maior que apenas a sintaxe da linguagem.

```text
JLScripter
│
├── JLScript
├── Runtime
├── Interpretador
├── Compiladores
├── Bytecode
├── CLI
├── Bibliotecas
├── Ferramentas
└── Documentação
```

---

# História

O JLScript nasceu em **2026**.

A ideia surgiu da vontade de construir algo que fosse divertido de desenvolver, simples de utilizar e sério o bastante para continuar crescendo.

Python serviu como uma referência de simplicidade e experiência de desenvolvimento.

JavaScript trouxe familiaridade com determinadas estruturas e possibilidades.

Mas o objetivo nunca foi reconstruir nenhuma dessas linguagens.

A intenção era experimentar:

> Como essas coisas funcionariam se fossem feitas do jeito do JLScript?

---

## JLScript 1.0.0

A primeira versão oficial foi a **1.0.0**.

Comparada ao projeto atual, era uma linguagem pequena.

Entre seus recursos estavam:

```text
if
else
funções
switch
for
loops
execução básica
CLI inicial
```

O ecossistema atual de bibliotecas ainda não existia.

O terminal também era muito menor.

Um dos comandos existentes era:

```bash
jls version
```

Mesmo pequena, aquela versão alcançou a parte mais importante:

**o JLScript funcionava.**

---

# Evolução

O projeto começou aproximadamente assim:

```text
JLScript 1.0.0
│
├── condições
├── funções
├── switch
├── loops
└── CLI
```

Depois passou a crescer:

```text
JLScript
│
├── Lexer
├── Parser
├── AST
├── Interpreter
├── Runtime
├── Modules
├── Compiler
├── Bytecode
├── CLI
└── Standard Library
```

E as ferramentas também cresceram:

```text
run
repl
build
compile
test
fmt
lint
fix
doctor
update
dev
```

O que começou como uma pequena linguagem passou a ser tratado como um ecossistema.

---

# Origem do nome

O nome **JLScript** possui uma origem pessoal.

```text
J       → Joicy
L       → Lucas
Script  → Programação

J + L + Script
      ↓
   JLScript
```

O **J** representa **Joicy Costa**.

O **L** representa **Lucas Aguiel Dos Santos De Oliveira**.

E **Script** representa programação.

O `J` não significa Java ou JavaScript.

Joicy não participa tecnicamente do desenvolvimento da linguagem. Ela não criou o interpretador, sintaxe, runtime ou bibliotecas.

Sua presença no nome é uma homenagem e representa sua importância na história pessoal do criador.

Assim, o próprio nome registra uma parte da história que existia quando o projeto nasceu:

```text
Joicy + Lucas + Programação
             │
             ▼
          JLScript
```

---

# Criador

## Lucas Aguiel Dos Santos De Oliveira

**Lucas Aguiel Dos Santos De Oliveira** é o criador do JLScript e do ecossistema JLScripter.

O desenvolvimento do projeto envolve estudos e experimentações em áreas como:

- programação;
- desenvolvimento de software;
- linguagens de programação;
- arquitetura de sistemas;
- interpretadores;
- compiladores;
- runtime;
- segurança cibernética;
- inteligência artificial;
- ferramentas para desenvolvedores.

Grande parte da evolução técnica do projeto aconteceu através da própria construção da linguagem.

Criar o JLScript passou a exigir aprender assuntos que inicialmente não faziam parte do projeto.

```text
Criar linguagem
      ↓
Lexer / Parser
      ↓
AST
      ↓
Interpreter
      ↓
Runtime
      ↓
Compilação
      ↓
Bytecode
      ↓
CLI
      ↓
Bibliotecas
      ↓
Novos problemas
      ↓
Novos conhecimentos
```

Por isso, a história do JLScript também registra a evolução técnica de seu criador.

---

# Identidade do projeto

O JLScript busca manter três características juntas:

```text
Simplicidade
     +
Identidade
     +
Capacidade de crescer
```

A linguagem não precisa ser complicada apenas para parecer poderosa.

Ao mesmo tempo, simplicidade não significa que o projeto precise permanecer pequeno.

Essa combinação é uma das ideias centrais do JLScripter:

> **Simples para começar. Estruturado para crescer.**

---

# Status

O JLScript continua em desenvolvimento.

Isso significa que:

- recursos podem evoluir;
- a sintaxe pode receber ajustes;
- bibliotecas podem ser ampliadas;
- componentes internos podem ser redesenhados;
- recursos experimentais podem mudar;
- a documentação acompanha a evolução do código.

O projeto não é tratado como algo terminado.

Cada nova versão representa mais uma etapa da construção da linguagem.

---

<div align="center">

# JLScript

### Uma linguagem brasileira. Um projeto em evolução.

`J = Joicy` • `L = Lucas` • `Script = Programação`

**Criado por Lucas Aguiel Dos Santos De Oliveira**

🇧🇷

</div>