import React from "react";
import { NavLink } from "react-router-dom";

export const CompanyCard = ({ id, name, rate, reviews, img, className }) => {
  return (
    <div
      className={`shadow-md rounded-lg mx-10 shadow-gray-400 flex flex-col h-82 gap-1 p-5 border-[1px] items-center ${className}`}
    >
      <img src={img} className="w-full h-32 bg-cover" alt="Company Logo" />
      <h1 className="font-bold py-3">{name}</h1>
      <p className="font-semibold text-gray-600 flex items-center gap-1">
        <img
          src="/Icon.png"
          className="w-5 h-5 inline-block mx-0"
          alt="Review Star"
        />
        <span>{rate}</span> | <span>{reviews}</span>Reviews
      </p>
      <NavLink
        to={`company-details/${id}`}
        className="border-2 mt-5 px-4 py-1 font-bold rounded-lg hover:bg-[#97d1f8] text-[#2F6EFC] border-[#18A0FB]"
      >
        View Jobs
      </NavLink>
    </div>
  );
};
