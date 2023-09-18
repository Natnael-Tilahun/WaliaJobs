import React from "react";

const JobDetailsSkeleton = () => {
  return (
    <div className="md:w-[70%] w-full flex flex-col gap-10 ">
      <div className=" flex flex-col gap-3 rounded-2xl bg-white p-4 md:py-6 md:px-10 w-full shadow-md">
        <div className="flex justify-between items-center w-full">
          <div className="flex w-2/3 flex-col gap-3">
            <div className="h-3 w-full md:w-1/2 rounded-lg bg-slate-200"></div>
            <div className="flex gap-10">
              <div className="h-3 w-32 rounded-lg bg-slate-200"></div>
              <div className="h-3 w-16 rounded-lg bg-slate-200"></div>
              <div className="h-3 w-16 rounded-lg bg-slate-200"></div>
            </div>
          </div>
          <div className="h-20 w-20 rounded-lg bg-slate-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <div className="h-4 w-4 rounded-full bg-slate-200"></div>
            <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-4 w-4 rounded-full bg-slate-200"></div>
            <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-4 w-4 rounded-full bg-slate-200"></div>
            <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-4 w-4 rounded-full bg-slate-200"></div>
            <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <div className="h-3 w-28 rounded-lg bg-slate-200"></div>
            <div className="h-3 w-28 rounded-lg bg-slate-200"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200"></div>
            <div className="h-8 w-8 rounded-full bg-slate-200"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-10 rounded-2xl bg-white p-4 md:p-10 w-full shadow-md">
        <div className="h-3 w-1/4 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-1/4 rounded-lg bg-slate-200"></div>

        <div className="flex flex-col gap-3">
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full  rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
        </div>

        <div className="h-3 w-1/4 rounded-lg bg-slate-200"></div>

        <div className="flex flex-col gap-3">
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full  rounded-lg bg-slate-200"></div>
          <div className="h-3 w-full rounded-lg bg-slate-200"></div>
        </div>

        <div className="h-3 w-1/3 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-1/3 rounded-lg bg-slate-200"></div>
        <div className="h-3 w-1/3 rounded-lg bg-slate-200"></div>

        <div className="flex justify-between gap-3">
          <div className="flex  gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-200"></div>
            <div className="h-10 w-10 rounded-full bg-slate-200"></div>
            <div className="h-10 w-10 rounded-full bg-slate-200"></div>
            <div className="h-10 w-10 rounded-full bg-slate-200"></div>
          </div>
          <div className="h-10 w-28 rounded-2xl bg-slate-200"></div>
        </div>
      </div>

      <div className="space-y-6 rounded-2xl bg-white p-4 md:p-10 w-full shadow-md">
        <div className="h-3 w-1/3 rounded-lg bg-slate-200"></div>
        <div className="h-48 w-full rounded-lg bg-slate-200"></div>
        <div className="flex flex-col gap-2 ">
          <div className="h-3 w-28 rounded-lg bg-slate-200"></div>
          <div className="flex gap-3">
            <div className="h-3 w-20 rounded-full bg-slate-200"></div>
            <div className="h-3 w-1/2 rounded-full bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSkeleton;
