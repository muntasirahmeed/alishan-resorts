import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavLink = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth)
  }
    return (
      <div>
        <div className=" bg-transparent flex items-center  justify-between py-5 ">
          <div>
            <h1 className="text-3xl text-cyan-500 font-bold    bg font-mono">
              Alishan Resort
            </h1>
          </div>
          <ul className="flex items-center space-x-4 text-lg font-mono text-[#cad8df] cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/about">About</Link>
            {user ? (
              <Link onClick={logout} to="/login" className="bg-cyan-600 px-6 py-1 rounded-md">
                Sign Out
              </Link>
            ) : (
              <Link to="/login" className="bg-cyan-600 px-6 py-1 rounded-md">
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    );
};

export default NavLink;