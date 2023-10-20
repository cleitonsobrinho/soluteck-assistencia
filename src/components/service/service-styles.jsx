import styled from "styled-components";

const ContainerService = styled.div`
  width: 100%;
  height: 800px;
  background-color: #1f1f1f;
  padding-top: 40px;

  @media (max-width: 776px) {
    height: 600px;
  }

  h1 {
    margin: 0px;
    color: #ffffff;
    font-size: 50px;
    margin-left: 50px;
    margin-bottom: 30px;

    @media (max-width: 776px) {
      font-size: 30px;
    }
  }

  .service-section {
    display: flex;
    gap: 50px;
    justify-content: center;

    @media (max-width: 776px) {
      gap: 3px;
    }
  }

  .box-service {
    width: 400px;
    height: 400px;
    color: #ffffff;

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

  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    font-size: 20px;

    @media (max-width: 776px) {
      width: 100px;
      height: 50px;
      border-radius: 10px;
      border: 0px;
      font-size: 15px;
    }

    &:hover {
      cursor: pointer;
      background-color: #008cff;
      color: #ffffff;
    }
  }

  .button-compressor {
    @media (max-width: 776px) {
      margin-top: 25px;
    }
  }

  .container-text {
    @media (max-width: 776px) {
      h2 {
        font-size: 15px;
      }
    }
  }
`;

export default ContainerService;
