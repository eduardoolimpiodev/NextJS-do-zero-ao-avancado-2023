
import { useState } from "react";

function App() {

//  const [nome, setNome] = useState('');

//  const [email, setEmail] = useState('');

//  const [idade, setIdade] = useState('');

//  const [user, setUser] = useState({});

const [input, setInput] = useState('');
const [tarefas, setTarefas] = useState([
  'Pagar a conta de Luz',
  'Estudar ReactJS'
]);

 function handleRegister(e) {
  e.preventDefault();

  setTarefas([...tarefas, input]);
  setInput('');

  // setUser({
  //   nome: nome,
  //   idade: idade,
  //   email: email,
  // })
 }

  return (
    <>
    <h1> Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome: </label><br/>
        <input placeholder="Digite o seu nome" value={input} onChange={(e) => setInput(e.target.value)}></input><br/>

        {/* <label>Email: </label><br/>
        <input placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label>Idade: </label><br/>
        <input placeholder="Digite a sua idade" value={idade} onChange={(e) => setIdade(e.target.value)}></input><br/> */}

        <button type="submit">Registrar</button>
      </form>
      <br/><br/>
      <ul>
        {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      {/* <span>Bem vindo: {user.nome}</span><br/>
      <span>Idade: {user.idade}</span><br/>
      <span>Email: {user.email}</span><br/> */}

    </>
  )
}

export default App;

