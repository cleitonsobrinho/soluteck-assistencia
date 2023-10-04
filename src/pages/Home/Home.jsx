import Description from "../../components/description/description";
import Header from "../../components/header/Header";
import SectionSlides from "../../section/section";
import { ContainerHome } from "./Home.styles";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <SectionSlides />
      <Description />
    </ContainerHome>
  );
};

export default Home;
