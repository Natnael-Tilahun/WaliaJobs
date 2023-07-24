import React, { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const CVDetails = () => {
  const data = {
    name: "John Doe",
    jobTitle: "Software Engineer",
    contactInformation: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main Street, City, Country",
    },
    profileSummary:
      "Experienced software engineer with a focus on web development and a passion for creating scalable and efficient applications.",
    workExperience: [
      {
        company: "ABC Company",
        jobTitle: "Software Engineer",
        location: "City, Country",
        startDate: "2018",
        endDate: "Present",
        responsibilities: [
          "Developed and maintained web applications using React and Node.js.",
          "Collaborated with cross-functional teams to deliver high-quality software solutions.",
          "Implemented efficient algorithms to optimize application performance.",
        ],
      },
      {
        company: "XYZ Corporation",
        jobTitle: "Frontend Developer",
        location: "City, Country",
        startDate: "2016",
        endDate: "2018",
        responsibilities: [
          "Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.",
          "Worked closely with UI/UX designers to create visually appealing and user-friendly web applications.",
          "Performed code reviews and provided technical guidance to junior developers.",
        ],
      },
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "University of ABC",
      location: "City, Country",
      graduationYear: "2016",
    },
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    awards: ["Best Employee of the Year", "Outstanding Achievement Award"],
    personalProjects: [
      "Personal Blog - Built a blog website using React and Express.",
      "Portfolio Website - Developed a portfolio website to showcase my projects.",
    ],
    languages: ["English", "Spanish"],
    interests: ["Reading", "Traveling", "Playing guitar"],
    references: ["Available upon request"],
  };
  const [firstname, setFirstname] = useState("Natnael");
  const [lastname, setLastname] = useState("Tilahun");
  const [position, setPosition] = useState("Software Engineer");
  const [city, setCity] = useState("Addis Abeba");
  const [country, setCountry] = useState("Ethiopia");
  const [postcode, setPostcode] = useState("0000");
  const [phone, setPhone] = useState("0933654654");
  const [email, setEmail] = useState("natnaeltilahun97@gmail.com");

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const positionRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const postcodeRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  return (
    <div className="flex flex-col md:flex-row py-5 px-5 md:px-0 lg:px-10 w-full justify-center gap-5 md:gap-2 lg:gap-0">
      {/* <form
        action=""
        className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 md:px-5 lg:p-5"
      >
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-xl md:text-2xl xl:text-4xl font-medium">
            Let's start with your header
          </h1>
          <p className="text-sm md:text-base text-thm_secondary_color">
            Include your full name and at least one way for employers to contact
            you.
          </p>
        </div>
        <div className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
          <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
            <label htmlFor="firstname" for="firstname">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              ref={firstnameRef}
              placeholder="Natnael"
              className="p-2 border-2 rounded-md"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="lastname" for="lastname">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Tilahun"
              onChange={(e) => setLastname(e.target.value)}
              ref={lastnameRef}
              className="p-2 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="position" for="position">
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              onChange={(e) => setPosition(e.target.value)}
              ref={positionRef}
              placeholder="Software Engineer"
              className="p-2 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="city" for="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Addis Abeba"
              onChange={(e) => setCity(e.target.value)}
              ref={cityRef}
              className="p-2 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="country" for="country">
              Country/Region
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Ethiopia"
              onChange={(e) => setCountry(e.target.value)}
              ref={countryRef}
              className="p-2 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="postcode" for="postcode">
              PostCode
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              placeholder="0000"
              onChange={(e) => setPostcode(e.target.value)}
              ref={postcodeRef}
              className="p-2 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="phone" for="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="0911223344"
              onChange={(e) => setPhone(e.target.value)}
              ref={phoneRef}
              className="p-2 border-2 rounded-md"
            />
          </div>
          <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
            <label htmlFor="email" for="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="natnaeltilahun97@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              className="p-2 border-2 rounded-md"
            />
          </div>
          <NavLink
            to="/buildcv"
            className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
          >
            Back
          </NavLink>
          <NavLink
            to="/Experience-Section/1"
            className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
          >
            Continue
          </NavLink>
        </div>
      </form> */}
      <div className="basis-full  md:basis-[50%] shadow-lg">
        <ol className="flex h-auto flex-wrap gap-y-4 mb-7 xl:h-12 items-center w-full p-2 md:p-2 md:py-4 space-x-1 md:space-x-2 text-xxs font-medium text-center text-gray-500 bg-white  border-gray-200 rounded-lg shadow-sm dark:text-gray-400 md:text-xs lg:text-base dark:bg-gray-800 dark:border-gray-700 lg:p-4 lg:space-x-4">
          <NavLink
            to="/CV-Details/:id"
            style={({ isActive }) => {
              return {
                color: isActive ? "#1e40af" : "",
              };
            }}
          >
            <li className="flex items-center ">
              <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                1
              </span>
              Heading
              {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1 md:ml-2 lg:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          </NavLink>
          <NavLink
            to="Education-Section"
            style={({ isActive }) => {
              return {
                color: isActive ? "#1e40af" : "",
              };
            }}
          >
            <li className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                2
              </span>
              Education
              {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1 md:ml-2 lg:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          </NavLink>
          <NavLink
            to="Experience-Section"
            style={({ isActive }) => {
              return {
                color: isActive ? "#1e40af" : "",
              };
            }}
          >
            <li className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                3
              </span>
              Experience
              {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1 md:ml-2 lg:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          </NavLink>
          <NavLink
            to="Skills-Section"
            style={({ isActive }) => {
              return {
                color: isActive ? "#1e40af" : "",
              };
            }}
          >
            <li className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                4
              </span>
              Skills
              {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1 md:ml-2 lg:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          </NavLink>
          <NavLink
            to="Summary-Section"
            style={({ isActive }) => {
              return {
                color: isActive ? "#1e40af" : "",
              };
            }}
          >
            <li className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                5
              </span>
              Summary
              {/* <span className="hidden sm:inline-flex sm:ml-2">Info</span> */}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-1 md:ml-2 lg:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          </NavLink>
          <NavLink
            to="Additional-Section"
            style={({ isActive }) => {
              return {
                color: isActive ? "#1e40af" : "",
              };
            }}
          >
            <li className="flex items-center">
              <span className="flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1 md:text-xs lg:text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                6
              </span>
              Review
            </li>
          </NavLink>
        </ol>
        <Outlet />
      </div>
      <div className="bg-gray-100 dark:text-gray-400  dark:bg-gray-800 dark:border-gray-700 p-0 md:pr-5 lg:p-8 basis-full md:basis-[60%] lg:basis-1/2">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-500 py-2 px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="md:w-12 md:h-12 w-10 h-10 rounded-full"
                  src="data:image/jpeg;base64,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"
                  alt="Profile"
                />
              </div>
              <div className="ml-4">
                <h1 className="md:text-xl font-bold text-white">
                  {firstname} {lastname}
                </h1>
                <h2 className="md:text-sm text-xs font-medium text-white">
                  {position}
                </h2>
              </div>
            </div>
          </div>
          <div className="flex gap-0">
            <div className="bg-slate-300 basis-[25%] text-xxxs md:text-xxs p-2 md:p-3 flex flex-col gap-1">
              <h1 className="font-medium md:text-xs py-1">Contact</h1>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-3 h-3"
                >
                  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                </svg>
                <p className="">
                  {city}, {country}, {postcode}
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
                <p className="">{phone}</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-3 h-3"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                <p className="">{email}</p>
              </div>
              <hr className="my-1" />
              <h3 className="md:text-xs font-semibold mt-1">Skills</h3>
              <ul className="list-disc list-inside md:text-xxs">
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <hr className="my-1 mb-auto" />
              <NavLink
                to="/"
                className="font-black   basis-full md:basis-auto text-[#e96c51] self-center text-sm "
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3px solid #fa6d4d" : "",
                  };
                }}
              >
                Walia Jobs
              </NavLink>
            </div>

            <div className="md:p-3 text-xxxs md:text-xxs p-2 basis-[75%]">
              <h3 className="md:text-xs text-xxs font-semibold mt-0">
                Profile Summary
              </h3>
              <p className="md:text-xxs">{data.profileSummary}</p>
              <hr className="my-1" />
              <h3 className="md:text-xs text-xxs font-semibold mt-1">
                Work Experience
              </h3>
              {data.workExperience.map((experience, index) => (
                <div key={index} className="md:my-2 my-1 md:text-xxs">
                  <h4 className=" font-semibold">
                    {experience.company} - {experience.jobTitle}
                  </h4>
                  <p className="">
                    {experience.location} | {experience.startDate} -{" "}
                    {experience.endDate}
                  </p>
                  <ul className=" list-disc list-inside">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <hr className="md:my-1" />
              <h3 className="md:text-xs font-semibold mt-1">Education</h3>
              <p className="md:text-xxs">- {data.education.degree}</p>
              <p className="md:text-xxs">
                - {data.education.university}, {data.education.location}
              </p>
              <p className="md:text-xxs">
                - Graduation Year: {data.education.graduationYear}
              </p>
              <hr className="md:my-1" />

              <h3 className="md:text-xs font-semibold mt-1">
                Awards and Achievements
              </h3>
              <ul className="list-disc md:text-xxs list-inside">
                {data.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
              <hr className="md:my-1" />
              <h3 className="md:text-xs font-semibold mt-1">
                Personal Projects
              </h3>
              <ul className="list-disc md:text-xxs list-inside">
                {data.personalProjects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
              <hr className="md:my-1" />
              <h3 className="md:text-xs font-semibold mt-1">Languages</h3>
              <ul className="list-disc md:text-xxs list-inside">
                {data.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
              <hr className="md:my-1" />
              <h3 className="md:text-xs font-semibold mt-1">Interests</h3>
              <ul className="list-disc md:text-xxs list-inside">
                {data.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
              <hr className="md:my-1" />
              <h3 className="md:text-xs font-semibold mt-1">References</h3>
              <p className="MD:text-xxs">{data.references}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
