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
      className={`shadow-sm rounded-xl bg-thm_card text-xs md:text-sm flex flex-col gap-2 h-82 py-5 px-5 border-[1px]  ${className}`}
    >
      <div className="flex gap-6">
        <img
          src={img ? img : "/profileAvatar.png"}
          className="w-14  h-14 rounded-lg bg-cover"
          alt="Company Logo"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold ">
            {jobTitle} in {companyName}
          </h1>
          <h1 className="font-medium ">{name ? name : "Anonymous"}</h1>
          {/* <h1>{jobTitle}</h1> */}
          <p className="font-semibold flex opacity-90 bg-green-700 w-fit px-3 py-1  text-black rounded-md items-center gap-2">
            <img
              src="/rateIcon.png"
              className="w-4 h-4 inline-block mx-0"
              alt="Review Star"
            />
            <span className="text-white text-sm">{rate}</span>
          </p>
        </div>
      </div>
      <div>
        <p className="font-medium ">Like:</p>
        <p className="text-thm_secondary_color">{reviewLike}</p>
      </div>
      <div>
        <p className="font-medium">Dislike:</p>
        <p className="text-thm_secondary_color">{reviewDislike}</p>
      </div>
      <p className="text-right text-thm_secondary_color">
        {new Date(date).toLocaleDateString()}
      </p>
    </div>
  );
};
