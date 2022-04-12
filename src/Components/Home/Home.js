import React from "react";
import { useNavigate } from "react-router-dom";
import useRooms from "../../Hooks/useRooms";
import Navber from "../Navber/Navber";
import Room from "../Room/Room";
import "./Home.css";

const Home = () => {
  const [rooms, setRooms] = useRooms()
  const navigate = useNavigate()
  return (
    <div className="mb-16">
      <Navber></Navber>
      <div className="px-10 mb-10">
        <h1 className="text-center my-10 text-4xl text-gray-600 font-semibold">SOME OF OUR ROOMS</h1>
        <div className="grid grid-cols-3 gap-4">
          {rooms.slice(0,3).map(room=><Room key={room.id} room={room}></Room>)}
        </div>
      </div>
      <button onClick={()=>navigate('/rooms')} className=" bg-cyan-600 px-6 py-2 block mx-auto text-white rounded">
            See All Rooms
          </button>
    </div>
  );
};

export default Home;
