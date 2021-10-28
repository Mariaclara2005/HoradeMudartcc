// import {link} from 'react-router-dom';
import {Container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho';
// import Img from '../../../public/assets/imagens/logo-claro.png'
// import Img2 from '../../../public/assets/imagens/pg-cadastro.png'

export default function Cadastro ()
{
    return(
 <Container>
     <Cabecalho />

   <div class="conteudo">
     <div class="imagem1">
        <img src='/assets/imagens/pg-cadastro.png' alt=""/>  

   </div>

    <div className="barra"><img src='/assets/imagens/line 12.png' alt="" /></div> 

       <div class="cadastro">
           
           <div class="titulo">Cadastre-se</div>
          
        <br></br>

           <div class="indentificacao">
               <div class="nome">
                   <input type="text" name="" placeholder="Nome"></input>
               </div>

               <div class="sobrenome">
                   <input type="text" name="" placeholder="Sobrenome"></input>
               </div> 
           </div>    

           <div class="email">
               <input type="text" name="" placeholder="Email"></input>
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

       
   </div>
   </Container>        

    )
}