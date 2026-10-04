# Integração no site atual

## 1. Backend

Coloque a pasta `backend/` fora de `src/` do React. Rode em `127.0.0.1:8765` durante desenvolvimento.

## 2. Frontend

A pasta `frontend-integration/` contém uma versão pronta da página JLAI com:

- streaming de texto;
- efeito de digitação;
- atraso de resposta controlado pelo backend;
- Markdown com parágrafos, listas, títulos e blocos de código;
- botão copiar em códigos;
- fontes clicáveis;
- sugestões de próximas perguntas;
- botão Parar;
- Enter envia e Shift+Enter quebra linha.

Sugestão de destino:

```text
src/pages/Jlai.jsx
src/pages/useJlaiStream.js
src/pages/MarkdownMessage.jsx
src/pages/jlai-ai.css
```

O `Jlai.jsx` do pacote já usa imports relativos para esses arquivos na mesma pasta.

## 3. Variável do Vite

Na raiz do frontend crie/edite `.env.local`:

```env
VITE_JLAI_API_URL=http://127.0.0.1:8765
```

Em produção troque pela URL pública do backend.

## 4. CORS

No backend, configure `.env` a partir de `.env.example`. A origem atual do portal já aparece na lista de exemplo.

## 5. Instalação ensinada pela JLAI

A resposta oficial cadastrada segue o fluxo solicitado:

1. instalar a extensão **JLScript** no VS Code;
2. baixar a linguagem no **site oficial**;
3. validar `jls --version`;
4. criar um arquivo `.jls`;
5. executar com `jls run arquivo.jls`;
6. começar a construir.
