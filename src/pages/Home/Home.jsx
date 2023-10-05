import Description from "../../components/description/description";
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
    </ContainerHome>
  );
};

export default Home;
