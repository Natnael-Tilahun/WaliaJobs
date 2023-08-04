import React, { useState, useRef, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const AddAdditionalSection = () => {
  const data = {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    contactInformation: {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main Street, City, Country',
    },
    profileSummary:
      'Experienced software engineer with a focus on web development and a passion for creating scalable and efficient applications.',
    workExperience: [
      {
        company: 'ABC Company',
        jobTitle: 'Software Engineer',
        location: 'City, Country',
        startDate: '2018',
        endDate: 'Present',
        responsibilities: [
          'Developed and maintained web applications using React and Node.js.',
          'Collaborated with cross-functional teams to deliver high-quality software solutions.',
          'Implemented efficient algorithms to optimize application performance.',
        ],
      },
      {
        company: 'XYZ Corporation',
        jobTitle: 'Frontend Developer',
        location: 'City, Country',
        startDate: '2016',
        endDate: '2018',
        responsibilities: [
          'Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.',
          'Worked closely with UI/UX designers to create visually appealing and user-friendly web applications.',
          'Performed code reviews and provided technical guidance to junior developers.',
        ],
      },
    ],
    education: {
      degree: 'Bachelor of Science in Computer Science',
      university: 'University of ABC',
      location: 'City, Country',
      graduationYear: '2016',
    },
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    awards: ['Best Employee of the Year', 'Outstanding Achievement Award'],
    personalProjects: [
      'Personal Blog - Built a blog website using React and Express.',
      'Portfolio Website - Developed a portfolio website to showcase my projects.',
    ],
    languages: ['English', 'Spanish'],
    interests: ['Reading', 'Traveling', 'Playing guitar'],
    references: ['Available upon request'],
  };
  const [jobTitle, setJobTitle] = useState('Developer');
  const [employer, setEmployer] = useState("Dagi's Spa");
  const [city, setCity] = useState('Addis Abeba');
  const [country, setCountry] = useState('Ethiopia');
  const [startDate, setStartDate] = useState('01/02/2021');
  const [endDate, setEndDate] = useState('10/07/2023');
  const [isCurrentlyWorkingThere, setIsCurrentlyWorkingThere] = useState(false);

  const jobTitleRef = useRef();
  const employerRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const isCurrentlyWorkingThereRef = useRef();
  const [editorValue, setEditorValue] = useState('');

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  return (
    <form
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-3 md:px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Need to add any more sections?
        </h1>
      </div>
      <div className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full lg:p-5">
        <div className=" w-full h-auto flex flex-col gap-3 md:gap-5 lg:py-5">
          {/* <div className="flex flex-col gap-4 justify-center p-5"> */}
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="language"
              className="w-4"
              name="language"
            />
            <label htmlFor="language">Language</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="certifications"
              className="w-4"
              name="certifications"
            />
            <label htmlFor="certifications">Certifications</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="accomplishments"
              className="w-4"
              name="accomplishments"
            />
            <label htmlFor="accomplishments">Accomplishments</label>
          </div>
          <div className="flex gap-8  text-lg">
            <input
              type="checkbox"
              id="additionalInformation"
              className="w-4"
              name="additionalInformation"
            />
            <label htmlFor="additionalInformation">
              Additional Information
            </label>
          </div>
          {/* </div> */}
        </div>
        <NavLink
          to={-1}
          className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[40%] xl:basis-[25%]"
        >
          Back
        </NavLink>
        <NavLink
          to="/CV-Details/1/Education-Section"
          className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[40%] xl:basis-[25%]"
        >
          Continue
        </NavLink>
        {/* <div
          className="w-full prose"
          dangerouslySetInnerHTML={{ __html: editorValue }}
        /> */}
        {/* <FormattedTextDisplay value={quillValue} /> */}
      </div>
    </form>
  );
};
