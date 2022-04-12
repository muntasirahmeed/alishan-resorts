import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const NavLink2 = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <div className="bg-white flex px-10 shadow items-center  justify-between py-5 ">
        <div>
          <h1 className="text-3xl text-cyan-600 font-bold    bg font-mono">
            Alishan Resort
          </h1>
        </div>
        <ul className="flex items-center space-x-4 text-lg font-mono black cursor-pointer">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/about">About</Link>

          {user ? (
            <Link
              onClick={logOut}
              to="/login"
              className="bg-cyan-500 text-white px-6 py-1 rounded-md"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-cyan-500 text-white px-6 py-1 rounded-md"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavLink2;
