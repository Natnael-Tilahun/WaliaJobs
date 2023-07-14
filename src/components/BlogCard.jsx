import React from "react";
import { NavLink } from "react-router-dom";

export const BlogCard = ({ blogId, img, title, date, description }) => {
  return (
    <NavLink
      to={`/blog-details/${blogId}`}
      className="border-2 w-full flex flex-col rounded-3xl shadow-md bg-thm_background dark:bg-thm_dark_background"
    >
      <img
        src={img}
        alt="blog caption image"
        className="shadow-md rounded-t-3xl"
      />
      <div className="p-4 flex flex-col gap-2 lg:gap-4">
        <h1 className="font-medium text-thm_primary_color dark:text-thm_dark_primary_color lg:text-lg">
          {title}
        </h1>
        <p className="text-thm_secondary_color dark:text-thm_dark_secondary_color text-xs lg:text-sm tracking-wider">
          {date}
        </p>
        <p className="text-thm_secondary_color dark:text-thm_dark_secondary_color text-sm lg:text-base tracking-wide">
          {description}
        </p>
        <p className="lg:text-lg text-thm_root1_color dark:text-thm_dark_root1_color font-medium tracking-wide">
          Read More....
        </p>
      </div>
    </NavLink>
  );
};
