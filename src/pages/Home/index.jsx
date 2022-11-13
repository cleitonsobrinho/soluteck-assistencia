import About from "../../components/About";
import Header from "../../components/Header";
import MasterCard from "../../components/MasterCard";
import ServicesCards from "../../components/ServicesCards";

import { ContainerHome } from "./styles";

const Home = () => {
    return (
        <ContainerHome>
            <Header />
            <MasterCard />
            <About />
            <ServicesCards />
        </ContainerHome>
    )
}



export default Home;