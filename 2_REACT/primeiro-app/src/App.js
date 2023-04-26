import Nome from "./components/Nome";

function App() {
  return (
    <>
      <h2 className="container">Componente App</h2>
      <Nome aluno="Eduardo" idade={37} />
      <br />
      <Nome aluno="Eduardo Olimpio" idade={38}/>
    </>
  )
}

export default App;

