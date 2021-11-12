import styled from 'styled-components';

const Container = styled.div`


background: #7DA074;
height: 100vh;

.cadastro {
    display: flex;
    flex-direction: column;
    background: #FDFDFD;
    border-radius: 20px;
    height: 590,30px;
    width: 504px;
    margin-left: 3em;
    
}
.conteudo {
    display: flex;
    flex-direction: row;
    margin-top: 3em;
}

.imagem img {
    width: 746px;
    height: 515px;
    margin-left: 1em;
}

.titulo{
    margin: 20px;
    font-family: Roboto-Medium;
    font-size: 2.5em;
    margin-top: 1em;
    margin-left: 3em;
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
    background-color: #FFFFFF;
}

.email{
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}

.numeros {
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.celular {
    margin: 10px;
    margin-left: 10px;
}

.telefone {
    margin: 10px;
    margin-left: 10px;
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
    border-color: transparent;
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
}
`
;

export {Container}