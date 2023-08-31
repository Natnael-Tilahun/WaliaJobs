import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import favouriteJobsSlice from "./favouriteJobsSlice";
import personalInfoSlice from "./personalInfoSlice";
import contactInfoSlice from "./contactInfoSlice";
import skillsInfoSlice from "./skillsInfoSlice";
import educationInfoSlice from "./educationInfoSlice";
import summaryInfoSlice from "./summaryInfoSlice";
import experienceInfoSlice from "./experienceInfoSlice";
import achievementsInfoSlice from "./achievementsInfoSlice";
import personalProjectsInfoSlice from "./personalProjectsInfoSlice";
import interestsInfoSlice from "./interestsInfoSlice";
import certificationInfoSlice from "./certificationInfoSlice";
import languageInfoSlice from "./languageInfoSlice";
import referenceInfoSlice from "./referenceInfoSlice";
import cvCompletionInfoSlice from "./cvCompletionInfoSlice";
import contactFormSlice from "./contactFormSlice";
import signupFormSlice from "./signupFormSlice";
import loginFormSlice from "./loginFormSlice";
import jobFilterSlice from "./jobFilterSlice";
import cvThemeSlice from "./cvThemeSlice";

export default configureStore({
  reducer: {
    jobs: jobSlice,
    jobFilter: jobFilterSlice,
    favouriteJobs: favouriteJobsSlice,
    personalInfo: personalInfoSlice,
    contactInfo: contactInfoSlice,
    skillsInfo: skillsInfoSlice,
    educationInfo: educationInfoSlice,
    certificationInfo: certificationInfoSlice,
    summaryInfo: summaryInfoSlice,
    experienceInfo: experienceInfoSlice,
    achievementsInfo: achievementsInfoSlice,
    personalProjectsInfo: personalProjectsInfoSlice,
    languageInfo: languageInfoSlice,
    interestsInfo: interestsInfoSlice,
    referenceInfo: referenceInfoSlice,
    cvCompletionInfo: cvCompletionInfoSlice,
    contactForm: contactFormSlice,
    signupForm: signupFormSlice,
    loginForm: loginFormSlice,
    cvTheme: cvThemeSlice
  },
});
