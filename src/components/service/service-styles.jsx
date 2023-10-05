import styled from "styled-components";

const ContainerService = styled.div`
  width: 100%;
  height: 900px;
  background-color: #1f1f1f;

  h1 {
    margin: 0px;
    color: #ffffff;
    font-size: 50px;
    margin-left: 50px;
    margin-bottom: 30px;
  }

  .service-section {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  .box-service {
    width: 400px;
    height: 400px;
    color: #ffffff;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }

  button {
    width: 200px;
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

export default ContainerService;
