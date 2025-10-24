import "./styles.css";

export default function App() {
  const nome = "Osvaldo";
  const dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();

  let saudacao;
  if (hora < 12) {
    saudacao = "Bom dia";
  } else if (hora < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  const horarioFormatado = `${hora}:${minutos.toString().padStart(2, "0")}`;

  const mensagem = `${saudacao}, agora são: ${horarioFormatado}h.`;

  return (
    <div className="App">
      <h1>O uso de condicionais e loops de Javascripts</h1>
      <p>{mensagem}</p>
    </div>
  );
}
