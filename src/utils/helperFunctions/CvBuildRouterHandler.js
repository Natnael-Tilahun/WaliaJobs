import React from 'react';
import { FormSections } from '../FormSections';

export default function CvBuildRouterHandler(
  formSection,
  cvCompletionInfo,
  CVId,
  certificateId,
  experienceId
) {
  // const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);
  const isEducationSectionCompleted =
    cvCompletionInfo[FormSections.EDUCATION].completed;
  const isCertificationSectionCompleted =
    cvCompletionInfo[FormSections.CERTIFICATIONS].completed;
  const isLanguageSectionCompleted =
    cvCompletionInfo[FormSections.LANGUAGES].completed;

  const selectIncludedSections = Object.keys(cvCompletionInfo).filter((key) => {
    return cvCompletionInfo[key].included;
  });
  const currentStep = selectIncludedSections.indexOf(formSection);
  // alert(currentStep);
  alert(formSection);
  alert(certificateId);

  if (formSection == FormSections.HEADING) {
    if (isEducationSectionCompleted) {
      return '/CV-Details/1/Education-Review';
    } else {
      return '/CV-Details/1/Education-Section/0';
    }
  } else if (formSection == FormSections.EDUCATION) {
    return `/CV-Details/1/Education-Review`;
  } else if (formSection == FormSections.EXPERIENCE) {
    return `/CV-Details/1/Experience-Review`;
  } else if (formSection == FormSections.SKILLS) {
    if (isCertificationSectionCompleted) {
      return `/CV-Details/1/Certification-Review`;
    } else {
      return `/CV-Details/1/Certification-Section/0`;
    }
  } else if (formSection == FormSections.CERTIFICATIONS) {
    if (certificateId > 0) {
      return `/CV-Details/1/Certification-Review`;
    } else {
      return `/CV-Details/1/Certification-Section/0`;
    }
  } else if (formSection == FormSections.LANGUAGES) {
    return `/CV-Details/1/Language-Section`;
  } else if (formSection == FormSections.REFERENCES) {
    return `/CV-Details/1/Reference-Section`;
  } else if (formSection == FormSections.ACHIEVEMENTS) {
    return `/CV-Details/1/Achievements-Section`;
  } else if (formSection == FormSections.INTERESTS) {
    return `/CV-Details/1/Summary-Section`;
  } else if (formSection == FormSections.SUMMARY) {
    return `/CV-Details/1/Additional-Section`;
  } else if (formSection == FormSections.ADDADDITIONALSECTION) {
    return `/CV-Details/1/review-cv/${0}`;
  } else if (formSection == FormSections.FINALIZE) {
    return `/CV-Details/1/review-cv/${CVId}`;
  }

  // TODO: Add other route logics and routes
  // alert(currentStep + 1);
  console.log(
    'route',
    `/CV-Details/1/${selectIncludedSections[currentStep + 1]}-Review`
  );
  // return `/CV-Details/1/${selectIncludedSections[currentStep + 1]}-Review`;
}
