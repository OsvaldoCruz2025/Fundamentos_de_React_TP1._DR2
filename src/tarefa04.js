import "./styles.css";

export default function App() {
  //variável que pode mudar
  let nome = "Osvaldo Cruz";

  //variavel que não muda
  const idade = 44;
  return (
    <div className="App">
      <h1>Uso de let e const</h1>
      <p>
        Meu nome é {nome}, tenho {idade} anos.
      </p>
    </div>
  );
}
