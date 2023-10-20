import styled from "styled-components";

const ContainerCorousel = styled.div`
  height: 500px;
  justify-content: end;
  align-content: center;
  position: relative;
  background-color: #1f1f1f;

  @media (max-width: 776px) {
    width: 100%;
    height: 400px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: #1f1f1f;
    color: #ffffff;

    /* Center slide text vertically */
    display: flex;
    justify-content: flex-start;
    position: relative;
    left: 200px;
    align-items: center;

    @media (max-width: 776px) {
      position: relative;
      left: 10px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .box-carousel {
    width: 700px;

    @media (max-width: 776px) {
      width: 100%;
    }

    p {
      text-align: start;
      font-size: 25px;

      @media (max-width: 776px) {
        font-size: 17px;
      }
    }
  }
`;

export default ContainerCorousel;
