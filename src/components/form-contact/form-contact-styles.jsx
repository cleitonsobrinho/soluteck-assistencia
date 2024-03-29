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

  @media (max-width: 776px) {
    display: block;
    height: 900px;
    margin-top: 0;
  }

  .inform {
    width: 600px;

    @media (max-width: 776px) {
      width: 100;
    }
  }

  .box-text {
    width: 600px;

    @media (max-width: 776px) {
      width: 100%;
    }

    h2 {
      @media (max-width: 776px) {
        text-align: center;
      }
    }

    p {
      @media (max-width: 776px) {
        text-indent: 20px;
      }
    }
  }

  .box {
    width: 100%;

    p {
      @media (max-width: 776px) {
        margin: 0px;
      }
    }
  }

  .Containewr-box {
    display: flex;

    @media (max-width: 776px) {
      display: block;
    }
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

    @media (max-width: 776px) {
      width: 60%;
    }
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

    @media (max-width: 776px) {
      width: 60%;
    }
  }
`;

export default ContainerForm;
