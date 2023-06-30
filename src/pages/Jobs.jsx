import React, { useEffect, useState, useMemo } from "react";
import { JobCard } from "../components/JobCard";
import { Sidebar } from "../components/Sidebar";
import { JobsData } from "../../data/jobs";
import { useSearchParams } from "react-router-dom";
import { NoResultFound } from "../components/NoResultFound";

export const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const typeFilter = searchParams.getAll("workMode");

  useEffect(() => {
    setJobs(JobsData);
  }, []);

  const displayedJobs = useMemo(() => {
    if (!typeFilter.length || !jobs) {
      return jobs; // No filter applied, return all jobs
    } else {
      return jobs.filter((job) => typeFilter.includes(job.workMode));
    }
  }, [jobs, typeFilter]);

  // console.log(displayedJobs);

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <Sidebar />
      <div className="h-full basis-full lg:basis-3/4 rounded-xl w-full flex flex-col md:px-2 lg:px-10 justify-center gap-5 lg:gap-8">
        {displayedJobs && displayedJobs.length > 0 ? (
          displayedJobs.map((job) => (
            <JobCard
              key={job.id}
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
            />
          ))
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};
