import styled from 'styled-components';

const Container = styled.div`
.site{
    margin: 0px;
}

body {
    margin: 0px;
    
}

.a {
    color: cornsilk;
}

.container {
    background-color: #7DA074;
    width: 100%;
    height: 100%;
}

.cabecalho{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.logo{
    padding-right: 80em;
}

.cabecalho-botoes a {
    margin: 0em 0.4em;
    
}

.cabecalho-botoes{
    margin-top: 1em;
    margin-right: 1em;
    color: #FFF;
}



.text{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 62px;
    line-height: 73px;
    text-align: center;
    color: #FDF7F7;
}

.research{
    padding-right: 5em;
    margin-left: 33em;
    padding-bottom: 5em;
}

.searchbox{
   width: 600px;
   height: 45px;
   background-color: white;
   border-radius: 50px;
   display: flex;
   align-items: center;
   padding: 7px;
   margin-left: 40em;
    margin-top: 3em;
    margin-bottom: 3em;
}

.searchbox > i {
    font-size: 20px;
    color: white;

}

.searchbox > input {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 24px;
    margin-top: 23em;
}



.mapa{
    margin-left: 27em;
    margin-bottom: 1em;
}

.conteudo2{
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 150px;
    
}

.mulher{
   
    padding-top: 07em;
}

.text2{
    margin-left: 10em;
    padding-top: 0em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    line-height: 65px;
    text-align: center;

    color: #090808;
}

.text3{
    margin-left : -21em;
    padding-top: 5em;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 25px;
    text-align: center;

    color: #0A344A;
}

.text4{
    padding-top: 6em;
    margin-left: -20em;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    
    color: #0A344A;
}

.config{
    align-items: center;
}
.btn2{
    width: 200px;
    height: 50px;
    border: none;
    color:white;
    background-color:#7DA074;
    border-radius:50px;
    box-shadow: inset 0 0 0 0 #3A4F35;
    transition: ease-out 0.3s;
    font-size: 2rem;
    outline: none;
    margin-left: -24em;
    margin-top: 15em;
}

.btn2:hover {
    box-shadow: inset 300px 0 0 0 #3A4F35;
    cursor: pointer;
    color: white;
}
`;
export {Container}