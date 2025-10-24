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

  // mensagem
  const mensagem = `${saudacao}, ${nome}! Seja bem-vindo à minha página!`;

  //horário
  const horarioFormatado = `${hora}:${minutos.toString().padStart(2, "0")}`;

  return (
    <div className="App">
      <h1>Template Strings</h1>
      <p>{mensagem}</p>
      <small>Horário atual: {horarioFormatado}h</small>
    </div>
  );
}
