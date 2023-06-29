import React, { useEffect, useState } from "react";
import { JobCard } from "../components/JobCard";
import { Sidebar } from "../components/Sidebar";
import { JobsData } from "../../data/jobs";
import { useSearchParams } from "react-router-dom";

export const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setJobs(JobsData);
    console.log("filters", searchParams.toString());
  }, []);
  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <Sidebar />
      <div className="h-full basis-full lg:basis-3/4 rounded-xl w-full flex flex-col md:px-2 lg:px-10 justify-center gap-5 lg:gap-8">
        {jobs &&
          jobs.map((job) => (
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
          ))}
      </div>
    </div>
  );
};
