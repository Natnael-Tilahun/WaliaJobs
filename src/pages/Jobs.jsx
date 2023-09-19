import React, { useEffect, useState, useMemo } from "react";
import { JobCard } from "../components/JobCard";
import { Sidebar } from "../components/Sidebar";
import { JobsData } from "../../data/jobs";
import { ErrorMessageComponent } from "../components/ErrorMessage";
import { useSearchParams } from "react-router-dom";
import { NoResultFound } from "../components/NoResultFound";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import {
  addFavouriteJob,
  removeFavouriteJobs,
} from "../features/jobs/favouriteJobsSlice";
import SkeletonLoader from "../components/SkeletonLoader";
import { useGetJobsQuery, useSearchJobsQuery } from "../app/JobsApi.js";
import { JobSkeleton } from "../components/JobSkeleton";

export const Jobs = () => {
  // const [jobs, setJobs] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  const filters = useSelector((state) => state.jobFilter);
  var jobs;
  var isLoading;
  var isError;
  var error;
  var isFetching;

  if (filters.searchValue) {
    const {
      data,
      isLoading: searchIsLoading,
      isError: searchIsError,
      error: searchError,
      isFetching: searchIsFetching,
    } = useSearchJobsQuery(filters.searchValue, {
      refetchOnMountOrArgChange: true,
    });

    jobs = data;
    isLoading = searchIsLoading;
    isError = searchIsError;
    error = searchError;
    isFetching = searchIsFetching;
  } else {
    const {
      data,
      isLoading: getIsLoading,
      isError: getIsError,
      error: getError,
      isFetching: getIsFetching,
    } = useGetJobsQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

    jobs = data;
    isLoading = getIsLoading;
    isError = getIsError;
    error = getError;
    isFetching = getIsFetching;
  }

  const displayedJobs = () => {
    if (!isLoading) {
      return jobs.data
        ? jobs.data.filter((job) => {
            if (
              filters.workMode.length &&
              !filters.workMode.includes(job.workMode)
            ) {
              return false;
            }
            if (
              filters.experience > 0 &&
              filters.experience != job.experience
            ) {
              return false;
            }
            if (
              filters.location.length &&
              !filters.location.includes(job.location)
            ) {
              return false;
            }
            if (
              filters.department.length &&
              !filters.department.includes(job.department)
            ) {
              return false;
            }
            if (
              filters.companyType.length &&
              !filters.companyType.includes(job.companyType)
            ) {
              return false;
            }
            return true;
          })
        : null;
    }
  };

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background dark:bg-thm_dark_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-10 xl:px-20 gap-2 lg:gap-10">
      <Sidebar />
      <div className="h-full basis-full lg:basis-3/4 rounded-xl w-full flex flex-col md:px-2 lg:px-10 justify-center gap-5 lg:gap-8 py-5 md:py-0">
        <div className="flex items-center w-60 px-2 py-1 text-thm_secondary_color text-sm rounded-lg  self-end">
          <label htmlFor="sort" className="w-full">
            Sort by:
          </label>
          <select
            name="sort"
            id="sort"
            className="px-2 py-1 bg-transparent rounded-lg w-full border-2 focus:border-thm_root1_color focus:outline-none"
          >
            <option className="bg-white" value="date">
              Date
            </option>
          </select>
        </div>

        {isLoading ? (
          <SkeletonLoader className="flex flex-col gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <JobSkeleton />
            ))}
          </SkeletonLoader>
        ) : isError && error.status == 500 ? (
          <NoResultFound />
        ) : (
          displayedJobs &&
          !isError &&
          (displayedJobs().length > 0 ? (
            displayedJobs().map((job, index) => (
              <JobCard
                key={index}
                id={job._id}
                title={job.title}
                companyName={job.companyName}
                jobType={job.jobType}
                workMode={job.workMode}
                description={job.description}
                location={job.location}
                jobTags={job.jobTags}
                closingDate={job.closingDate}
                img={job.img}
                className="min-w-[100%] bg-thm_background shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
                searchParams={searchParams.toString()}
                showShareAndSaveBtn={true}
                isFavorite={job.isFavorite}
                jobDetail={job}
              />
            ))
          ) : (
            <NoResultFound />
          ))
        )}
      </div>
    </div>
  );
};
