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
import { BuildCV } from "./pages/BuildCV";
import { CVDetails } from "./pages/CVDetails";
import { RecommendedCV } from "./pages/BuildCV/RecommendedCV";
import { CVTemplates } from "./pages/BuildCV/CVTemplates";

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
          <Route path="/cv_details/:id" element={<CVDetails />} />
          <Route path="*" element={<ErrorPage />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
