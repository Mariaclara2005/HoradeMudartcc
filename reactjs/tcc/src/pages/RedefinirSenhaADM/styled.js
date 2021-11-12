import styled from 'styled-components'; 


const Container= styled.div` 


body{
    margin: 0px;
    
}




.site{
    background-color: #7DA074;
    height: 100vh;
}

.img-adm{
    width: 10em;
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
    color: white;
}

.conteudo{
    height: 30em;
    width: 53em;
    background-color: white;
    margin-left: 26em;
    margin-top: 4em;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
}

.titulo{
    margin-left: 18%;
    font-family: Roboto-med
    
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
    width: 26em;
    border-radius: 1em;
    height: 3em;
    background-color: #C4C4C4;
}


.botoes{
    padding-top: 5em;
    padding-left: 20em;
    display: flex;
    flex-direction: row;
}

button{
    background-color: #C4C4C4;
    width: 15em;
    height: 3em;
    border-radius: 1em;
    font-size: 1em;
}

.botao1{
margin-right: 1em;
}

hr{
    background-color: black;
    width: 35em;
    height: .5em;
    padding-right: 6em;
}

.cabecalho-img img {
    position: relative;
    animation: animar 3s infinite;
}

.linha{
    margin-top: 1em;
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