import React from 'react';
import './Navber.css'
import { Link } from "react-router-dom";
const Navber = () => {
    return (
      <div className="hello px-10">
        <div className=" bg-transparent flex items-center justify-between py-3 ">
          <div>
            <h1 className="text-3xl text-cyan-500 font-bold    bg font-mono">
              Alishan Resort
            </h1>
          </div>
          <ul className="flex items-center space-x-4 text-lg font-mono text-[#cad8df] cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/review">Reviews</Link>
            <Link to="/about">About</Link>
            <Link to="/login" className="bg-cyan-600 px-6 py-1 rounded-md">
              Login
            </Link>
          </ul>
        </div>
        <div className="h-[80vh] flex items-center w-7/12">
          <div>
            <h1 className="text-5xl  text-cyan-500 py-2  font-semibold mb-6 ">
              Welcome To Alishan Resorts
            </h1>
            <p className="text-gray-300 mb-5 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              reiciendis maiores perspiciatis blanditiis qui earum aspernatur
              rem autem, officiis, odio enim laudantium dignissimos suscipit!
              Mollitia veniam iste ut neque aut asperiores fugit nesciunt
              officia illo, inventore molestiae.
            </p>
            <button className="bg-cyan-600 px-6 py-2 rounded-md text-white font-semibold">
              BOOK OUR ROOM
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navber;