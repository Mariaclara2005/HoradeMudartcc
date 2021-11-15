import styled from 'styled-components';

const Container= styled.div`


a{
    color: white;
}


.faixa1{
    background-color: #314B56B;
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

.cabecalho {
    display: flex;
    flex-direction: column;
    margin: 0px;
    width: 100%;
  }
  
  .cabecalho img {
    height: 5em;
    width: 5em;
  
    padding: 2em 3em;
    color: white;
  }
  
  .titulo {
    color: white;
    padding: 5em 2em;
    font-size: 2em;
  }
  
  .principal img {
    width: 29em;
    height: 30em;
    padding: 5em 5em;
  }
  
  .box {
    background-color: #231d4f;
    width: 100%;
    height: 100%;
  }
  
  .container {
    display: flex;
    flex-direction: row;
  }
  
  .faixa2 img {
    width: 29em;
    height: 30em;
    padding: 3em;
  }
  
  .texto {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 40px;
    padding: 2em;
  }
  
  .faixa2 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #dad9d9;
  }
  
  .cabecalho {
    width: 100%;
    height: 100%;
  }
  
  .faixa2 {
    width: 100%;
    height: 100%;
  }
  
  .faixa3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  
  .faixa3 {
    width: 100%;
    height: 100%;
  }
  
  .descricao {
    display: flex;
    flex-direction: row;
    font-size: 45px;
    padding: 3em;
  }
  
  .faixa3 img {
    width: 9em;
    height: 9em;
  }
  
  .body {
    margin: 0px;
    border: 0px;
  }
  

`;

export {Container}