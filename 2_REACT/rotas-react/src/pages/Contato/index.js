import { Link } from "react-router-dom";

export default function Contato() {
    return (
      <div>
       <h1>Meu conato</h1> <br/>
       <span>Email: email@email.com</span>
       <Link to="/">Home</Link> <br/>
       <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  

  