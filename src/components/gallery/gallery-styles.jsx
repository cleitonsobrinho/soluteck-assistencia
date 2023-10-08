import styled from "styled-components";

const ContainerGallery = styled.div`
  width: 100%;
  height: 900px;
  background-color: #1f1f1f;

  .box {
    display: flex;
    gap: 50px;
    justify-content: center;
  }

  .box div {
    width: 400px;
    height: 400px;
    color: #ffffff;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export default ContainerGallery;
