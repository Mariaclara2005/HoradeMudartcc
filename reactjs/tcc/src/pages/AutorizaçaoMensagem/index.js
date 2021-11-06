
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom'
import {Container} from './styled'

export default function AutorizaçaoMensagem () {
    return(

        <Container>

            <div class="site">

                <div class="cabecalho-inicio">

                    <div class="cabecalho-img">
                        <img class="img-fx1" src="/assets/imagens/logo-claro.png" alt=""/>
                    </div>

                    <div class="cabecalho-botoes">
                        
                        <Link to="/Denúncia">Denúncia</Link>
                        <Link to="/TipoViolencia">Tipos de violência</Link>
                        <Link to=" ">Tipos de assédio</Link>
                        <Link to=" ">Mapa das Delegacia</Link>
                        <Link to="/AutoeEstima">Autoestima</Link>
                        <Link to="/Chat">Chat</Link>
                        <Link to=" ">Cadastro</Link>
                                                    
                    </div>

                </div>
                

                <div class="texto">

                    <div class="texto-fx1"> Autorização de mensagens - CHAT </div>

                </div>

                
                </div>

                <div class="tabela">



                </div>



        </Container>

    )
}