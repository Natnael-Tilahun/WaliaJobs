import React from "react";
import { NavLink } from "react-router-dom";

export const CompanyReviews = ({
  id,
  name,
  className,
  img,
  rate,
  reviewLike,
  reviewDislike,
  companyName,
  jobTitle,
  date,
}) => {
  return (
    <div
      className={`shadow-md rounded-lg bg-thm_background   shadow-gray-400 flex flex-col gap-5 h-82 py-5 px-7 border-[1px]  ${className}`}
    >
      <div className="flex gap-4">
        <img
          src={img}
          className="w-20  h-20 rounded-lg bg-cover"
          alt="Company Logo"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">{companyName}</h1>
          <h1 className="font-medium">{name}</h1>
          <h1>{jobTitle}</h1>
          <p className="font-semibold flex text-lg opacity-90 bg-green-600 w-fit px-3 text-white rounded-md items-center gap-2">
            <img
              src="/rateIcon.png"
              className="w-5 h-4 inline-block mx-0"
              alt="Review Star"
            />
            <span>{rate}</span>
          </p>
        </div>
      </div>
      <p>
        <span className="font-medium">Like: </span> {reviewLike}
      </p>
      <p>
        {" "}
        <span className="font-medium">Dislike: </span> {reviewDislike}
      </p>
      <p className="text-right text-thm_secondary_color">{date}</p>
    </div>
  );
};
