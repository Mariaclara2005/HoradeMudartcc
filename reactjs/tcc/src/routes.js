import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TelaInicio from './pages/TelaInicial'
//import AutoEstima from './pages/pg-autoestima'
import TipoViolencia from './pages/TiposDeViolencia'
import Chat from './pages/Chat'
//import Cadastro from './pages/Cadastro'
//import CadastroADM from './pages/CadastroADM'
//import RedefinirSenha from './pages/RedefinirSenha'
//import Login from './pages/Login'
//import Denuncia from './pages/Denuncia'
//import CaracteristicasLocalizaçao from './pages/CaracteristicasLocalizaçao'
//import TipoAssedio from './pages/TiposAssedio'
//import MapaDelegacias from './pages/MapaDelegacias'
//import QuemSomosNos from './pages/QuemSomosNos'
//import AutorizaçaoMensagem from './pages/AutorizaçaoMensagem'
//import LoginADM from './pages/LoginADM'
//import ChatDenuncia from './pages/ChatDenuncia'
//import InformaçoesLocalizacao from './pages/InformaçoesLocalizacao'
//import InformaçoesDenuncia from './pages/InformacoesDenuncia'
//import RedefinirSenhaADM from './pages/RedefinirSenhaADM'



 
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={TelaInicio}/> 
                 {/* <Route path="/AutoEstima" exact={true} component={AutoEstima}/> */}
                <Route path="/TipoViolencia" exact={true} component={TipoViolencia}/>
                <Route path="/Chat" exact= {true} component={Chat}/>
                {/* <Route path="/Cadastro" exact={true} component={Cadastro}/>
                <Route path="/CadastroADM" exact={true} component={CadastroADM} />
                <Route path="/RedefinirSenha" exact={true} component={RedefinirSenha}/>
                <Route path="/Login" exact={true} component={Login}/>
                <Route path="/Denuncia" exact={true} component={Denuncia}/>
                <Route path="/CaracteristicasLocalizaçao" exact={true} component={CaracteristicasLocalizaçao}/>
                <Route path="/TipoAssedio" exact={true} component={TipoAssedio}/>
                <Route path="/MapaDelegacias" exact={true} component={MapaDelegacias}/>
                <Route path="/QuemSomoNos" exact={true} component={QuemSomosNos}/>
                <Route path="/AutorizaçaoMensagem" exact={true} component={AutorizaçaoMensagem}/>
                <Route path="/LoginADM" exact={true} component={LoginADM}/>
                <Route path="/ChatDenuncia" exact={true} component={ChatDenuncia}/>
                <Route path="/InformaçoesLocalizacao" exact={true} component={InformaçoesLocalizacao}/>
                <Route path="InformaçoesDenuncia" exact={true} component={InformaçoesDenuncia}/>
                <Route path="RedefinirSenhaADM" exact={true} component={RedefinirSenhaADM}/> */}
             </Switch>
        </BrowserRouter>
    )
} 