import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  position: relative;
  top: 0%;
  height: 664px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-image: url(https://s.zst.com.br/cms-assets/2022/01/melhor-enceradeira-industrial.webp);
  background-size: cover;
`;
export const ContainerText = styled.div`
  font-family: "Poppins", sans-serif;
  display: block;
  margin: 0;
  margin: auto;
  position: relative;
  top: 100px;
  height: 450px;
  width: 600px;
  text-align: center;
  color: #ffffff;

  h1 {
    margin: 0px;
    padding: 0px;
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    font-size: 20px;

    &:hover {
      cursor: pointer;
      background-color: #008cff;
      color: #ffffff;
    }
  }
`;
