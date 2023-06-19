import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full rounded-3xl  bg-gradient-to-r from-thm_root1_color to-thm_root2_color text-center md:py-16 py-5 my-0 md:my-0 flex bg-thm_background shadow shadow-thm_secondary_color  flex-col px-5 md:px-10 lg:px-10">
      <div className="flex justify-evenly border-b-[1px] flex-wrap border-gray-500 gap-5">
        <NavLink
          to="/"
          className="font-black  basis-full md:basis-auto text-[#e96c51] self-center text-xl md:text-3xl -order-1 md:-order-none"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "3px solid #fa6d4d" : "",
            };
          }}
        >
          Walia Jobs
        </NavLink>
        <ul className="flex flex-col gap-2 text-center items-start text-gray-200  font-medium text-sm md:text-base   md:justify-between  pb-2">
          <li className="font-semibold text-base md:text-lg text-white">
            Walia Jobs
          </li>
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
        <ul className="flex flex-col items-start gap-2 text-sm text-gray-200 md:text-base font-medium">
          <h1 className="font-semibold text-base md:text-lg text-white">
            Community
          </h1>
          <li>
            <NavLink
              to="/blog"
              className="pb-[1px]"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #fa6d4d" : "",
                };
              }}
            >
              Blogs
            </NavLink>
          </li>
          <li>Privacy Policy</li>
          <li>Terms & conditions</li>
          <li>Trust & safety</li>
        </ul>
      </div>

      <ul className="flex justify-center gap-5 p-5">
        <li>
          <img
            src="/telegramlogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="/tiktoklogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="/youtubelogo.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="/gmaillogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="/facebooklogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
        <li>
          <img
            src="/linkedinlogo2.png"
            alt="Social media link logo"
            className="w-8"
          />
        </li>
      </ul>
      <p className="text-gray-200 tracking-wide text-sm">
        @WaliaJobs, Inc 2023. We love our users!
      </p>
    </div>
  );
};
