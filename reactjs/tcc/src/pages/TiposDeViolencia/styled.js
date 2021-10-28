import styled from 'styled-components';

const Container= styled.div`


a{
    color: white;
}


.faixa1{
    background-color: #6482CB;
    height: 100vh;
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

.conteudo-faixa1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 10em;
    padding-top: 7em;
}

.faixa1-titulo{
    text-align: center;
    color: white;
    font-size: 4em;
    
}

.faixa1-textos{
    padding-right: 5em;
}

.faixa1-txt{
    text-align: center;
    color: white;
    padding-top: 4em;
    width: 40em;
}

.cabecalho-botoes a {
    margin: 0em .5em;
    
}


.cabecalho-botoes{
    margin-top: 3em;
}


.img-tpdeviolencia{
    height: 30em;
    width: 30em;
    padding-right: 8em;
    
}


.faixa-2{
    background-color: #EFF1F5;
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.faixa2-img{
    height: 35em;
    width: 35em;
}

.texto1-faixa2{
    text-align: center;
    color: #298DAB;
    font-size: 4em;
}

.texto2-faixa2{
    text-align: left;
    font-size: 1em;
    padding-top: 5em;
    width: 50em;
    text-align: center;
}

.faixa3{
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    background-color: #F8FAFF;
    justify-content: center;
}

.faixa3-texto1{
    text-align: center;
    color: #5164C3;
    font-size: 4em;
}

.faixa3-texto2{
    text-align: left;
    padding-top: 5em;
    width: 50em;
    text-align: center;
}

.img-faixa3{
    height: 35em;
    width: 35em;
}

.faixa4{
    background-color: #EFF1F5;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.img-faixa4{
    height: 35em;
    width: 35em;
}

.faixa4-texto1{
    color: #242263;
    text-align: center;
    font-size: 4em;
}

.faixa4-texto2{
    padding-top: 5em;
    width: 50em;
    text-align: center;
}


.faixa5{
    background-color: #F8FAFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.faixa5-conteudo{
    align-items: center;
}

.faixa5-texto1{
    color: #0B1731;
    font-size: 4em;
    text-align: center;
}

.faixa5-texto2{
    padding-top: 5em;
    width: 50em;
    text-align: center;
}

.img-faixa5{
    height: 40em;
    width: 40em;
}

.faixa6{
    background-color: #EFF1F5;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.img-faixa6{
    height: 35em;
    width: 35em;
}

.faixa6-texto1{
    color: #7ABEC0;
    text-align: center;
    font-size: 4em;
}

.faixa6-texto2{
    padding-top: 5em;
    color: #0B0A0A;
    text-align: center;
    width: 50em;
}

.faixa7{
    background-color: #7FB27F;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.faixa7-conteudo{
    text-align: center;
}

.faixa7-texto{
    color: white;
    font-size: 5em;
}

.img-faixa7{
    height: 30em;
    width: 30em;
}

.faixa1-img img {
    position: relative;
    animation: animar 3s infinite;
}

.img-faixa2 img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa3-img img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa4-img img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa5-img img {
    position: relative;
    animation: animar 3s infinite;
}


.faixa6-img img {
    position: relative;
    animation: animar 3s infinite;
}

.faixa7-img img {
    position: relative;
    animation: animar 2s infinite;
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