// import {link} from 'react-router-dom';
import {Container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho';


export default function Login ()
{
    return  (
        <Container> 
        <Cabecalho/>

   <div class="conteudo">
    <div class="imagem1">
      <img src="/assets/imagens/pg-login.png"/>

    </div>

     <div class="Login">
      <div class="titulo">Login</div>

      <br></br>

        <div class="indentificacao">
            
         <div class="Email">
              <div class="email">
              <input type="text" name="" placeholder="Email"input/>
            </div>

            <div class="senha">
                 <input type="text" name="" placeholder=" Senha" input/>
          </div>
         </div>

          </div>

         <div class="entrar">
          <button>Entrar</button>
      
         </div>

       <div class="Cadastro">
        <button>Cadastar</button>
    
    </div>
  

  </div>

  
</div>


</Container>
    )
}

