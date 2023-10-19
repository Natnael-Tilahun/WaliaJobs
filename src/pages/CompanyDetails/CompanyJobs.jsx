import React from "react";
import { useSelector } from "react-redux";
import { JobCard } from "../../components/JobCard";
import { useParams } from "react-router-dom";
import { useGetJobsQuery } from "../../app/JobsApi";
import { useGetCompaniesQuery } from "../../app/CompaniesApi";
import { NoResultFound } from "../../components/NoResultFound";
import Loader from "../../components/Loader";
import SkeletonLoader from "../../components/SkeletonLoader";
import { JobSkeleton } from "../../components/JobSkeleton";

export const CompanyJobs = () => {
  // const { jobsList } = useSelector((state) => state.jobs);
  let companyJobs;
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
  } = useGetCompaniesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const { id } = useParams();
  if (!isJobsLoading && !isCompaniesLoading) {
    const company = companies.data.filter((company) => company._id == id);
    console.log(
      "companies",
      company,
      "jobss",
      jobsList.data,
      "companyJobss",
      company[0].jobs
    );
    companyJobs = jobsList.data.filter((job) =>
      company[0].jobs?.includes(job._id)
    );
  }
  return (
    <div className="flex gap-10 md:py-10  py-5  md:px-5 lg:px-10 px-5">
      {isJobsLoading || isCompaniesLoading ? (
        <SkeletonLoader className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-full justify-between">
          {Array.from({ length: 4 }).map((_, i) => (
            <JobSkeleton
              className={`hidden ${
                i == 0
                  ? "flex flex-col"
                  : i == 0 || i == 1
                  ? "md:flex flex-col"
                  : i == 2
                  ? "lg:flex flex-col"
                  : i == 3
                  ? "xl:flex flex-col"
                  : "hidden"
              }`}
            />
          ))}
        </SkeletonLoader>
      ) : isError && error.status == 500 ? (
        <NoResultFound title="Error" message={error} />
      ) : companyJobs.length > 0 ? (
        <div className="flex gap-10 flex-wrap py-12 ">
          {companyJobs.map(
            ({
              _id,
              title,
              companyName,
              companyType,
              description,
              workMode,
              location,
              timeLeft,
              isFavorite,
              jobTags,
            }) => (
              <JobCard
                key={_id}
                id={_id}
                title={title}
                companyName={companyName}
                jobType={companyType}
                workMode={workMode}
                description={description}
                location={location}
                jobTags={jobTags}
                timeLeft={timeLeft}
                showShareAndSaveBtn={true}
                img={companies.data[0].companyLogo}
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
              />
            )
          )}
        </div>
      ) : (
        <div className="text-center text-lg w-full">
          <NoResultFound title="No available jobs." />
        </div>
      )}
    </div>
  );
};
// };
