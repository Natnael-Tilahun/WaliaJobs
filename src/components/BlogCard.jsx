import React from "react";
import { NavLink } from "react-router-dom";
import generateExcerpt from "../utils/helperFunctions/generateExcerpt";

export const BlogCard = ({ blogId, img, title, date, description }) => {
  return (
    <div className="border-[1px] w-full flex flex-col rounded-3xl bg-thm_card dark:bg-thm_dark_background">
      <img
        src={img}
        alt="blog caption image"
        className="shadow-md rounded-t-3xl hover:scale-y-110 hover:bg-blend-darken transition-all duration-200 delay-200"
      />
      <div className="p-4 flex flex-col gap-2 lg:gap-2">
        <h1 className="font-medium text-thm_primary_color dark:text-thm_dark_primary_color lg:text-lg pt-2">
          {title}
        </h1>
        <p className="text-thm_secondary_color dark:text-thm_dark_secondary_color text-xs lg:text-sm tracking-wider">
          {date}
        </p>
        <p className="text-thm_secondary_color dark:text-thm_dark_secondary_color text-sm lg:text-sm leading-loose tracking-wider">
          {generateExcerpt(description, 300)}
        </p>
        <NavLink
          to={`/blog-details/${blogId}`}
          className="text-sm hover:bg-blue-100 flex my-1 mb-5 items-center gap-2 text-thm_root1_color border-[1px] shadow-sm w-fit px-3 py-1 rounded-xl dark:text-thm_dark_root1_color font-medium tracking-wide"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};
