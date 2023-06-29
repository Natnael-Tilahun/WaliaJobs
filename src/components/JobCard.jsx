import React from "react";
import { NavLink } from "react-router-dom";

export const JobCard = ({
  title,
  companyName,
  location,
  jobType,
  workMode,
  description,
  jobTags,
  timeLeft,
  img,
  className,
  showShareAndSaveBtn,
}) => {
  return (
    <NavLink
      to="/job_details"
      className={`lg:w-[30%] w-[95%] md:w-[46%] border-2 py-5 px-5 md:px-10 lg:p-5 flex flex-col gap-3 rounded-2xl ${className}`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-base lg:text-xl text-left">{title}</h1>
        {img && (
          <img src={img} alt="Company Logo" className="w-16 md:w-20 h-12" />
        )}
      </div>
      <div className="flex gap-7 lg:gap-14 font-semibold text-gray-700 text-xs md:text-sm">
        <p>{companyName}</p>
        <p>
          <span>{workMode}</span>, {location}
        </p>
        <p>{jobType}</p>
      </div>
      {description && (
        <div className="text-left text-gray-500 text-xs md:text-sm flex gap-0 h-4 md:h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-6 fill-gray-400"
          >
            <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
          </svg>
          <p className="overflow-hidden w-full">{description}</p>
          <span>...</span>
        </div>
      )}
      <div className="flex font-medium text-gray-600 gap-5 lg:gap-5 text-xs lg:text-sm">
        {jobTags &&
          jobTags.map((item, index) => <span key={index}>{item}</span>)}
      </div>
      <div className="flex justify-between gap-3 text-sm lg:text-base">
        <button className="bg-[#C9FEB1] px-3  lg:px-8 rounded-md font-medium text-gray-800">
          {timeLeft}
        </button>
        {showShareAndSaveBtn && (
          <div className="flex gap-10 text-[#18A0FB] font-medium">
            <p>Share</p>
            <p>Save</p>
          </div>
        )}
      </div>
    </NavLink>
  );
};
