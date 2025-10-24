import "./styles15.css";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}
