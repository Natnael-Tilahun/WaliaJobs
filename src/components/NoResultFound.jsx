import React from "react";

export const NoResultFound = ({ className, title, message }) => {
  return (
    <div
      className={`w-full h-56 md:h-96 px-5 bg-[#ebf2ff] dark:bg-thm_dark_background rounded-lg shadow-md max-h-screen flex flex-col gap-2 justify-center items-center ${className}`}
    >
      <h1 className="font-medium lg:text-lg dark:text-thm_dark_primary_color">
        {title ? title : "No result found"}
      </h1>
      <p className="text-thm_secondary_color lg:text-base text-sm dark:text-thm_dark_secondary_color">
        {message
          ? message
          : "Modify search criteria or create an alert to get relevant jobs as soon as they’re posted"}
      </p>
    </div>
  );
};
