import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Task from "../Pages/Task";

function Header() {
  return (
    <div className="bg-blue-300 flex w-full h-17">
      <div className="bg-black flex  text-white w-1/2 h-full text-2xl">
        Dashboard
      </div>
      <div className="flex align-baseline gap-15 w-1/2">
        <NavLink
          to="home"
          className={({ isActive }) =>
            isActive ? "underline text-black-300" : "hover text-yellow-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "underline text-black-300" : "hover text-yellow-600"
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="task"
          className={({ isActive }) =>
            isActive ? "underline text-black-300" : "hover text-yellow-600"
          }
        >
          Task
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
