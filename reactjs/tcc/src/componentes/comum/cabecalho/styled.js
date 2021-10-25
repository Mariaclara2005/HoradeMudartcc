import styled from 'styled-components'

const Container = styled.div`{

  a{
    color: white;
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
    padding-right: 3em;    
    font-family: Roboto-medium; 
}


`;

export { Container }