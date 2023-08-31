import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";
import { FormSections } from "../../utils/FormSections";
import { twMerge } from "tailwind-merge";

export const CVTemplate = ({ className, id, reff, templateSize, CVColor }) => {
  const personalInfoData = useSelector((state) => state.personalInfo);
  const contactInfoData = useSelector((state) => state.contactInfo);
  const skillsInfoData = useSelector((state) => state.skillsInfo.skills);
  const educationInfoData = useSelector((state) => state.educationInfo);
  const certificationInfoData = useSelector((state) => state.certificationInfo);
  const summaryInfoData = useSelector((state) => state.summaryInfo.summary);
  const experienceInfoData = useSelector((state) => state.experienceInfo);
  const achievementsInfoData = useSelector(
    (state) => state.achievementsInfo.achievements
  );
  const personalProjectsInfoData = useSelector(
    (state) => state.personalProjectsInfo
  );
  const languagesInfoData = useSelector((state) => state.languageInfo);
  const interestsInfoData = useSelector(
    (state) => state.interestsInfo.interests
  );
  const referencesInfoData = useSelector((state) => state.referenceInfo);
  const  profileImg  = personalInfoData.profilePic;
  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);
  const { cvHeaderSectionBackgroundColor, cvLeftSectionBackgroundColor, cvRightSectionBackgroundColor, cvHeaderSectionTextColor, cvLeftSectionTextColor, cvRightSectionTextColor } = useSelector(state => state.cvTheme)

  const styles = `
  ol{
    list-style-type: decimal !important;
    padding-left: 5px;
  }

  ul {
    list-style-type: disc !important;
    padding-left: 10px;
  }

ol.list-decimal {
  list-style-type: decimal !important;
}

ul.list-disc{
  list-style-type: disc!important ;
}

.underline {
  text-decoration: underline;
}

`;

  const skillsStyles = `
      ol,ul{
        list-style-type: decimal !important;
        padding-left: 5px;
      }

      ul{
        list-style-type: disc !important;
        padding-left: 10px;
      }

      ol.list-decimal {
        list-style-type: decimal !important;
      }

      ul.list-disc{
        list-style-type: disc!important ;
      }

      .underline {
        text-decoration: underline;
      }
      `;

  return (
    // <div
    //   id="cv-template"
    //   ref={reff}
    //   className={`${className} bg-gray-100  dark:text-gray-400  dark:bg-gray-800 dark:border-gray-700 p-0 md:pr-5 lg:p-0 `}
    // >
    <div
      ref={reff}
      className={twMerge(`shadow-lg overflow-hidden md:leading-5 bg-thm_secondary_background min-h-[700px]`, className)}
    >
      {/* personal info  */}
      <div className={twMerge(" py-2 px-6 ", cvHeaderSectionBackgroundColor, cvHeaderSectionTextColor)}>
        <div className="flex items-center">
          <div className="relative">
            <img
              className="md:w-16 md:h-16 w-10 h-10 rounded-full"
              height="40px"
              width="40px"
              src={profileImg ? profileImg : 'data:image/jpeg;base64,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'}
              alt="Profile"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
              className="w-8 h-8 fill-thm_root2_color absolute -z-10 hover:z-20 top-[25%] left-[25%] opacity-100"
            >
              <path d="M9.24264 18.9964H21V20.9964H3V16.7538L12.8995 6.85431L17.1421 11.0969L9.24264 18.9964ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"></path>
            </svg>
          </div>
          <div className="ml-4 text-inherit">
            <h1 className="md:text-xl font-bold ">
              {personalInfoData.firstName} {personalInfoData.lastName}
            </h1>
            <h2 className="md:text-sm text-xs font-medium ">
              {personalInfoData.position}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex gap-0 w-full  h-[100%]">
        {/* Left Section */}
        <div className={twMerge("h-[96%]  min-h-[700px] md:h-[94%] lg:h-[94%] basis-[30%] p-2 md:py-5 md:px-6 flex flex-col justify-between  text-slate-200 bg-blue-600", cvLeftSectionBackgroundColor, cvLeftSectionTextColor)}>
          <div className=" flex flex-col gap-1 md:text-xxs  text-xxxxs">
            {/* contact info */}
            <>
              <h1 className="font-semibold uppercase md:text-xs py-1">
                Contact
              </h1>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="12px"
                  height="12px"
                  className={twMerge("w-3 h-3 fill-slate-200", cvLeftSectionTextColor)}
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <p className="">
                  {contactInfoData.city}, {contactInfoData.country},{" "}
                  {contactInfoData.postcode}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={twMerge("w-3 h-3 fill-slate-200", cvLeftSectionTextColor)}
                  height="12px"
                  width="12px"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
                <p className="">{contactInfoData.phone}</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={twMerge("w-3 h-3 fill-slate-200", cvLeftSectionTextColor)}
                  height="12px"
                  width="12px"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                <p className="">{contactInfoData.email}</p>
              </div>
            </>

            {/* skills info */}
            {cvCompletionInfo[FormSections.SKILLS].included && (
              <>
                <hr className="my-1" />
                <h3 className="md:text-xs uppercase font-semibold mt-1">
                  Skills
                </h3>
                {/* <ul className="list-disc p-2 list-inside md:text-xxs"> */}
                <style>{skillsStyles}</style>
                <div
                  className={twMerge(`list-decimal list-inside list-disc p-0 md:text-xxs text-slate-200`)}
                  style={{
                    listStyleType: "disc",
                    paddingInline: "0px",
                    margin: "0px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      skillsInfoData && DOMPurify.sanitize(skillsInfoData),
                  }}
                ></div>
                {/* </ul> */}
              </>
            )}

            {/* languages info */}
            {cvCompletionInfo[FormSections.LANGUAGES].included && (
              <>
                <hr className="my-1" />
                <h3 className="md:text-xs uppercase font-semibold mt-1">
                  Languages
                </h3>
                {languagesInfoData.length > 0 && (
                  <ul className=" p-0 md:text-xxs ">
                    {languagesInfoData.map(
                      ({ languageName, proficiencyLevel }, index) => (
                        <p key={index}>
                          - {languageName} - {proficiencyLevel}
                        </p>
                      )
                    )}
                  </ul>
                )}
                <hr className="my-1" />
              </>
            )}
          </div>
          <NavLink
            to="/"
            className="font-black py-2 cursor-pointer text-xxxs md:text-xs  text-slate-200 self-center "
          >
            Walia Jobs
          </NavLink>
        </div>

        {/* Right Section */}
        <div className={twMerge("md:py-5 md:px-6 border-4 text-xxxs md:text-xxs p-2 basis-[70%]", cvRightSectionBackgroundColor, cvRightSectionTextColor)}>
          {/* summary section */}
          <>
            <h3 className="md:text-xs uppercase text-xxs font-semibold mt-0">
              Profile Summary
            </h3>
            <div
              className="list-decimal list-inside min:h-8 text-xxxs md:text-xxs"
              dangerouslySetInnerHTML={{
                __html: summaryInfoData && DOMPurify.sanitize(summaryInfoData),
              }}
            ></div>
          </>

          {/* work experience section */}
          <>
            <hr className="my-2 md:my-2" />
            <h3 className="md:text-xs uppercase text-xxs font-semibold md:mt-2">
              Work Experience
            </h3>
            <div className="min:h-8">
              {experienceInfoData.map((experience, index) => (
                <div
                  key={index}
                  className="md:mt-1 my-1  md:text-xxs list-disc list-inside"
                >
                  <h4 className="text-xxxs md:text-xs font-semibold">
                    - {experience.employer} - {experience.jobTitle}
                  </h4>
                  <p className="pl-2 text-xxxs md:text-xs">
                    {experience.city} , {experience.country} |{" "}
                    {experience.startDate} -{experience.endDate}
                  </p>
                  {/* <ul className=" list-disc list-inside"> */}

                  {/* </ul> */}
                  <style>{styles}</style>
                  {experience.responsibilities && (
                    // <DeltaView delta={experience.responsibilities} />
                    <div
                      className={`list-decimal pl-2 list-inside text-xxxs md:text-xxs`}
                      dangerouslySetInnerHTML={{
                        __html:
                          experience.responsibilities &&
                          DOMPurify.sanitize(experience.responsibilities),
                      }}
                    ></div>
                  )}

                  {/* <ReactQuill value={experience.responsibilities} readOnly /> */}
                </div>
              ))}
            </div>
          </>

          {/* education section */}
          <>
            <hr className="my-2 md:my-2" />
            <h3 className="md:text-xs text-xxs uppercase font-semibold mt-1">
              Education
            </h3>
            {educationInfoData.map((edu) => (
              <div className="min:h-8 my-1" key={edu.id}>
                <p className="md:text-xs text-xxxs font-semibold">- {edu.qualification}</p>

                {edu.institution != "" && (
                  <p className="md:text-xs text-xxxs pl-2">
                    {edu.institution}, {edu.location}
                  </p>
                )}

                {edu.graduationYear != "" && (
                  <p className="md:text-xxs text-xxxs pl-2">
                    Graduation Year: {edu.graduationYear}
                  </p>
                )}
              </div>
            ))}
          </>

          {/* certification section */}
          {cvCompletionInfo[FormSections.CERTIFICATIONS].included && (
            <>
              <hr className="my-2 md:my-2" />
              <h3 className="md:text-xs text-xxs font-semibold mt-1 uppercase">
                Certifications
              </h3>
              <div className="my-1 flex text-xxxs md:text-xs flex-col gap-1">
                {certificationInfoData.map((cert) => (
                  <div className="" key={cert.id}>
                    {cert.certificationName != "" && (
                      <p className="md:text-xs text-thm_primary_color font-medium">
                        - {cert.certificationName}
                      </p>
                    )}
                    {cert.certificateIssuedBy != "" && (
                      <p className="md:text-xxs pl-2">
                        {cert.certificateIssuedBy}, {cert.certificateIssuedDate}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* awards and achieements */}
          {cvCompletionInfo[FormSections.ACHIEVEMENTS].included && (
            <>
              <hr className="my-2 md:my-2" />
              <h3 className="md:text-xs text-xxs uppercase font-semibold mt-1">
                Awards and Achievements
              </h3>
              <style>{skillsStyles}</style>
              <div
                className={`list-decimal list-inside list-disc p-0 md:text-xxs text-xxxs`}
                style={{
                  listStyleType: "disc",
                  paddingInline: "0px",
                  margin: "0px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    achievementsInfoData &&
                    DOMPurify.sanitize(achievementsInfoData),
                }}
              ></div>
            </>
          )}

          {/* Personal Projects */}
          {cvCompletionInfo[FormSections.PERSONALPROJECTS].included && (
            <>
              <hr className="my-2 md:my-2" />
              <h3 className="md:text-xs uppercase font-semibold text-xxs mt-1">
                Personal Projects
              </h3>
              <ul className="list-disc md:text-xxs list-inside text-xxxs">
                {personalProjectsInfoData.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </>
          )}

          {/* Interests */}
          {cvCompletionInfo[FormSections.INTERESTS].included && (
            <>
              <hr className="my-2 md:my-2" />
              <h3 className="md:text-xs text-xxs uppercase font-semibold mt-1">
                Interests
              </h3>
              <style>{skillsStyles}</style>
              <div
                className={`list-decimal list-inside list-disc p-0 md:text-xxs text-xxxs`}
                style={{
                  listStyleType: "disc",
                  paddingInline: "0px",
                  margin: "0px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    interestsInfoData && DOMPurify.sanitize(interestsInfoData),
                }}
              ></div>
            </>
          )}

          {/* References */}
          {cvCompletionInfo[FormSections.REFERENCES].included && (
            <>
              <hr className="my-2 md:my-2" />
              {referencesInfoData.length > 0 && (
                <div>
                  <h3 className="md:text-xs uppercase font-semibold mt-1 text-xxs">
                    References
                  </h3>
                  {referencesInfoData.map((ref, index) => (
                    <div className="my-1 text-xxxs" key={index}>
                      <h4 className="md:text-xxs text-xxxs text-thm_primary_color font-semibold">
                        - {ref.fullName}
                      </h4>
                      <p className="md:text-xxs font-medium pl-2">
                        {ref.jobTitle}, {ref.companyName}
                      </p>
                      <p className="md:text-xxs pl-2">
                        <span className="font-medium">Email:</span> {ref.email}
                      </p>
                      <p className="md:text-xxs pl-2">
                        <span className="font-medium">phone: </span>
                        {ref.phone}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};
