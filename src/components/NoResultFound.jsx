import React from "react";

export const NoResultFound = () => {
  return (
    <div className="w-full h-56 md:h-96 px-5 bg-thm_background rounded-lg shadow-md max-h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="font-medium lg:text-lg">No results found</h1>
      <p className="text-thm_secondary_color lg:text-base text-sm">
        Modify search criteria or create an alert to get relevant jobs as soon
        as they’re posted
      </p>
    </div>
  );
};
