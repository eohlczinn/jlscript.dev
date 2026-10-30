# JLScript · JLAI Support Backend

> Backend local de suporte para o ecossistema **JLScript**, com respostas baseadas em documentação pública e conhecimento estruturado da linguagem.

## Sobre o JLScript

**JLScript** é uma linguagem de programação brasileira criada por **Lucas Aguiel**, com foco em legibilidade, aprendizado e sintaxe em português e inglês.

A linguagem utiliza arquivos `.jls` e possui recursos como:

- variáveis;
- funções;
- condições;
- loops;
- listas e objetos;
- tratamento de erros;
- módulos e bibliotecas;
- APIs;
- CLI;
- integração com VS Code;
- ferramentas do ecossistema JLScript.

Exemplo:

```jls
va nome = "Lucas"

func saudacao(nome) {
    mostrar("Olá, " + nome + "!")
}

saudacao(nome)
```

Também é possível utilizar construções em inglês:

```jls
let nome = "Lucas"

if (nome == "Lucas") {
    mostrar("Hello, Lucas!")
}
```

---

## 🌐 Portal oficial

Acesse o portal do JLScript:

**https://blog-jlscript.netlify.app/**

No portal você encontra:

- documentação;
- história do projeto;
- sintaxe;
- bibliotecas;
- exemplos;
- projetos;
- CLI;
- ecossistema;
- recursos de aprendizado.

---

## 📚 Aprenda JLScript

Existe uma trilha dedicada para aprender a linguagem do básico até projetos reais:

**https://blog-jlscript.netlify.app/aprender**

A trilha aborda:

1. Primeiro contato
2. Variáveis e valores
3. Lógica
4. Funções
5. Estruturas
6. Módulos
7. Bibliotecas
8. Projetos reais

---

## 💻 Sintaxe

Referência de sintaxe:

**https://blog-jlscript.netlify.app/sintaxe**

Exemplo:

```jls
va idade = 19

se (idade >= 18) {
    mostrar("Maior de idade")
} senao {
    mostrar("Menor de idade")
}
```

Loops:

```jls
para (va i = 0; i < 5; i++) {
    mostrar(i)
}
```

Funções:

```jls
func somar(a, b) {
    retorne a + b
}

mostrar(somar(10, 20))
```

Módulos:

```jls
import [
    #math,
    #json,
    #api
]
```

---

## 📦 Bibliotecas

O ecossistema JLScript inclui módulos para diferentes áreas.

Exemplos:

```jls
import #api
import #math
import #json
import #file
import #system
import #database
import #crypto
import #process
import #net
import #test
import #cli
import #image
import #audio
import #ui
import #style
```

Mais informações:

**https://blog-jlscript.netlify.app/bibliotecas**

---

# JLAI Support Backend

Este repositório contém o backend de suporte da **JLAI**, ferramenta integrada ao ecossistema JLScript.

O backend foi desenvolvido em Python e funciona com uma base local de conhecimento.

Ele **não utiliza OpenAI, Gemini, Claude ou outras APIs externas de inteligência artificial por padrão**.

As respostas são geradas a partir de uma base estruturada em JSON formada por informações públicas e documentação do JLScript.

---

## 🎯 Escopo da JLAI

A JLAI responde perguntas relacionadas ao JLScript, incluindo:

- instalação;
- arquivos `.jls`;
- sintaxe;
- CLI;
- módulos;
- bibliotecas;
- APIs;
- erros;
- documentação;
- extensão do VS Code;
- história do projeto;
- downloads;
- portal;
- ferramentas do ecossistema.

Perguntas fora desse escopo recebem uma resposta informando que o assunto não faz parte da base da JLAI.

---

## 📁 Estrutura do projeto

```text
backend/
├── app.py
├── config.py
├── models.py
│
├── ai/
│
├── knowledge/
│   └── knowledge.json
│
└── tests/

frontend-integration/
├── Jlai.jsx
├── MarkdownMessage.jsx
├── useJlaiStream.js
└── jlai-ai.css
```

