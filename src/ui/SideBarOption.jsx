import React from "react";
import { NavLink } from "react-router-dom";
function SideBarOption({ to, text }) {
  return (
    <div className="mt-10">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "dark:bg-slate-900 font-bold px-20 py-3 rounded-full "
            : "dark:bg-slate-700 font-bold dark:text-gray-50 px-20 py-3 rounded-full hover:px-24 transition-all hover:border-x-2 hover:bg-slate-900 border-cyan-500 active:bg-slate-950 active:border-cyan-400"
        }
      >
        {text}
      </NavLink>
    </div>
  );
}

export default SideBarOption;
