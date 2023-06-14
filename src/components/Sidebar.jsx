import React, { useState } from "react";

export const Sidebar = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(30);
  const [workModeExpanded, setWorkModeExpanded] = useState(false);
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [departmentExpanded, setDepartmentExpanded] = useState(false);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const [locationAccordionExpanded, setLocationAccordionExpanded] =
    useState(false);

  const workModeAccordionToggleExpanded = () =>
    setWorkModeExpanded((current) => !current);
  const experienceAccordionToggleExpanded = () =>
    setExperienceExpanded((current) => !current);
  const locationAccordionToggleExpanded = () =>
    setLocationAccordionExpanded((current) => !current);
  const departmentAccordionToggleExpanded = () =>
    setDepartmentExpanded((current) => !current);
  const companyAccordionToggleExpanded = () =>
    setCompanyExpanded((current) => !current);
  const handleYearsOfExperienceChange = (event) => {
    setYearsOfExperience(event.target.value);
  };
  return (
    <div className="flex basis-full md:basis-[40%] xl:basis-1/5 bg-thm_background items-start rounded-xl h-full flex-wrap md:flex-col border-2 text-thm_primary_color shadow-lg gap-2 lg:gap-6 p-2 md:p-5 lg:p-10 ">
      <h1 className="border-b-2 text-base font-medium md:text-xl lg:text-xl pb-2 md:pb-4 lg:pb-7 w-full text-left">
        All Filters
      </h1>
      <div className="flex flex-col mx-auto border-b-2 pb-2 md:pb-5 lg:pb-5 w-full">
        <div
          className="font-medium md:text-lg text-sm lg:text-base flex items-center justify-between w-full "
          onClick={workModeAccordionToggleExpanded}
        >
          <h1 className="md:text-lg text-base">Work Mode</h1>
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
        <ul
          className={`overflow-hidden transition-[max-height] text-left text-sm text-thm_secondary_color duration-100 ease-in flex flex-col pt-2 lg:pt-4 gap-2 md:gap-3 lg:gap-5 ${
            workModeExpanded ? "max-h-fit" : "max-h-0 "
          }`}
        >
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0">
            <input
              type="checkbox"
              name="office"
              value="Wor from office"
              id="office"
              className="md:w-4"
            />
            <label
              htmlFor="office"
              for="office"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Work from office
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0">
            <input
              type="checkbox"
              name="remote"
              id="remote"
              className="md:w-4"
            />
            <label
              htmlFor="remote"
              for="remote"
              className="md:px-2 pl-1 md:pl-2  font-medium"
            >
              Work from home
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0">
            <input
              type="checkbox"
              name="hybrid"
              id="hybrid"
              className="md:w-4"
            />
            <label
              htmlFor="hybrid"
              for="hybrid"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Hybrid
            </label>
          </li>
          <li className="lg:text-base md:text-sm text-xs flex lg:gap-0">
            <input
              type="checkbox"
              name="temporary"
              id="temporary"
              className="md:w-4"
            />
            <label
              htmlFor="temporary"
              for="temporary"
              className="md:px-2 pl-1 font-medium"
            >
              Temp. WFH dut to covid
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:gap-4  border-b-2 md:pb-5 lg:pb-5 pb-3 w-full">
        <div
          className="font-medium md:text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={experienceAccordionToggleExpanded}
        >
          <h1 className="font-medium  md:text-lg lg:text-lg text-left">
            Experience
          </h1>
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
            value={yearsOfExperience}
            onChange={handleYearsOfExperienceChange}
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:-mb-2 px-1 md:px-2 py-1  md:py-2 bg-gray-800 text-white text-xs md:text-sm rounded">
            <span className="font-bold">{yearsOfExperience}</span>
          </div>
          <div className="flex justify-between text-thm_secondary_color tracking-wide text-sm md:text-base lg:text-base font-medium">
            <p>O Yr</p>
            <p>30 Yrs</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
        <div
          className="font-medium text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={locationAccordionToggleExpanded}
        >
          <h1 className="font-medium text-base lg:text-lg">Location</h1>
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
          className={`overflow-hidden transition-[max-height] text-left text-thm_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
            locationAccordionExpanded ? "max-h-full" : "max-h-0 "
          }`}
        >
          <li className="lg:text-lg md:text-sm text-xs flex lg:gap-1">
            <input
              type="checkbox"
              name="addis abeba"
              value="addis abeba"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="addis abeba"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Addis Abeba
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="hawassa"
              value="hawassa"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="hawassa"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Hawassa
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="adama"
              value="adama"
              id=""
              className=" md:w-4"
            />
            <label htmlFor="adama" className="md:px-2 pl-1 md:pl-2 font-medium">
              Adama
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="dire dawa"
              value="dire dawa"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="dire dawa"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Dire Dawa
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="bahir dar"
              value="bahir dar"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="bahir dar"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Bahir Dar
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="mekele"
              value="mekele"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="mekele"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Mekele
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="jimma"
              value="jimma"
              id=""
              className=" md:w-4"
            />
            <label htmlFor="jimma" className="md:px-2 pl-1 md:pl-2 font-medium">
              Jimma
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="gondar"
              value="gondar"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="gondar"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Gondar
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="harar"
              value="harar"
              id=""
              className="md:w-4"
            />
            <label htmlFor="harar" className="md:px-2 pl-1 md:pl-2 font-medium">
              Harar
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="jijiga"
              value="jijiga"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="jijiga"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Jijiga
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="dessie"
              value="dessie"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="dessie"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Dessie
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="debre birhan"
              value="debre birhan"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="debre birhan"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Debre Birhan
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="aksum"
              value="aksum"
              id=""
              className="md:w-4"
            />
            <label htmlFor="aksum" className="md:px-2 pl-1 md:pl-2 font-medium">
              Aksum
            </label>
          </li>
        </div>
      </ul>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
        <div
          className="font-medium text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={departmentAccordionToggleExpanded}
        >
          <h1 className="font-medium md:text-lg text-base">Department</h1>
          {departmentExpanded ? (
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
          className={`overflow-hidden transition-[max-height] text-left text-thm_secondary_color duration-500 ease-in flex flex-col gap-2 md:gap-5 ${
            departmentExpanded ? "max-h-full" : "max-h-0 "
          }`}
        >
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="bankingandinsurance"
              value="banking and insurance"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="bankingandinsurance"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Banking & Insurance
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="salesandmarketing"
              value="sales and markating"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="salesandmarketing"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Sales & Marketing
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="management"
              value="management"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="management"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Management
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="softwareEng"
              value="software engineering"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="softwareEng"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Software Engineering
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="financeandaccounting"
              value="finance and accounting"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="financeandaccounting"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Finance & Accounting
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="engineering"
              value="engineering"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="engineering"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Engineering
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="human resource"
              value="human resource"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="human resource"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Human Resource
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="health"
              value="health"
              id=""
              className="md:w-4"
            />
            <label
              htmlFor="health"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Health
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="legal"
              value="legal"
              id=""
              className="md:w-4"
            />
            <label htmlFor="legal" className="md:px-2 pl-1 md:pl-2 font-medium">
              Legal
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="ngo"
              value="ngo"
              id=""
              className=" md:w-4"
            />
            <label htmlFor="ngo" className="md:px-2 pl-1 md:pl-2 font-medium">
              NGO
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="analytics"
              value="analytics"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="analytics"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Analytics
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="remote"
              value="remote"
              id=""
              className=" md:w-4"
            />
            <label
              htmlFor="remote"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Remote
            </label>
          </li>
        </div>
      </ul>
      <ul className="flex flex-col gap-2 md:gap-3 lg:gap-6 items-start w-full border-b-2 md:pb-5 lg:pb-2">
        <div
          className="font-medium text-xl lg:text-xl flex items-center justify-between w-full"
          onClick={companyAccordionToggleExpanded}
        >
          <h1 className="font-medium md:text-lg text-base">Company Type</h1>
          {companyExpanded ? (
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
            companyExpanded ? "max-h-full" : "max-h-0 "
          }`}
        >
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="private"
              value="private"
              id="private"
              className="md:w-4"
            />
            <label
              htmlFor="private"
              for="private"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Private
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="governmental"
              value="governmental"
              id="governmental"
              className="md:w-4"
            />
            <label
              htmlFor="governmental"
              for="governmental"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Governmental
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="corporate"
              value="corporate"
              id="corporate"
              className=" md:w-4"
            />
            <label
              htmlFor="corporate"
              for="corporate"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Corporate
            </label>
          </li>
          <li className="lg:text-lg md:text-sm text-xs  flex lg:gap-1">
            <input
              type="checkbox"
              name="startup"
              value="startup"
              id="startup"
              className="md:w-4"
            />
            <label
              htmlFor="startup"
              for="startup"
              className="md:px-2 pl-1 md:pl-2 font-medium"
            >
              Startup
            </label>
          </li>
        </div>
      </ul>
    </div>
  );
};
