import React from "react";

export const SubscribeSection = () => {
  return (
    <div className="w-full text-center md:py-20 py-10 px-10 lg:justify-evenly md:items-center md:px-10 bg-[#F5F5F5] items-center md:justify-between lg:px-20 flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col text-left gap-1 ">
        <h1 className="text-xl md:text-3xl font-medium tracking-wider">
          Get New Job Notificatons
        </h1>
        <p className=" md:text-3xl tracking-wider font-light">
          Free Subscribe Our Newsletter Now!
        </p>
      </div>
      <div className="flex h-10 ">
        <input
          type="text"
          placeholder="Type your email address"
          className="rounded-tl-lg rounded-bl-lg  border-[1px] border-[#18A0FB] text-[#6B7280] px-5"
        />
        <button className="rounded-tr-lg rounded-br-lg bg-[#2F6EFC] px-4 text-white font-light whitespace-nowrap md:text-lg">
          Join Today
        </button>
      </div>
    </div>
  );
};
