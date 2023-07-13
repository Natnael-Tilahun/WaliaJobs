import { useState } from "react";
import "./App.css";
import Hero from "./containers/HeroSection";
import Header from "../src/components/Header";
import { JobCatagories } from "./containers/JobCatagoriesSection";
import { Companies } from "./containers/CompaniesSection";
import { JobsList } from "./containers/JobsListSection";
import { BuildCvSection } from "./containers/BuildCvSection";
import { SubscribeSection } from "./containers/SubscribeSection";
import { Footer } from "./containers/FooterSection";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App w-full m-0 box-border bg-thm_secondary_background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
