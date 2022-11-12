import styled from "styled-components";


export const NavStyle = styled.nav`
    ul{
        display: flex;
       
    }
    li{
        
        list-style: none;
        
       
    }
   li a{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        text-decoration:none;
        color: white;
        margin-right:20px;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.6;
        letter-spacing: 0.0075em;
    }
    @media(max-width: 667px) {
        display: none;
      };
`;