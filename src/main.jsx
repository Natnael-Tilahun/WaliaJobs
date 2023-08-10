import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';

import { Signup } from './pages/Signup';
import { ErrorPage } from './pages/ErrorPage';
import { Company } from './pages/Company';
import { JobDetails } from './pages/JobDetails';
import { RecommendedCV } from './pages/BuildCV/RecommendedCV';
import { CVTemplates } from './pages/BuildCV/CVTemplates';
import { ContactSection } from './pages/CVDetails/ContactSection';
import { BuildCV } from './pages/BuildCV';
import { ExperienceSection } from './pages/CVDetails/ExperienceSection';
import { ExperienceDetailSection } from './pages/CVDetails/ExperienceDetailSection';
import { CVDetails } from './pages/CVDetails';
import { ExperienceReviewSection } from './pages/CVDetails/ExperienceReviewSection';
import { EducationSection } from './pages/CVDetails/EducationSection';
import { SkillSection } from './pages/CVDetails/SkillSection';
import { SummarySection } from './pages/CVDetails/SummarySection';
import { AddAdditionalSection } from './pages/CVDetails/AddAdditionalSection';
import { Blogs } from './pages/Blogs';
import { Tips } from './pages/Blogs/Tips';
import { Interviews } from './pages/Blogs/Interviews';
import { BlogDetails } from './pages/BlogDetails';
import { SavedJobs } from './pages/SavedJobs';
import { CompanyDetails } from './pages/CompanyDetails';
import { AboutCompany } from './pages/CompanyDetails/AboutCompany';
import { CompanyJobs } from './pages/CompanyDetails/CompanyJobs';
import { Reviews } from './pages/CompanyDetails/Reviews';
import { Benefits } from './pages/CompanyDetails/Benefits';
import { WriteReview } from './pages/WriteReview';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CertificationSection } from './pages/CVDetails/CertificationSection';
import { LanguageSection } from './pages/CVDetails/LanguageSection';
import { ReferenceSection } from './pages/CVDetails/ReferenceSection';
import { AchievementsSection } from './pages/CVDetails/AchievementsSection';
import { InterestsSection } from './pages/CVDetails/InterestsSection';
import { EducationReviewSection } from './pages/CVDetails/EducationReviewSection';
import { CertificationsReviewSection } from './pages/CVDetails/CertificationsReviewSection';
import { LanguagesReviewSection } from './pages/CVDetails/LanguagesReviewSection';
import { ReferencesReviewSection } from './pages/CVDetails/ReferencesReviewSection';
import { ReviewCV } from './pages/ReviewCV';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/company" element={<Company />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />}>
              <Route index element={<Tips />} />
              <Route path="interviews" element={<Interviews />} />
            </Route>
            <Route path="/company-details/:id" element={<CompanyDetails />}>
              <Route index element={<AboutCompany />} />
              <Route path="jobs" element={<CompanyJobs />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="benefits" element={<Benefits />} />
            </Route>
            <Route path="/write-review" element={<WriteReview />} />
            <Route path="blog-details/:id" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/job_details/:id" element={<JobDetails />} />
            <Route path="buildcv" element={<BuildCV />}>
              <Route index element={<RecommendedCV />} />
              <Route path="alltemplates" element={<CVTemplates />} />
            </Route>
            <Route path="CV-Details/:id" element={<CVDetails />}>
              <Route index element={<ContactSection />} />
              <Route
                path="Experience-Section/:id"
                element={<ExperienceSection />}
              />
              <Route
                path="Experience-Detail/:id"
                element={<ExperienceDetailSection />}
              />
              <Route
                path="Experience-Review"
                element={<ExperienceReviewSection />}
              />
              <Route
                path="Education-Section/:id"
                element={<EducationSection />}
              />
              <Route
                path="Education-Review"
                element={<EducationReviewSection />}
              />
              <Route
                path="Certification-Section/:id"
                element={<CertificationSection />}
              />
              <Route
                path="Certification-Review"
                element={<CertificationsReviewSection />}
              />
              <Route path="Skills-Section" element={<SkillSection />} />
              <Route
                path="Reference-Section/:id"
                element={<ReferenceSection />}
              />
              <Route
                path="Reference-Review"
                element={<ReferencesReviewSection />}
              />
              <Route
                path="Achievements-Section"
                element={<AchievementsSection />}
              />
              <Route path="Interests-Section" element={<InterestsSection />} />
              <Route path="Summary-Section" element={<SummarySection />} />
              <Route
                path="Language-Section/:id"
                element={<LanguageSection />}
              />
              <Route
                path="Language-Review"
                element={<LanguagesReviewSection />}
              />
              <Route
                path="Additional-Section"
                element={<AddAdditionalSection />}
              />
            </Route>
            <Route path="/review-cv/:id" element={<ReviewCV />} />
            <Route path="/savedJobs" element={<SavedJobs />} />
            <Route path="*" element={<ErrorPage />} />;
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
