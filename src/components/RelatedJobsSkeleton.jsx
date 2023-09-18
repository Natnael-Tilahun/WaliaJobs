import React from "react";

const RelatedJobsSkeleton = ({ i }) => {
  return (
    <div
      className="h-32 space-y-3 rounded-2xl bg-white p-5 w-full shadow-lg border-[1px]"
      key={i}
    >
      <div className="h-3 w-1/2 rounded-lg bg-slate-200"></div>
      <div className="h-3 w-1/5 rounded-lg bg-slate-200"></div>
      <div className="flex gap-3 justify-between py-5">
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-full bg-slate-200"></div>
          <div className="h-3 w-24 rounded-lg bg-slate-200"></div>
        </div>
        <div className="h-3 w-1/3 rounded-lg bg-slate-200"></div>
      </div>
    </div>
  );
};

export default RelatedJobsSkeleton;
