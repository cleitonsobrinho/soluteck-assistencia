import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: block;
  }

  button {
    height: 32px;
    width: 150px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 100;
    border-bottom: 0px;
    box-shadow: 0px;
    cursor: pointer;

    &:hover {
      color: #008cff;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 10px;
    }
  }
  li {
    display: flex;
    position: 50%;
    list-style: none;
    background-color: white;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  .icons {
    margin-top: 5px;
    margin: auto;
    color: #1f1f1f;

    &:hover {
      color: #008cff;
      cursor: pointer;
    }
  }
`;
