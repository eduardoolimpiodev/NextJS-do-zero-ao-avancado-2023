import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Header from './components/Header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route exact path="/contato" component={Contato} />
                <Route path="*" component={Erro} />
            </switch>
        </BrowserRouter>
       
    )
}

export default Routes;