import styled from 'styled-components'


const Container =  styled.div`
    background: #7DA074;
    padding: 1em 3.5em;
    height:  100%;
    min-height: 100vh;
    




.imagem {
    width: 8em;
    height: 8em;
    margin-top: -1em ;n: right;
    color: white;
    text-shadow: 

}

.barra {
    margin-left: -5em;
}

.faixa1{
    margin-top: 1em ;
}

.menu {
    font-family: Roboto-Medium;
    font-size: 15px;
    margin-top: -2em; 
    margin-left: 1em;
    height: -30px;
    display: flex;
    align-items: center;

}

.menu a {
    margin: .5em;
}

.cabecalho {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    justify-content: space-between;
    align-items: center;
}

.cadastro {
    display: flex;
    flex-direction: column;
    background: #FDFDFD;
    border-radius: 20px;
    height: 590,30px;
    width: 504px;
    padding-top: 7px;

        
}
.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}



.titulo{
    text-align: center;
    font-family: Roboto-Medium;
    font-size: 40px;
    margin-top: 1em;
   
}

 

.indentificacao {
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.nome {
    margin: 10px;
}

.sobrenome {
    margin: 10px;
}

.email{
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}

.email input{
    width: 27em;
}

.celular {
    margin: 20px;
    margin-left: 30px;
}

.senhas {
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.senha {
    margin: 10px;
    margin-right: 10px;

}

.confirmar-senha {
    margin: 10px;
}

input {
    background: #C4C4C4;
    border-radius: 15px;
    border-color:transparent;
    height: 2em;
    padding-left: 5px;
}

button {
    margin-left: 15em;
    border-radius: 15px;
    background: #81857F;
    color:#FFFFFF;
    width: 103px;
    height: 29px;
    font-family: Roboto-Medium;
    font-size: 20px;
    margin-top: 2em;
    border-color: transparent;
    
  

}

.entrar button{
    width: 9em;
}

.entrar :hover{
    background-color: #57833a;
    transition: 0.8s;
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


`
;

export {Container}