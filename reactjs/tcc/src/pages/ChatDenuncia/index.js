import { Container } from "./styled";
import { useState, useEffect, React, useRef } from 'react';
import Cabecalho  from "../../componentes/comum/cabecalho/index";
import { Link } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { useHistory } from 'react-router-dom';
// import Cookies from 'js-cookie';
import Api from '../../service/api.js'




export default function MapaDelegacias ()
{
    return (
    <Container>
        <div div class="faixa1">
    
         <div class="cabecalho">
         <div class="imagem">
             <img class="logo" src="/assets/imagens/logo-claro.png" />
          </div>
          <div class="cabecalho-botoes">         
                    <Link to="/">Denúncie</Link>
                    <Link to="/TipoViolencia">Tipos de violência</Link>
                    <Link to=" ">Tipos de assédio</Link>
                    <Link to=" ">Mapa das Delegacia</Link>
                    <Link to=" ">Autoestima</Link>
                    <Link to="/Chat">Chat</Link>
                    <Link to=" ">Cadastro</Link>                         
                </div>
     </div>
     
        <div class="texto">Chat de denuncia</div>
        </div>  
        <div class="conteudo"/>
        <div class="chat">
                <div class="policial1"> Policial</div>
                <div class="user1"> <img src="/assets/imagens/pg-chatdenun-user.png" widht="100" height="100"/> </div>
                <div class="balao1"></div>
                <div class="text1"> Olá qual é a sua denúncia?</div>
                <div class="policial2"> Policial</div>
                <div class="user2"> <img src="/assets/imagens/pg-chatdenun-user.png" widht="100" height="100"/> </div>
                <div class="balao2"></div>
                 <div class="text2"> Me mande sua localização atual  </div>
                <div class="scrollbar"></div>
             <  div class="searchbox">
     <i class="fa fa-search" aria-hidden="true"></i>
      <input type="text" name="" placeholder="&nbsp;&nbsp;&nbsp; Digite... "/>
      
      <div class="enviar">Enviar</div>
      <div class="local"> Envie sua localização</div>
      <div class="localimg"> <img src="/assets/imagens/pg-mapa-mapa.png" widht="88" height="73"/>
     </div>
 </div>
</div>
</Container>
)
}