import "./styles14.css";

export default function App() {
  const produtos = [
    { id: 1, nome: "Notebook", preco: 4500 },
    { id: 2, nome: "Celular", preco: 2500 },
    { id: 3, nome: "Fone de Ouvido", preco: 350 },
    { id: 4, nome: "Caixa de som", preco: 2000 },
  ];

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {produtos.map((produto) => (
        <div key={produto.id} className="card">
          <h2>{produto.nome}</h2>
          <p>Preço: R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  );
}
