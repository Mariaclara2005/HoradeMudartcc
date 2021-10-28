
import {link} from 'react-router-dom';
import {container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho'

export default function RedefinirSenha () 
{
    return (

        <container>
        <div class="Cabecalho">
            <div class="logo">
              <img src="../../src/images/logo-claro.png" />
            </div>

            <div class="menu">
              <Link to="">Inicio</Link>
              <Link to="">Denúncie</Link>
              <Link to="">Tipos de violência</Link>
              <Link to="">Tipos de assédio</Link>
              <Link to="">Mapa das Delegacias</Link>
              <Link to="">Autoestima</Link>
              <Link to="">Chat</Link>
              <Link to="">Cadastro</Link>
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