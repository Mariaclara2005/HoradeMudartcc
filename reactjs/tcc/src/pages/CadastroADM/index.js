

import {link} from 'react-router-dom';
import {container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho'
import cadastro from '../../../../../html-css/src/images/pg-cadastro-adm.png'

export default function CadastroADM () 
{
    return (

    <container>

        <Cabecalho/>

        <div class="conteudo">
            <div class="cadastro">
                <div class="titulo">Cadastro Adm</div>

                <div class="indentificacao">
                    <div class="nome">
                        <input type="text" name="" placeholder="Nome"></input>
                    </div>

                    <div class="sobrenome">
                        <input type="text" name="" placeholder="Sobrenome"></input>
                    </div> 
                </div>    

                <div class="email">
                    <input type="text" name="" placeholder="Email da Empresa"></input>
                </div>

                <div class="celular">
                    <input type="text" name="" placeholder="Celular"></input>
                </div>

                <div class="senhas">
                    <div class="senha">
                        <input type="text" name="" placeholder="Senha"></input>
                    </div>

                    <div class="confirmar-senha">
                        <input type="text" name="" placeholder="Confirmar Senha"></input>
                    </div>
                </div>

                <div class="entrar">
                    <button>Entrar</button>
                </div>
            </div>

            <div class="imagem">
                <img src={cadastro} alt=""/>
    
            </div>
        </div>
    </container>
  
    )

}
