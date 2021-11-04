import styled from 'styled-components'; 


const Container= styled.div`

background: #6CA88B;
height:100vh;

.Container {
  display: flex;
  flex-direction: row;
}

.conteudo {
    display: flex;
    flex-direction: row;
    margin-top: 5em;
}

.informacao {
    display: flex;
    flex-direction: row;
}


.imagem img {
    width: 600px;
    height: 400px;
}

button {
    border-radius:25px;
    width: 212px;
    height: 178px;
} 

.titulo {
    margin-left: 2em;
}

.denuncia {
    margin-left: 7em;
}

`;

export {Container}