import React from "react";

export const CompanyCard = ({ name, rate, reviews, img }) => {
  return (
    <div>
      <div className="shadow-md rounded-lg mx-10 shadow-gray-400 flex flex-col h-80 gap-1 p-5 border-[1px] items-center">
        <img src={img} className="w-full h-32 bg-cover" alt="Company Logo" />
        <h1 className="font-bold py-3">{name}</h1>
        <p className="font-semibold text-gray-600 flex items-center gap-1">
          <img
            src="src\assets\images\Icon.png"
            className="w-5 h-5 inline-block mx-0"
            alt="Review Star"
          />
          <span>{rate}</span> | <span>{reviews}</span>Reviews
        </p>
        <button className="border-2 mt-5 px-4 py-1 font-bold rounded-lg hover:bg-[#97d1f8] text-[#2F6EFC] border-[#18A0FB]">
          View Jobs
        </button>
      </div>
    </div>
  );
};
