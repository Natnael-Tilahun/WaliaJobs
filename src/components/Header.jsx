import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { SET_LOGOUT } from "../features/users/authSlice";

function Header() {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const [collapseProfileMenu, setCollapseProfileMenu] = useState(true);
  const dispatch = useDispatch();
  const profileMenuRef = useRef(null);
  const token = useSelector((state) => state.auth.token);
  const isLoggedin = !!token; // true if token exists, false if token is falsy
  const navigate = useNavigate();
  const menuHandler = () => {
    setCollapseMenu(!collapseMenu);
  };

  const toggleProfileMenuHandler = () => {
    setCollapseProfileMenu(!collapseProfileMenu);
  };

  const closeProfileMenuHandler = () => {
    setCollapseProfileMenu(true);
  };

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setCollapseProfileMenu(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutHandler = () => {
    dispatch(SET_LOGOUT());
    closeProfileMenuHandler();
    menuHandler();
    navigate("/login");
  };

  return (
    <div
      data-testid="header"
      className="w-full h-16 lg:flex items-center gap-20 px-5 lg:px-10 xl:px-20 py-5 lg:py-5 shadow-md relative bg-thm_background dark:bg-thm_dark_background dark:text-thm_dark_primary_color text-thm_primary_color"
    >
      <div className="flex justify-between w-full lg:w-auto items-center md:pr-5 ">
        <NavLink
          data-testid="logos"
          to="/"
          className="font-bold lg:text-2xl text-thm_primary_color dark:text-thm_dark_primary_color first-letter:text-2xl lg:first-letter:text-4xl"
        >
          Walia Jobs
        </NavLink>
        <svg
          data-testid="open_menu_humberger"
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
        <ul className="flex gap-8 text-thm_secondary_color list-none dark:text-thm_dark_secondary_color ">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #1e40af" : "",
              };
            }}
            className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root1_color hover:text-gray-800 `}
          >
            Home
          </NavLink>
          <NavLink
            to="jobs"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #1e40af" : "",
              };
            }}
            className={`hover:border-b-[3px] rounded-sm pb-1 border-thm_root1_color hover:text-gray-800 }`}
          >
            Jobs
          </NavLink>

          <NavLink
            to="company"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #1e40af" : "",
              };
            }}
            className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Companies
          </NavLink>

          <NavLink
            to="/buildcv"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #1e40af" : "",
              };
            }}
            className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Build CV
          </NavLink>

          <NavLink
            to="contact"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #1e40af" : "",
              };
            }}
            className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Contact
          </NavLink>

          <NavLink
            to="blogs"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #1e40af" : "",
              };
            }}
            className="hover:border-b-[3px] rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Blogs
          </NavLink>
        </ul>

        {!isLoggedin ? (
          <div className="flex gap-5">
            <NavLink
              to="login"
              className="border-2 border-thm_root1_color py-1 px-8 rounded-md "
            >
              Login
            </NavLink>
            <NavLink
              to="signup"
              className="py-1 px-8 bg-thm_root1_color text-white rounded-md"
            >
              Register
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-10">
            <NavLink
              to="savedjobs"
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

            {/* profile menu  */}
            <div
              className="relative inline-block text-left"
              ref={profileMenuRef}
            >
              <img
                src="/profile1.jpg"
                alt="Profile Photo image"
                className="w-12 h-12 rounded-full shadow-lg cursor-pointer hover:border-2 hover:shadow-xl"
                onClick={toggleProfileMenuHandler}
              />

              <div
                className={`absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  collapseProfileMenu && "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-4 px-5 flex flex-col " role="none">
                  <img
                    src="/profile1.jpg"
                    alt="Profile Photo image"
                    className="w-20 h-20 self-center"
                  />
                  <h1 className="text-center text-lg font-medium">
                    Natnael Tilahun
                  </h1>
                  <hr className="my-2" />
                  <NavLink
                    to="#"
                    className="hover:text-thm_primary_color w-full px-4 py-2 text-left  inline-flex gap-4 items-center hover:bg-slate-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={closeProfileMenuHandler}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path>
                      </svg>
                    </span>
                    Profile
                  </NavLink>
                  <NavLink
                    to="#"
                    className="hover:text-thm_primary_color  w-full px-4 py-2 text-left  inline-flex gap-4 items-center hover:bg-slate-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={closeProfileMenuHandler}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"></path>
                      </svg>
                    </span>
                    Setting
                  </NavLink>

                  {/* <form method="POST" action="#" role="none"> */}
                  <button
                    type="submit"
                    className="hover:text-thm_primary_color w-full px-4 py-2 text-left  inline-flex gap-4 items-center hover:bg-slate-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                    onClick={logoutHandler}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
                      </svg>
                    </span>
                    Log out
                  </button>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation menu for mobile */}

      <div
        data-testid="menu"
        className={`mr-auto lg:hidden bg-thm_secondary_background flex-col py-10 shadow-md gap-0 bg-thm_secondary_background flex-1 min-h-screen z-50 absolute top-0 w-screen left-0 right-0  dark:bg-thm_dark_secondary_background dark:text-thm_dark_primary_color  ${
          collapseMenu ? "flex" : "hidden"
        }`}
      >
        <div className="flex bg-thm_background dark:bg-thm_dark_background w-full shadow-md justify-between items-center py-4 px-7">
          <NavLink
            to="/"
            data-testid="logo"
            className="font-bold lg:text-2xl  "
          >
            Walia Jobs
          </NavLink>
          <svg
            data-testid="close_menu_humberger"
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

        <ul className="flex w-full flex-col list-none gap-8 justify-center py-10 items-center font-medium text-gray-700 dark:text-thm_dark_primary_color ">
          {isLoggedin && (
            <div
              className="py-0 px-5 flex flex-col justify-center items-center gap-5"
              role="none"
            >
              <img
                src="/profile1.jpg"
                alt="Profile Photo image"
                className="w-20 h-20 self-center"
              />
              <h1 className="text-center text-lg font-medium">
                Natnael Tilahun
              </h1>
              <hr className="border-slate-300  w-full" />
              <NavLink
                to="#"
                className="hover:text-thm_primary_color w-fit px-4 py-2 text-left  inline-flex gap-4 items-center hover:bg-slate-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={closeProfileMenuHandler}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path>
                  </svg>
                </span>
                Profile
              </NavLink>
            </div>
          )}
          <NavLink
            to="/"
            onClick={menuHandler}
            className="hover:border-b-4 rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Home
          </NavLink>
          <NavLink
            to="jobs"
            onClick={menuHandler}
            className="hover:border-b-4 rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Jobs
          </NavLink>

          <NavLink
            to="company"
            onClick={menuHandler}
            className="hover:border-b-4 rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Companies
          </NavLink>

          <NavLink
            to="/buildcv"
            onClick={menuHandler}
            className="hover:border-b-4 rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Build CV
          </NavLink>

          <NavLink
            to="contact"
            onClick={menuHandler}
            className="hover:border-b-4 rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Contact
          </NavLink>

          <NavLink
            to="blogs"
            onClick={menuHandler}
            className="hover:border-b-4 rounded-sm pb-1 border-thm_root1_color hover:text-gray-800"
          >
            Blog
          </NavLink>
          {isLoggedin && (
            <div className="w-full  flex flex-col items-center justify-center gap-2">
              <NavLink
                to="#"
                className="hover:text-thm_primary_color  w-fit px-4 py-2 text-left  inline-flex gap-4 items-center hover:bg-slate-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={closeProfileMenuHandler}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"></path>
                  </svg>
                </span>
                Setting
              </NavLink>

              {/* <form method="POST" action="#" role="none"> */}
              <button
                type="submit"
                className="hover:text-thm_primary_color w-fit px-4 py-2 text-left  inline-flex gap-4 items-center hover:bg-slate-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
                onClick={logoutHandler}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
                  </svg>
                </span>
                Log out
              </button>
            </div>
          )}
        </ul>
        {!isLoggedin ? (
          <div className="flex gap-5 justify-center">
            <NavLink
              to="login"
              onClick={menuHandler}
              className="border-2 border-blue-300 py-1 px-8 rounded-md "
            >
              Login
            </NavLink>
            <NavLink
              to="signup"
              onClick={menuHandler}
              className="py-1 px-8 bg-thm_root2_color text-white rounded-md"
            >
              Register
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink
              to="savedjobs"
              onClick={menuHandler}
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
        )}
      </div>
    </div>
  );
}

export default Header;
