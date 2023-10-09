import React from "react";
import { twMerge } from "tailwind-merge";

export const CompanySkeleton = ({ className }) => {
  return (
    <div
      className={twMerge(
        `shadow-md rounded-lg  mx-10 shadow-gray-400 flex flex-col h-82 gap-6 p-5 border-[1px] items-center`,
        className
      )}
    >
      <div className="h-40 w-full rounded-lg bg-slate-200"></div>
      {/* <div className="flex gap-10">
        <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
      </div> */}
      <div className="h-4 w-full rounded-lg bg-slate-200"></div>
      {/* <div className="flex justify-between "> */}
      <div className="flex gap-3">
        <div className="h-4 w-4 rounded-full bg-slate-200"></div>
        <div className="h-4 w-4 rounded-full bg-slate-200"></div>
        <div className="h-4 w-20 rounded-lg bg-slate-200"></div>
        {/* </div> */}
      </div>
      <div className="h-8 w-28 rounded-lg bg-slate-200"></div>
    </div>
  );
};
