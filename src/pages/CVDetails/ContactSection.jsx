import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

export const ContactSection = () => {
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
    <form
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 md:px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
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
          to={-1}
          className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
        >
          Back
        </NavLink>
        <NavLink
          to="/CV-Details/1/Experience-Section"
          className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
        >
          Continue
        </NavLink>
      </div>
    </form>
  );
};
