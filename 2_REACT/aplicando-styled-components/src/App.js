
import { BemVindo, Container, Head, Titulo} from "./styles"; 

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>
      <BemVindo cor="00FF00" tamanho={30}>
        Bem vindo ao sistema
      </BemVindo>
    </Container>
  );
}

export default App;


/* 
 <div className="container">
      <header className='header'>
        <p className='titulo'>Projeto Styled</p>
      </header>
        <h1>Bem vindo ao sistema!</h1>
    </div>
*/