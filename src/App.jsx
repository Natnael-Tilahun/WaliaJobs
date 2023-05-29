import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "../src/components/Header";
import { Jobs } from "./components/Jobs";
import { Companies } from "./components/Companies";

function App() {
  return (
    <div className="App w-full m-0">
      <Header />
      <Hero />
      <Jobs />
      <Companies />
    </div>
  );
}

export default App;
