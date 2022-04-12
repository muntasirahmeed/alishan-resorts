import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    // <div className="flex justify-center items-center">
    //   <div
    //     className="spinner-border animate-spin border-red-500 inline-block w-8 h-8 border-4 rounded-full"
    //     role="status"
    //   >
    //     <span className="visually-hidden"></span>
    //   </div>
    // </div>

    <div className="loader ease-linear rounded-full border-8 flex jus border-red-500 h-6 w-6"></div>
  );
};

export default Spinner;
