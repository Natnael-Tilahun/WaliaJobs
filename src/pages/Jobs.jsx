import React, { useState } from "react";

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
    <div className="w-full text-center md:py-10 bg-[#F5F5F5] py-5 my-5 flex md:my-0 px-5 md:px-10 lg:px-20 gap-10">
      <div className="flex basis-1/5 bg-white items-start rounded-xl h-full flex-col border-2 shadow-lg gap-6 p-10 ">
        <h1 className="border-b-2 font-medium text-black text-2xl pb-7 w-full text-left">
          All Filters
        </h1>
        <ul className="flex flex-col mx-auto border-b-2 pb-8 w-full">
          <div
            className="font-medium text-2xl flex items-center justify-between w-full "
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
            className={`overflow-hidden transition-[max-height] duration-100 ease-in flex flex-col pt-4 gap-5 ${
              workModeExpanded ? "max-h-fit" : "max-h-0 "
            }`}
          >
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="office"
                value="Wor from office"
                id=""
                className="w-5"
              />
              <label
                htmlFor="office"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Work from office
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input type="checkbox" name="remote" id="" className="w-5" />
              <label
                htmlFor="remote"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Work from home
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input type="checkbox" name="hybrid" id="" className="w-5" />
              <label
                htmlFor="hybrid"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Hybrid
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input type="checkbox" name="temporary" id="" className="w-5" />
              <label
                htmlFor="temporary"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Temp. WFH dut to covid
              </label>
            </li>
          </div>
        </ul>
        <div className="flex flex-col gap-4  border-b-2 pb-8 w-full">
          <div
            className="font-medium text-2xl flex items-center justify-between w-full"
            onClick={experienceAccordionToggleExpanded}
          >
            <h1 className="font-medium text-2xl text-left">Experience</h1>
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
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded">
              <span className="font-bold">{value}</span>
            </div>
            <div className="flex justify-between text-gray-600 tracking-wide text-xl font-medium">
              <p>O Yr</p>
              <p>30 Yrs</p>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-6 items-start w-full border-b-2 pb-8">
          <div
            className="font-medium text-2xl flex items-center justify-between w-full"
            onClick={locationAccordionToggleExpanded}
          >
            <h1 className="font-medium text-2xl">Location</h1>
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
            className={`overflow-hidden transition-[max-height] duration-500 ease-in flex flex-col gap-5 ${
              locationAccordionExpanded ? "max-h-full" : "max-h-0 "
            }`}
          >
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="addis abeba"
                value="addis abeba"
                id=""
                className="w-5"
              />
              <label
                htmlFor="addis abeba"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Addis Abeba
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="hawassa"
                value="hawassa"
                id=""
                className="w-5"
              />
              <label
                htmlFor="hawassa"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Hawassa
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="adama"
                value="adama"
                id=""
                className="w-5"
              />
              <label
                htmlFor="adama"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Adama
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="dire dawa"
                value="dire dawa"
                id=""
                className="w-5"
              />
              <label
                htmlFor="dire dawa"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Dire Dawa
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="bahir dar"
                value="bahir dar"
                id=""
                className="w-5"
              />
              <label
                htmlFor="bahir dar"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Bahir Dar
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="mekele"
                value="mekele"
                id=""
                className="w-5"
              />
              <label
                htmlFor="mekele"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Mekele
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="jimma"
                value="jimma"
                id=""
                className="w-5"
              />
              <label
                htmlFor="jimma"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Jimma
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="gondar"
                value="gondar"
                id=""
                className="w-5"
              />
              <label
                htmlFor="gondar"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Gondar
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="harar"
                value="harar"
                id=""
                className="w-5"
              />
              <label
                htmlFor="harar"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Harar
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="jijiga"
                value="jijiga"
                id=""
                className="w-5"
              />
              <label
                htmlFor="jijiga"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Jijiga
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="dessie"
                value="dessie"
                id=""
                className="w-5"
              />
              <label
                htmlFor="dessie"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Dessie
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="debre birhan"
                value="debre birhan"
                id=""
                className="w-5"
              />
              <label
                htmlFor="debre birhan"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Debre Birhan
              </label>
            </li>
            <li className="text-xl flex gap-4">
              <input
                type="checkbox"
                name="aksum"
                value="aksum"
                id=""
                className="w-5"
              />
              <label
                htmlFor="aksum"
                className="px-2 text-xl text-gray-600 font-medium"
              >
                Aksum
              </label>
            </li>
          </div>
        </ul>
      </div>
      <div className="bg-white shadow-lg h-full basis-3/4 rounded-xl w-full">
        details
      </div>
    </div>
  );
};
