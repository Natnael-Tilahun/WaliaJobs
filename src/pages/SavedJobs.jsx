import React from "react";
// import { JobsData } from "../../data/jobs";
import { JobCard } from "../components/JobCard";
import { useSelector } from "react-redux";

export const SavedJobs = () => {
  const { favouriteJobs:FavoriteJobs } = useSelector((state) => state.favouriteJobs);
  // const FavoriteJobs = JobsData.favouriteJobs
  // const FavoriteJobs = JobsData.filter((job) => job.isFavorite);a
  console.log("favourite jobssss", FavoriteJobs)
  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex bg-thm_background md:py-10  py-5 flex-col  my-0  md:my-0 md:px-3 lg:px-20   border-b-2 gap-3 md:gap-2 px-5   w-full">
        <h1 className="text-xl md:text-3xl text-center uppercase font-bold">
          Your Saved Jobs
        </h1>
        <p className="text-sm text-thm_secondary_color md:text-lg text-center">
          Apply if don't apply to them yet.
        </p>
      </div>
      {FavoriteJobs.length> 0 ? <div className="flex flex-wrap flex-col lg:flex-row lg:justify-between gap-10 md:py-10  py-5  md:px-5 lg:px-10 xl:px-20 px-5">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col gap-6 md:gap-10 lg:gap-10 xl:gap-14 md:flex-row py-5"> */}
        { FavoriteJobs.map((job) => (
          <JobCard
            key={job.id}
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
            className="min-w-[95%] lg:min-w-[45%] self-center  bg-thm_background shadow-lg"
            showShareAndSaveBtn={true}
            isFavorite={true}
            jobDetail={job}
          />
        ))}
        {/* </div> */}
      </div> :  <div className="text-center h-40 text-lg">No favorite jobs</div>}
    </div>
  );
};
