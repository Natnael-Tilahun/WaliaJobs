import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "../src/components/Header";
import { JobCatagories } from "./components/JobCatagories";
import { Companies } from "./components/Companies";
import { JobsList } from "./components/JobsList";
import { BuildCvSection } from "./components/BuildCvSection";
import { SubscribeSection } from "./components/SubscribeSection";
import { Footer } from "./components/Footer";
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
