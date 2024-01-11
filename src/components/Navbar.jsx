import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import adminpic from '../assets/admin.jpg'
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { jwtToken, logout } = useAuth();
    const handleLogout = () => {
        // Call the logout function when the Logout button is clicked
        logout();
    };
    return (
        <div>
            <div className="flex relative h-full">
                <h2 className="font-extrabold text-4xl">Donate & Save</h2>
                <div className="flex justify-evenly w-[300px] absolute right-0 h-full">
                    <Link>
                        <img src={adminpic} className="h-full w-12" />
                    </Link>
                    {
                        jwtToken ?
                            <button onClick={handleLogout}>Logout</button> :
                            <div>
                                <button>
                                    <Link to='/register'>Register</Link>
                                </button>
                                <button>
                                    <Link to='/login'>Login</Link>
                                </button>
                            </div>

                    }

                </div>
            </div>
            <div className="bg-[#B30E08]        ">
                <ul className="flex justify-evenly py-2">
                    <li className="nav-link">
                        <NavLink>Home</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to='/allbloodgroup'>All Blood</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink>Search Blood</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink>Add Blood</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink>Request Blood</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink>About Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;