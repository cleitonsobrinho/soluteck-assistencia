import About from "../../components/About";
import Header from "../../components/Header";
import MasterCard from "../../components/MasterCard";

import { ContainerHome } from "./styles";

const Home = () => {
    return (
        <ContainerHome>
            <Header />
            <MasterCard />
            <About />
        </ContainerHome>
    )
}



export default Home;