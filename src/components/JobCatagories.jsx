import React from "react";
import { NavLink } from "react-router-dom";

export const JobCatagories = () => {
  return (
    <div className="w-full grid bg-thm_background  auto-cols-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 md:gap-y-16 md:gap-10 justify-evenly py-20 px-5 md:px-10 lg:px-20">
      <NavLink
        to="/jobs"
        className="flex flex-col hover:shadow-xl border-2 justify-center shadow-md items-center px-5 text-sm md:text-base py-3 border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Banking & Insurance</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Sales & Marketing</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Management</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Software Eng</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Finance & Accounting</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Engineering</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Human Resource</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Health</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Legal</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">NGO</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Remote</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
      <NavLink
        to="/jobs"
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-sm md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl"
      >
        <h1 className="font-bold whitespace-nowrap">Analytics</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </NavLink>
    </div>
  );
};
