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
    padding-top: 1em;
  
    
}

.faixa1-titulo{
    text-align: center;
    color: white;
    font-size: 4em;
    font-family: Roboto-medium;
   
}


   

.faixa1-txt{
    text-align: center;
    color: white;
    padding-top: 1em;
    font-family: Roboto-medium;
    font-size: 1.1em;
    margin-top: 2em;
    margin-right: 6em; 
    margin-left: 6em;
   
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
    height: 30em;
    width: 30em;
}

.texto1-faixa2{
    text-align: center;
    color: #298DAB;
    font-size: 4em;
    font-family: Roboto-medium;
    width: 4em;
    padding-left: 5em;
}

.texto2-faixa2{
    text-align: center;
    font-size: 1.3em;
    padding-top: 2em;
    text-align: center;
    font-family: Roboto-medium;
    margin-left: 8em;
    margin-right: 8em; 
 
   
  

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
    font-size: 3em;
    font-family: Roboto-medium;
 
}

.faixa3-texto2{
    text-align: center;
    padding-top: 2em;
    text-align: center;
    font-family: Roboto-medium;
    font-size: 1em;
    margin-left: 11em;
    margin-right: 11em; 
}

.img-faixa3{
    height: 28em;
    width: 28em;
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
    height: 30em;
    width: 30em;
}

.faixa4-texto1{
    color: #242263;
    text-align: center;
    font-size: 3em;
    font-family: Roboto-medium;
   
}

.faixa4-texto2{
    padding-top: 2em;
    text-align: center;
    font-family: Roboto-medium;
    font-size: 1em;
     margin-left: 9em;
    margin-right: 9em; 
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
    font-size: 3em;
    text-align: center;
    font-family: Roboto-medium;
  
}

.faixa5-texto2{
    padding-top: 1em;
    text-align: center;
    font-family: Roboto-medium;
    font-size: 1.5em;
    margin-left: 6em;
    margin-right: 6em; 
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
    font-size: 3em;
    font-family: Roboto-medium;

    
}

.faixa6-texto2{
    padding-top: 1em;
    color: #0B0A0A;
    text-align: center;
    font-family: Roboto-medium;
    font-size: 1em;
    margin-left: 8em;
    margin-right: 8em; 
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
    font-size: 3em;
    font-family: Roboto-medium;
 
}

.img-faixa7{
    height: 30em;
    width: 30em;
}

.faixa1-img img {
    position: relative;
    animation: animar 3s infinite;
    margin-right: 4em;
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
    margin-left: 7em;
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