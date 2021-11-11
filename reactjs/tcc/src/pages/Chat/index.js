
import {Link} from 'react-router-dom'
import {Container} from './styled'




export default function ChLinkt () {
    return (

    <Container>
        
      <div class="faixa1">

        
                  <div class="cabecalho-inicio">

            <div class="cabecalho-img">
                <Link to="/LoginADM">
                <img src="/assets/imagens/logo-claro.png" alt=""/>
                </Link>
            </div>


            <div class="cabecalho-botoes">

                
                <Link to="/">Inicio</Link>
                <Link to="/TipoViolencia">Tipos de violência</Link>
                <Link to="/TiposDeAssedio">Tipos de assédio</Link>
                <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                <Link to="/AutoEstima">Autoestima</Link>
                <Link to="/Denúncia">Denúncia</Link>
                <Link to="/Cadastro">Cadastro</Link>
                <Link to="/Login">Login</Link>

                                              
            </div>

            </div>

        <div class="introducao">
          <div class="apresentacao">
            <div class="titulo">Chat</div>

            <div class="texto_chat">
              No nosso chat você vai encontrar depoimentos de outras mulheres
              que já tiveram ou tem um relacionamento abusivo. 
              O maior objetivo é mostrar que todas nós conseguimos e devemos sair dessa!
            </div>
          </div>

          <div class="imagem1">
            <img class="imgteste" src="/assets/imagens/pg-chat-fx1.png" alt=""/>
          </div>
        </div>
      </div>

      <div class="faixa2">
        <div class="imagem2">
          <img src="/assets/imagens/pg-chat-fx2.png" alt="" />
        </div>

        <div class="conteudo">
          <div class="compartilhe">Compartilhe</div>

          <div class="explicacao">
            Compartilhe a sua experiencia! Para que outras mulheres se sintam
            encorajadas a fazerem o mesmo, e sair de um relacionamento abusivo.
          </div>
        </div>
      </div>

      <div class="faixa3">
        <div class="chat1">
          <div class="depoimento1">
            <div class="usuario1">
              <div class="perfil1">
                <img src="/assets/imagens/pg-chat-perfil.png" alt=""/>
              </div>

              <div class="nome1">Juliana Santos</div>
            </div>

            <div class="mensagem1">
              Eu vivi um relacionamento abusivo duas vezes. Na primeira, eu era
              agredida fisicamente. Na segunda, psicologicamente. Nenhum dos
              relacionamentos me fez bem. E sair foi a parte mais difícil.
              Depois de negar o que eu passava, finalmente enxerguei o que
              acontecia. Duas vezes. Em ambas, eu era colocada como a louca,
              desequilibrada. E pior, eu defendia a pessoa.
            </div>

            <div class="reagir_msg1">
              <div class="curtidas1">
                <div class="coracao1">
                <img src="/assets/imagens/pg-chat-coracao.png" alt="" />
                </div>

                <div class="quantidade1">74</div>
              </div>
            </div>
          </div>

          

          <div class="depoimento3">
            <div class="usuario3">
              <div class="perfil3">
                <img src="/assets/imagens/pg-chat-perfil.png" alt="" />
              </div>

              <div class="nome3">Manuela Nunes</div>
            </div>

            <div class="mensagem3">
              Eu tinha uns 13 anos quando comecei a sair sozinha. Mas eu era
              bastante inocente, já que meus pais nunca tiveram uma conversa
              sobre sexo comigo. Um dia me envolvi com um cara de uns 30 anos,
              que sempre foi muito simpático comigo. Certa vez ele me levou a
              uma sala e me colocou contra a parede, falou que dali eu não
              escapava dele. Eu não queria transar, não tinha vontade alguma,
              até porque eu era virgem e não sabia o que estava acontecendo. Ele
              me pegou e me colocou em cima de uma mesa e acabamos transando
              contra a minha vontade. Quis muito contar para os meus pais, mas
              tinha medo da reação deles. Já aos 14 anos resolvi contar para
              minha mãe. Ela contou pra o meu pai. Ele quis processar o cara que
              fez isso comigo, mais eu estava com medo de virar uma confusão
              ainda maior e ele querer fazer alguma coisa conosco. Hoje tenho 18
              anos e vejo que isso que ele fez comigo é imperdoável, e quando
              meu pai queria denunciar, eu deveria ter deixado.
            </div>

            <div class="reagir_msg3">
              <div class="curtidas3">
                <div class="coracao3">
                    <img src="/assets/imagens/pg-chat-coracao.png" alt=""/>
                </div>

                <div class="quantidade3">23</div>
              </div>
            </div>
          </div>

          <div class="comentario">
            <div class="meu_perfil">
                <img src="/assets/imagens/pg-chat-perfil.png" alt=""/>
            </div>

            <div clss="digitar">
              <input type="text" name="" placeholder="Faça um comentário"  />
            </div>
            <div class="publicar">
              <button>Publicar</button>
            </div>
          </div>
        </div>
      </div>
    </Container>

    )
} 


