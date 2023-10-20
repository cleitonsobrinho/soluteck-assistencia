import styled from "styled-components";

const ContainerGallery = styled.div`
  width: 100%;
  height: 950px;
  background-color: #1f1f1f;
  padding-top: 50px;

  @media (max-width: 776px) {
    height: 400px;
  }

  .box {
    display: flex;
    gap: 50px;
    justify-content: center;

    @media (max-width: 776px) {
      gap: 3px;
    }
  }

  .box div {
    width: 400px;
    height: 400px;
    color: #ffffff;
    margin-bottom: 30px;

    @media (max-width: 776px) {
      width: 120px;
      height: 150px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export default ContainerGallery;
