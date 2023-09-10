import React, { useEffect, useState, useMemo } from "react";
import { JobCard } from "../components/JobCard";
import { Sidebar } from "../components/Sidebar";
import { JobsData } from "../../data/jobs";
import { useSearchParams } from "react-router-dom";
import { NoResultFound } from "../components/NoResultFound";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import {
  addFavouriteJob,
  removeFavouriteJobs,
} from "../features/jobs/favouriteJobsSlice";

export const Jobs = () => {
  // const [jobs, setJobs] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { jobsList: jobs } = useSelector((state) => state.jobs);
  const queryParams = new URLSearchParams(window.location.search);
  const filters = useSelector((state) => state.jobFilter);

  // const selectedFilters = {
  //   experienceFilter: queryParams.getAll('experience'),
  //   workModeFilter: queryParams.getAll('workMode'),
  //   locationFilter: queryParams.getAll('location'),
  //   departmentFilter: queryParams.getAll('department'),
  //   companyTypeFilter: queryParams.getAll('companyType'),
  // };

  const displayedJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (filters.workMode.length && !filters.workMode.includes(job.workMode)) {
        return false;
      }
      if (filters.experience > 0 && filters.experience != job.experience) {
        return false;
      }
      if (filters.location.length && !filters.location.includes(job.location)) {
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
    });
  }, [jobs, filters]);

  // const displayedJobs = useMemo(() => {
  //   // Assuming the job data is available in an array called 'jobs'
  //   //   // 1. Initialize an empty array to store the filtered jobs
  //   let filteredJobs = [];
  //   if (
  //     jobs != undefined &&
  //     !selectedFilters.workModeFilter.length &&
  //     !selectedFilters.experienceFilter.length &&
  //     !selectedFilters.locationFilter.length &&
  //     !selectedFilters.departmentFilter.length &&
  //     !selectedFilters.companyTypeFilter.length
  //   ) {
  //     // No filters selected, return all jobs
  //     filteredJobs = jobs;
  //   } else {
  //     filteredJobs =
  //       jobs &&
  //       jobs.filter(
  //         (job) =>
  //           (selectedFilters.workModeFilter.length
  //             ? selectedFilters.workModeFilter.includes(job.workMode)
  //             : true) &&
  //           (selectedFilters.experienceFilter.length
  //             ? selectedFilters.experienceFilter == job.experience
  //             : true) &&
  //           (selectedFilters.locationFilter.length
  //             ? selectedFilters.locationFilter.includes(job.location)
  //             : true) &&
  //           (selectedFilters.departmentFilter.length
  //             ? selectedFilters.departmentFilter.includes(job.department)
  //             : true) &&
  //           (selectedFilters.companyTypeFilter.length
  //             ? selectedFilters.companyTypeFilter.includes(job.companyType)
  //             : true)
  //       );
  //   }
  //   return filteredJobs;
  // }, [jobs, selectedFilters]);

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background dark:bg-thm_dark_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-10 xl:px-20 gap-2 lg:gap-10">
      <Sidebar />
      <div className="h-full basis-full lg:basis-3/4 rounded-xl w-full flex flex-col md:px-2 lg:px-10 justify-center gap-5 lg:gap-8 py-5">
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

        {displayedJobs && displayedJobs.length > 0 ? (
          displayedJobs.map((job, index) => (
            <JobCard
              key={index}
              id={job.id}
              title={job.title}
              companyName={job.companyName}
              jobType={job.jobType}
              workMode={job.workMode}
              description={job.description}
              location={job.location}
              jobTags={job.jobTags}
              timeLeft={job.timeLeft}
              img={job.img}
              className="min-w-[100%] bg-thm_background shadow-lg"
              searchParams={searchParams.toString()}
              showShareAndSaveBtn={true}
              isFavorite={job.isFavorite}
              jobDetail={job}
            />
          ))
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};
