import styled from "styled-components";


export const ContainerMaster = styled.div`
     width: 100%;
     height: 600px;
     position: relative;

     .ContainerImageMaster {
       width: 100%;
       height: 600px;
     }

     #cardMaster {
      height: 100%;
      width: 100%;
     }

     .textContainer{
        font-family: 'Roboto Serif', serif;
        color: #0089D1;
        position: absolute;
        top: 40%;
        left: 10%;
        border-bottom: #0089D1 solid;
     }

     .textDecoration {
        text-transform: uppercase;
        margin-left: 20px;
     }

     .iconsContainer {
        display: flex;
        gap: 100px;
        position: absolute;
        top: 70%;
        left: 10%;
        text-align: center;
     }

     h3 {
        color: #0f3950;
     }
     h3:hover {
        color: white;
     }


`;

