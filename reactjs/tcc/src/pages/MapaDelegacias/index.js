import { Container } from "../../components/cabecalho/styled";
import { useState, useEffect, React, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Api from '../../service/api.js'
const api = new Api ();



export default function MapaDelegacias ()
{
    return (
    <Container>
            <div class="site"> 
    <div class="container">
        <div class="cabecalho">
            <div class="logo"> <img src="../../src/images/pg-mapa-logo.png" widht="116" height="132"/> </div>
            <div class="encaminha">Início &nbsp; Denúncie &nbsp; Tipos de violência &nbsp; Tipos de assédio &nbsp; Mapa das Delegacia &nbsp; Autoestima &nbsp; Chat &nbsp; Cadastro</div>
        </div>
        <div class="conteudo">
            <div class="text">Localize a delegacia mais próxima:</div>
            <div class= "searchbox" />
                <div class="research"> <img src="../../src/images/pg-mapa-research.png" widht="48.84" height="56.23"/> </div>
               <i class="fa fa-search" aria-hidden="true"></i>
               <input type="text" name="" placeholder="Type Here"/>
             </div>
            <div class="mapa"> <img src="../../src/images/pg-mapa-mapa.png" widht="1000" height="500"/> </div>
        </div>
        <div class="conteudo2">
            <div class="mulher"><img src="../../src/images/pg-mapa-mulher.png" widht="500" height="500"/></div>
            <div class="text2"> Denúncie Conosco</div>
            <div class="text3"> Nós da Hora De Mudar incetivamos você a fazer uma denúncia!</div>
            <div class="text4"> Clique aqui para ser redicionada ao nosso chat de denúncias</div>
            
            <div class="config">
            <button class="btn2"> Chat </button>
        </div>
             </div>
        </div>
</Container>
)
}