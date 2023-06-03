import React, { useState } from "react";
import { JobCard } from "../components/JobCard";
import { JobsList } from "../components/JobsList";

export const Jobs = () => {
  const [value, setValue] = useState(30);
  const [workModeExpanded, setworkModeExpanded] = useState(false);
  const [experienceExpanded, setexperienceExpanded] = useState(false);
  const [locationAccordionExpanded, setLocationAccordionExpanded] =
    useState(false);

  const workModeAccordionToggleExpanded = () =>
    setworkModeExpanded((current) => !current);
  const experienceAccordionToggleExpanded = () =>
    setexperienceExpanded((current) => !current);
  const locationAccordionToggleExpanded = () =>
    setLocationAccordionExpanded((current) => !current);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="w-full h-full text-center md:py-10 bg-thm_secondary_background py-5 my-0 flex md:my-0 px-2 md:px-3 lg:px-20 gap-2 lg:gap-24">
      <div className="flex basis-[10%] md:basis-1/5 bg-thm_background items-start rounded-xl h-full flex-col border-2 text-thm_primary_color shadow-lg gap-2 md:gap-6 p-2 md:p-10 ">
        <h1 className="border-b-2 font-medium md:text-2xl pb-2 md:pb-7 w-full text-left">
          All Filters
        </h1>
        <ul className="flex flex-col mx-auto border-b-2 pb-2 md:pb-8 w-full">
          <div
            className="font-medium md:text-2xl flex items-center justify-between w-full "
            onClick={workModeAccordionToggleExpanded}
          >
            <h1>Work Mode</h1>
            {workModeExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-gray-600"
              >
                <path
                  d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                  fill=""
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-gray-600"
              >
                <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
              </svg>
            )}
          </div>
          <div
            className={`overflow-hidden transition-[max-height] text-thm_secondary_color duration-100 ease-in flex flex-col pt-2 md:pt-4 gap-2 md:gap-5 ${
              workModeExpanded ? "max-h-fit" : "max-h-0 "
            }`}
          >
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="office"
                value="Wor from office"
                id=""
                className="md:w-5"
              />
              <label htmlFor="office" className="md:px-2 pl-1 font-medium">
                Work from office
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input type="checkbox" name="remote" id="" className="md:w-5" />
              <label htmlFor="remote" className="md:px-2 pl-1  font-medium">
                Work from home
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input type="checkbox" name="hybrid" id="" className="md:w-5" />
              <label htmlFor="hybrid" className="md:px-2 pl-1 font-medium">
                Hybrid
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="temporary"
                id=""
                className="md:w-5"
              />
              <label htmlFor="temporary" className="md:px-2 pl-1 font-medium">
                Temp. WFH dut to covid
              </label>
            </li>
          </div>
        </ul>
        <div className="flex flex-col md:gap-4  border-b-2 md:pb-8 pb-3 w-full">
          <div
            className="font-medium md:text-2xl flex items-center justify-between w-full"
            onClick={experienceAccordionToggleExpanded}
          >
            <h1 className="font-medium md:text-2xl text-left">Experience</h1>
            {experienceExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-gray-600"
              >
                <path
                  d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                  fill=""
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-gray-600"
              >
                <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
              </svg>
            )}
          </div>
          <div
            className={`relative overflow-hidden transition-[max-height] duration-500 ease-in  ${
              experienceExpanded ? "max-h-fit" : "max-h-0 "
            } `}
          >
            <input
              type="range"
              className="range w-full h-2 bg-gray-700 accent-gray-800 rounded-full outline-none"
              min="0"
              max="30"
              value={value}
              onChange={handleChange}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:-mb-2 px-1 md:px-3 py-1 md:py-2 bg-gray-800 text-white text-xs md:text-sm rounded">
              <span className="font-bold">{value}</span>
            </div>
            <div className="flex justify-between text-thm_secondary_color tracking-wide text-sm md:text-xl font-medium">
              <p>O Yr</p>
              <p>30 Yrs</p>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-2 md:gap-6 items-start w-full border-b-2 md:pb-8">
          <div
            className="font-medium md:text-2xl flex items-center justify-between w-full"
            onClick={locationAccordionToggleExpanded}
          >
            <h1 className="font-medium md:text-2xl">Location</h1>
            {locationAccordionExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-gray-600"
              >
                <path
                  d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                  fill=""
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-gray-600"
              >
                <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
              </svg>
            )}
          </div>
          <div
            className={`overflow-hidden transition-[max-height] text-thm_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
              locationAccordionExpanded ? "max-h-full" : "max-h-0 "
            }`}
          >
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="addis abeba"
                value="addis abeba"
                id=""
                className="md:w-5"
              />
              <label htmlFor="addis abeba" className="md:px-2 pl-1 font-medium">
                Addis Abeba
              </label>
            </li>
            <li className="md:text-xl text-sm flex  md:gap-4">
              <input
                type="checkbox"
                name="hawassa"
                value="hawassa"
                id=""
                className="md:w-5"
              />
              <label htmlFor="hawassa" className="md:px-2 pl-1  font-medium">
                Hawassa
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="adama"
                value="adama"
                id=""
                className="md:w-5"
              />
              <label htmlFor="adama" className="md:px-2 pl-1 font-medium">
                Adama
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="dire dawa"
                value="dire dawa"
                id=""
                className="md:w-5"
              />
              <label htmlFor="dire dawa" className="md:px-2 pl-1  font-medium">
                Dire Dawa
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="bahir dar"
                value="bahir dar"
                id=""
                className="md:w-5"
              />
              <label htmlFor="bahir dar" className="md:px-2 pl-1   font-medium">
                Bahir Dar
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="mekele"
                value="mekele"
                id=""
                className="md:w-5"
              />
              <label htmlFor="mekele" className="md:px-2 pl-1  font-medium">
                Mekele
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="jimma"
                value="jimma"
                id=""
                className="md:w-5"
              />
              <label htmlFor="jimma" className="md:px-2 pl-1   font-medium">
                Jimma
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="gondar"
                value="gondar"
                id=""
                className="md:w-5"
              />
              <label htmlFor="gondar" className="md:px-2 pl-1  font-medium">
                Gondar
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="harar"
                value="harar"
                id=""
                className="md:w-5"
              />
              <label htmlFor="harar" className="md:px-2 pl-1   font-medium">
                Harar
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="jijiga"
                value="jijiga"
                id=""
                className="md:w-5"
              />
              <label htmlFor="jijiga" className="md:px-2 pl-1   font-medium">
                Jijiga
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="dessie"
                value="dessie"
                id=""
                className="md:w-5"
              />
              <label htmlFor="dessie" className="md:px-2 pl-1  font-medium">
                Dessie
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="debre birhan"
                value="debre birhan"
                id=""
                className="md:w-5"
              />
              <label
                htmlFor="debre birhan"
                className="md:px-2 pl-1  font-medium"
              >
                Debre Birhan
              </label>
            </li>
            <li className="md:text-xl text-sm flex md:gap-4">
              <input
                type="checkbox"
                name="aksum"
                value="aksum"
                id=""
                className="md:w-5"
              />
              <label htmlFor="aksum" className="md:px-2 pl-1  font-medium">
                Aksum
              </label>
            </li>
          </div>
        </ul>
      </div>
      <div className="h-full basis-[90%] md:basis-3/4 rounded-xl w-full flex flex-col pxs-10">
        <JobCard
          title="IT Officer"
          companyName="CBE"
          jobType="Full Time"
          jobStyle="In Office"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          aperiam numquam harum nisi fugit doloremque porro ipsam laudantium minus
          iusto aliquid beatae, sunt a accusantium in corrupti nihil assumenda
          corporis!"
          address="Addis Abeba"
          jobTags={["Programming", "Computer Expert", "Maintenance"]}
          timeLeft="2 Days Ago"
          img="src/assets/images/cbelogo.jpg"
          className="min-w-[75%] bg-thm_background shadow-lg"
        />
      </div>
    </div>
  );
};
