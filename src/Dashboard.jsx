import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ReactComponent as Wallet } from "./assets/wallet.svg";

function Dashboard() {
  return (
    <div className="container max-w-3xl main flex flex-col shadow-md">
      <div className="bg-emerald-300 overflow-hidden shadow-md rounded-t-lg py-0.5">
        <span className="ml-2 text-xl inline-flex align-center justify-center">
          <Wallet className="wallet" />
          Income Calculator
        </span>
        <span className="text-black inline float-right">
          <NavLink
            style={({ isActive }) =>
              isActive ? { "backgroundColor": "rgb(0,0,0)" } : undefined
            }
            to="/income"
            className="bg-emerald-500 px-3 py-3 mt-1 text-white  hover:bg-emerald-400"
          >
            Income
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { "backgroundColor": "rgb(0,0,0)" } : undefined
            }
            to="/income_details"
            state={{ income: "", icomeType: "" }}
            className="bg-emerald-600 px-3 py-3 text-white hover:bg-emerald-700 disabled"
          >
            Income details
          </NavLink>
        </span>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
