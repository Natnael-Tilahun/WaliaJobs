import React from "react";

import Hero from "../components/Hero";
import { JobCatagories } from "../components/JobCatagories";
import { Companies } from "../components/Companies";
import { JobsList } from "../components/JobsList";
import { BuildCvSection } from "../components/BuildCvSection";
import { SubscribeSection } from "../components/SubscribeSection";

export const Home = () => {
  return (
    <>
      <Hero />
      <JobCatagories />
      <Companies />
      <JobsList />
      <BuildCvSection />
      <SubscribeSection />
    </>
  );
};
