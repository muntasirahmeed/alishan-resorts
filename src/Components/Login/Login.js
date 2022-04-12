import React from 'react';
import NavLink2 from '../Navber/NavLink2/NavLink2';

const Login = () => {
    return (
      <div>
        <NavLink2></NavLink2>

<div className="h-screen bg-slate-50 flex justify-center items-center w-full">
  <form>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <img className="h-14 mb-4 mx-auto" src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png" alt=""/>
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Username</label>
          <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
          <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Register</button>
    </div>
  </form>
</div>
      </div>
    );
};

export default Login;