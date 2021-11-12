import { Link } from 'react-router-dom'
import {Container} from './styled';


export default function RedefinirSenha () 
{
    return (

        <Container>

        
            <div class="cabecalho-inicio">

            <div class="cabecalho-img">
                <Link to="/LoginADM">
                <img src="/assets/imagens/logo-claro.png" alt=""/>
                </Link>
            </div>


            <div class="cabecalho-botoes">

                
                <Link to="/Denuncie">Denúncie</Link>
                <Link to="/TipoViolencia">Tipos de violência</Link>
                <Link to=" ">Tipos de assédio</Link>
                <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                <Link to="/AutoEstima">Autoestima</Link>
                <Link to="/Chat">Chat</Link>
                <Link to="/Cadastro">Cadastro</Link>
                <Link to="/Login">Login</Link>

                                              
            </div>

            </div>

        <div class="conteudo">
            <div class="titulo">Redefinir Senha</div>

            <div class="senhas">
                <div class="nova-senha">
                  <input type="password" name="" placeholder="Nova Senha"></input>
                </div>

                <div class="confirmar-senha">
                  <input type="password" name="" placeholder="Confirmar senha"></input>
                </div>
            </div>

            <div class="botoes">
                <div class="alterar">
                  <button>Alterar</button>
                </div>

                <div class="cancelar">
                  <button>Cancelar</button>
                </div>
            </div>
        </div>
    </Container>
    )
}