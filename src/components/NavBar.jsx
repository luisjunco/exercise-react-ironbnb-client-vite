import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/apartments">Apartments</NavLink> | 
            <NavLink to="/apartments/create">Create</NavLink>
        </nav>
    )
}

export default NavBar;