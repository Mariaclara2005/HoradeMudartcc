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
    margin-top: 9em;
    font-size: 2.2em;
    color: cornsilk;
    font-style: italic;
}

.faixa-meio{
    text-align: center;
    margin-top: 6em;
    font-size: 1.4em;
    color: cornsilk;
    font-style: italic;
}

.faixa-baixo{
    text-align: center;
    margin-top: 10em;
    font-size: 1.2em;
    font-style: italic;
    color: cornsilk;
}

.tipo-de-violencia{
    height: 100vh;
    background-color: white;
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
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa2-texto2{
   font-style: italic;
    font-size: 2.0em;
    color: black;
    padding-top: 5em;
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
    font-style: italic;
}

.faixa3-texto2{
    text-align: center;
    font-size: 1.9em;
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
    font-style: italic;
} 

.faixa4-texto2{
    text-align: center;
    margin-top: 3em;
    font-size: 2.2em;
    color: #0C0716;
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
    justify-content: space-between;   
    align-items: center;
}

.faixa5-conteudo{
    align-items: center;
    ;
}

.faixa5-image{
    padding-left: 5em ;    
}

.faixa5-texto{
    text-align: center;
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
}

.pagina-chat{
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.faixa6-texto{
    text-align: center;
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa6-conteudo{
    align-items: center;
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
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa7-texto2{
    text-align: center;
    font-size: 2.2em;
    margin-top: 3em;
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
    font-style: italic;
    font-size: 2.2em;
    color: #1A284D;
}

.faixa8-texto2{
    text-align: center;
    font-size: 2.2em;
    margin-top: 3em;
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

`;

export {Container}