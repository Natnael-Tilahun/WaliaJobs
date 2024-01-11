import React from "react";

export const NoResultFound = ({ className, title, message }) => {
  return (
    <div
      className={`w-full h-60 md:h-[500px] p-10 bg-[#ebf2ff] dark:bg-thm_dark_background rounded-lg border-[1px] max-h-screen flex flex-col gap-2 justify-center items-center ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-32 pb-4 fill-thm_secondary_color "
      >
        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 12.7266 21.9225 13.4351 21.7753 14.1177L19.9931 12.3355C19.9977 12.2242 20 12.1124 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.3023 20 14.5319 19.6888 15.6186 19.1368C15.7735 19.3828 15.958 19.6149 16.1716 19.8284C16.4739 20.1307 16.8125 20.3745 17.1734 20.5598C15.6642 21.4737 13.8936 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM19 14.1716L20.4142 15.5858C21.1953 16.3668 21.1953 17.6332 20.4142 18.4142C19.6332 19.1953 18.3668 19.1953 17.5858 18.4142C16.8402 17.6687 16.8064 16.481 17.4841 15.6952L17.5858 15.5858L19 14.1716ZM12 15C13.4664 15 14.7853 15.6312 15.6999 16.6368L14.7549 17.4961C13.965 17.1825 13.018 17 12 17C10.982 17 10.035 17.1825 9.24506 17.4961L8.30009 16.6368C9.21468 15.6312 10.5336 15 12 15ZM8.5 10C9.32843 10 10 10.6716 10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5C7 10.6716 7.67157 10 8.5 10ZM15.5 10C16.3284 10 17 10.6716 17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5C14 10.6716 14.6716 10 15.5 10Z"></path>
      </svg>
      <h1 className="font-medium lg:text-xl dark:text-thm_dark_primary_color">
        {title ? title : "Sorry, No result found"}
      </h1>
      <p className="text-thm_secondary_color lg:text-base text-sm dark:text-thm_dark_secondary_color">
        {message
          ? message
          : "Modify search criteria or create an alert to get relevant jobs as soon as they’re posted"}
      </p>
    </div>
  );
};
