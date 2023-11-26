import React from "react";
import Logout from "./Logout";

function Nav() {
  return (
    <div className="h-20 w-full dark:bg-slate-800">
      <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center ml-6">
          <img
            src="https://avatars.githubusercontent.com/u/25126281?v=4"
            alt="profile"
            className="h-10 w-10 rounded-full z-10"
          />
        </div>
        <div className="flex items-center ">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            Ashira Beta
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-gray-900 dark:text-gray-50">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
