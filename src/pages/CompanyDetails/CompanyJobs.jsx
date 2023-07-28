import React from "react";
import { useSelector } from "react-redux";
import { JobCard } from "../../components/JobCard";
import { useParams } from "react-router-dom";

export const CompanyJobs = () => {
  const { jobsList } = useSelector((state) => state.jobs);
  const { id } = useParams();
  // console.log("searchParams", id);
  const companyJobs = jobsList.filter((job) => job.id == id);
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
     {companyJobs.length> 0? <div className="flex gap-10 flex-wrap py-12 justify-center lg:justify-between">
        {companyJobs.map(
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
      </div>    :
      <div className="text-center text-lg w-full">
          No available jobs.</div>
      }
    </div>
  );
};