import React from "react";
import { twMerge } from "tailwind-merge";

export const JobSkeleton = ({ className }) => {
  return (
    <div
      className={twMerge(
        `space-y-3 rounded-2xl bg-white p-5 w-full shadow-md `,
        className
      )}
    >
      <div className="h-3 w-1/3 rounded-lg bg-slate-200"></div>
      <div className="flex gap-10">
        <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
      </div>
      <div className="h-12 w-full rounded-lg bg-slate-200"></div>
      <div className="flex justify-between ">
        <div className="h-8 w-28 rounded-lg bg-slate-200"></div>
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-200"></div>
          <div className="h-8 w-8 rounded-full bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};
