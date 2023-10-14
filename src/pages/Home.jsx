import React from "react";
import Hero from "../containers/HeroSection";
import { JobCatagories } from "../containers/JobCatagoriesSection";
import { Companies } from "../containers/CompaniesSection";
import { JobsList } from "../containers/JobsListSection";
import { BuildCvSection } from "../containers/BuildCvSection";
import { SubscribeSection } from "../containers/SubscribeSection";

export const Home = () => {
  return (
    <div className="bg-thm_background  ">
      <Hero />
      <JobCatagories />
      <Companies />
      <JobsList />
      <BuildCvSection />
      <SubscribeSection />
    </div>
  );
};
