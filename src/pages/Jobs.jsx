import React from "react";
import { JobCard } from "../components/JobCard";
import { Sidebar } from "../components/Sidebar";

export const Jobs = () => {
  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <Sidebar />
      <div className="h-full basis-full lg:basis-3/4 rounded-xl w-full flex flex-col md:px-2 lg:px-10 justify-center gap-5 lg:gap-8">
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
          img="/cbelogo.jpg"
          className="min-w-[100%] bg-thm_background shadow-lg"
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
          timeLeft="2 Days Ago"
          img="/boalogo.jpg"
          className="min-w-[100%] bg-thm_background shadow-lg"
        />
      </div>
    </div>
  );
};
