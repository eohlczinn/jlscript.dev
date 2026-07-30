export const documentationGuides = [
  { id: "bem-vindo", title: "Bem-vindo à JLScript", text: "A JLScript foi criada para tornar a programação mais acessível para estudantes e desenvolvedores brasileiros, utilizando uma sintaxe simples e legível em português. Com ela você pode desenvolver aplicações, automatizar tarefas, criar APIs, jogos, ferramentas e muito mais." },
  { id: "primeiro-programa", title: "Primeiro programa", text: "O tradicional Olá Mundo.", code: 'mostrar("Olá Mundo")', output: "Olá Mundo" },
  { id: "variaveis", title: "Variáveis", text: "Criando variáveis, números e booleanos.", code: 'va nome = "Lucas"\nmostrar(nome)\n\nva idade = 19\nmostrar(idade)\n\nva ativo = true\nmostrar(ativo)' },
  { id: "constantes", title: "Constantes", code: "ins PI = 3.1415" },
  { id: "operadores", title: "Operadores", text: "Operadores aritméticos: +, -, *, /, % e **.", code: "va soma = 10 + 20\nmostrar(soma)" },
  { id: "comparacoes", title: "Comparações", text: "Use ==, !=, >, <, >= e <= para comparar valores." },
  { id: "condicoes", title: "Condições", code: 'se(idade >= 18){\n    mostrar("Maior de idade")\n}' },
  { id: "senao", title: "Senão", code: 'se(idade >= 18){\n    mostrar("Maior")\n}\nsenao{\n    mostrar("Menor")\n}' },
  { id: "enquanto", title: "Enquanto", code: "va i = 0\nenquanto(i < 5){\n    mostrar(i)\n    i++\n}" },
  { id: "repeticao", title: "Repetição", code: "repita(va i = 0; i < 10; i++){\n    mostrar(i)\n}" },
  { id: "funcoes", title: "Funções", code: 'func saudacao(nome){\n    mostrar("Olá " + nome)\n}\n\nsaudacao("Lucas")' },
  { id: "retorno", title: "Retorno", code: "func soma(a, b){\n    retorne a + b\n}\n\nmostrar(soma(10, 20))" },
  { id: "entrada", title: "Entrada de dados", code: 'va nome = chat("Digite seu nome:")\nmostrar(nome)' },
  { id: "conversoes", title: "Conversões", text: "Use int(), float(), str() e bool() para converter valores." },
  { id: "bibliotecas", title: "Bibliotecas", text: "Importação simples de módulos oficiais e bibliotecas com apelido.", code: "import #math\nimport #panda os #pd" },
];

export const documentationProjects = [
  { title: "Calculadora", code: 'va a = int(chat("Primeiro número"))\nva b = int(chat("Segundo número"))\nmostrar(a + b)\nmostrar(a - b)\nmostrar(a * b)\nmostrar(a / b)' },
  { title: "Tabuada", code: 'va numero = int(chat("Número"))\nrepita(va i = 1; i <= 10; i++){\n    mostrar(numero * i)\n}' },
  { title: "Login", code: 'va usuario = chat("Usuário")\nva senha = chat("Senha")\nse(usuario == "admin" && senha == "123"){\n    mostrar("Bem-vindo")\n}\nsenao{\n    mostrar("Acesso negado")\n}' },
  { title: "Sistema Bancário", code: 'va saldo = 1000\nfunc sacar(valor){\n    se(valor <= saldo){\n        saldo = saldo - valor\n        mostrar("Saque realizado")\n    } senao {\n        mostrar("Saldo insuficiente")\n    }\n}\nfunc depositar(valor){ saldo = saldo + valor }\ndepositar(500)\nsacar(200)\nmostrar(saldo)' },
  { title: "Agenda", code: 'va contatos = []\ncontatos.adicionar("Lucas")\ncontatos.adicionar("Maria")\nmostrar(contatos)' },
  { title: "Conversor de Temperatura", code: 'va c = float(chat("Graus Celsius"))\nva f = (c * 9 / 5) + 32\nmostrar(f)' },
  { title: "Jogo de Adivinhação", code: 'va segredo = 7\nva chute = int(chat("Digite um número"))\nse(chute == segredo){\n    mostrar("Você acertou!")\n} senao {\n    mostrar("Você errou!")\n}' }
];
