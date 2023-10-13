import { NavStyle } from "../nav-bar/NavBar.styles";
import { ContainerFooter, ContainerMain } from "./footer-styles";

import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const FooterComponent = () => {
  return (
    <ContainerMain>
      <ContainerFooter>
        <div>
          <p>Soluteck</p>
        </div>

        <NavStyle>
          <ul>
            <li>
              <AiOutlineInstagram className="icons" size={25} />
            </li>
            <li>
              <BiLogoGmail className="icons" size={25} />
            </li>
            <li>
              <BsWhatsapp className="icons" size={25} />
            </li>
          </ul>
        </NavStyle>
      </ContainerFooter>
      <div className="container-copyright">
        <AiOutlineCopyrightCircle />
        <p>2023 Copyright - Cleiton Sobrinho</p>
      </div>
    </ContainerMain>
  );
};

export default FooterComponent;
