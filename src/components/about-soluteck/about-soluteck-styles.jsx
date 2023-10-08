import styled from "styled-components";

const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background-color: #1f1f1f;
  color: #ffffff;
  height: 800px;
  width: 100%;

  .box-descripition {
    width: 600px;
  }

  .box-img {
    height: 500px;
    width: 700px;
  }
  .box-img img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }
`;

export default ContainerAbout;
