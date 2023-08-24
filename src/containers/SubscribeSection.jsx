import React from 'react';

export const SubscribeSection = () => {
  return (
    <div className="w-ful text-center md:py-20 py-16 px-10 lg:justify-evenly md:items-center md:px-10 bg-thm_secondary_background items-center md:justify-between lg:px-20 flex flex-col lg:flex-row gap-5 md:gap-8">
      <div className="flex  flex-col text-left gap-1 ">
        <h1 className="text-lg md:text-3xl font-semibold tracking-wider">
          Get New Job Notificatons
        </h1>
        <p className=" md:text-3xl tracking-wider text-center font-light">
          Free Subscribe Our Newsletter Now!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 h-10">
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
