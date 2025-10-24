import "./styles.css";

export default function App() {
  function somar(a, b) {
    return a + b;
  }

  let numero1 = 18;
  const numero2 = 24;
  const resultado = somar(numero1, numero2);

  return (
    <div className="App">
      <h1>calcular a soma de dois números</h1>
      <p>
        A soma entre {numero1} e {numero2} = {resultado}
      </p>
    </div>
  );
}
