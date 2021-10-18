import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TelaInicio from './pages/TelaInicial'
import AutoEstima from './pages/AutoEstima'
import TipoViolencia from './pages/TiposDeViolencia'
import Chat from './pages/Chat'
import Cadastro from './pages/Cadastro'
import CadastroADM from './pages/CadastroADM'
import RedefinirSenha from './pages/RedefinirSenha'
import Login from './pages/Login'
import Denuncia from './pages/Denuncia'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={TelaInicio}/>
                <Route path="/AutoEstima" exact={true} component={AutoEstima}/>
                <Route path="/TipoViolencia" exact={true} component={TipoViolencia}/>
                <Route path="/Chat" exact= {true} component={Chat}/>
                <Route path="/Cadastro" exact={true} component={Cadastro}/>
                <Route path="/CadastroADM" exact={true} component={CadastroADM} />
                <Route path="/RedefinirSenha" exact={true} component={RedefinirSenha}/>
                <Route path="/Login" exact={true} component={Login}/>
                <Route path="/Denuncia" exact={true} component={Denuncia}/>
                
             </Switch>
        </BrowserRouter>
    )
} 