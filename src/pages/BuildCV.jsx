import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CvTemplate } from "../components/CvTemplate";

export const BuildCV = () => {
  return (
    <div className="w-full h-full md:py-10 bg-thm_secondary_background py-5 flex-col  my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <div className="flex flex-col border-b-2 gap-3 md:gap-2 py-4 px-5   w-full">
        <h1 className="text-xl md:text-3xl text-center font-medium">
          Choose a template for your CV
        </h1>
        <p className="text-sm text-thm_secondary_color md:text-lg text-center">
          You can always change your template later.
        </p>
        <ul className="md:px-20 flex text-sm pt-6 md:text-base gap-10 font-medium">
          <li>
            <NavLink
              to="/buildcv"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              RECOMMENDED
            </NavLink>
          </li>
          <li>
            <NavLink
              to="alltemplates"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              ALL
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
