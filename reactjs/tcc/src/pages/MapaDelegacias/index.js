import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Link } from 'react-router-dom';
import { Container } from "./styled";


const loader = new Loader({
    apiKey: "AIzaSyDOQ1P-nh88fs2TnDf4SUCcFvXnoxcDLVg",
    version: "weekly",
    libraries: ["places"]
});

export default class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let self = this;
        const defaultMapOptions = {
            center: {
                lat: -23.7300074,
                lng: -46.6970212
            },
            zoom: 15
        };
        loader.load().then((google) => {
            const map = new google.maps.Map(
                self.googleMapDiv,
                defaultMapOptions);
            this.setState({
                google: google,
                map: map
            });
        });
    }

    render() {
        return (
            <Container>
                    <div class="site"> 
            <div class="container">
                <div class="cabecalho">
                    <div class="logo"> <img src="/assets/imagens/pg-mapa-logo.png" widht="116" height="132"/> </div>
                    <div class="cabecalho-botoes">

                    <Link to="/Denuncie">Denúncie</Link>
                     <Link to="/TipoViolencia">Tipos de violência</Link>
                     <Link to=" ">Tipos de assédio</Link>
                     <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                     <Link to="/AutoEstima">Autoestima</Link>
                     <Link to="/Chat">Chat</Link>
                     <Link to="/Cadastro">Cadastro</Link>
                     <Link to="/Login">Login</Link>
        
                    </div>
                </div>
                <div class="conteudo">
                    <div class="text">Localize a delegacia mais próxima:</div>
                    <div class= "searchbox" />
                       {/* <div class="research"> <img src="/assets/imagens/pg-mapa-research.png" widht="48.84" height="56.23"/> </div>
                       <i class="fa fa-search" aria-hidden="true"></i>
                       <input type="text" name="" placeholder="Type Here"/> */}
                     </div>
                     <div class = "mapa"
                ref={(ref) => { this.googleMapDiv = ref }}
                style={{ height: '50vh', width: '50%', }}>
            </div>
                </div>
                
                <div class="conteudo2">
                <div class="conteudoimg">
                
                <div class="mulher"><img src="/assets/imagens/pg-mapa-mulher.png" widht="450px" height="450px"/></div>
            </div>
            
                <div class="textos">
                <ScrollAnimation animateIn="animate__bounceInLeft">
                    <div class="text2"> Denúncie Conosco</div>
                    
                    <div class="text3"> Nós da Hora De Mudar incetivamos você a fazer uma denúncia!</div>
                    
                    <div class="text4"> Clique aqui para ser redicionada ao nosso chat de denúncias</div>
                    <div class="config">
                    <button class="btn2"> Chat </button>
                   </div>
                </ScrollAnimation>
                </div>
                
                     </div>
                    </div> 
        </Container>
        )
     }
}