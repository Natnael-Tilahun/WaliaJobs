import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const menuHandler = () => {
    setCollapseMenu(!collapseMenu);
  };

  return (
    <div className="w-full h-16 lg:flex items-center gap-20 px-5 lg:px-10 xl:px-20 py-5 lg:py-5 shadow-md relative bg-thm_background dark:bg-thm_dark_background dark:text-thm_dark_primary_color text-thm_primary_color">
      <div className="flex justify-between w-full lg:w-auto items-center md:pr-5 ">
        <NavLink
          to="/"
          className="font-bold lg:text-2xl text-thm_primary_color dark:text-thm_dark_primary_color first-letter:text-2xl lg:first-letter:text-4xl"
        >
          Walia Jobs
        </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="lg:hidden w-6 "
          onClick={menuHandler}
        >
          <path
            d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
            className="dark:fill-thm_dark_primary_color fill-thm_primary_color"
          ></path>
        </svg>
      </div>

      <div className="mr-auto hidden lg:flex gap-10 justify-between flex-1 items-center">
        <ul className="flex gap-8 text-thm_secondary_color dark:text-thm_dark_secondary_color ">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 `}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800 }`}
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/company"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buildcv"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Build CV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
              className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5">
          <NavLink
            to="/login"
            className="border-2 border-thm_root1_color py-1 px-8 rounded-md "
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="py-1 px-8 bg-thm_root2_color text-white rounded-md"
          >
            Register
          </NavLink>
          <NavLink
            to="/savedjobs"
            className="text-black flex items-center justify-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path
                className="dark:fill-thm_dark_primary_color fill-thm_primary_color"
                d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"
              ></path>
            </svg>
          </NavLink>
        </div>
      </div>
      <div
        className={`mr-auto lg:hidden flex-col gap-0 bg-thm_background flex-1 h-screen z-50 absolute top-0 w-screen left-0 right-0  dark:bg-thm_dark_secondary_background dark:text-thm_dark_primary_color  ${
          collapseMenu ? "flex" : "hidden"
        }`}
      >
        <div className="flex bg-thm_background dark:bg-thm_dark_background w-full shadow-md justify-between items-center py-4 px-7">
          <NavLink to="/" className="font-bold lg:text-2xl  ">
            Walia Jobs
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7"
            onClick={menuHandler}
          >
            <path
              d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
              fill="#000"
            ></path>
          </svg>
        </div>

        <ul className="flex w-full flex-col gap-8 justify-center p-10 items-center font-medium text-gray-700 dark:text-thm_dark_primary_color ">
          <li onClick={menuHandler}>
            <NavLink
              to="/"
              className="hover:border-b-4 rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Home
            </NavLink>
          </li>
          <li onClick={menuHandler}>
            <NavLink
              to="/jobs"
              className="hover:border-b-4 rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Jobs
            </NavLink>
          </li>
          <li onClick={menuHandler}>
            <NavLink
              to="/company"
              className="hover:border-b-4 rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Companies
            </NavLink>
          </li>
          <li onClick={menuHandler}>
            <NavLink
              to="/buildcv"
              className="hover:border-b-4 rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Build CV
            </NavLink>
          </li>
          <li onClick={menuHandler}>
            <NavLink
              to="contact"
              className="hover:border-b-4 rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Contact
            </NavLink>
          </li>
          <li onClick={menuHandler}>
            <NavLink
              to="blog"
              className="hover:border-b-4 rounded-sm pb-1 border-thm_root2_color hover:text-gray-800"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5 justify-center">
          <NavLink
            to="/login"
            onClick={menuHandler}
            className="border-2 border-blue-300 py-1 px-8 rounded-md "
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            onClick={menuHandler}
            className="py-1 px-8 bg-thm_root2_color text-white rounded-md"
          >
            Register
          </NavLink>
          <NavLink
            to="/savedjobs"
            className="text-black flex items-center justify-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              className="fill-slate-600"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
