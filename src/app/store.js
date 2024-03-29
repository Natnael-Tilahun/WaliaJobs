import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../features/jobs/jobSlice";
import favouriteJobsSlice from "../features/jobs/favouriteJobsSlice";
import personalInfoSlice from "../features/cv/personalInfoSlice";
import contactInfoSlice from "../features/cv/contactInfoSlice";
import skillsInfoSlice from "../features/cv/skillsInfoSlice";
import educationInfoSlice from "../features/cv/educationInfoSlice";
import summaryInfoSlice from "../features/cv/summaryInfoSlice";
import experienceInfoSlice from "../features/cv/experienceInfoSlice";
import achievementsInfoSlice from "../features/cv/achievementsInfoSlice";
import personalProjectsInfoSlice from "../features/cv/personalProjectsInfoSlice";
import interestsInfoSlice from "../features/cv/interestsInfoSlice";
import certificationInfoSlice from "../features/cv/certificationInfoSlice";
import languageInfoSlice from "../features/cv/languageInfoSlice";
import referenceInfoSlice from "../features/cv/referenceInfoSlice";
import cvCompletionInfoSlice from "../features/cv/cvCompletionInfoSlice";
import contactFormSlice from "../features/contact/contactFormSlice";
import signupFormSlice from "../features/users/signupFormSlice";
import loginFormSlice from "../features/users/authSlice";
import jobFilterSlice from "../features/jobs/jobFilterSlice";
import cvThemeSlice from "../features/cv/cvThemeSlice";
import { JobsApi } from "./JobsApi.js";
import { CompaniesApi } from "./CompaniesApi";
import { BlogsApi } from "./BlogsApi";
import { ReviewsApi } from "./ReviewsApi";
import { AuthApi } from "./AuthApi";
import { CvApi } from "./CvApi";
import authSlice from "../features/users/authSlice";
import { ProfileApi } from "./ProfileApi";

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
    auth: authSlice,
    cvTheme: cvThemeSlice,
    [JobsApi.reducerPath]: JobsApi.reducer,
    [CompaniesApi.reducerPath]: CompaniesApi.reducer,
    [BlogsApi.reducerPath]: BlogsApi.reducer,
    [ReviewsApi.reducerPath]: ReviewsApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [CvApi.reducerPath]: CvApi.reducer,
    [ProfileApi.reducerPath]:ProfileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      JobsApi.middleware,
      CompaniesApi.middleware,
      BlogsApi.middleware,
      ReviewsApi.middleware,
      AuthApi.middleware,
      CvApi.middleware,
      ProfileApi.middleware
    ),
});
