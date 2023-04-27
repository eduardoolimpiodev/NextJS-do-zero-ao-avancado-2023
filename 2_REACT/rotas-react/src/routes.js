import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/Sobre';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />

            <Route path="/sobre" component={Sobre}/>
        </BrowserRouter>
       
    )
}

export default Routes;