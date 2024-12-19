import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col w-64 h-full bg-white shadow-lg">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-purple-700">My Diary</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-4 p-4 text-lg font-medium ${
              isActive ? "bg-purple-100 text-purple-700" : "text-gray-600"
            } hover:bg-purple-50 transition rounded-lg`
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/diary-entry"
          className={({ isActive }) =>
            `flex items-center space-x-4 p-4 text-lg font-medium ${
              isActive ? "bg-purple-100 text-purple-700" : "text-gray-600"
            } hover:bg-purple-50 transition rounded-lg`
          }
        >
          <FaBook />
          <span>Diary Entry</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-4 p-4 text-lg font-medium ${
              isActive ? "bg-purple-100 text-purple-700" : "text-gray-600"
            } hover:bg-purple-50 transition rounded-lg`
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
