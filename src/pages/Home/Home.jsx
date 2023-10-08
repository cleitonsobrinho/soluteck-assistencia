import Carousel from "../../components/carousel/carousel";
import Description from "../../components/description/description";
import Gallery from "../../components/gallery/gallery";
import Header from "../../components/header/Header";
import SectionSlides from "../../components/section/section";
import Service from "../../components/service/service";
import { ContainerHome } from "./Home.styles";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <SectionSlides />
      <Description />
      <Service />
      <Gallery />
      <Carousel />
    </ContainerHome>
  );
};

export default Home;
