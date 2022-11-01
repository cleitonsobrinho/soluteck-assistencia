import { Link } from "react-router-dom";
import { NavStyle } from "./NavBar.styles";





const NavBar = () => {
    return (
        <NavStyle>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Contato</Link>
                </li>
                <li>
                    <Link to="/login">Sair</Link>
                </li>
            </ul>
        </NavStyle>
    )
};




export default NavBar;