import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { SET_JOB_FILTERS_BY_DEPARTMENT } from "../redux/jobFilterSlice";

export const JobCatagories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToPosts = (e) => {
    const departmentFilter = e.currentTarget.querySelector("h1").textContent;
    dispatch(SET_JOB_FILTERS_BY_DEPARTMENT(departmentFilter));
    console.log(departmentFilter);
    const encodedDepartmentFilter = encodeURIComponent(departmentFilter);
    navigate({
      pathname: "/jobs",
      search: `?department=${encodedDepartmentFilter}`,
    });
  };
  return (
    <div className="w-full grid bg-thm_background  auto-cols-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 md:gap-y-16 md:gap-10 justify-evenly py-20 px-5 md:px-10 lg:px-20">
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col hover:shadow-xl border-2 justify-center shadow-md items-center px-5 text-xs md:text-base py-3 border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap ">Banking and Insurance</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Sales and Markating</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Management</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Software Engineering</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Finance and Accounting</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 hover:shadow-xl justify-center shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Engineering</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Human Resource</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Health</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl shadow-md items-center px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Legal</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">IT</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Teaching</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
      <div
        onClick={(e) => {
          goToPosts(e);
        }}
        className="flex flex-col border-2 justify-center hover:shadow-xl items-center shadow-md px-5 py-3 text-xs md:text-base border-blue-300 rounded-bl-3xl rounded-tr-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 bg-thm_card"
      >
        <h1 className="font-bold whitespace-nowrap">Analytics</h1>
        <p className="font-medium text-gray-800">10 Jobs</p>
      </div>
    </div>
  );
};
