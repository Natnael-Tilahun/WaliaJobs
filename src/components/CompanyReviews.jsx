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
      className={`shadow-sm rounded-xl bg-thm_background  flex flex-col gap-4 h-82 py-5 px-5 border-[1px]  ${className}`}
    >
      <div className="flex gap-4">
        <img
          src={img}
          className="w-20  h-20 rounded-lg bg-cover"
          alt="Company Logo"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">{companyName}</h1>
          <h1 className="font-semibold text-thm_secondary_color">{name}</h1>
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
      <div>
        <p className="font-medium text-lg">Like:</p>
        <p className="text-thm_secondary_color">{reviewLike}</p>
      </div>
      <div>
        <p className="font-medium text-lg">Dislike:</p>
        <p className="text-thm_secondary_color">{reviewDislike}</p>
      </div>
      <p className="text-right text-thm_secondary_color">{date}</p>
    </div>
  );
};
