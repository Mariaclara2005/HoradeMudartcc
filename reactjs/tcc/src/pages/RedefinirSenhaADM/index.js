
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom'

import {Container} from './styled'

export default function RedefinirSenhaADM () {
    return(

        <Container>

        <div class="site">

        
                            <div class="cabecalho-inicio">

                    <div class="cabecalho-img">
                        <Link to="/LoginADM">
                        <img src="/assets/imagens/logo-claro.png" alt=""/>
                        </Link>
                    </div>


                    <div class="cabecalho-botoes">

                        
                        <Link to="/">Inicio</Link>
                        <Link to="/TipoViolencia">Tipos de violência</Link>
                        <Link to=" ">Tipos de assédio</Link>
                        <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                        <Link to="/AutoEstima">Autoestima</Link>
                        <Link to="/Chat">Chat</Link>
                        <Link to="/Cadastro">Cadastro</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Denúncia">Denúncia</Link>

                                                    
                    </div>

                    </div>
    
            <div class="conteudo">
    
                <div class="titulo">
    
                    <div class="texto">Redefinir Senha de ADM</div>
    
    
                </div>

            <div class="linha">
                <hr/>
          </div>
                <div class="campos">
    
                <div class="caixa-1">
                <input type="text" name="" placeholder="Nova Senha"/>
                </div>
    
                <div class="caixa2">
                    <input type="text" name="" placeholder="Confirmar Senha"/>
                </div>
    
    
                </div>
    
                <div class="botoes">
    
    
                <div class="botao1">
                    <button>Alterar</button>
              </div>

              <div class="botao2">
                    <button>Cancelar</button>
              </div>

                </div>
    
            </div>
    
            </div>

        </Container>

    )
}