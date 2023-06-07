import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full text-center md:py-16 py-5 my-0 md:my-0 flex bg-thm_background shadow shadow-thm_secondary_color  flex-col px-5 md:px-10 lg:px-20">
      <ul className="flex flex-col gap-2 text-center items-center md:flex-row font-medium text-sm  md:justify-between border-b-[1px] border-gray-500 pb-2">
        <li>
          <NavLink
            to="/jobs"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #fa6d4d" : "",
              };
            }}
          >
            Jobs
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
          >
            Build CV
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
          >
            Company
          </NavLink>
        </li>
        <li className="font-black text-[#f8451d] text-xl md:text-3xl -order-1 md:-order-none">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #fa6d4d" : "",
              };
            }}
          >
            Walia Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "3px solid #fa6d4d" : "",
              };
            }}
          >
            About Us
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
          >
            Blog
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
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-center gap-5 p-5">
        <li>
          <img
            src="src/assets/images/telegramlogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/tiktoklogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/youtubelogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/gmaillogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/facebooklogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="src/assets/images/linkedinlogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
      </ul>
      <p className="text-gray-500 tracking-wide text-sm">
        @WaliaJobs, Inc 2023. We love our users!
      </p>
    </div>
  );
};
