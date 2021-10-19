import { Container } from "./styled";
import { useState, useEffect, React, useRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { useHistory } from 'react-router-dom';
// import Cookies from 'js-cookie';
import Api from '../../service/api.js'
import Cabecalho  from "../../componentes/comum/cabecalho/index";



export default function MapaDelegacias ()
{
    return (
    <Container>
        <Cabecalho/>
        <div class="container"/>
        <div class="faixa1"/>
         <div class="cabecalho">
         <div class="imagem">
             <img class="logo" src="../../src/images/logo-claro.png" />
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
        <div class="texto">Chat de denuncia</div>
        <div class="conteudo"/>
        <div class="chat">
                <div class="policial1"> Policial</div>
                <div class="user1"> <img src="../../src/images/pg-chatdenun-user.png" widht="100" height="100"/> </div>
                <div class="balao1"></div>
                <div class="text1"> Olá qual é a sua denúncia?</div>
                <div class="policial2"> Policial</div>
                <div class="user2"> <img src="../../src/images/pg-chatdenun-user.png" widht="100" height="100"/> </div>
                <div class="balao2"></div>
                 <div class="text2"> Me mande sua localização atual  </div>
                <div class="scrollbar"></div>
             <  div class="searchbox">
     <i class="fa fa-search" aria-hidden="true"></i>
      <input type="text" name="" placeholder="&nbsp;&nbsp;&nbsp; Digite... "/>
      
      <div class="enviar">Enviar</div>
      <div class="local"> Envie sua localização</div>
      <div class="localimg"> <img src="../../src/images/pg-mapa-mapa.png" widht="88" height="73"/>
     </div>
 </div>
</div>
</Container>
)
}