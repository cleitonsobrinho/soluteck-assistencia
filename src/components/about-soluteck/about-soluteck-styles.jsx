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

  @media (max-width: 776px) {
    display: block;
    height: 1000px;
    font-size: 17px;
  }

  .box-descripition {
    width: 600px;

    @media (max-width: 776px) {
      width: 100%;
    }

    p {
      @media (max-width: 776px) {
        text-indent: 20px;
      }
    }
  }

  .box-img {
    height: 500px;
    width: 700px;

    @media (max-width: 776px) {
      width: 100%;
      padding-top: 20px;
    }
  }
  .box-img img {
    height: 100%;
    width: 100%;
    border-radius: 30px;

    @media (max-width: 776px) {
      width: 100%;
      border-radius: 0;
    }
  }
`;

export default ContainerAbout;
