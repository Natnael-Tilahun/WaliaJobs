import React from "react";

export const Jobs = () => {
  return (
    <div className="w-full text-center md:py-10 py-5 my-5 flex md:my-0 px-5 md:px-10 lg:px-20 border-4">
      <div className="flex basis-1/5 h-full flex-col border-2 shadow-md gap-5">
        <h1 className="border-b-2 font-medium text-black text-2xl py-4">
          All Filters
        </h1>
        <ul className="flex flex-col gap-5 items-start mx-auto p-5 border-b-2">
          <h1 className="font-medium text-xl">Work Mode</h1>
          <li className="text-xl">
            <input
              type="checkbox"
              name="office"
              value="Wor from office"
              id=""
            />
            <label htmlFor="office" className="px-2">
              Work from office
            </label>
          </li>
          <li>
            <input type="checkbox" name="remote" id="" />
            <label htmlFor="remote" className="px-2">
              Work from home
            </label>
          </li>
          <li>
            <input type="checkbox" name="hybrid" id="" />
            <label htmlFor="hybrid" className="px-2">
              Hybrid
            </label>
          </li>
          <li>
            <input type="checkbox" name="temporary" id="" />
            <label htmlFor="temporary" className="px-2">
              Temp. WFH dut to covid
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
