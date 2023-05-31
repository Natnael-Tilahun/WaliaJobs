import React from "react";
import { JobCard } from "./JobCard";

export const JobsList = () => {
  return (
    <div className="w-full text-center md:py-20 py-5 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-3xl">Recent Jobs</h1>
      <div className="flex gap-10 flex-wrap py-16 justify-center lg:justify-between">
        <JobCard
          title="IT Officer"
          companyName="CBE"
          jobType="Full Time"
          jobStyle="In Office"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          address="Addis Abeba"
          jobTags={["Programming", "Computer Expert", "Maintenance"]}
          timeLeft="2 Days Ago"
          img="src/assets/images/cbelogo.jpg"
        />
        <JobCard
          title="Programmer"
          companyName="Abyssinia"
          jobType="Full Time"
          jobStyle="In Office"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          address="Addis Abeba"
          jobTags={["Programming", "Computer Expert", "Maintenance"]}
          timeLeft="1 Days Ago"
          img="src/assets/images/boalogo.jpg"
        />
        <JobCard
          title="FullStack Developer"
          companyName="Gebeya"
          jobType="Full Time"
          jobStyle="Remote"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          address="Addis Abeba"
          jobTags={["Programming", "Node.js", "React.js"]}
          timeLeft="1 Days Ago"
          img="src/assets/images/gebeyalogo.png"
        />
        <JobCard
          title="Frontend Developer"
          companyName="Gebeya"
          jobType="Part Time"
          jobStyle="Remote"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          address="Addis Abeba"
          jobTags={["Programming", "HTML", "React.js"]}
          timeLeft="1 Days Ago"
          img="src/assets/images/gebeyalogo.png"
        />
      </div>
      <button className="text-[#2F6EFC] font-bold hover:bg-[#5dbeff] bg-[#97d1f8] px-5 py-1 rounded-lg">
        View all jobs
      </button>
    </div>
  );
};
