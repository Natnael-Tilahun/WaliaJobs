import React from "react";
import { Sidebar } from "../components/Sidebar";
import { JobCard } from "../components/JobCard";
import { NavLink } from "react-router-dom";

function JobDetail(props) {
  return (
    <div className="flex flex-col text-thm_secondary_color items-start w-full border-b-2 py-2">
      <h1 className="font-medium text-black">{props.job.title}</h1>
      <p>{props.job.companyName}</p>
      <div className="flex justify-between w-full py-2 items-center">
        <p className="flex  items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="inline-block fill-thm_secondary_color"
          >
            <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
          </svg>
          {props.job.address}
        </p>
        <p className="text-sm text-gray-500">{props.job.timeLeft}</p>
      </div>
    </div>
  );
}

export const JobDetails = () => {
  const job1 = {
    title: "IT Officer",
    companyName: "CBE",
    jobType: "Full Time",
    jobStyle: "In Office",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda corporis!",
    address: "Addis Abeba",
    jobTags: ["Programming", "Computer Expert", "Maintenance"],
    timeLeft: "2 Days Ago",
  };
  const job2 = {
    title: "Programmer",
    companyName: "Abyssinia",
    jobType: "Full Time",
    jobStyle: "In Office",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda corporis!",
    address: "Addis Abeba",
    jobTags: ["Programming", "Computer Expert", "Maintenance"],
    timeLeft: "2 Days Ago",
  };
  const job3 = {
    title: "Frontend Developer",
    companyName: "Gebeya",
    jobType: "Full Time",
    jobStyle: "In Office",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda corporis!",
    address: "Remote",
    jobTags: ["Programming", "Computer Expert", "Maintenance"],
    timeLeft: "2 Days Ago",
  };

  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <div className="h-full basis-full lg:basis-[70%]  bg-white rounded-xl w-full flex flex-col md:px-2 lg:px-10 justify-center gap-5 lg:gap-8">
        job details
      </div>
      <div className="flex basis-full md:basis-[30%] xl:basis-[30%]   bg-thm_background items-start rounded-xl h-full flex-wrap md:flex-col text-thm_primary_color shadow-lg gap-2 lg:gap-6 p-2 md:p-5 lg:p-10 ">
        <h1 className="font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-0 w-full text-left">
          Jobs you might be interested in
        </h1>
        <JobDetail job={job1} />
        <JobDetail job={job2} />
        <JobDetail job={job3} />
        <NavLink
          to="/jobs"
          className="border-2 border-thm_root1_color px-4 rounded-lg self-center"
        >
          View All
        </NavLink>
      </div>
    </div>
  );
};
