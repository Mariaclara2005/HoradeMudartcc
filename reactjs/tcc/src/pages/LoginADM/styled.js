import styled from 'styled-components'

const Container =  styled.div`
height: 100vh;   
background-color: #7DA074;

.bloco{
    height: 28em;
    width: 30em;
    background-color: white;
    margin-left: 26em;
    margin-top: 4em;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    
}

.esqueceu-senha{
    padding-top: 2em;
    padding-left: 21em;
}

.imagem1{
    padding-right: 12em;
    width: 2em;
}

.conteudo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5em;
    padding-right: 3em;
}

    

.titulo{
    margin-left: 38%;
    
}

.caixa2{
    margin-top: 1em;
}

.campos{
    display: flex;
    flex-direction: column;
   padding-top: 5em;
   padding-left: 2em;
    
}

.texto{
    padding-top: 4%;
    font-size: 3em;
    
}

.campos input{
    width: 30em;
    border-radius: 1em;
    height: 3em;
    background-color: #C4C4C4;
    border: none;
}

.botoes button {
    border: none;
}

.botoes{
    padding-top: 3em;
    padding-left: 18em;
    display: flex;
    flex-direction: row;
}

button{
    background-color: #C4C4C4;
    width: 5em;
    height: 2em;
    border-radius: 1em;
    font-size: 1em;
}

.botao1{
margin-right: 1em;
}

hr{
    background-color: black;
    width: 15em;
    height: .3em;
    padding-right: 6em;
}

.imagem2{
    
    height: 32em;
}

.imagem1 img {
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



`;
export {Container}