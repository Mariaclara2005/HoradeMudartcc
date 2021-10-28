import styled from 'styled-components';

const Container = styled.div`
.body {
    margin: 0px;
  }

  a{
      color: white;
  }
  
  .faixa1{
      background-color: #445D75 ;
      height: 100%;
      display: flex;
      flex-direction: column;
  }

  .cabecalho{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }


  .menu a {
    margin: 0em .5em;
    
}

  .menu{
      display: flex;
      flex-direction: row;
      padding-right: 1em;
      padding-top: 0em;     
  }

  .cabecalho-botoes a {
    margin: 0em 0.4em;
    
}

.cabecalho-botoes{
    margin-top: 0em;
    margin-right: 1em;
    color: #FFF;
}


  .texto{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    color: #fff;
  }

.conteudo {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
   
}

.chat {
    margin-top: 40px;
    flex-direction: row;
    justify-content: center;
    background: #B2BBC2;
    width: 90%;
    height: 40em;
    border-radius: 25px;
    margin-left:6em;
}

.policial1{
    padding-top: 2em;
    padding-right: 90em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.user1{
    padding-top: 1em;
    padding-left: 6.5em;
}

.balao1{
    
    width: 349px;
    height: 60px;
    margin-top: -5.5em;
    margin-left: 14em;
    background: #FFFFFF;
    border-radius: 30px;
}

.text1{
    padding-right: 35em;
    margin-top: -1.9em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    color: #000000;
}

.policial2{
    padding-top: 7em;
    padding-right: 90em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.user2{
    padding-top: 1em;
    padding-left: 6.5em;
}

.balao2 {
    width: 349px;
    height: 60px;
    margin-left: 14em;
    margin-top: -5.5em;
    background: #FFFFFF;
    border-radius: 30px;
}

.text2 {
    padding-right: 38em;
    margin-top: -2em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 29px;
    text-align: center;
    color: #000000;
}

.searchbox{
    width: 800px;
    height: 45px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 7px;
    margin-left: 25em;
     margin-top: 15em;
 }

.searchbox > i {
    font-size: 20px;
    color: #978888;

}

.searchbox > input {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 24px;
}

.enviar{
    padding-left: 30em;
    margin-top: 0em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.local{
    padding-left: 5.6em;
    margin-top: -5em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.localimg{
    margin-right: -2em;
    margin-top: 1em;
    
}
`;
export {Container}