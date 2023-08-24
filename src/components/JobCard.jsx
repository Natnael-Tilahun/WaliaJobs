import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  addFavouriteJob,
  removeFavouriteJobs,
} from '../redux/favouriteJobsSlice';
import { useDispatch } from 'react-redux';

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
  searchParams,
  id,
  isFavorite,
  jobDetail,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`lg:w-[47%] xl:w-[30%] w-[95%] dark:text-thm_dark_primary_color dark:border-none bg-thm_card text-thm_card_foreground dark:bg-thm_dark_background md:w-[46%] shadow-lg border-2 py-3 px-5 md:px-5 lg:p-5 flex flex-col gap-3 rounded-2xl ${className}`}
    >
      <NavLink
        to={`/job_details/${id}`}
        state={{ search: searchParams }}
        className="flex flex-col gap-2 "
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-base lg:text-xl text-left">{title}</h1>
          {img && (
            <img src={img} alt="Company Logo" className="w-16 md:w-20 h-12" />
          )}
        </div>
        <div className="flex gap-7 lg:gap-14 font-semibold text-thm_secondary_color dark:text-thm_dark_secondary_color text-xs md:text-sm">
          <p>{companyName}</p>
          <p>
            <span>{workMode}</span>, {location}
          </p>
          <p>{jobType}</p>
        </div>
        {description && (
          <div className="text-left text-gray-500 dark:text-thm_dark_secondary_color text-xs md:text-sm flex gap-0 h-4 md:h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-6 fill-gray-400"
            >
              <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
            </svg>
            <p className="overflow-hidden w-full">{description}</p>
            {/* <span>...</span> */}
          </div>
        )}
        <div className="flex font-medium text-gray-600 dark:text-thm_dark_secondary_color gap-5 lg:gap-5 text-xxs md:text-xs lg:text-sm">
          {jobTags &&
            jobTags.map(
              (item, index) => index < 3 && <span key={index}>{item}</span>
            )}
        </div>
      </NavLink>

      <div className="flex justify-between gap-3 text-sm lg:text-base">
        <button className="bg-[#C9FEB1] px-3  lg:px-8 rounded-md font-medium text-gray-800">
          {timeLeft}
        </button>
        {showShareAndSaveBtn && (
          <div className="flex gap-10 text-[#18A0FB] font-medium cursor-pointer">
            <div className="flex gap-1 ">
              <svg
                className="w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-thm_root1_color"
                  d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                ></path>
              </svg>
              {/* <p>Share</p> */}
            </div>

            <div>
              {isFavorite ? (
                <svg
                  className="w-7 cursor-pointer "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => dispatch(removeFavouriteJobs(id))}
                >
                  <path
                    className="fill-thm_root2_color"
                    d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => dispatch(addFavouriteJob(jobDetail))}
                >
                  <path
                    className=" hover:fill-thm_root2_color"
                    d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
