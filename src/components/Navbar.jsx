import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <div className="bg-[#B30E08]        ">
            <ul className="flex justify-evenly py-2">
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>All Blood</NavLink>
                </li>
                <li>
                    <NavLink>Search Blood</NavLink>
                </li>
                <li>
                    <NavLink>Add Blood</NavLink>
                </li>
                <li>
                    <NavLink>Request Blood</NavLink>
                </li>
                <li>
                    <NavLink>About Us</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;