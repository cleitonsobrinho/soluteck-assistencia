import styled from "styled-components";

const ContainerForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  background-color: #1f1f1f;
  font-size: 18px;
  color: #ffffff;
  width: 100%;
  height: 700px;

  .inform {
    width: 600px;
  }

  .box-text {
    width: 600px;
  }

  .box {
    width: 100%;
  }

  .Containewr-box {
    display: flex;
  }

  .container-input {
    width: 100%;
  }

  .message {
    width: 100%;
    background-color: #3d3a3ac5;
    color: #ffffff;
    border: 0px;
    font-size: 18px;
  }

  .container-pressInput {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .press-input {
    width: 200px;
    height: 50px;
    border-radius: 40px;
    font-size: 18px;
    margin-top: 5px;
    border: 0;
    cursor: pointer;

    &:hover {
      cursor: pointer;
      background-color: #008cff;
      color: #ffffff;
    }
  }

  .input-form {
    border-radius: 20px;
    height: 40px;
    width: 100%;
    background-color: #3d3a3ac5;
    color: #ffffff;
    border: 0px;
    text-align: center;
    font-size: 18px;
  }
`;

export default ContainerForm;
