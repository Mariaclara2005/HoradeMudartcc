

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
    margin-left: 4em;
    margin-top: 6em;
}

.imagem img {
    width: 600px;
    height: 400px;
    margin-left: 2em;
}

button {
    border-radius:25px;
    width: 212px;
    height: 178px;
    border-color:transparent;
} 



.titulo {
    margin-left: 0.9em;
    font-family: Roboto-Medium;
    font-size: 1.5em;
    margin-bottom: 1em;
}
}

.chat {
   font-family: Roboto-Medium;
   font-size: 1.5em;
   margin-left: 0.4em;
   margin-bottom:1em;
}

.denuncia {
    margin-left: 3em;
}
`;

export {Container}



