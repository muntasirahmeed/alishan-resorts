import React from "react";

import useRooms from "../../Hooks/useRooms";
import NavLink2 from "../Navber/NavLink2/NavLink2";

import Room from "../Room/Room";

const Rooms = () => {
  const [rooms, setRooms] = useRooms();
  return (
    <div>
      <NavLink2></NavLink2>
      <div className="px-10 mb-10">
        <h1 className="text-center my-10 text-4xl text-gray-600 font-semibold">
          AVAILABLE ALL ROOMS
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Room key={room.id} room={room}></Room>
          ))}
        </div>
      </div>
      {/* <button className=" bg-cyan-600 px-6 py-2 block mx-auto text-white rounded">
        See All Rooms
      </button> */}
    </div>
  );
};

export default Rooms;
