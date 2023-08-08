import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { DeltaView } from './DeltaView';
import DOMPurify from 'dompurify';
import { SET_PROFILE } from '../../redux/profileImgSlice';

export const CVTemplate = () => {
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
  console.log('references', referencesInfoData);
  const { profileImg } = useSelector((state) => state.profileImg);
  const dispatch = useDispatch();
  const styles = `
  ol{
    list-style-type: decimal !important;
    padding-left: 15px;
  }

  ul {
    list-style-type: disc !important;
    padding-left: 30px;
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
        padding-left: 15px;
      }

      ul{
        list-style-type: disc !important;
        padding-left: 15px;
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

  console.log('cv data', personalInfoData, experienceInfoData);

  const onImageSelect = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      dispatch(SET_PROFILE(reader.result));
      // setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-gray-100 max:h-[800px]  dark:text-gray-400  dark:bg-gray-800 dark:border-gray-700 p-0 md:pr-5 lg:p-8 basis-full md:basis-[60%] lg:basis-1/2">
      <div className="max-w-xl  mx-auto h-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* personal info  */}
        <div className="bg-blue-500 py-2 px-6">
          <div className="flex items-center">
            <div className="relative">
              <img
                className="md:w-16 md:h-16 w-10 h-10 rounded-full"
                src={profileImg}
                alt="Profile"
              />

              <input
                type="file"
                placeholder=""
                className="absolute z-30 w-full h-full bg-contain  top-[25%]  opacity-0 cursor-pointer"
                onChange={onImageSelect}
              />
              {/* <img
                src="/camera.png"
                className="absolute z-10 w-1/2 h-1/2 bg-center top-[25%] left-[25%] opacity-70"
                alt=""
              /> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-gray-800 absolute z-20 top-[25%] left-[25%] opacity-100"
              >
                <path d="M21 15.2426V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5511 3 20.9925V9H9C9.55228 9 10 8.55228 10 8V2H20.0017C20.5531 2 21 2.45531 21 2.9918V6.75736L12.0012 15.7562L11.995 19.995L16.2414 20.0012L21 15.2426ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761ZM3 7L8 2.00318V7H3Z"></path>
              </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-thm_root2_color absolute -z-10 hover:z-20 top-[25%] left-[25%] opacity-100"
              >
                <path d="M9.24264 18.9964H21V20.9964H3V16.7538L12.8995 6.85431L17.1421 11.0969L9.24264 18.9964ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h1 className="md:text-xl font-bold text-white">
                {personalInfoData.firstName} {personalInfoData.lastName}
              </h1>
              <h2 className="md:text-sm text-xs font-medium text-white">
                {personalInfoData.position}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex gap-0 h-screen text-gray-700">
          <div className="bg-slate-300 h-full  basis-[25%] text-xxxs md:text-xxs p-2 md:p-3 flex flex-col gap-1 ">
            {/* contact info */}
            <h1 className="font-semibold uppercase md:text-xs py-1">Contact</h1>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3 h-3"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
              <p className="">
                {contactInfoData.city}, {contactInfoData.country},{' '}
                {contactInfoData.postcode}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3 h-3"
              >
                <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
              </svg>
              <p className="">{contactInfoData.phone}</p>
            </div>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-3 h-3"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
              </svg>
              <p className="">{contactInfoData.email}</p>
            </div>
            <hr className="my-1" />
            {/* skills info */}
            <h3 className="md:text-xs uppercase font-semibold mt-1">Skills</h3>
            {/* <ul className="list-disc p-2 list-inside md:text-xxs"> */}
            <style>{skillsStyles}</style>

            <div
              className={`list-decimal list-inside list-disc p-0 md:text-xxs`}
              style={{
                listStyleType: 'disc',
                paddingInline: '0px',
                margin: '0px',
              }}
              dangerouslySetInnerHTML={{
                __html: skillsInfoData && DOMPurify.sanitize(skillsInfoData),
              }}
            ></div>
            {/* </ul> */}
            <hr className="my-1" />

            {/* languages info */}
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

            <NavLink
              to="/"
              className="font-black mt-auto basis-full md:basis-auto text-[#e96c51] self-center text-sm "
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '3px solid #fa6d4d' : '',
                };
              }}
            >
              Walia Jobs
            </NavLink>
          </div>

          <div className="md:p-3 text-xxxs md:text-xxs p-2 basis-[75%]">
            {/* summary section */}
            <h3 className="md:text-xs uppercase text-xxs font-semibold mt-0">
              Profile Summary
            </h3>
            <div
              className="md:text-xxs list-decimal list-inside min:h-8 "
              dangerouslySetInnerHTML={{
                __html: summaryInfoData && DOMPurify.sanitize(summaryInfoData),
              }}
            ></div>
            <hr className="my-1" />
            {/* work experience section */}
            <h3 className="md:text-xs uppercase text-xxs font-semibold md:mt-2">
              Work Experience
            </h3>
            <div className="min:h-8">
              {experienceInfoData.map((experience, index) => (
                <div
                  key={index}
                  className="md:my-2 my-1  md:text-xxs list-disc list-inside"
                >
                  <h4 className="text-xs font-semibold">
                    - {experience.employer} - {experience.jobTitle}
                  </h4>
                  <p className="pl-2">
                    {experience.city} , {experience.country} |{' '}
                    {experience.startDate} -{experience.endDate}
                  </p>
                  {/* <ul className=" list-disc list-inside"> */}

                  {/* </ul> */}
                  <style>{styles}</style>

                  {experience.responsibilities && (
                    // <DeltaView delta={experience.responsibilities} />
                    <div
                      className={`list-decimal pl-2 list-inside`}
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

            <hr className="md:my-1" />
            {/* education section */}
            <h3 className="md:text-xs uppercase font-semibold mt-1">
              Education
            </h3>
            {educationInfoData.map((edu) => (
              <div className="min:h-8" key={edu.id}>
                <p className="md:text-xs font-medium">- {edu.qualification}</p>

                {edu.institution != '' && (
                  <p className="md:text-xxs pl-2">
                    {edu.institution}, {edu.location}
                  </p>
                )}

                {edu.graduationYear != '' && (
                  <p className="md:text-xxs pl-2">
                    Graduation Year: {edu.graduationYear}
                  </p>
                )}
              </div>
            ))}

            <hr className="md:my-1" />
            {/* certification section */}
            <h3 className="md:text-xs font-semibold mt-1 uppercase">
              Certifications
            </h3>
            <div className="my-1 flex flex-col gap-1">
              {certificationInfoData.map((cert) => (
                <div className="" key={cert.id}>
                  {cert.certificationName != '' && (
                    <p className="md:text-xs text-thm_primary_color font-medium">
                      - {cert.certificationName}
                    </p>
                  )}
                  {cert.certificateIssuedBy != '' && (
                    <p className="md:text-xxs pl-2">
                      {cert.certificateIssuedBy}, {cert.certificateIssuedDate}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <hr className="md:my-1" />
            {/* awards and achieements */}
            <h3 className="md:text-xs uppercase font-semibold mt-1">
              Awards and Achievements
            </h3>
            <style>{skillsStyles}</style>
            <div
              className={`list-decimal list-inside list-disc p-0 md:text-xxs`}
              style={{
                listStyleType: 'disc',
                paddingInline: '0px',
                margin: '0px',
              }}
              dangerouslySetInnerHTML={{
                __html:
                  achievementsInfoData &&
                  DOMPurify.sanitize(achievementsInfoData),
              }}
            ></div>
            <hr className="md:my-1" />
            {/* Personal Projects */}
            <h3 className="md:text-xs uppercase font-semibold mt-1">
              Personal Projects
            </h3>
            <ul className="list-disc md:text-xxs list-inside">
              {personalProjectsInfoData.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            <hr className="md:my-1" />
            <h3 className="md:text-xs uppercase font-semibold mt-1">
              Interests
            </h3>
            <style>{skillsStyles}</style>
            <div
              className={`list-decimal list-inside list-disc p-0 md:text-xxs`}
              style={{
                listStyleType: 'disc',
                paddingInline: '0px',
                margin: '0px',
              }}
              dangerouslySetInnerHTML={{
                __html:
                  interestsInfoData && DOMPurify.sanitize(interestsInfoData),
              }}
            ></div>
            <hr className="md:my-1" />
            {referencesInfoData.length > 0 && (
              <div>
                <h3 className="md:text-xs uppercase font-semibold mt-1">
                  References
                </h3>
                {referencesInfoData.map((ref, index) => (
                  <div className="my-1" key={index}>
                    <h1 className="MD:text-xxs text-xs text-thm_primary_color font-medium">
                      - {ref.fullName}
                    </h1>
                    <p className="MD:text-xxs pl-2">
                      {ref.jobTitle}, {ref.companyName}
                    </p>
                    <p className="MD:text-xxs pl-2">
                      <span className="font-medium">Email:</span> {ref.email}
                    </p>
                    <p className="MD:text-xxs pl-2">
                      <span className="font-medium">phone: </span>
                      {ref.phone}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
