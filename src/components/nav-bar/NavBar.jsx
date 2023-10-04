import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { NavStyle } from "./NavBar.styles";

const NavBar = () => {
  return (
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
      <div>
        <button>Agende agora</button>
      </div>
    </NavStyle>
  );
};

export default NavBar;
