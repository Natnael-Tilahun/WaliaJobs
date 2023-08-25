import React from 'react';
import { FormSections } from '../FormSections';

export default function CvBuildRouterHandler(formSection, cvCompletionInfo) {
  // const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);
  const isEducationSectionCompleted =
    cvCompletionInfo[FormSections.EDUCATION].completed;

  const selectIncludedSections = Object.keys(cvCompletionInfo).filter((key) => {
    return cvCompletionInfo[key].included;
  });
  const currentStep = selectIncludedSections.indexOf(formSection);

  if (formSection == FormSections.HEADING) {
    if (isEducationSectionCompleted) {
      return '/CV-Details/1/Education-Review';
    } else {
      return '/CV-Details/1/Education-Section/0';
    }
  } else if (formSection == FormSections.EDUCATION) {
    return `/CV-Details/1/Education-Review`;
  }
  // TODO: Add other route logics and routes
  // alert(currentStep + 1);
  console.log(
    'route',
    `/CV-Details/1/${selectIncludedSections[currentStep + 1]}-Review`
  );
  // return `/CV-Details/1/${selectIncludedSections[currentStep + 1]}-Review`;
}
