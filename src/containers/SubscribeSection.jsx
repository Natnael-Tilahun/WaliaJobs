import React from "react";

export const SubscribeSection = () => {
  return (
    <div className="w-full h-full overflow-hidden relative text-center md:py-20 py-16 px-10 lg:justify-evenly md:items-center md:px-10 bg-thm_secondary_background items-center md:justify-between lg:px-20 flex flex-col lg:flex-row gap-5 md:gap-8">
      <div className="bg-orange-200  opacity-30 hidden md:flex -right-24 -top-20  -z-0 md:absolute  h-64  w-96  rounded-t-[51%] rounded-r-[41%] rounded-b-[59%] rounded-l-[49%]"></div>
      <div className="bg-blue-100 opacity-50 -bottom-10 -left-48 md:-left-20 z-0 absolute  h-64  w-96  rounded-t-[61%] rounded-r-[59%] rounded-b-[38%] rounded-l-[62%]"></div>

      <div className="flex relative  flex-col text-left gap-1 ">
        <h1 className="text-lg md:text-3xl font-semibold tracking-wider">
          Get New Job Notifications
        </h1>
        <p className=" md:text-3xl tracking-wider text-center font-light">
          Free Subscribe Our Newsletter Now!
        </p>
      </div>
      <div className="flex relative flex-col md:flex-row gap-3 md:gap-0 h-10">
        <input
          type="text"
          placeholder="Type your email address"
          className="md:rounded-none
          md:rounded-tl-lg  md:rounded-bl-lg rounded-md  border-[1px] border-[#18A0FB] text-[#6B7280] px-5 py-1 lg:w-auto"
        />
        <button className="md:rounded-none md:rounded-tr-lg md:rounded-br-lg rounded-md bg-[#2F6EFC] px-4 py-1 text-white font-light whitespace-nowrap md:text-lg">
          Join Today
        </button>
      </div>
    </div>
  );
};
