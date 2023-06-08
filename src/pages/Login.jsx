import React from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
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
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[30%] shadow-md gap-1 bg-thm_background flex flex-col justify-center py-10 px-10 rounded-md">
        <h1 className="text-xl pb-2 font-medium text-thm_primary_color">
          Sign in to your account.
        </h1>
        {/* <p className="text-lg text-thm_secondary_color">
          Sign in to your account.
        </p> */}
        <div className="flex flex-col gap-4 py-5">
          <NavLink className="border-[1px] rounded-md  px-5 font-medium text-center md:px-20 py-1 text-thm_primary_color md:text-lg">
            Continue with google
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-20 py-1 text-thm_primary_color md:text-lg">
            Continue with facebook
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-20 py-1 text-thm_primary_color md:text-lg">
            Continue with linkedin
          </NavLink>
        </div>
        <div className="flex items-center gap-4 self-center">
          <hr className="w-36" />
          <p className="text-thm_secondary_color text-lg border-2 rounded-full p-2 font-medium">
            or
          </p>
          <hr className="w-36" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label htmlFor="email">
            Email Address{" "}
            <span className="text-red-500 font-medium text-lg"> *</span>
          </label>
          <input
            type="email"
            className=" border-2 rounded-md py-1 px-5"
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className=" border-2 rounded-md py-1 px-5"
            placeholder="Enter your password"
          />
          <button className="bg-thm_root1_color py-2 rounded-lg font-medium text-white">
            Login with email
          </button>
        </div>
      </div>
    </div>
  );
};
