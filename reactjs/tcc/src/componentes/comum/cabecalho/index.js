import { cabecalho, Container } from "./styled";

import Img from '../../../assets/images/logo-claro.png'

export default function index() {
    return(
      <cabecalho>
          <div class="cabecalho">

<div class="imagem">
    <img class="logo" src={Img} />
 </div>

    <div class="menu">
     <a href=" ">Inicio</a>
     <a href=" ">Denúncie</a>
     <a href=" ">Tipos de violência</a>
     <a href=" ">Tipos de assédio</a>
     <a href=" ">Mapa das Delegacias</a>
     <a href=" ">Chat</a>
     <a href=" ">Cadastro</a>
    </div>


</div>
      </cabecalho>
    )  
}