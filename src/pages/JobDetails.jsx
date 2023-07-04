import React, { useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { JobCard } from "../components/JobCard";
import { NavLink, useLocation } from "react-router-dom";

function JobDetail(props) {
  return (
    <div className="flex flex-col text-thm_secondary_color items-start w-full border-b-2 py-2">
      <div className="flex justify-between w-full">
        <div className="text-left">
          <h1 className="font-medium text-black">{props.job.title}</h1>
          <p>{props.job.companyName}</p>
        </div>
        {props.job.img && (
          <div>
            <img src={props.job.img} className="w-14 h-14" alt="" />
          </div>
        )}
      </div>

      <div className="flex justify-between w-full py-2 items-center">
        <p className="flex  items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="inline-block fill-thm_secondary_color"
          >
            <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
          </svg>
          {props.job.address}
        </p>
        <p className="text-sm text-gray-500">{props.job.timeLeft}</p>
      </div>
    </div>
  );
}

export const JobDetails = () => {
  const job1 = {
    title: "IT Officer",
    companyName: "CBE",
    jobType: "Full Time",
    jobStyle: "In Office",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda corporis!",
    address: "Addis Abeba",
    jobTags: ["Programming", "Computer Expert", "Maintenance"],
    timeLeft: "2 Days Ago",
    img: "/boalogo.jpg",
  };
  const job2 = {
    title: "Programmer",
    companyName: "Abyssinia",
    jobType: "Full Time",
    jobStyle: "In Office",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda corporis!",
    address: "Addis Abeba",
    jobTags: ["Programming", "Computer Expert", "Maintenance"],
    timeLeft: "2 Days Ago",
    reviews: 30,
    rate: 5,
    salary: "Not Disclosed",
    applicant: 50,
    img: "/boalogo.jpg",
  };
  const job3 = {
    title: "Frontend Developer",
    companyName: "Gebeya",
    jobType: "Full Time",
    jobStyle: "In Office",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda corporis!",
    address: "Remote",
    jobTags: ["Programming", "Computer Expert", "Maintenance"],
    timeLeft: "2 Days Ago",
    applicant: 30,
    img: "/boalogo.jpg",
  };

  const locationParams = useLocation();
  useEffect(() => {
    console.log("search params state", locationParams);
  }, []);
  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 flex-col md:flex-row my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-6 md:gap-2 lg:gap-10">
      <div className="h-full basis-full md:basis-[60%] lg:basis-[70%] rounded-xl w-full flex flex-col md:px-2 lg:px-0 justify-center gap-5 lg:gap-8">
        <div className="bg-white py-5 px-4 md:px-10 flex flex-col items-start rounded-xl">
          <div className="flex justify-between gap-2 w-full border-b-[1px]">
            <div className="flex flex-col items-start ">
              <h1 className="font-medium text-lg md:text-xl">{job2.title}</h1>
              <div className="flex gap-4 text-thm_secondary_color text-sm font-medium items-center">
                <p className="">{job2.companyName}</p>
                <p className="flex items-center gap-1 ">
                  <img
                    src="\Icon.png"
                    alt="Rate star icon"
                    className="w-4 h-4 inline-block"
                  />
                  <span>{job2.rate}</span>
                </p>{" "}
                <span className="text-gray-300">|</span>
                <p className="text-slate-400">{job2.reviews} Reviews</p>
              </div>
              <div className="text-thm_secondary_color py-3 text-base">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="fill-slate-400"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                  </svg>
                  <span>0 Years</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="fill-slate-400"
                  >
                    <path d="M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18ZM9 5V11.6056L7.4037 14H16.5963L15 11.6056V5H9Z"></path>
                  </svg>
                  <span>{job2.jobStyle}</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="fill-slate-400"
                  >
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                  <span>{job2.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="fill-slate-400"
                  >
                    <path d="M3.00488 3.00293H21.0049C21.5572 3.00293 22.0049 3.45064 22.0049 4.00293V20.0029C22.0049 20.5552 21.5572 21.0029 21.0049 21.0029H3.00488C2.4526 21.0029 2.00488 20.5552 2.00488 20.0029V4.00293C2.00488 3.45064 2.4526 3.00293 3.00488 3.00293ZM4.00488 5.00293V19.0029H20.0049V5.00293H4.00488ZM8.50488 14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049C8.62417 13.0029 7.50488 11.8836 7.50488 10.5029C7.50488 9.12222 8.62417 8.00293 10.0049 8.00293H11.0049V6.00293H13.0049V8.00293H15.5049V10.0029H10.0049C9.72874 10.0029 9.50488 10.2268 9.50488 10.5029C9.50488 10.7791 9.72874 11.0029 10.0049 11.0029H14.0049C15.3856 11.0029 16.5049 12.1222 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029H8.50488V14.0029Z"></path>
                  </svg>
                  <span>{job2.salary}</span>
                </p>
              </div>
            </div>
            <img
              src="\boalogo.jpg"
              className="md:w-24 md:h-24 h-16 w-16 rounded-lg border-[1px]"
              alt="Company logo"
            />
          </div>
          <div className="text-thm_secondary_color flex gap-3 py-2 text-sm">
            <p className="">
              Posted: <span className="font-medium">{job2.timeLeft}</span>
            </p>
            <span className="text-gray-300">|</span>
            <p className="">
              Job Applicant:{" "}
              <span className="font-medium">{job2.applicant}</span>
            </p>
          </div>
        </div>
        <div className="bg-white py-5 px-4 md:px-10 flex gap-2 flex-col items-start rounded-xl tracking-wide">
          <h1 className="text-lg font-medium">Job Description</h1>
          <div className="flex flex-col gap-4 items-start border-b-2 pb-4 w-full">
            <div className="text-left">
              <h1 className=" font-medium">Job Responsibilities:</h1>
              <ul className="flex flex-col p-5 gap-1 list-disc text-thm_secondary_color text-sm text-left">
                <li>
                  Provide technical leadership in designing, developing and
                  implementing Oracle ATG Commerce solutions and Endeca search
                  engine
                </li>
                <li>
                  Design and architect highly scalable, reliable and available
                  eCommerce systems
                </li>
                <li>
                  Conduct code review, performance tuning and provide guidance
                  to development team
                </li>
                <li>
                  Develop custom solutions for Oracle ATG Commerce based on
                  business requirements
                </li>
                <li>
                  Collaborate with cross-functional teams including business
                  stakeholders, product owners, development teams, QA teams and
                  other architects to drive technology decisions
                </li>
                <li>
                  Develop and maintain technical documentation and project
                  artifacts
                </li>
                <li>
                  Stay up-to-date with emerging trends and technologies in
                  eCommerce domain and provide thought leadership in this area
                </li>
                <li>
                  Provide guidance to junior team members and mentor them in
                  developing their technical skills
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h1 className=" font-medium">Required Skills:</h1>
              <ul className="flex flex-col p-5 gap-1 list-disc text-thm_secondary_color text-sm text-left">
                <li>
                  Strong hands-on experience in Oracle ATG Commerce (Version 11
                  or above) and Endeca search engine
                </li>
                <li>Experience in Liferay CMS and eCommerce domain</li>
                <li>
                  Expertise in designing and architecting highly scalable and
                  available eCommerce systems
                </li>
                <li>
                  Proven experience in code review and performance tuning of
                  Oracle ATG Commerce applications
                </li>
                <li>
                  Excellent understanding of software design principles,
                  patterns and architecture best practices
                </li>
                <li>
                  Strong knowledge of Java, J2EE, Spring, Hibernate, SQL and
                  NoSQL databases
                </li>
                <li>
                  Experience in designing and implementing RESTful APIs and
                  microservices architecture
                </li>
                <li>
                  Good understanding of DevOps practices, cloud technologies and
                  containerization tools like Docker and Kubernetes
                </li>
                <li>
                  Excellent communication, collaboration and leadership skills
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h1 className=" font-medium">Preferred Skills:</h1>
              <ul className="flex flex-col p-5 gap-1 list-disc text-thm_secondary_color text-sm text-left">
                <li>
                  Experience in integrating Oracle ATG Commerce with third-party
                  systems such as payment gateways, shipping carriers and tax
                  calculators
                </li>
                <li>
                  Knowledge of Agile methodologies and experience in working in
                  Agile environments
                </li>
              </ul>
            </div>
            <div className="flex text-sm gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Role: </h1>
              <p>Technical Lead</p>
            </div>
            <div className="flex text-sm gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Industry Type:</h1>
              <p> IT Services & Consulting</p>
            </div>
            <div className="flex text-sm gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Department:</h1>
              <p> Engineering - Software & QA</p>
            </div>
            <div className="flex text-sm gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Employment Type:</h1>
              <p> Full Time, Permanent</p>
            </div>
            <div className="flex text-sm gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Role Category: </h1>
              <p> IT & Information Security - Other</p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-medium text-black">Education</h1>
              <div className="flex text-sm gap-2 text-thm_secondary_color">
                <h1 className="font-medium text-black">UG:</h1>
                <p> Any Graduate</p>
              </div>
            </div>
            <div className="flex flex-col text-sm items-start gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Key Skills</h1>
              <div className="flex gap-5 w-full flex-wrap text-xs">
                <p className="border-2 py-1 px-3 rounded-lg">Design</p>
                <p className="border-2 py-1 px-3 rounded-lg">Development</p>
                <p className="border-2 py-1 px-3 rounded-lg">Implementation</p>
                <p className="border-2 py-1 px-3 rounded-lg">
                  Oracle ATG Commerce implementation
                </p>
                <p className="border-2 py-1 px-3 rounded-lg">
                  Oracle ATG Commerce Development
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row justify-between w-full">
            <ul className="flex justify-center gap-5 py-2">
              <li>
                <img
                  src="/telegramlogo.png"
                  alt="Social media link logo"
                  className="w-8"
                />
              </li>
              <li>
                <img
                  src="/gmaillogo2.png"
                  alt="Social media link logo"
                  className="w-8"
                />
              </li>
              <li>
                <img
                  src="/facebooklogo2.png"
                  alt="Social media link logo"
                  className="w-8"
                />
              </li>
              <li>
                <img
                  src="/linkedinlogo2.png"
                  alt="Social media link logo"
                  className="w-8"
                />
              </li>
            </ul>
            <button className="bg-thm_root1_color shadow-md py-2 hover:bg-blue-600 shadow-thm_secondary_color text-white font-medium px-6 rounded-3xl">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white py-5 px-6 md:px-10 flex gap-2 flex-col items-start rounded-xl">
          <h1 className="text-lg font-medium">About company</h1>
          <p className="text-thm_secondary_color text-sm text-left tracking-wide">
            A Silicon-Valley headquartered company, Infogain is a global
            business oriented IT consulting provider of front-end,
            customer-facing technologies, processes and applications, leading to
            a more efficient and streamlined customer experience. We want our
            clients€™ interactions with their customers to be fast, efficient,
            and cost effective. With close to 4,000 employees in the United
            States, India, the Middle East, U.K., Singapore and Malaysia, we
            service 5 of the world€™s largest 50 companies, and 24 of the
            Fortune 500. we have million-dollar engagements with over 25
            customers, many of which have been with us for 5 years or more. At
            Infogain, we place a high value on establishing long-term
            relationships with our clients, ultimately becoming virtual
            extensions of their organizations. In fact, more than 90% of our
            medium and large deal size clients from five years ago remain
            clients today. Why? Our consultants, project managers and
            engineering teams listen and address our clients€™ specific
            requirements with best-in-class solutions across a broad spectrum of
            service areas. Infogain is an Oracle Knowledge Management Expert,
            having the world€™s largest practice to improve customer support
            operations and boost satisfaction in High Tech, Insurance, Travel &
            Hospitality and Retail. We are also a global leader in Oracle
            Retail€™s customer facing products. For insurance companies,
            Infogain helps make the claims process more efficient, effective and
          </p>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="font-medium text-black">Company Info</h1>
            <div className="flex text-sm gap-2 text-thm_secondary_color">
              <h1 className="font-medium text-black">Address:</h1>
              <p>
                {" "}
                A-16 and A-21,,,SECTOR 60,NOIDA, NOIDA, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side bar */}
      <div className="flex basis-full md:basis-[40%] xl:basis-[30%]   bg-thm_background items-start rounded-xl h-full flex-wrap md:flex-col text-thm_primary_color shadow-lg gap-2 lg:gap-6 p-5 md:p-5 lg:p-10 ">
        <h1 className="font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-0 w-full text-left">
          Jobs you might be interested in
        </h1>
        <JobDetail job={job1} />
        <JobDetail job={job2} />
        <JobDetail job={job3} />
        <NavLink
          to="/jobs"
          className="border-2 border-thm_root1_color px-4 mx-auto rounded-lg self-center text-thm_root1_color"
        >
          View All
        </NavLink>
      </div>
    </div>
  );
};
