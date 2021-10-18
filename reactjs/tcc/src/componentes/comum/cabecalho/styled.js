import styled from 'styled-components'

const cabecalho = styled.div`{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #fff;

   .menu {
        margin: 0em .5em;
        color: #fff;
    }


   .menuu{
      display: flex;
      flex-direction: row;
      padding-right: 3em;    
      font-family: Roboto-medium; 
      color: #fff;
  }

  .imagem {
    margin-left: 2em;
    margin-top: 1em;
  }
}`

export { cabecalho }