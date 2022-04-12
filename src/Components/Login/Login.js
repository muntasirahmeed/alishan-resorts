import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import NavLink2 from "../Navber/NavLink2/NavLink2";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleEmail = (inputEmail) => {
    if (/\S+@\S+\.\S+/.test(inputEmail)) {
      setEmail({ value: inputEmail, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid Email" });
    }
  };
  const handlePassword = (inputPass) => {
    if (inputPass.length <= 6) {
      setPassword({ value: "", error: "Password too short" });
    } else {
      setPassword({ value: inputPass, error: "" });
    }
  };
  if (user) {
    navigate(from,{replace:true})
  }
  const submitFrom = (event) => {
    event.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is required" });
    }

    if (email.value && password.value) {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };
  return (
    <div>
      <NavLink2></NavLink2>

      <div className="h-[90vh] bg-slate-50 flex justify-center items-center w-full">
        <form onSubmit={submitFrom}>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <img
              className="h-24 rounded-full mb-4 mx-auto"
              src="https://thumbs.dreamstime.com/b/simple-illustration-dark-blue-hotel-logo-design-template-business-icon-inspiration-travel-tourism-sticker-idea-simple-165633303.jpg"
              alt=""
            />
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Login
              </h1>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  Email
                </label>
                <input
                  onBlur={(event) => handleEmail(event.target.value)}
                  type="email"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                {email.error && (
                  <small className="text-red-500 ml-1">! {email.error}</small>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  Password
                </label>
                <input
                  onBlur={(event) => handlePassword(event.target.value)}
                  type="password"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                {password.error && (
                  <small className="text-red-500 ml-1">
                    ! {password.error}
                  </small>
                )}
              </div>
            </div>
            <p className="text-center mt-2">
              <small>
                Don't have an account ?{" "}
                <Link className="text-yellow-500" to="/signup">
                  Register
                </Link>
              </small>
            </p>

            <button className="mt-3 w-full text-white bg-cyan-500 font-semibold py-2 rounded-md  tracking-wide">
              Login
            </button>
            {/* or section  */}
            <div>
              <div className="flex items-center mt-3">
                <div className="h-1 bg-gray-800 w-full rounded-full"></div>
                <div className="mx-6 text-gray-600">Or</div>
                <div className="h-1 bg-gray-800 w-full rounded-full"></div>
              </div>
              <div className="flex items-center justify-center space-x-3 mt-3">
                <img
                  onClick={() => signInWithGoogle(email.value, password.value)}
                  className="h-10 w-10 cursor-pointer shadow rounded-full"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                  alt=""
                />
                <img
                  onClick={() =>
                    signInWithFacebook(email.value, password.value)
                  }
                  className="h-10 w-10 cursor-pointer shadow rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                  alt=""
                />
                <img
                  onClick={() => signInWithGithub(email.value, password.value)}
                  className="h-10 w-10 cursor-pointer shadow rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
