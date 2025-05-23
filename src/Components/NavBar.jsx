import { Link, NavLink } from 'react-router-dom';
import user from '../assets/user.png';

const NavBar = () => {
    const links =
        <>
            <NavLink to='/' className='mx-4'><li>Home</li></NavLink>
            <NavLink to='/about' className='mx-4'><li>About</li></NavLink>
            <NavLink to='/career'><li>Career</li></NavLink>
        </>;

    return (
        <div className="navbar mt-5 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#706F6F] rounded-box w-52 text-white">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <img src={user} alt="user" className="w-10 h-10 rounded-full border" />
                <Link to="/auth/login" className="btn w-[140px] h-[40px]">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;
