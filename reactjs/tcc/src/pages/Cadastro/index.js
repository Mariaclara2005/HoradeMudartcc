


 import {Container} from './styled';
 import Cabecalho from '../../componentes/comum/cabecalho';
 

 import { useState } from 'react';
//import Cookies from 'js-Cookies';


import Api from '../../service/api';
const api = new Api()




 export default function Cadastro ()
 {

    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Email, setEmail] = useState('');
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');
   //  const [idAlterando, setIdAlterando] = useState(0);
   //  const loading = useRef();

    async function inserir () {
        alert("Caiu")

        let r = await api.inserir(Nome, Sobrenome, Celular, Email, Senha );
      
       if(r.erro !== undefined){
           alert(r.erro)
       } else {
           alert("Oioiii lindo, funfou")
       }

    }

   

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
                   <input type="text" name="" value={Nome} onChange={e => setNome(e.target.value)}  placeholder="Nome"></input>
                </div>

                <div class="sobrenome">
                    <input type="text" name="" value={Sobrenome} onChange={e => setSobrenome(e.target.value)}  placeholder="Sobrenome"></input>
               </div> 
            </div>    

           <div class="email">
                <input type="text" name="" value={Email} onChange={e => setEmail(e.target.value)}  placeholder="Email"></input>
            </div>
            <div class="celular">
                <input type="text" name="" value={Celular} onChange={e => setCelular(e.target.value)} placeholder="Celular"></input>
           </div>

             <div class="senhas">
                <div class="senha">
                    <input type="text" name="" value={Senha} onChange={e => setSenha(e.target.value)}  placeholder="Senha"></input>
               </div>

                <div class="confirmar-senha">
                    <input type="text" name="" placeholder="Confirmar Senha"></input>
               </div>
            </div>

            <div class="entrar">
               <button  onClick={() => inserir()}>Entrar</button>
             

           </div>
     </div>

       
  </div>
  </Container>        

     )
 }