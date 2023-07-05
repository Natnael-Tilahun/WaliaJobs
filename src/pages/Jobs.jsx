import React, { useEffect, useState, useMemo } from "react";
import { JobCard } from "../components/JobCard";
import { Sidebar } from "../components/Sidebar";
import { JobsData } from "../../data/jobs";
import { useSearchParams } from "react-router-dom";
import { NoResultFound } from "../components/NoResultFound";

export const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [selectedFilters, setSelectedFilters] = useState();

  const queryParams = new URLSearchParams(window.location.search);
  const selectedFilters = {
    experienceFilter: queryParams.getAll("experience"),
    workModeFilter: queryParams.getAll("workMode"),
    locationFilter: queryParams.getAll("location"),
    departmentFilter: queryParams.getAll("department"),
    companyTypeFilter: queryParams.getAll("companyType"),
  };

  // const workModeFilter = queryParams.getAll("workMode");
  // const experienceFilter = queryParams.getAll("experience");
  // const locationFilter = queryParams.getAll("location");
  // const departmentFilter = queryParams.getAll("department");
  // const companyTypeFilter = queryParams.getAll("companyType");

  // console.log("locationlocationlocation", location);

  useEffect(() => {
    setJobs(JobsData);
  }, []);

  const displayedJobs = useMemo(() => {
    if (
      (!selectedFilters.workModeFilter.length &&
        !selectedFilters.experienceFilter.length &&
        !selectedFilters.locationFilter.length) ||
      !jobs
    ) {
      return jobs; // No filter applied, return all jobs
    } else if (!selectedFilters.experienceFilter.length) {
      return jobs.filter((job) =>
        selectedFilters.workModeFilter.includes(job.workMode)
      );
    } else if (!selectedFilters.workModeFilter.length) {
      return jobs.filter(
        (job) => selectedFilters.experienceFilter == job.experience
      );
    } else {
      return jobs.filter(
        (job) =>
          selectedFilters.workModeFilter.includes(job.workMode) &&
          selectedFilters.experienceFilter == job.experience
      );
    }
  }, [jobs, selectedFilters]);

  // const displayedJobs = useMemo(() => {
  //   // Assuming the job data is available in an array called 'jobs'

  //   // 1. Initialize an empty array to store the filtered jobs
  //   let filteredJobs = [];

  //   // 2. Check the selected filters and filter the jobs accordingly
  //   if (
  //     selectedFilters.workModeFilter.length &&
  //     selectedFilters.experienceFilter.length &&
  //     selectedFilters.locationFilter.length &&
  //     selectedFilters.departmentFilter.length &&
  //     selectedFilters.companyTypeFilter.length
  //   ) {
  //     alert("All are selecteddd");
  //     // All filters are selected, filter by all criteria
  //     filteredJobs = jobs.filter(
  //       (job) =>
  //         selectedFilters.workModeFilter.includes(job.workMode) &&
  //         selectedFilters.experienceFilter.includes(job.experience) &&
  //         selectedFilters.locationFilter.includes(job.location) &&
  //         selectedFilters.departmentFilter.includes(job.department) &&
  //         selectedFilters.companyTypeFilter.includes(job.companyType)
  //     );
  //   } else if (selectedFilters.workModeFilter.length) {
  //     // alert("work mde selected");
  //     // Only work mode filter is selected, filter by work mode
  //     filteredJobs = jobs.filter((job) =>
  //       selectedFilters.workModeFilter.includes(job.workMode)
  //     );
  //     console.log("selected jobssss", filteredJobs);
  //   } else if (selectedFilters.experienceFilter.length) {
  //     alert("exp mde selected");

  //     // Only experience filter is selected, filter by experience
  //     filteredJobs = jobs.filter(
  //       (job) => selectedFilters.experienceFilter == job.experience
  //     );
  //   } else if (selectedFilters.locationFilter.length) {
  //     // Only location filter is selected, filter by location
  //     filteredJobs = jobs.filter((job) =>
  //       selectedFilters.locationFilter.includes(job.location)
  //     );
  //   } else if (selectedFilters.departmentFilter.length) {
  //     // Only department filter is selected, filter by department
  //     filteredJobs = jobs.filter((job) =>
  //       selectedFilters.departmentFilter.includes(job.department)
  //     );
  //   } else if (selectedFilters.companyTypeFilter.length) {
  //     // Only company type filter is selected, filter by company type
  //     filteredJobs = jobs.filter((job) =>
  //       selectedFilters.companyTypeFilter.includes(job.companyType)
  //     );
  //   } else {
  //     // No filters selected, return all jobs
  //     filteredJobs = jobs;
  //   }
  //   console.log("jobssssssssssssss", filteredJobs);
  //   return filteredJobs;

  //   // 3. Use the 'filteredJobs' array to display the filtered job list
  // }, [jobs, selectedFilters]);

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background dark:bg-thm_dark_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-10 xl:px-20 gap-2 lg:gap-10">
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
              searchParams={searchParams.toString()}
            />
          ))
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};
