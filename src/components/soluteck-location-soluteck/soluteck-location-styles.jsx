import styled from "styled-components";

const ContainerSoluteckLocation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  background-color: #1f1f1f;
  color: #ffffff;
  width: 100%;
  height: 700px;

  @media (max-width: 776px) {
    align-content: center;
    gap: 10px;
    height: 500px;
  }

  .box-descripition {
    width: 600px;

    @media (max-width: 776px) {
      padding-left: 20px;
    }
  }

  .box-img {
    height: 400px;
    width: 700px;

    @media (max-width: 776px) {
      width: 600px;
      height: 200px;
      margin-right: 20px;
    }

    img {
      height: 100%;
      width: 100%;
      border-radius: 30px;
    }
  }
`;

export default ContainerSoluteckLocation;
