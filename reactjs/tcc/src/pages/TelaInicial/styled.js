import styled from 'styled-components'; 


const Container= styled.div`


a{
    color: cornsilk;
}

.pagina-principal{
    background-image: url(/assets/imagens/mulheres1.png);
    height: 100vh;
    margin: -5px;
    background-size: 100% 100%;
}

.cabecalho-inicio{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
}

.cabecalho-img{
    margin-top: 1em;
    margin-left: 2em;
}

.cabecalho-botoes a {
    margin: 0em .4em;
    
}

.cabecalho-botoes{
    margin-top: 4em;
    margin-right: 2em;
}



.texto-centro{
    text-align: center;
    margin-top: 5em;
    font-size: 2.2em;
    color: cornsilk;
    font-style: italic;
}

.faixa-meio{
    text-align: center;
    margin-top: 6em;
    font-size: 1.4em;
    color: cornsilk;
    font-family: Roboto-medium;
    font-style: italic;
}

.faixa-baixo{
    text-align: center;
    margin-top: 10em;
    font-size: 1.2em;
    font-family: Roboto-medium;
    font-style: italic;
    color: cornsilk;
}

.tipo-de-violencia{
    height: 100vh;
    background-image: url(/assets/imagens/teste22.png);
    margin: -5px;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.faixa2-img{
    padding-top: 10em;
}

.faixa2-conteudo{
    padding-top: 10em;
   
}

.faixa2-texto1{
    text-align: center;
    font-family: Roboto-medium;
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa2-texto2{
    font-family: Roboto-medium;
    font-style: italic;
    font-size: 2.0em;
    color: black;
    padding-top: 5em;
    width: 13em;
    text-align: center;
}

.botao-faixa2{
    padding-top: 15em;
    text-align: center;
       
}

.faixa2-botao{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border: none;
}

.botao-faixa3{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border-color: #0C0716;
}



.autoestima{
    background-color: #DCDCDC;    
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.img-faixa3{
    padding-top: 11em;
    width: 30em;
    height: 30em;
    padding-left: 6em;
}

.faixa3-texto1{
    text-align: center;
    color: #854141;
    font-size: 2.2em;
    font-family: Roboto-medium;
    font-style: italic;
}

.faixa3-texto2{
    text-align: center;
    font-size: 1.9em;
    font-family: Roboto-medium;
    font-style: italic;
    padding-top: 6em;
    
}

.faixa3-botao{
    text-align: center;
    padding-top: 10em;
    
}

.botao-faixa3{
    border: none;
}




.faixa3-conteudo{
    padding-top: 15em;
}

.tipos-de-assedio{
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-image: url(/assets/imagens/teste22.png);
    margin: -5px;
    background-size: 100% 100%;
    justify-content: center;
}

.faixa4-conteudo{
    padding-top: 15em;
    padding-left: 4em;
}

.faixa4-texto1{
    text-align: center;
    
    font-size: 2.2em;
    color: #0C0716;
    font-family: Roboto-medium;
    font-style: italic;
} 

.faixa4-texto2{
    text-align: center;
    margin-top: 3em;
    font-size: 2.2em;
    color: #0C0716;
    font-family: Roboto-medium;
    font-style: italic;
} 


 
 
.botao-faixa4{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border: none;
   
}

.faixa4-image{
    padding-top: 12em;
    padding-left: 18em;
}

.faixa4-botao{
    text-align: center;
    padding-top: 7em;
}

.pagina-mapa{
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    justify-content: center;   
    align-items: center;
}

.faixa5-conteudo{
    align-items: center;
}

.faixa5-image{
    padding-left: 5em ;  
      
}

.faixa5-texto{
    text-align: center;
    font-family: Roboto-medium;
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
    
}

.botao-faixa5{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border: none;
}

.faixa5-botao{
    padding-top: 5em;
    align-items: center;
    padding-left: 13em;
}

.pagina-chat{
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: .1em;
}

.faixa6-texto{
    text-align: center;
    font-family: Roboto-medium;
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
    width: 18em;
}

.faixa6-conteudo{
    align-items: center;
}

.faixa6-botao{
    padding-top: 4em;
    padding-left: 11em;
}

.botao-faixa6{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border: none;
}



.pagina-denuncia{
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: whitesmoke;
    justify-content: center;
    align-items: center;
}

.faixa7-conteudo{
    text-align: center;
}

.faixa7-texto1{
    text-align: center;
    font-family: Roboto-medium;
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa7-texto2{
    text-align: center;
    font-size: 2.2em;
    margin-top: 3em;
    font-family: Roboto-medium;
    font-style: italic;
}

.faixa7-botao{
    padding-top: 6em;
}

.botao-faixa7{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border: none;
}



.pagina-quem-somos{
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 3em;
}

.faixa8-conteudo{
    text-align: center;
}

.faixa8-texto1{
    text-align: center;
    font-family: Roboto-medium;
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa8-texto2{
    text-align: center;
    font-size: 2.2em;
    margin-top: 3em;
    font-family: Roboto-medium;
    font-style: italic;
}

.faixa8-botao{
    padding-top: 6em;
}

.botao-faixa8{
    border-radius: 10em;
    width: 14em;
    height: 3em;
    font-style: italic;
    font-size: 1em;
    background-color: #9A9A9A;
    color: white;
    border: none;
}

.botao-faixa2 :hover{
    background-color: #18D1C2;
    transition: 0.8s;
}

.faixa2-img img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa3-image img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa4-image img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa5-image img {
    position: relative;
    animation: animar 3s infinite;
}



.faixa6-image img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa7-image img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa8-image img {
    position: relative;
    animation: animar 3s infinite;
}

.cabecalho-img img {
    position: relative;
    animation: animar 3s infinite;
}


@keyframes animar {
    0% {
        top: -10px;
    }
    50% {
        top: 10px;
    }
    100% {
        top: -10px; 
    }
}

@media (max-width: 1024px) {
   
    .cabecalho-inicio, .cabecalho-botoes, .texto-centro, .faixa-meio, .faixa-baixo {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .texto-centro{
        padding-top: 2em;;
    }

    .faixa-meio{
        padding-top: 2em;
    }

    .faixa-baixo{
        padding-top: 2em;
    }

    .cabecalho-botoes{
        padding-top: 2em;
    }

    .tipo-de-violencia , .faixa2-conteudo, .faixa2-texto1, .faixa2-texto2, .botao-faixa2  {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .faixa2-img{
        display: none;
    }

    .faixa2-texto2{
        padding-top: 2em;
    }

    .botao-faixa2{
        padding-top: 2em;
    }

    .autoestima , .faixa3-conteudo, .faixa3-texto1, .faixa3-texto2, .faixa3-botao  {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .faixa3-image{
        display: none;
    }

    .faixa3-texto2{
        padding-top: 2em;
    }

    .faixa3-botao{
        padding-top: 2em;
    }

    .tipos-de-assedio , .faixa4-conteudo, .faixa4-texto1, .faixa4-texto2, .faixa4-botao  {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .faixa4-image{
        display: none;
    }

    .faixa4-texto2{
        padding-top: 2em;
    }

    .faixa4-botao{
        padding-top: 2em;
    }
    
}



`;

export {Container}