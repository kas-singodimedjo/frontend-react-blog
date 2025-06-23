import './Nav.css'
import logo from '/src/assets/logo-medium.png'
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/overview">Blogposts</NavLink>
                </li>
                <li>
                    <NavLink to="/newpost">New Post</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;