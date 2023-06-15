import React from "react";

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
  return (
    <div className="flex w-full justify-center items-center">
      <div className="bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-500 py-4 px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 rounded-full"
                  src="/profile.jpg"
                  alt="Profile"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-4xl font-bold text-white">{data.name}</h1>
                <h2 className="text-2xl font-semibold text-white">
                  {data.jobTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="my-4">
              <p className="text-sm">{data.contactInformation.email}</p>
              <p className="text-sm">{data.contactInformation.phone}</p>
              <p className="text-sm">{data.contactInformation.address}</p>
            </div>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Profile Summary</h3>
            <p>{data.profileSummary}</p>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Work Experience</h3>
            {data.workExperience.map((experience, index) => (
              <div key={index} className="my-4">
                <h4 className="text-xl font-semibold">
                  {experience.company} - {experience.jobTitle}
                </h4>
                <p className="text-sm">
                  {experience.location} | {experience.startDate} -{" "}
                  {experience.endDate}
                </p>
                <ul className="list-disc list-inside">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Education</h3>
            <p>{data.education.degree}</p>
            <p>
              {data.education.university}, {data.education.location}
            </p>
            <p>Graduation Year: {data.education.graduationYear}</p>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Skills</h3>
            <ul className="list-disc list-inside">
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">
              Awards and Achievements
            </h3>
            <ul className="list-disc list-inside">
              {data.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Personal Projects</h3>
            <ul className="list-disc list-inside">
              {data.personalProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Languages</h3>
            <ul className="list-disc list-inside">
              {data.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">Interests</h3>
            <ul className="list-disc list-inside">
              {data.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mt-4">References</h3>
            <p>{data.references}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
