import "./styles.css";

export default function App() {
  const nomeUsuario = "Osvaldo";

  function Mensagem(props) {
    return <p>Olá, {props.nome}! Seja bem-vindo ao Módulo de React!</p>;
  }

  return (
    <div className="App">
      <h1>Uso de Props</h1>
      <Mensagem nome={nomeUsuario} />
    </div>
  );
}
