import AboutSoluteck from "../../components/about-soluteck/about-soluteck";
import Carousel from "../../components/carousel/carousel";
import Description from "../../components/description/description";
import FormContact from "../../components/form-contact/form-contact";
import Gallery from "../../components/gallery/gallery";
import Header from "../../components/header/Header";
import SectionSlides from "../../components/section/section";
import Service from "../../components/service/service";
import SoluteckLocation from "../../components/soluteck-location-soluteck/soluteck-location";

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
      <AboutSoluteck />
      <SoluteckLocation />
      <FormContact />
    </ContainerHome>
  );
};

export default Home;
