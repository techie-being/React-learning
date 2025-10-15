import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usercontextprovider from "./Context/Usercontextprovider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Usercontextprovider>
        <h1 className="bg-blue-200 p-6 w-full text-5xl text-white font-semibold font-serif">CONTEXT API</h1>
        <Login />
        <Profile />
      </Usercontextprovider>
    </>
  );
}

export default App;
