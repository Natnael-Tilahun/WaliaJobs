import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="w-full rounded-t-3xl   bg-gradient-to-r from-thm_root1_color to-thm_root2_color text-center md:py-16 py-5 my-0 md:my-0 flex bg-thm_background shadow shadow-thm_secondary_color  flex-col px-5 md:px-10 lg:px-10">
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
  );
};
