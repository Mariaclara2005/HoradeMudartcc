import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import {Container} from './styled'

export default function RedefinirSenhaADM () {
    return(

        <Container>

        <div class="site">

        <div class="cabecalho-inicio">
    
            <div class="cabecalho-img">
                <img class="img-adm" src="/assets/imagens/logo-claro.png" alt=""/>
            </div>
    
        </div>
    
            <div class="conteudo">
    
                <div class="titulo">
    
                    <div class="texto">Redefinir Senha de ADM</div>
    
    
                </div>

            <div class="linha">
                <hr/>
          </div>
                <div class="campos">
    
                <div class="caixa-1">
                <input type="text" name="" placeholder="Nova Senha"/>
                </div>
    
                <div class="caixa2">
                    <input type="text" name="" placeholder="Confirmar Senha"/>
                </div>
    
    
                </div>
    
                <div class="botoes">
    
    
                <div class="botao1">
                    <button>Alterar</button>
              </div>

              <div class="botao2">
                    <button>Cancelar</button>
              </div>

                </div>
    
            </div>
    
            </div>

        </Container>

    )
}