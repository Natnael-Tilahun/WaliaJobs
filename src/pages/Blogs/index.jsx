import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Blogs = () => {
  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex bg-thm_background md:py-10  py-5 flex-col  my-0  md:my-0 md:px-3 lg:px-20   border-b-2 gap-3 md:gap-2 px-5   w-full">
        <h1 className="text-xl md:text-3xl text-center uppercase font-bold">
          Career Tips
        </h1>
        <p className="text-sm text-thm_secondary_color md:text-lg text-center">
          Prepare yourself with this tips and sample interview questions.
        </p>
        <ul className="md:px-20 flex text-sm pt-6 md:text-base gap-10 font-medium">
          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Tips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="interviews"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Interviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
