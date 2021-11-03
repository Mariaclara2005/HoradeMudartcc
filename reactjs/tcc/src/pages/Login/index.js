// import {link} from 'react-router-dom';
import {Container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho';
import { Link } from 'react-router-dom';
import "animate.css/animate.min.css";



export default function Login ()
{
    return  (
        <Container> 
       
   <div class="site"> 

     <Cabecalho/>

       <div class="conteudo">

        <div class="imagem1">
          <img class ="imagem2"src="/assets/imagens/pg-login.png" alt=""/>
        </div>

      


        <div class="bloco-interacao">

                <div class="bloco">
            
            <div class="titulo">

                <div class="texto">Login</div>


            </div>

        <div class="linha">
            <hr/>
        </div>
            <div class="campos">

            <div class="caixa-1">
            <input type="text" name="" placeholder="Email"/>
            </div>

            <div class="caixa2">
                <input type="text" name="" placeholder="Senha"/>
            </div>


            </div>

            <div class="esqueceu-senha">
            <Link to="/EsqueceuSenha">Esqueci a Senha</Link>
            </div>

            <div class="botoes">


            <div class="botao1">
                <button>Cadastro</button>
          </div>

          <div class="botao2">
                <button>Entrar</button>
          </div>

            </div>

        </div>

        </div>

        </div>
 
    </div>

</Container>
    )
}

