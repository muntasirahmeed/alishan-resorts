import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Booking from "./Components/Reviews/Booking";
import Rooms from "./Components/Rooms/Rooms";
import SignUP from "./Components/SignUP/SignUP";

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route
          path="/booking"
          element={
            <RequireAuth>
              <Booking></Booking>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUP></SignUP>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
