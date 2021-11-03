import styled from "styled-components";

const Container= styled.div`

.site{
    background-color: #7DA074;
}

.img-fx1{
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
    color: white;
}

.cabecalho-botoes{
    margin-top: 4em;
    margin-right: 2em;
    
}

.texto{
    text-align: center;
    padding-top: 2em;
    padding-bottom: 4em;
}

.texto-fx1{
    font-size: 4em;
    font-family: Roboto-medium;
    font-style: italic;
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

`

export {Container}