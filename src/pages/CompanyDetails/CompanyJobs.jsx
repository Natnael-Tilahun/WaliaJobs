import React from "react";
import { useSelector } from "react-redux";
import { JobCard } from "../../components/JobCard";
import { useParams } from "react-router-dom";
import { useGetJobsQuery } from "../../app/JobsApi";
import { useGetCompaniesQuery } from "../../app/CompaniesApi";

export const CompanyJobs = () => {
  // const { jobsList } = useSelector((state) => state.jobs);
  const { data: jobsList = [], isLoading: isJobsLoading } = useGetJobsQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const {
    data: companies = [],
    isLoading: isCompaniesLoading,
    isError,
    error,
    isFetching,
    isSuccess,
  } = useGetCompaniesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const { id } = useParams();
  console.log("searchParams", id);
  if (isJobsLoading && isCompaniesLoading) {
    return <div className="w-full h-full bg-green-500">loading</div>;
  }
  if (!isJobsLoading && !isCompaniesLoading) {
    console.log("companies", companies.data[0], "jobss", jobsList.data[0]);
    const companyJobs = jobsList.data.filter((job) =>
      companies.data[0].jobs.includes(job._id)
    );
    console.log("company jobss", companyJobs);
    return (
      <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
        {companyJobs.length > 0 ? (
          <div className="flex gap-10 flex-wrap py-12 justify-center lg:justify-between">
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
                companyLogo,
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
                  img={companies.data[0].companyLogo}
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
                />
              )
            )}
          </div>
        ) : (
          <div className="text-center text-lg w-full">No available jobs.</div>
        )}
      </div>
    );
  }
};
