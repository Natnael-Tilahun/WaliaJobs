import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Jobs } from "./pages/Jobs";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";

import { Signup } from "./pages/Signup";
import { ErrorPage } from "./pages/ErrorPage";
import { Company } from "./pages/Company";
import { JobDetails } from "./pages/JobDetails";
import { RecommendedCV } from "./pages/BuildCV/RecommendedCV";
import { CVTemplates } from "./pages/BuildCV/CVTemplates";
import { ContactSection } from "./pages/CVDetails/ContactSection";
import { BuildCV } from "./pages/BuildCV";
import { ExperienceSection } from "./pages/CVDetails/ExperienceSection";
import { ExperienceDetailSection } from "./pages/CVDetails/ExperienceDetailSection";
import { CVDetails } from "./pages/CVDetails";
import { ExperienceReviewSection } from "./pages/CVDetails/ExperienceReviewSection";
import { EducationSection } from "./pages/CVDetails/EducationSection";
import { SkillSection } from "./pages/CVDetails/SkillSection";
import { SummarySection } from "./pages/CVDetails/SummarySection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job_details" element={<JobDetails />} />
          <Route path="buildcv" element={<BuildCV />}>
            <Route index element={<RecommendedCV />} />
            <Route path="alltemplates" element={<CVTemplates />} />
          </Route>
          <Route path="CV-Details/:id" element={<CVDetails />}>
            <Route index element={<ContactSection />} />
            <Route path="Experience-Section" element={<ExperienceSection />} />
            <Route
              path="Experience-Detail"
              element={<ExperienceDetailSection />}
            />
            <Route path="Experience-Review" element={<EducationSection />} />
            <Route
              path="Education-Section"
              element={<ExperienceReviewSection />}
            />
            <Route path="Skills-Section" element={<SkillSection />} />
            <Route path="Summary-Section" element={<SummarySection />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
