import React, { useState, useEffect } from "react";
import { JobCard } from "../components/JobCard";
import { NavLink } from "react-router-dom";
import { JobsData } from "../../data/jobs";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../app/jobsApi";
import SkeletonLoader from "../components/SkeletonLoader";
import { ErrorMessageComponent } from "../components/ErrorMessage";

export const JobsList = () => {
  // const { jobsList: jobsData } = useSelector((state) => state.jobs);
  const {
    data: jobsData,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetJobsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="w-full bg-thm_background text-center md:py-16 xl:py-20 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Recent Jobs</h1>
      <div className="flex gap-10 flex-wrap py-12 justify-center lg:justify-between">
        {isError ? (
          <ErrorMessageComponent
            text="Oh no, there was an error."
            msg={error}
          />
        ) : isLoading ? (
          <SkeletonLoader className="flex flex-row gap-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <JobCard
                key={i}
                title={JobsData.title}
                companyName={JobsData.companyName}
                jobType={JobsData.jobType}
                workMode={JobsData.workMode}
                description={JobsData.description}
                location={JobsData.location}
                jobTags={JobsData.jobTags}
                timeLeft={JobsData.timeLeft}
                img={JobsData.img}
                className="min-w-[50%]  bg-thm_background shadow-lg h-40 animate-pulse"
                isFavorite={JobsData.isFavorite}
                jobDetail={JobsData}
              />
            ))}
          </SkeletonLoader>
        ) : jobsData.data ? (
          jobsData.data.map(
            (job, index) =>
              index < 4 && (
                <JobCard
                  key={job._id}
                  id={job._id}
                  title={job.title}
                  companyName={job.companyName}
                  jobType={job.companyType}
                  workMode={job.workMode}
                  description={job.description}
                  location={job.location}
                  jobTags={job.jobTags}
                  timeLeft={job.timeLeft}
                  img={job.img}
                  showShareAndSaveBtn={true}
                  jobDetail={job}
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
                />
              )
          )
        ) : null}
      </div>
      <NavLink
        to="/jobs"
        className="text-[#2F6EFC] font-bold hover:bg-[#5dbeff] border-2  border-[#97d1f8] px-5 py-1 rounded-lg"
      >
        View all jobs
      </NavLink>
    </div>
  );
};
