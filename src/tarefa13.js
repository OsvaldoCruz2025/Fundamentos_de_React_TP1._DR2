import "./styles.css";

export default function App() {
  const verificarParOuImpar = (numero) => (numero % 2 === 0 ? "Par" : "Ímpar");

  const numero = 19;
  const resultado = verificarParOuImpar(numero);

  return (
    <div className="App">
      <h1>Verificar Par ou Ímpar</h1>
      <p>
        O número {numero} é: <strong>{resultado}</strong>
      </p>
    </div>
  );
}
