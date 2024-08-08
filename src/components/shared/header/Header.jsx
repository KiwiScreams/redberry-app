import { NavLink } from "react-router-dom";
import redberryLogo from "../../../assets/images/redberry.svg";
import "./Header.css";
const Header = () => {
    return ( 
        <>
        <header>
            <nav>
                <NavLink to="/"><img src={redberryLogo} alt="" /></NavLink>
                <button>შესვლა</button>
            </nav>
        </header>
        </>
     );
}
 
export default Header;