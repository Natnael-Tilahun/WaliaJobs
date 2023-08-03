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
import languagesInfoSlice from "./languagesInfoSlice";
import interestsInfoSlice from "./interestsInfoSlice";
import referencesInfoSlice from "./referencesInfoSlice";

export default configureStore({
  reducer: {
    jobs: jobSlice,
    favouriteJobs: favouriteJobsSlice,
    personalInfo: personalInfoSlice,
    contactInfo: contactInfoSlice,
    skillsInfo: skillsInfoSlice,
    educationInfo: educationInfoSlice,
    summaryInfo: summaryInfoSlice,
    experienceInfo: experienceInfoSlice,
    achievementsInfo: achievementsInfoSlice,
    personalProjectsInfo: personalProjectsInfoSlice,
    languagesInfo: languagesInfoSlice,
    interestsInfo: interestsInfoSlice,
    referencesInfo: referencesInfoSlice,
  },
});
