import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="w-full  relative bg-thm_secondary_background   text-center lg:pt-10 xl:pt-28 py-2 my-0 md:my-0 flex  justify-end items-end  flex-col px-5 md:px-10 lg:px-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="  absolute inset-0 w-full scale-y-[7] md:scale-y-[2] lg:scale-y-150 xl:scale-y-125"
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
            <stop offset="5%" stop-color="#1e40af" />
            <stop offset="95%" stop-color="#fa6d4d" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative w-full h-fit">
        <div className="flex justify-evenly border-b-[1px] flex-wrap border-gray-500 gap-5">
          <NavLink
            to="/"
            className="font-black  basis-full md:basis-auto text-[#e96c51] self-center text-xl md:text-3xl -order-1 md:-order-none"
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '3px solid #fa6d4d' : '',
              };
            }}
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
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Jobs
            </NavLink>

            <NavLink
              to="/buildcv"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Build CV
            </NavLink>

            <NavLink
              to="/company"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Companies
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
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
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Blogs
            </NavLink>

            <NavLink
              to="/privacy_policy"
              className="pb-[1px]"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms&conditions"
              className="pb-[1px]"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Terms & conditions
            </NavLink>

            <NavLink
              to="/trust&safety"
              className="pb-[1px]"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
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
          @WaliaJobs, Inc 2023. We love our users!
        </p>
      </div>
    </div>
  );
};
