import { Container } from "./styled";
import { Link } from "react-router-dom";


export default function index() {
    return(
      <Container>
   <div class="cabecalho-inicio">

<div class="cabecalho-img">
    <img class="img-fx1" src="/assets/imagens/logo-claro.png" alt=""/>
</div>


<div class="cabecalho-botoes">

    
     <Link to="/">Denúncie</Link>
     <Link to="/TipoViolencia">Tipos de violência</Link>
     <Link to=" ">Tipos de assédio</Link>
     <Link to=" ">Mapa das Delegacia</Link>
     <Link to="/AutoEstima">Autoestima</Link>
     <Link to="/Chat">Chat</Link>
     <Link to="/Cadastro">Cadastro</Link>

                                   
</div>

</div>
      </Container>
    )  
}