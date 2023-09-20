import React, { useState, useEffect } from 'react';
import { JobCard } from '../components/JobCard';
import { NavLink } from 'react-router-dom';
import { JobsData } from '../../data/jobs';
import { useSelector } from 'react-redux';
import SkeletonLoader from '../components/SkeletonLoader';
import { ErrorMessageComponent } from '../components/ErrorMessage';
import { useGetJobsQuery } from '../app/JobsApi.js';
import { JobSkeleton } from '../components/JobSkeleton';

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
          <SkeletonLoader className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-8 lg:gap-16">
            {Array.from({ length: 4 }).map((_, i) => (
              <JobSkeleton />
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
