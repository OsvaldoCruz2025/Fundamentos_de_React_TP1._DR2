import "./styles.css";

export default function App() {
  //Objeto
  const livro = {
    titulo: "Aprenda AWS Glue",
    autor: "Diego Rodrigues",
    ano: 2025,
  };

  //Array
  const capitulo = [
    "Capítulo 1: Fundamentos, Arquitetura e Ecossistema AWS Glue.",
    "Capítulo 2: Preparação do ambiente AWS: Pré requisito, Permissões e Primeira Configuração.",
    "Capítulo 3: Catálogo de Dados AWS Glue: Construção, Organização e Governança.",
    "Capítulo 4: Crawlers: Descoberta Automática de Dados e Metadados.",
    "Capítulo 5: AWS Glue jos: Estreuturação e Execuçãode Pipeline ETL.",
  ];
  return (
    <div className="App">
      <h1>Informações do Livro</h1>
      <p>
        <strong>Título:</strong> {livro.titulo}
      </p>
      <p>
        <strong>Autor:</strong> {livro.autor}
      </p>
      <p>
        <strong>Ano de publicação:</strong> {livro.ano}
      </p>

      <h2>Capítulos</h2>
      <ul>
        {capitulo.map((capitulo, index) => (
          <li key={index}>{capitulo}</li>
        ))}
      </ul>
    </div>
  );
}
