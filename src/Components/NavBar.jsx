import { Link, NavLink } from 'react-router-dom';
import useImg from '../assets/user.png'; // renamed to avoid conflict with user variable
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/" className="mx-4"><li>Home</li></NavLink>
      <li className="mx-4">News</li>
      <li>Career</li>
    </>
  );

  return (
    <div className="navbar mt-5 px-4">
      <div>
        {/* Show user's name if logged in */}
        {user && user.name}
      </div>

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
        <div>
          {/* Show user image if logged in and has photoURL, else show default icon */}
          {user && user.email ? (
            user.photoURL ? (
              <img src={user.photoURL} alt="User Profile" className="w-10 h-10 rounded-full border" />
            ) : (
              <img src={useImg} alt="Default User" className="w-10 h-10 rounded-full border" />
            )
          ) : (
            <img src={useImg} alt="Default User" className="w-10 h-10 rounded-full border" />
          )}
        </div>

        {user && user.email ? (
          <button className="btn w-[140px] h-[40px]" onClick={logOut}>Logout</button>
        ) : (
          <Link to="/auth/login" className="btn w-[140px] h-[40px]">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
