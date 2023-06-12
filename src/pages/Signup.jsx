import React from "react";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background py-5 flex-col  justify-center items-center my-0 flex md:my-0 px-5 md:px-3 lg:px-20 gap-2 lg:gap-5">
      <NavLink
        to="/"
        className="font-black  basis-full md:basis-auto text-[#f8451d] self-center text-xl md:text-3xl -order-1 md:-order-none"
        style={({ isActive }) => {
          return {
            borderBottom: isActive ? "3px solid #fa6d4d" : "",
          };
        }}
      >
        Walia Jobs
      </NavLink>

      <div className="w-full md:w-[90%] lg:w-1/2 xl:w-[60%] shadow-md gap-1 bg-thm_background flex flex-col justify-center py-10 px-10 rounded-md">
        <h1 className="text-xl pb-2 font-medium text-thm_primary_color">
          Ready to take the next step?
        </h1>
        <p className="text-lg text-thm_secondary_color">Create an account.</p>
        <p className="text-thm_secondary_color text-sm">
          By continuing, you agree to our{" "}
          <span className="text-thm_root1_color underline">Terms of Use</span>{" "}
          and{" "}
          <span className="text-thm_root1_color underline">Privacy Policy</span>
          .
        </p>

        <div className="flex flex-col md:flex-row gap-8 py-5 w-full">
          <div className="flex flex-col w-full gap-3 basis-1/2">
            <label htmlFor="email">
              Full name
              <span className="text-red-500 font-medium text-lg"> *</span>
            </label>
            <input
              type="email"
              className=" border-2 rounded-md py-1 px-5"
              placeholder="Enter your full name"
            />
            <label htmlFor="email">
              Email Address
              <span className="text-red-500 font-medium text-lg"> *</span>
            </label>
            <input
              type="email"
              className=" border-2 rounded-md py-1 px-5"
              placeholder="Enter your email address"
            />
            <label htmlFor="email">
              Phone Number
              <span className="text-red-500 font-medium text-lg"> *</span>
            </label>
            <input
              type="tel"
              className=" border-2 rounded-md py-1 px-5"
              placeholder="Enter your phone number"
            />
            <label htmlFor="email">
              Create a password
              <span className="text-red-500 font-medium text-lg"> *</span>
            </label>
            <input
              type="password"
              className=" border-2 rounded-md py-1 px-5"
              placeholder="Create new password"
            />
            <button className="bg-thm_root1_color py-2 my-3 rounded-lg font-medium text-white">
              Register with email
            </button>
            <p className="text-sm text-thm_secondary_color">
              Already have an account?{" "}
              <NavLink to="/login" className="text-thm_root1_color text-base">
                Login
              </NavLink>
            </p>
          </div>
          <div className="md:flex hidden flex-col items-center gap-4 self-center">
            <div className="w-[1px] h-40 bg-thm_secondary_color" />
            <p className="text-thm_secondary_color text-lg border-2 rounded-full p-2 font-medium">
              or
            </p>
            <div className="w-[1px] h-40 bg-thm_secondary_color" />
          </div>
          <div className="flex md:hidden items-center gap-4 self-center">
            <hr className="w-28" />
            <p className="text-thm_secondary_color text-lg border-2 rounded-full p-2 font-medium">
              or
            </p>
            <hr className="w-28" />
          </div>
          <div className="flex flex-col gap-4 py-5 items-center justify-center">
            <NavLink className="border-[1px] rounded-md text-center font-medium px-5 md:px-10 w-full py-1 text-thm_primary_color md:text-lg">
              Register with google
            </NavLink>
            <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 w-full py-1 text-thm_primary_color md:text-lg">
              Register with facebook
            </NavLink>
            <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 w-full py-1 text-thm_primary_color md:text-lg">
              Register with linkedin
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
