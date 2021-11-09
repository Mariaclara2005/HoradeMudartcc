
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container }  from "./styled";
import Cabecalho from '../../componentes/comum/cabecalho'

 export default function ChatDenuncia ()
 {
     return (
     <Container>
         <div div class="faixa1">
    
         <Cabecalho/>
         <div class="texto">Chat de denuncia</div>
         </div>  
         <div class="conteudo"/>
         <div class="chat">
             <div class="containerimg">
                 <div class="test">
                 <div class="policial1"> Policial</div>
                 
                 <div class="user1"> <img src="/assets/imagens/pg-chatdenun-user.png" widht="100" height="100"/> </div>
                 </div>
                 <div class= "test3">
                 <div class="policial2"> Policial</div>
                 <div class="user2"> <img src="/assets/imagens/pg-chatdenun-user.png" widht="100" height="100"/> </div>
                 </div>
                 </div>
                 <div class="containerbalao">
                     <div class= "test2">
                 <div class="balao1">  Olá qual é a sua denúncia </div>
                 <div class="balao2"> Me mande sua localização atual</div>
                 </div>
                  </div>
                 <div class="scrollbar"></div>
              <  div class="searchbox">
      <i class="fa fa-search" aria-hidden="true"></i>
       <input type="text" name="" placeholder="&nbsp;&nbsp;&nbsp; Digite... "/>
      
       <div class="enviar">Enviar</div>
       <div class="local"> Envie sua localização</div>
      {/* <div class="localimg"> <img src="/assets/imagens/pg-mapa-mapa.png" widht="88" height="73"/> */}
      </div>
  </div>
 
 </Container>
 )
}