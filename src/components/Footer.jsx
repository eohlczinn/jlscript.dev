const docsUrl = "https://github.com/JLScripter/documentacao_JLScripter";

export default function Footer() {
  return (
    <footer aria-label="Rodapé do portal JLScript">
      <section aria-labelledby="footer-brand-title">
        <a className="brand" href="#/" aria-label="Voltar para a página inicial">
          <span id="footer-brand-title">JLScript</span>
        </a>
        <p>
          Linguagem de programação brasileira criada em 2026, com sintaxe em português e inglês,
          runtime próprio, CLI, compilação, bytecode e bibliotecas oficiais.
        </p>
        <p><strong>Versão da linguagem:</strong> 3.2.0</p>
      </section>

      <nav aria-label="Explorar JLScript">
        <h4>Explorar</h4>
        <a href="#/docs">Documentação</a>
        <a href="#/biblioteca">Bibliotecas</a>
        <a href="#/terminal">Terminal e CLI</a>
        <a href="#/playground">Playground</a>
        <a href="#/download">Downloads</a>
      </nav>

      <nav aria-label="Projeto e documentação pública">
        <h4>Projeto</h4>
        <a href="#/sobre">História e proposta</a>
        <a href="#/roadmap">Roadmap</a>
        <a href="#/atualizacoes">Atualizações</a>
        <a href="#/suporte">Suporte</a>
        <a href={docsUrl} target="_blank" rel="noreferrer">Documentação pública ↗</a>
      </nav>

      <small>
        © 2026 JLScript / JLScripter. Todos os direitos reservados. O código-fonte da linguagem é fechado;
        a documentação pública permanece disponível separadamente para aprendizado e referência.
      </small>
    </footer>
  );
}
