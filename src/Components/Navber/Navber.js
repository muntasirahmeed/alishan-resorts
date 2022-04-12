import React from 'react';
import './Navber.css'
import { Link, useNavigate } from "react-router-dom";
import NavLink from './NavLink1/NavLink';
const Navber = () => {
  const navigate =useNavigate()
    return (
      <div className="hello px-10">
        <NavLink></NavLink>
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
            <button onClick={()=>navigate('/rooms')} className="bg-cyan-600 px-6 py-2 rounded-md text-white font-semibold">
              BOOK OUR ROOM
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navber;