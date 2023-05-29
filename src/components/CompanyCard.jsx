import React from "react";

export const CompanyCard = () => {
  return (
    <div>
      <div className="shadow-md rounded-lg mx-10 shadow-gray-400 flex flex-col gap-1 p-5 border-[1px] items-center">
        <img
          src="src/assets/images/cbelogo.png"
          className="w-full h-16 bg-cover"
          alt="Company Logo"
        />
        <h1 className="font-bold ">Commercial Bank of Ethiopia</h1>
        <p className="font-semibold text-gray-600 flex items-center gap-1">
          <img
            src="src\assets\images\Icon.png"
            className="w-5 h-5 inline-block mx-0"
            alt="Review Star"
          />
          <span>10</span> | <span>50+</span>Reviews
        </p>
        <button className="border-2 mt-5 px-4 py-1 font-bold rounded-lg hover:bg-[#97d1f8] text-[#2F6EFC] border-[#18A0FB]">
          View Jobs
        </button>
      </div>
    </div>
  );
};
