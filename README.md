# JLAI Support Backend · JLScript 3.2.0

Backend local em Python para a JLAI do site oficial JLScript. Ele **não usa OpenAI, Gemini, Claude nem outra API externa de IA**. As respostas vêm de uma base local em JSON organizada a partir da documentação atual do portal e de informações públicas da documentação oficial.

## Escopo

A JLAI aceita apenas assuntos ligados a JLScript e suporte do portal: instalação, extensão VS Code, `.jls`, sintaxe, CLI, módulos, APIs, erros, documentação, história, downloads, site e contato. Perguntas fora do tema recebem uma resposta de escopo em vez de inventar informação.

## Estrutura

```text
backend/
  app.py
  config.py
  models.py
  ai/
  knowledge/knowledge.json
  tests/
frontend-integration/
  Jlai.jsx
  MarkdownMessage.jsx
  useJlaiStream.js
  jlai-ai.css
```

## Rodar no Windows

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python -m uvicorn app:app --host 127.0.0.1 --port 8765 --reload
```

Ou execute `run.ps1`.

Teste:

```text
http://127.0.0.1:8765/api/health
http://127.0.0.1:8765/docs
```

## Integrar ao React/Vite

Copie os 4 arquivos de `frontend-integration/` para o projeto conforme `INTEGRACAO_NO_SITE.md`. Configure:

```env
VITE_JLAI_API_URL=http://127.0.0.1:8765
```

O frontend usa `POST /api/chat/stream` e recebe NDJSON em streaming. O backend envia um pequeno atraso de "pensamento" e depois os pedaços da resposta, criando o efeito de digitação inclusive em blocos de código.

## Produção

O site público não consegue acessar `127.0.0.1` do seu computador. Para usuários reais, publique este backend em um host compatível com Python/Docker e troque `VITE_JLAI_API_URL` pela URL pública. Configure também `JLAI_ALLOWED_ORIGINS` com o domínio do frontend.

## Segurança e privacidade

- sem chave de API de IA;
- sem gravação de conversas em disco por padrão;
- limite de tamanho da pergunta;
- rate limit simples em memória;
- CORS configurável;
- respostas fora do tema são bloqueadas;
- nenhuma parte do código-fonte privado da linguagem está incluída no ZIP.

## Testes

```powershell
pip install -r requirements-dev.txt
pytest -q
```
