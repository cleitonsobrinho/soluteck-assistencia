import styled from "styled-components";

export const ContainerDescription = styled.div`
  height: 400px;
  margin: 0px;
  padding: 0%;
  width: 100%;
  background-color: #1f1f1f;
  color: #ffffff;

  @media (max-width: 768px) {
    height: 800px;
  }

  .containerText {
    width: 60%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    margin: 0;
    padding: 0;
    margin-left: 50px;
    text-align: left;
    text-indent: 20px;
    padding-top: 60px;
    font-size: 20px;
    line-height: 28px;
    text-align: start;
  }
`;
