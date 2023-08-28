import React, { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CVTemplate } from "./CVTemplate";
import { useSelector } from "react-redux";
import { FormSections } from "../../utils/FormSections";
import { CVSteperLink } from "../../components/CVSteperLink";

export const CVDetails = () => {
  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);
  const selectIncludedSections = Object.keys(cvCompletionInfo).filter((key) => {
    return cvCompletionInfo[key].included;
  });
  function getSectionLink(section) {
    switch (section) {
      case FormSections.HEADING:
        return "/CV-Details/:id";
      case FormSections.EXPERIENCE:
        return cvCompletionInfo[FormSections.EXPERIENCE].completed
          ? "Experience-Review"
          : "Experience-Section/0";

      case FormSections.CERTIFICATIONS:
        return cvCompletionInfo[FormSections.CERTIFICATIONS].completed
          ? "Certification-Review"
          : "Certification-Section/0";

      case FormSections.LANGUAGES:
        return cvCompletionInfo[FormSections.LANGUAGES].completed
          ? "Language-Review"
          : "Language-Section/0";

      case FormSections.EDUCATION:
        return cvCompletionInfo[FormSections.EDUCATION].completed
          ? "Education-Review"
          : "Education-Section/0";

      case FormSections.REFERENCES:
        return cvCompletionInfo[FormSections.REFERENCES].completed
          ? "Reference-Review"
          : "Reference-Section/0";

      case FormSections.SKILLS:
        return "Skills-Section";
      case FormSections.ACHIEVEMENTS:
        return "Achievements-Section";
      case FormSections.INTERESTS:
        return "Interests-Section";
      case FormSections.SUMMARY:
        return "Summary-Section";
      case FormSections.ADDADDITIONALSECTION:
        return "Additional-Section";
      case FormSections.FINALIZE:
        return "/review-cv/0";
      default:
        throw new Error("Invalid section");
    }
  }

  return (
    <div className="flex flex-col md:flex-row py-5 px-5 md:px-0 lg:px-10 w-full justify-center gap-5 md:gap-2 lg:gap-10">
      <div className="basis-full  md:basis-[50%] shadow-lg">
        <ol className="flex h-auto flex-wrap gap-y-4 mb-7 xl:h-auto items-center w-full p-2 md:p-2 md:py-4 space-x-1 md:space-x-2 text-xxs font-medium text-center text-gray-500 bg-white  border-gray-200 rounded-lg shadow-sm dark:text-gray-400 md:text-xs lg:text-base dark:bg-gray-800 dark:border-gray-700 lg:p-4 lg:space-x-4">
          {selectIncludedSections.map((section, index) => (
            <CVSteperLink
              key={index}
              link={getSectionLink(section)}
              title={section}
              step={index + 1}
            />
          ))}
        </ol>
        <Outlet />
      </div>
      <CVTemplate
        // templateSize="w-full h-full"
        className=" basis-full md:basis-[60%] lg:basis-1/2  min:h-[842px] w-full"
      />
    </div>
  );
};
