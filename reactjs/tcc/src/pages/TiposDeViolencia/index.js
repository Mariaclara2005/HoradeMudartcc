import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


import {Container} from './styled'
import { Link } from 'react-router-dom'


export default function TiposDeViolencia () {
    return(

        <Container>

    <div class="faixa1">

            <div class="cabecalho-inicio">

        <div class="cabecalho-img">
            <img src="/assets/imagens/logo-claro.png" alt=""/>
        </div>

        <div class="cabecalho-botoes">

                
            <Link to="/">Inicio</Link>
            <Link to="/Denúncia">Denúncia</Link>
            <Link to="">Tipos de assédio</Link>
            <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
            <Link to="/AutoEstima">Autoestima</Link>
            <Link to="/Chat">Chat</Link>
            <Link to="/Cadastro">Cadastro</Link>

                                        
        </div>

        </div>

        <div class="conteudo-faixa1">

            <div class="faixa1-textos">

            <ScrollAnimation animateIn="animate__bounceInLeft">
                <div class="faixa1-titulo"> Tipos de <br/> Violência </div>
           </ScrollAnimation>

           <ScrollAnimation animateIn="animate__bounceInLeft">
                <div class="faixa1-txt">
                    A Lei Maria da Penha conceitua violência contra a mulher como qualquer conduta - ação ou omissão - de discriminação, agressão ou coerção, ocasionada pelo simples fato da vítima ser mulher. E que lhe cause dano, morte, constrangimento, limitação, sofrimento físico, sexual, moral, psicológico, social, político ou econômico ou perda patrimonial. Essa violência pode acontecer tanto em espaços públicos como privados.
                </div>
          </ScrollAnimation>

            </div>

            <div class="faixa1-img">
                <img class="img-tpdeviolencia" src="/assets/imagens/pg-tpdeviolencia-inicio.png" alt=""/>
            </div>

        </div>


    </div>


    <div class="faixa-2">

        <div class="img-faixa2">
            <img class="faixa2-img" src="/assets/imagens/pg-tpdeviolencia-fx2.png" alt=""/>
        </div>

        <div class="conteudo-faixa2">

        <ScrollAnimation animateIn="animate__bounceInRight">
            <div class="texto1-faixa2"> Violência Física</div>
        </ScrollAnimation>

            <ScrollAnimation animateIn="animate__bounceInRight">
            <div class="texto2-faixa2">Também denominada sevícia física, maus-tratos físicos ou abuso físico. São atos violentos, nos quais se fez uso da força física de forma intencional, não-acidental, com o objetivo de ferir, lesar, provocar dor e sofrimento ou destruir a pessoa, deixando, ou não, marcas evidentes no seu corpo. </div>
            </ScrollAnimation>
        </div>

    </div>

    <div class="faixa3">

        <div class="faixa3-conteudo">

        <ScrollAnimation animateIn="animate__bounceInLeft">
            <div class="faixa3-texto1">Violência <br/> Psicológica </div>
            </ScrollAnimation>

      <ScrollAnimation animateIn="animate__bounceInLeft">
            <div class="faixa3-texto2"> Conduta que cause dano emocional e diminuição da autoestima ou que prejudique e perturbe o pleno desenvolvimento ou que vise degradar ou controlar ações, comportamentos, crenças e decisões, mediante ameaça, constrangimento, humilhação, manipulação, isolamento, vigilância constante, perseguição contumaz, insulto, chantagem, ridicularização, exploração </div>
            </ScrollAnimation>
        </div>

        <div class="faixa3-img">
            <img class="img-faixa3" src="/assets/imagens/pg-tpdeviolencia-fx3.png" alt=""/>
        </div>

    </div>

    <div class="faixa4">

        <div class="faixa4-img">
            <img  class="img-faixa4" src="/assets/imagens/pg-tpdeviolencia-fx4.png" alt=""/>
        </div>

        <div class="faixa4-conteudo">
            
        <ScrollAnimation animateIn="animate__bounceInRight">
            <div class="faixa4-texto1">Violência <br/> Sexual</div>
            </ScrollAnimation>

    <ScrollAnimation animateIn="animate__bounceInRight">
            <div class="faixa4-texto2">Conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada, mediante intimidação, ameaça, coação ou uso da força; que induza a comercializar ou a utilizar, de qualquer modo, a sua sexualidade, que a impeça de usar qualquer método contraceptivo ou que a force ao matrimônio, à gravidez, ao aborto ou à prostituição, mediante coação, chantagem, suborno ou manipulação; </div>
            </ScrollAnimation>
        </div>

    </div>

    <div class="faixa5">

        <div class="faixa5-conteudo">

        <ScrollAnimation animateIn="animate__bounceInLeft">
            <div class="faixa5-texto1"> Violência <br/> Patrimonial</div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__bounceInLeft">
            <div class="faixa5-texto2">Conduta que configure retenção, subtração, destruição parcial ou total de objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades; </div>
            </ScrollAnimation>
        </div>

        <div class="faixa5-img">
            <img class="img-faixa5" src="/assets/imagens/pg-tpdeviolencia-fx5.png" alt=""/>
        </div>

    </div>

    <div class="faixa6">

        <div class="faixa6-img">
            <img class="img-faixa6" src="/assets/imagens/pg-tpdeviolencia-fx6.png" alt=""/>
        </div>

        <div class="faixa6-conteudo">

        <ScrollAnimation animateIn="animate__bounceInRight">
            <div class="faixa6-texto1">Violência <br/> Moral</div>
            </ScrollAnimation>

         <ScrollAnimation animateIn="animate__bounceInRight">
            <div class="faixa6-texto2">Entende-se por violência moral qualquer conduta que importe em calúnia, quando o agressor ou agressora afirma falsamente que aquela praticou crime que ela não cometeu; difamação; quando o agressor atribui à mulher fatos que maculem a sua reputação, ou injúria, ofende a dignidade da mulher.</div>
            </ScrollAnimation>
        </div>

    </div>

    <div class="faixa7">

        

        <div class="faixa7-conteudo">

        <ScrollAnimation animateIn="animate__bounceInLeft">
            <div class="faixa7-texto">Você não está sozinha!</div>

       <Link to="/"> 
            <img class="" src="/assets/imagens/pg-tpdeviolencia-fx7-180.png" alt=""/>
         </Link>
        </ScrollAnimation>
      

        </div>

        <div class="faixa7-img">
            <img class="img-faixa7" src="/assets/imagens/pg-tpdeviolencia-fx7.png" alt=""/>
        </div>

    </div>

</Container>

    )
}