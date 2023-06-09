import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { CompaniesData } from "../../../data/companies";

export const CompanyDetails = () => {
  const { id } = useParams();
  console.log("searchParams", id);
  const companyDetail = CompaniesData.filter((company) => company.id == id);

  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex relative bg-thm_background  py-3 flex-col  my-0  md:my-0 md:px-3 lg:px-20   border-b-2 gap-3 md:gap-2 px-5   w-full">
        <div className="bg-thm_root1_color w-[90%] h-20 opacity-30 absolute top-0"></div>
        <div className="z-50 px-10 flex flex-col gap-2">
          <img
            src={companyDetail[0].img}
            className="w-24 bg-contain h-24 border-2 shadow-md"
            alt=""
          />
          <h1 className="text-lg md:text-xl font-semibold">
            {companyDetail[0].name}
          </h1>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 text-lg text-white w-fit py-0 px-3 flex rounded-md items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5"
              >
                <path
                  className="fill-white"
                  d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"
                ></path>
              </svg>{" "}
              <p>{companyDetail[0].rate}</p>
            </div>
            <p className="text-thm_secondary_color text-sm">
              Based on {companyDetail[0].reviews} Reviews
            </p>
          </div>

          <p className="text-sm text-thm_secondary_color font-light ">
            {companyDetail[0].headoffice} | {companyDetail[0].mainService} |{" "}
            {companyDetail[0].employeeNumber}
          </p>
        </div>
        <ul className=" flex text-sm pt-6 md:text-base gap-10 font-medium">
          <li>
            <NavLink
              to="/company-details/1"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="jobs"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="benefits"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Benefits
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
