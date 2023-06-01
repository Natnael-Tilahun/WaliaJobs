import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "../src/components/Header";
import { JobCatagories } from "./components/JobCatagories";
import { Companies } from "./components/Companies";
import { JobsList } from "./components/JobsList";
import { BuildCvSection } from "./components/BuildCvSection";
import { SubscribeSection } from "./components/SubscribeSection";

function App() {
  return (
    <div className="App w-full m-0">
      <Header />
      <Hero />
      <JobCatagories />
      <Companies />
      <JobsList />
      <BuildCvSection />
      <SubscribeSection />
    </div>
  );
}

export default App;
