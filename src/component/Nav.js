import "./Nav.css";
import { Link, NavLink} from 'react-router-dom';


const Nav = () => {
  return (
        <div className="nav-container">
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav