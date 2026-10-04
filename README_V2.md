# JLAI Conversacional v2

Esta versão corrige o principal problema da primeira: o motor não responde mais apenas com um bloco fixo para qualquer conversa.

## Mudanças

- saudações curtas e naturais;
- entende `obrigado`, `blz`, `tchau`, `vc ta ai?`, `quem é você?`, `oq vc sabe fazer?`;
- continua limitado a JLScript;
- usa contexto das últimas perguntas do usuário;
- entende continuações como `não entendi`, `explica melhor`, `manda exemplo`, `resume`, `e depois?`;
- respostas da documentação recebem uma introdução adequada ao tipo de pergunta;
- não usa API externa nem LLM;
- não inclui código-fonte privado da JLScript;
- interface mais parecida com chat moderno: resposta do assistente sem card gigante, usuário alinhado à direita, avatar circular, input integrado e auto-scroll.

## Substituição

Copie `backend/` por cima do backend atual, mantendo seu `.venv` se quiser. Os arquivos que realmente mudaram são:

- `backend/ai/dialogue.py` (novo)
- `backend/ai/engine.py`
- `backend/ai/matcher.py`
- `backend/tests/test_engine.py`

No frontend, substitua pelos arquivos de `frontend-integration/`:

- `Jlai.jsx`
- `jlai-ai.css`
- mantenha `MarkdownMessage.jsx`
- mantenha `useJlaiStream.js`

Reinicie o backend e o Vite depois da troca.

## Atualização v3 funcional

Esta revisão corrige o problema de perguntas de continuidade genéricas perderem o assunto da conversa.

Agora a JLAI preserva `context_id`, `intent` e `topic` no histórico do frontend e usa esse metadata no backend. Assim, depois de uma resposta sobre funções, API, variáveis ou outro tópico, perguntas como:

- `Onde isso aparece na documentação?`
- `Mostre um exemplo simples`
- `Como executo isso?`
- `Explique mais simples`
- `Me mostra o passo a passo`
- `Resume isso`

continuam no mesmo assunto, em vez de cair em uma página genérica do site.

As sugestões também são contextuais e só aparecem na resposta mais recente. Todos os botões gerados pelo motor usam rotas de follow-up testadas.
