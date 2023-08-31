import React from "react";
import { FormSections } from "../FormSections";

export default function CvBuildRouterHandler(
  formSection,
  cvCompletionInfo,
  CVId
) {
  const isEducationSectionCompleted =
    cvCompletionInfo[FormSections.EDUCATION].completed;
  const isExperienceSectionCompleted =
    cvCompletionInfo[FormSections.EXPERIENCE].completed;
  const isCertificationSectionCompleted =
    cvCompletionInfo[FormSections.CERTIFICATIONS].completed;
  const isLanguageSectionCompleted =
    cvCompletionInfo[FormSections.LANGUAGES].completed;
  const isReferenceSectionCompleted =
    cvCompletionInfo[FormSections.REFERENCES].completed;

  const selectIncludedSections = Object.keys(cvCompletionInfo).filter((key) => {
    return cvCompletionInfo[key].included;
  });
  const currentStep = selectIncludedSections.indexOf(formSection);
  const nextRoute = selectIncludedSections[currentStep + 1];

  if (nextRoute == FormSections.EDUCATION) {
    if (isEducationSectionCompleted) {
      return "/CV-Details/1/Education-Review";
    } else {
      return "/CV-Details/1/Education-Section/0";
    }
  } else if (nextRoute == FormSections.EXPERIENCE) {
    if (isExperienceSectionCompleted) {
      return `/CV-Details/1/Experience-Review`;
    } else {
      return `/CV-Details/1/Experience-Section/0`;
    }
  } else if (nextRoute == FormSections.SKILLS) {
    return `/CV-Details/1/Skills-Section`;
  } else if (nextRoute == FormSections.CERTIFICATIONS) {
    if (isCertificationSectionCompleted) {
      return `/CV-Details/1/Certification-Review`;
    } else {
      return `/CV-Details/1/Certification-Section/0`;
    }
  } else if (nextRoute == FormSections.LANGUAGES) {
    if (isLanguageSectionCompleted) {
      return `/CV-Details/1/Language-Review`;
    } else {
      return `/CV-Details/1/Language-Section/0`;
    }
  } else if (nextRoute == FormSections.REFERENCES) {
    if (isReferenceSectionCompleted) {
      return `/CV-Details/1/Reference-Review`;
    } else {
      return `/CV-Details/1/Reference-Section/0`;
    }
  } else if (nextRoute == FormSections.ACHIEVEMENTS) {
    return `/CV-Details/1/Achievements-Section`;
  } else if (nextRoute == FormSections.INTERESTS) {
    return `/CV-Details/1/Interests-Section`;
  } else if (nextRoute == FormSections.SUMMARY) {
    return `/CV-Details/1/Summary-Section`;
  } else if (nextRoute == FormSections.ADDADDITIONALSECTION) {
    return `/CV-Details/1/Additional-Section`;
  } else if (nextRoute == FormSections.FINALIZE) {
    return `/review-cv/${CVId}`;
  }
}