---

## 🚀 Rodando no Windows

Entre na pasta do backend:

```powershell
cd backend
```

Crie o ambiente virtual:

```powershell
python -m venv .venv
```

Ative:

```powershell
.\.venv\Scripts\Activate.ps1
```

Instale as dependências:

```powershell
pip install -r requirements.txt
```

Inicie o servidor:

```powershell
python -m uvicorn app:app --host 127.0.0.1 --port 8765 --reload
```

Também é possível utilizar:

```powershell
.\run.ps1
```

---

## 🔍 Testando a API

Health check:

```text
http://127.0.0.1:8765/api/health
```

Documentação automática:

```text
http://127.0.0.1:8765/docs
```

---

## ⚛️ Integração com React + Vite

Os arquivos disponíveis em:

```text
frontend-integration/
```

podem ser integrados ao frontend React.

Configure no `.env`:

```env
VITE_JLAI_API_URL=http://127.0.0.1:8765
```

O frontend utiliza:

```text
POST /api/chat/stream
```

e recebe respostas através de streaming NDJSON.

Isso permite exibir respostas progressivamente, incluindo blocos de código.

---

## 🌍 Produção

Um site público não consegue acessar diretamente:

```text
127.0.0.1
```

do computador do desenvolvedor.

Para utilização pública, o backend deve ser hospedado em um ambiente compatível com Python ou Docker.

Depois altere:

```env
VITE_JLAI_API_URL=https://sua-api.com
```

Também configure:

```env
JLAI_ALLOWED_ORIGINS=https://seu-site.com
```

---

## 🔐 Segurança e privacidade

O projeto utiliza algumas medidas básicas de proteção:

- nenhuma chave externa de IA é necessária;
- conversas não são gravadas em disco por padrão;
- limite de tamanho para perguntas;
- rate limit simples em memória;
- CORS configurável;
- bloqueio de perguntas fora do escopo;
- nenhuma parte do código-fonte privado do núcleo JLScript está incluída neste repositório.

---

# ⚠️ JLScript não é open source

O fato de existirem repositórios públicos, exemplos, documentação e ferramentas relacionadas ao JLScript **não significa que o núcleo da linguagem seja open source**.

A implementação principal do JLScript é atualmente **closed source**.

Este repositório contém apenas componentes públicos relacionados ao ecossistema e à JLAI.

O código interno e privado da linguagem não faz parte deste repositório.

Projetos criados por usuários em `.jls` podem possuir suas próprias licenças.

---

## 🧪 Testes

Instale as dependências de desenvolvimento:

```powershell
pip install -r requirements-dev.txt
```

Execute:

```powershell
pytest -q
```

---

# 🔗 Links importantes

### Portal JLScript

https://blog-jlscript.netlify.app/

### Aprender JLScript

https://blog-jlscript.netlify.app/aprender

### Sintaxe

https://blog-jlscript.netlify.app/sintaxe

### Bibliotecas

https://blog-jlscript.netlify.app/bibliotecas

### Projetos

https://blog-jlscript.netlify.app/projetos

### CLI

https://blog-jlscript.netlify.app/cli

### Ecossistema

https://blog-jlscript.netlify.app/ecossistema

### História

https://blog-jlscript.netlify.app/historia

### Recursos

https://blog-jlscript.netlify.app/recursos

---

## Sobre o projeto

O JLScript nasceu da ideia de entender como linguagens de programação funcionam e experimentar uma linguagem com identidade própria.

O projeto evoluiu para um ecossistema envolvendo:

- JLScript;
- JLShell;
- JLS AI / JLAI;
- CLI;
- extensão para VS Code;
- módulos;
- bibliotecas;
- documentação;
- portal;
- ferramentas de desenvolvimento.

---

## JLScript

**Código que fala a sua língua.**

🌐 https://blog-jlscript.netlify.app/
```powershell
