import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 23px;
  font-weight: bold;
  align-items: center;
  gap: 100px;
  background-color: #1f1f1f;
  color: #ffffff;
  width: 100%;
  height: 150px;
  border-top: solid 1px;
`;

export const ContainerMain = styled.footer`
  height: 150px;

  .container-copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #1f1f1f;
    color: #ffffff;
  }
`;
