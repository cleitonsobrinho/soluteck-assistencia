import styled from "styled-components";

const ContainerCorousel = styled.div`
  height: 500px;
  justify-content: end;
  align-content: center;
  position: relative;
  background-color: #1f1f1f;
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
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .box-carousel {
    width: 700px;
  }

  .box-carousel p {
    text-align: start;
    font-size: 25px;
  }
`;

export default ContainerCorousel;
