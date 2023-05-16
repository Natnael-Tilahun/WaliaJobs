import React, { useState } from "react";

function Header() {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const menuHandler = () => {
    setCollapseMenu(!collapseMenu);
  };
  return (
    <div className="w-full h-16 lg:flex items-center gap-20 px-5 lg:px-10 xl:px-20 py-5 relative">
      <div className="flex justify-between w-full lg:w-auto items-center md:pr-5 ">
        <h1 className="font-bold lg:text-2xl">Walia Jobs</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="lg:hidden w-6"
          onClick={menuHandler}
        >
          <path
            d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
            fill="#000"
          ></path>
        </svg>
      </div>

      <div className="mr-auto hidden lg:flex gap-10 justify-between flex-1 items-center">
        <ul className="flex gap-8 text-gray-600 ">
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Jobs
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Companies
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Build CV
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Blogs
            </a>
          </li>
        </ul>
        <div className="flex gap-5">
          <button className="border-2 border-blue-300 py-1 px-8 rounded-md ">
            Login
          </button>
          <button className="py-1 px-8 bg-[#fa6d4d] text-white rounded-md">
            Register
          </button>
        </div>
      </div>
      <div
        className={`mr-auto lg:hidden flex-col gap-0 bg-white flex-1 h-screen absolute top-0 w-screen left-0 right-0  ${
          collapseMenu ? "flex" : "hidden"
        }`}
      >
        <div className="flex bg-white w-full shadow-md justify-between items-center py-4 px-7">
          <h1 className="font-bold lg:text-2xl  ">Walia Jobs</h1>
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

        <ul className="flex w-full flex-col gap-8 justify-center p-10 ">
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Jobs
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Companies
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Build CV
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:border-b-4 rounded-sm pb-1 border-[#fa6d4d] hover:text-gray-800">
              Blogs
            </a>
          </li>
        </ul>
        <div className="flex gap-5 justify-center">
          <button className="border-2 border-blue-300 py-1 px-8 rounded-md ">
            Login
          </button>
          <button className="py-1 px-8 bg-[#fa6d4d] text-white rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
