import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './jobSlice';
import favouriteJobsSlice from './favouriteJobsSlice';
import personalInfoSlice from './personalInfoSlice';
import contactInfoSlice from './contactInfoSlice';
import skillsInfoSlice from './skillsInfoSlice';
import educationInfoSlice from './educationInfoSlice';
import summaryInfoSlice from './summaryInfoSlice';
import experienceInfoSlice from './experienceInfoSlice';
import achievementsInfoSlice from './achievementsInfoSlice';
import personalProjectsInfoSlice from './personalProjectsInfoSlice';
import interestsInfoSlice from './interestsInfoSlice';
import referencesInfoSlice from './referencesInfoSlice';
import profileImgSlice from './profileImgSlice';
import certificationInfoSlice from './certificationInfoSlice';
import languageInfoSlice from './languageInfoSlice';

export default configureStore({
  reducer: {
    jobs: jobSlice,
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
    referencesInfo: referencesInfoSlice,
    profileImg: profileImgSlice,
  },
});
