import React, { useState, useEffect } from "react";
import { JobCard } from "../components/JobCard";
import { NavLink } from "react-router-dom";
import { JobsData } from "../../data/jobs";

export const JobsList = () => {
  const [jobsData, setJobsData] = useState([]);
  useEffect(() => {
    setJobsData(JobsData);
  }, []);

  return (
    <div className="w-full bg-thm_background text-center md:py-20 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Recent Jobs</h1>
      <div className="flex gap-10 flex-wrap py-16 justify-center lg:justify-between">
        {jobsData.map(
          ({
            id,
            title,
            companyName,
            companyType,
            jobType,
            description,
            workMode,
            department,
            experience,
            location,
            timeLeft,
            img,
            isFavorite,
            jobTags,
          }) => (
            <JobCard
              key={id}
              id={id}
              title={title}
              companyName={companyName}
              jobType={companyType}
              workMode={workMode}
              description={description}
              location={location}
              jobTags={jobTags}
              timeLeft={timeLeft}
              img={img}
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
            />
          )
        )}
      </div>
      <NavLink
        to="/jobs"
        className="text-[#2F6EFC] font-bold hover:bg-[#5dbeff] bg-[#97d1f8] px-5 py-1 rounded-lg"
      >
        View all jobs
      </NavLink>
    </div>
  );
};
