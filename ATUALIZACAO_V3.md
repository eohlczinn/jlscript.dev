# JLAI v3 funcional

Correções principais:

- contexto de conversa persistido com `context_id`, `intent` e `topic`;
- `Onde isso aparece na documentação?` responde sobre o tópico anterior e mostra a fonte correta;
- `Como executo isso?` responde no contexto anterior e orienta `jls run` quando aplicável;
- `Mostre um exemplo simples`, `Explique mais simples`, `Resume isso` e `passo a passo` são follow-ups reais;
- roteamento determinístico para instalação, versão, bilinguismo, bibliotecas `#...`, API, CLI, funções e outros assuntos óbvios;
- sugestões antigas desaparecem do chat: apenas a resposta mais recente exibe botões;
- sugestões geradas pelo backend são limitadas a ações que o motor sabe resolver;
- respostas de navegação como `Abrir documentação oficial` e `Abrir a página de download` não passam pelo fuzzy matcher;
- compatibilidade mantida com clientes que enviam apenas `role` + `content` no histórico.

Validação executada antes do empacotamento: 22 testes automatizados do backend.
