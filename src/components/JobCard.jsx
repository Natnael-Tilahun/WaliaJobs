import React from "react";

export const JobCard = ({
  title,
  companyName,
  address,
  jobType,
  jobStyle,
  description,
  jobTags,
  timeLeft,
  img,
  className,
}) => {
  return (
    <div
      className={`lg:w-[30%] w-[90%] md:w-[45%] border-2 py-5 px-5 md:px-10 lg:p-5 flex flex-col gap-2 rounded-2xl ${className}`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-base lg:text-xl">{title}</h1>
        <img src={img} alt="Company Logo" className="w-16 md:w-20 h-12" />
      </div>
      <div className="flex gap-7 lg:gap-14 font-semibold text-gray-700 text-sm">
        <p>{companyName}</p>
        <p>
          <span>{jobStyle}</span>, {address}
        </p>
        <p>{jobType}</p>
      </div>
      <p className="text-left text-gray-500 text-sm leading-5 pb-2 ">
        {description}
      </p>
      <div className="flex font-medium text-gray-600 gap-5 lg:gap-10 text-sm">
        {jobTags &&
          jobTags.map((item, index) => <span key={index}>{item}</span>)}
      </div>
      <div className="flex justify-between gap-3 text-sm lg:text-base">
        <button className="bg-[#C9FEB1] px-3  lg:px-8 rounded-md font-medium text-gray-800">
          {timeLeft}
        </button>
        <div className="flex gap-10 text-[#18A0FB] font-medium">
          <p>Share</p>
          <p>Save</p>
        </div>
      </div>
    </div>
  );
};
