import React from 'react';
import { useNavigate } from 'react-router-dom';

const Room = ({ room }) => {
  const navigate = useNavigate()
  
    console.log(room);
    const { name, image,price} = room;
    return (
      <div className=" shadow px-2 pt-2 pb-5 ">
        <img className="w-full" src={image} alt="" />
        <h1 className="text-3xl text-gray-600 font-semibold mt-3">{name}</h1>
        <div className='flex items-center justify-between'>
          <p
            className="text-xl mt-3 text-gray-700 font-semibold
        "
          >
            Price : <span className="font-bold text-gray-800">${price}</span>
          </p>
          <button onClick={()=>navigate('/booking')} className=" bg-cyan-600 px-6 py-1 text-white rounded">
            Book
          </button>
        </div>
      </div>
    );
};

export default Room;