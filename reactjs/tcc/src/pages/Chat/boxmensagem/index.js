import { Container } from "../styled"

export default function BoxMensagem(props){

    return(
        <Container>

        <div class="depoimento3">
        <div class="usuario3">
          <div class="perfil3">
            <img src="/assets/imagens/pg-chat-perfil.png" alt="" />
          </div>

          <div class="nome3">{props.info.nm_HDM_usuario}</div>
        </div>

        <div class="mensagem3">
          {props.info.ds_HDM_mensagem}
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

      </Container>

    )
}