import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const CVSteperLink = ({ link, title, step }) => {
  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);

  return (
    <NavLink
      to={link}
      style={({ isActive }) => {
        return {
          color: isActive ? '#1e40af' : '',
        };
      }}
    >
      <li className="flex items-center ">
        {/* <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
          1
        </span> */}
        {cvCompletionInfo[title].completed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-green-500 mr-1"
            viewBox="0 0 24 24"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
          </svg>
        ) : (
          <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            {step}
          </span>

          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     className="w-6 h-6 fill-thm_root1_color lg:mr-1 mr-1 opacity-60 "
          //     viewBox="0 0 24 24"
          //   >
          //     <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
          //   </svg>
        )}
        {title}
        {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-1 md:ml-2 lg:ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          ></path>
        </svg>
      </li>
    </NavLink>
  );
};
