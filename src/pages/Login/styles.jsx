import styled from "styled-components";
import logo from '../../assets/images/arcon.png'




export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: static;
    align-items: center;
    background-image: url(${logo});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    flex-direction: column;
    justify-content: center;
  
  h1{
    font-family: 'Roboto Serif', serif;
    color: #0089D1;
  }
`;
