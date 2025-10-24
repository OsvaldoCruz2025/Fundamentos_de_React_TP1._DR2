import "./styles.css";

export default function App() {
  const diferenca = (a, b) => a - b;

  const numero1 = 23;
  const numero2 = 8;
  const resultado = diferenca(numero1, numero2);

  return (
    <div className="App">
      <h1>Exercício 12 — Arrow Function</h1>
      <p>
        A diferença entre {numero1} e {numero2} é: <strong>{resultado}</strong>
      </p>
    </div>
  );
}
