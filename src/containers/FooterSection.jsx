import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="h-40  md:h-10  w-full bg-thm_secondary_background"></div>

      <div className="w-full  relative bg-thm_secondary_background pt-0 md:pt-10  text-center lg:pt-16 xl:pt-28 py-2 my-0 md:my-0 flex  justify-end items-end  flex-col px-5 md:px-10 lg:px-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full scale-y-[7] xs:scale-y-[5] md:scale-y-[3] lg:scale-y-[2] xl:scale-y-150"
          viewBox="0 0 1440 320"
        >
          <path
            // fill="#0099ff"
            fill="url(#gradient)"
            // fill-opacity="0.5"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="5%" stopColor="#1e40af" />
              <stop offset="95%" stopColor="#fa6d4d" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative w-full h-fit">
          <div className="flex justify-evenly border-b-[1px] flex-wrap border-gray-500 gap-5">
            <NavLink
              to="/"
              className="font-black  basis-full md:basis-auto text-[#e96c51] self-center text-xl md:text-3xl -order-1 md:-order-none"
            >
              Walia Jobs
            </NavLink>
            <ul className="flex flex-col gap-2 text-center items-start text-gray-200  font-medium text-sm md:text-base   md:justify-between  pb-2">
              <p className="font-semibold text-base md:text-lg text-white">
                Walia Jobs
              </p>
              <NavLink
                to="/jobs"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Jobs
              </NavLink>

              <NavLink
                to="/buildcv"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Build CV
              </NavLink>

              <NavLink
                to="/company"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Companies
              </NavLink>

              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Contact Us
              </NavLink>
            </ul>
            <ul className="flex flex-col items-start gap-2 text-sm text-gray-200 md:text-base font-medium">
              <h1 className="font-semibold text-base md:text-lg text-white">
                Community
              </h1>
              <NavLink
                to="/blogs"
                className="pb-[1px]"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Blogs
              </NavLink>

              <NavLink
                to="/privacyPolicy"
                className="pb-[1px]"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/termsAndConditions"
                className="pb-[1px]"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Terms & conditions
              </NavLink>

              <NavLink
                to="/trustandsafety"
                className="pb-[1px]"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #1e40af" : "",
                  };
                }}
              >
                Trust & safety
              </NavLink>
            </ul>
          </div>

          <ul className="flex justify-center gap-5 p-5">
            <img
              src="/telegramlogo.png"
              alt="Social media link logo"
              className="w-8"
            />

            <img
              src="/tiktoklogo.png"
              alt="Social media link logo"
              className="w-8"
            />

            <img
              src="/youtubelogo.png"
              alt="Social media link logo"
              className="w-8"
            />

            <img
              src="/gmaillogo2.png"
              alt="Social media link logo"
              className="w-8"
            />

            <img
              src="/facebooklogo2.png"
              alt="Social media link logo"
              className="w-8"
            />

            <img
              src="/linkedinlogo2.png"
              alt="Social media link logo"
              className="w-8"
            />
          </ul>
          <p className="text-gray-200 tracking-wide text-sm">
            Copyright © 2023 Walia Jobs. We love our users!
          </p>
        </div>
      </div>
    </>
  );
};
