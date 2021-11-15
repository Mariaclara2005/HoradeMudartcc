import {Container} from './styled';
import Cabecalho from '../../componentes/comum/cabecalho';
 

 export default function QuemSomosNos () {
   return(
   <Container>
       <Cabecalho/>
         <div class="box">
        <div class="container">

      <div class="faixa1">

      <div class="cabecalho">
        <img src="../../src/images/logo-claro.png" alt=''/>
          <div class="titulo">
            <h1>Quem somos nós?</h1>
          </div>
        </div>
      </div>
          <div class="principal">
            <img src="../../src/images/principal-quemsomos.png" alt=''/>
          </div>
        </div>
      </div>

    <div class="faixa2">
        <img src="../../src/images/segunda-quemsomos.png" alt=''/>
        <div class="texto">"Hora de Mudar" foi criado como forma de protesto aos abusos e violências que mulheres sofrem diariamente, nosso intuito é incentivar o maior número de vitimas possível a denunciar seus agressores e dar o maior apoio possível. 
        </div>
    </div>
    

        <div class="faixa3">
          <div class="descricao">
           Atualmente, nossa localização é virtual, tendo como alvo alcançar e ajudar aquelas que mais precisam, não apenas em São Paulo, mas também no Brasil inteiro.
          <img src="../../src/images/terceira-quemsomos.png" alt=''/>
       </div>
      
   </div>



 </Container>
   )
    
}