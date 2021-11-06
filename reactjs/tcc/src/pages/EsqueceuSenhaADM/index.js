import {Container} from './styled'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css";

export default function  EsqueceuSenha () {
    return (

        <Container>

        <div class="cabecalho-inicio">

        <div class="cabecalho-img">
            <Link to="/"> 
            <img src="/assets/imagens/logo-claro.png" alt=""/>
            </Link>
        </div>
        

        <div class="cabecalho-botoes">

           <Link to="/">Inicio</Link>
             <Link to="/Denúncia">Denúncia</Link>
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
    
                <div class="titulo">
    
                    <div class="texto">Recuperação de senha de ADM</div>
    
    
                </div>

            <div class="linha">
                <hr/>
          </div>
                <div class="campos">
    
                <div class="caixa-1">
                <input type="text" name="" placeholder="Ensira o seu email:"/>
                </div>
    
             
    
                </div>
    
                <div class="botoes">
    
    
                <div class="botao1">
                    <button>Enviar Codigo</button>
              </div>

              <div class="botao2">
                    <button>Cancelar</button>
              </div>

                </div>
    
            </div>
        
        
        </Container>
    )
}