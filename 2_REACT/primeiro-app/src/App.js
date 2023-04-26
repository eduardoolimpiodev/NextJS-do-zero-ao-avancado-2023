import Nome from "./components/Nome";
import { useState } from "react";

function App() {

  const [aluno, setAluno] = useState('Dudu');

  function handleChangeName (nome) {
    setAluno(nome);
  }

  return (
    <>
      <h2 className="container">Componente App</h2><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName('Duduzão')}>Mudar Nome</button>
    </>
  )
}

export default App;

