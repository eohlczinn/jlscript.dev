import { PageHeading } from "../components/Ecosystem";

const DOCS_URL = "https://github.com/JLScripter/documentacao_JLScripter";

const updates = [
  ["3.2.0", "Código-fonte fechado", "O projeto deixou de ser Open Source. A implementação interna da linguagem passa a ser privada, enquanto a documentação oficial continua pública."],
  ["3.2.0", "CLI ampliada", "run, preview, targets, clean, build, compile, verify-bytecode, test, fmt, lint, fix, doctor, config, update, repl, criação de projetos, JLS AI e ferramentas de desenvolvimento fazem parte do ecossistema atual."],
  ["3.2.0", "Build nativo e bytecode", "A linguagem possui caminho de geração nativa via C++ e um compilador de bytecode .jlb com comando próprio de verificação."],
  ["3.2.0", "Bibliotecas oficiais", "API, JSON, arquivos, banco SQLite, criptografia, processos, rede, threads, testes, compressão, CSV, XML, e-mail, imagem e áudio estão entre os módulos já presentes."],
  ["3.2.0", "API HTTP mais completa", "#api reúne servidor HTTP, rotas, request/response, JSON e recursos de cliente, mantendo a comunicação web fora do núcleo da sintaxe."],
  ["3.2.0", "Português + inglês", "se/senao, if/else, enquanto/while, para/for e estruturas de tratamento de erros seguem a proposta bilíngue da linguagem."],
  ["3.2.0", "JLS AI", "A assistência faz parte da CLI e pode ser consultada diretamente com jls ai, além de fluxos associados a arquivos e diagnósticos."],
  ["3.2.0", "Áreas em evolução", "#ui, #style, conectores, mobile, partes do #compiler e integrações externas continuam avançando sem serem anunciadas como completas onde ainda dependem de ambiente ou hardware."],
  ["2.3.0", "Binários Windows fornecidos", "Os dois executáveis incluídos atualmente na página de download ainda identificam-se internamente como 2.3.0. Eles são exibidos com essa informação até existir um pacote binário 3.2.0 correspondente."],
];

export default function Updates() {
  return (
    <div className="updates-page">
      <PageHeading eyebrow="NOVIDADES" title="Atualizações da JLScript." text="Uma visão pública do que mudou no ecossistema, sem confundir documentação com acesso ao código-fonte." />
      <section className="updates-list">
        {updates.map(([version, title, text], index) => (
          <article key={`${version}-${title}`}>
            <span>{version}</span><i>{index + 1}</i>
            <div><h2>{title}</h2><p>{text}</p></div>
          </article>
        ))}
      </section>
      <section className="updates-footer">
        <h2>A documentação continua aberta para leitura.</h2>
        <p>História, sintaxe, comandos e bibliotecas podem ser acompanhados no repositório público de documentação. O código-fonte da linguagem não faz parte desse repositório.</p>
        <a className="btn" href={DOCS_URL} target="_blank" rel="noreferrer">Abrir documentação ↗</a>
      </section>
    </div>
  );
}
