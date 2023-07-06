import React from "react";
import { JobCard } from "./JobCard";
import { NavLink } from "react-router-dom";

export const JobsList = () => {
  return (
    <div className="w-full bg-thm_background text-center md:py-20 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Recent Jobs</h1>
      <div className="flex gap-10 flex-wrap py-16 justify-center lg:justify-between">
        <JobCard
          title="IT Officer"
          companyName="CBE"
          jobType="Full Time"
          workMode="In Office"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          location="Addis Abeba"
          jobTags={["Programming", "Computer Expert", "Maintenance"]}
          timeLeft="2 Days Ago"
          img="/cbelogo.jpg"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
        />
        <JobCard
          title="Programmer"
          companyName="Abyssinia"
          jobType="Full Time"
          workMode="In Office"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          location="Addis Abeba"
          jobTags={["Programming", "Computer Expert", "Maintenance"]}
          timeLeft="1 Days Ago"
          img="/boalogo.jpg"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
        />
        <JobCard
          title="FullStack Developer"
          companyName="Gebeya"
          jobType="Full Time"
          workMode="Remote"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          location="Addis Abeba"
          jobTags={["Programming", "Node.js", "React.js"]}
          timeLeft="1 Days Ago"
          img="/gebeyalogo.png"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
        />
        <JobCard
          title="Frontend Developer"
          companyName="Gebeya"
          jobType="Hybrid"
          workMode="Remote"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          location="Addis Abeba"
          jobTags={["Programming", "HTML", "React.js"]}
          timeLeft="1 Days Ago"
          img="/gebeyalogo.png"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 "
        />
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
