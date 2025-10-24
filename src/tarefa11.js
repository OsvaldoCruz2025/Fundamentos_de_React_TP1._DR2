import "./styles.css";

export default function App() {
  function converter(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  const temperaturaC = 25;
  const temperaturaF = converter(temperaturaC);

  return (
    <div className="App">
      <h1>Conversão de Temperatura</h1>
      <p>
        A temperatura de {temperaturaC}°C corresponde a {temperaturaF}°F em
        escala Fahrenheit.
      </p>
    </div>
  );
}
