import { Link, NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import adminpic from '../assets/admin.jpg'
import { useAuth } from "../context/AuthContext";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const { authData, logout } = useAuth();

    const location = useLocation();
    // Check if the current route is 'dashboard'
    const isDashboardRoute = location.pathname === '/dashboard' || location.pathname === '/dashboard/profile';

    const handleLogout = () => {
        // Call the logout function when the Logout button is clicked
        logout();
    };
    return (
        <div>
            {
                isDashboardRoute ? null :

                    <div>
                        <div className="flex relative h-full">
                            <h2 className="font-extrabold text-4xl">Donate & Save</h2>
                            <div className="flex justify-evenly w-[500px] absolute right-0 h-full">
                                {
                                    authData.token ? <button className="bg-blue-600 my-1 px-5 rounded-sm text-white">
                                        <Link to='/dashboard' className="nav-text">Dashboard</Link>
                                    </button> :
                                        <img src={adminpic} className="h-full w-14 cursor-pointer" onClick={() => alert('Login to see dashboard')} />

                                }


                                {
                                    authData.token ?
                                        <button onClick={handleLogout} className="nav-text">Logout</button> :
                                        <div className="flex justify-evenly w-full ">
                                            <button>
                                                <Link to='/register' className="nav-text">Register</Link>
                                            </button>
                                            <button className="">
                                                <Link to='/login' className="nav-text">Login</Link>
                                            </button>
                                        </div>

                                }

                            </div>
                        </div>
                        <div className="bg-[#B30E08]        ">
                            <ul className="flex justify-evenly py-2">
                                <li className="nav-link">
                                    <NavLink to='/home' className='nav-text'>Home</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to='/allbloodgroup' className='nav-text'>All Blood</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink className='nav-text'>Search Blood</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to='/addblood' className='nav-text'>Add Blood</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink className='nav-text'>Request Blood</NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink className='nav-text'>About Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Navbar;