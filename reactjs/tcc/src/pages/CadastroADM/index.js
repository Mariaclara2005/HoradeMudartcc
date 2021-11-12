

// import {link} from 'react-router-dom';
import {Container} from './styled'
import Cabecalho from '../../componentes/comum/cabecalho'
import cadastro from '../../../src/assets/imagens/pg-cadastro-adm.png';

export default function CadastroADM () 
{
    return (

    <Container>

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
                    <input type="email" name="" placeholder="Email da Empresa"></input>
                </div>

                <div class="numeros">
                    <div class="celular">
                        <input type="text" placeholder="Celular" id="celular" name="celular" />
                    </div>

                    <div class="telefone">
                        <input type="text" placeholder="Telefone" id="telefone" name="telefone" />
                    </div>
                </div>

                <div class="senhas">
                    <div class="senha">
                        <input type="password" name="" placeholder="Digite sua senha"></input>
                    </div>

                    <div class="confirmar-senha">
                        <input type="password" name="" placeholder="Confirmar senha"></input>
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
    </Container>
  
    )

}
