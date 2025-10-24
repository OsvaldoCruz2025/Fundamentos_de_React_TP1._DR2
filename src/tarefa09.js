import "./styles.css";

export default function App() {
  const tarefas = [
    "Estudar React",
    "Praticar JavaScript",
    "Revisar HTML e CSS",
    "Fazer exercícios de lógica",
    "Criar um projeto pessoal",
  ];

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
