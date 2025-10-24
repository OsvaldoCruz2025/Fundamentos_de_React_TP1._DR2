import "./styles.css";

export default function App() {
  let nome = "Osvaldo Cruz";
  const idade = 35;
  const ativo = true;
  return (
    <div className="App">
      <h1>Perfil do usuário</h1>
      <p>
        <strong>Nome: </strong>
        {nome}{" "}
      </p>
      <p>
        <strong>Idade: </strong>
        {idade} anos
      </p>
      <p>
        <strong>Ativo: </strong>
        {ativo ? "Ativo" : "Inativo"}
      </p>
    </div>
  );
}
