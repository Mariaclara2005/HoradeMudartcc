
import {link} from 'react-router-dom';
import {container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho'

export default function RedefinirSenha () 
{
    return (

        <container>
        <div class="cabecalho">
            <div class="logo">
              <img src="../../src/images/logo-claro.png" />
            </div>

            <div class="menu">
              <a href=" ">Inicio</a>
              <a href=" ">Denúncie</a>
              <a href=" ">Tipos de violência</a>
              <a href=" ">Tipos de assédio</a>
              <a href=" ">Mapa das Delegacias</a>
              <a href=" ">Autoestima</a>
              <a href=" ">Chat</a>
              <a href=" ">Cadastro</a>
            </div>

        </div>

        <div class="conteudo">
            <div class="titulo">Redefinir Senha</div>

            <div class="senhas">
                <div class="nova-senha">
                  <input type="text" name="" placeholder="Nova Senha"></input>
                </div>

                <div class="confirmar-senha">
                  <input type="text" name="" placeholder="Confirmar Senha"></input>
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
    </container>
    )
}