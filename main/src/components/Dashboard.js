import React from "react";
import Panel from "./sidePanel/Panel";
import { CiSearch } from "react-icons/ci";


function Dashboard() {
  return (
    <div className="flex items-start ">
      <Panel/>
      <nav className="flex-grow flex select-none justify-center items-center gap-2 p-2 h-auto ">
        <input className=" outline outline-slate-300 focus:outline-2 focus:outline-slate-700 transition-all duration-500 rounded-md w-full font-poppins p-2 px-4" placeholder="Search"></input>
        <CiSearch className=" text-2xl cursor-pointer"/>
      </nav>
    </div>
  );
}

export default Dashboard;
