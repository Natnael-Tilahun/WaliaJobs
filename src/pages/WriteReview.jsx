import React, { useState } from "react";
import { Rating } from "../components/Rating";

export const WriteReview = () => {
  const [rateValue, setRateValue] = useState({
    ["Overall Rating"]: 0,
    ["Work-Life balance"]: 0,
    ["Salary & Benefits"]: 0,
    ["Promotions / Appraisal"]: 0,
    ["Job Security"]: 0,
    ["Skill Development / Learning"]: 0,
    ["Work Satisfaction"]: 0,
    ["Company Culture"]: 0,
  });

  const [hoverValues, setHoverValue] = useState({
    ["Overall Rating"]: 0,
    ["Work-Life balance"]: 0,
    ["Salary & Benefits"]: 0,
    ["Promotions / Appraisal"]: 0,
    ["Job Security"]: 0,
    ["Skill Development / Learning"]: 0,
    ["Work Satisfaction"]: 0,
    ["Company Culture"]: 0,
  });

  function handleSetReviewTextAndIcon(rateValue, hoverValue) {
    if ((hoverValue || rateValue) == 5) {
      return (
        <div className="flex gap-2 items-center">
          <p>Excellent</p>
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-green-600"
              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
            ></path>
          </svg>
        </div>
      );
    } else if ((hoverValue || rateValue) == 4) {
      return (
        <div className="flex gap-2 items-center">
          <p>Good</p>
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-green-500"
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H7ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"
            ></path>
          </svg>
        </div>
      );
    } else if ((hoverValue || rateValue) == 3) {
      return (
        <div className="flex gap-2 items-center">
          <p>Average</p>
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-yellow-500"
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8 14V16H16V14H8ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"
            ></path>
          </svg>
        </div>
      );
    } else if ((hoverValue || rateValue) == 2) {
      return (
        <div className="flex gap-2 items-center">
          <p>Poor</p>
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-red-400"
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 17H9C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17H17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"
            ></path>
          </svg>
        </div>
      );
    } else if ((hoverValue || rateValue) == 1) {
      return (
        <div className="flex gap-2 items-center">
          <p>Terrible</p>
          <svg
            className="w-6 h-6 lg:w-8 lg:h-8 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-red-600"
              d="M12 2C17.5228 2 22 6.47715 22 12C22 13.6169 21.6162 15.1442 20.9348 16.4958C20.8633 16.2175 20.7307 15.9523 20.5374 15.7206L20.4142 15.5858L19 14.1716L17.5858 15.5858L17.469 15.713C16.8069 16.4988 16.8458 17.6743 17.5858 18.4142C18.014 18.8424 18.588 19.0358 19.148 18.9946C17.3323 20.8487 14.8006 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 15C10.6199 15 9.37036 15.5592 8.46564 16.4633L8.30009 16.6368L9.24506 17.4961C10.035 17.1825 10.982 17 12 17C12.9049 17 13.7537 17.1442 14.4859 17.3965L14.7549 17.4961L15.6999 16.6368C14.7853 15.6312 13.4664 15 12 15ZM8.5 10C7.67157 10 7 10.6716 7 11.5C7 12.3284 7.67157 13 8.5 13C9.32843 13 10 12.3284 10 11.5C10 10.6716 9.32843 10 8.5 10ZM15.5 10C14.6716 10 14 10.6716 14 11.5C14 12.3284 14.6716 13 15.5 13C16.3284 13 17 12.3284 17 11.5C17 10.6716 16.3284 10 15.5 10Z"
            ></path>
          </svg>
        </div>
      );
    } else {
      return "";
    }
  }

  const handleSetState = (keys, value) => {
    console.log(keys, value);
    setRateValue((prevState) => ({ ...prevState, [keys]: value }));
  };

  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex bg-thm_background md:py-10  py-5 flex-col  my-0  md:my-0 md:px-3 lg:px-20   border-b-2 gap-3 md:gap-2 px-5   w-full">
        <h1 className="text-lg md:text-3xl text-center uppercase font-bold">
          Rate your company, anonymously!
        </h1>
        <p className="text-sm text-thm_secondary_color md:text-lg text-center">
          Your voice matters, make it heard.
        </p>
      </div>
      <div className="flex gap-10 md:pb-10 flex-col items-center text-sm md:text-base lg:text-lg py-5  md:px-5 lg:px-20 px-3">
        <div className="grid bg-thm_background grid-cols-1 shadow-xl border-[1px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:w-[70%] flex-col gap-3 md:gap-7 lg:gap-16 lg:gap-y-8 xl:gap-10 md:flex-row py-5 lg:py-14 px-6">
          <label className="p-2 flex flex-col gap-2 col-span-1 lg:col-span-2 font-medium">
            <p>
              Company Name <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 border-2 relative rounded-md ring-thm_root1_color"
            />
          </label>
          <label className="p-2 flex flex-col col-span-1 lg:col-span-2 gap-2 font-medium">
            <p>
              Designation / Job Title
              <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 border-2 relative rounded-md ring-thm_root1_color"
            />
          </label>
          <label className="p-2 flex flex-col gap-2 col-span-full lg:col-span-4 font-medium">
            <p>
              Do you currently work here?
              <span className=" text-red-500">*</span>
            </p>
            <div className="flex flex-col md:flex-row gap-8  lg:gap-20">
              <div className="w-full flex flex-col gap-3 lg:gap-5">
                <label
                  htmlFor="yes"
                  className="w-full  flex gap-3 rounded-lg p-1 bg-blue-100"
                >
                  <input
                    type="checkbox"
                    name="Yes"
                    id="yes"
                    className="w-5"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label className=" flex flex-col gap-2 font-medium">
                  <p>
                    Started working on
                    <span className=" text-red-500">*</span>
                  </p>
                  <input
                    type="date"
                    placeholder="Company Name"
                    className="p-2 border-2 relative rounded-md ring-thm_root1_color"
                  />
                </label>
              </div>
              <div className="w-full flex flex-col gap-3 lg:gap-5">
                <label
                  htmlFor="no"
                  className="w-full flex gap-3 rounded-lg p-1 bg-blue-100"
                >
                  <input
                    type="checkbox"
                    name="No"
                    id="no"
                    className="w-5"
                    value="No"
                  />
                  <span>No</span>
                </label>
                <label className=" flex flex-col gap-2 font-medium">
                  <p>
                    Employment ended on
                    <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="date"
                    placeholder="Company Name"
                    className="p-2 border-2 relative rounded-md ring-thm_root1_color"
                  />
                </label>
              </div>
            </div>
          </label>
          <label className="p-2 flex flex-col gap-3 lg:gap-5 text-xs md:text-base col-span-full xl:col-span-4  font-medium">
            <p className="text-sm md:text-lg lg:text-lg">
              Rate the company on the following criteria
            </p>
            <div className="grid grid-cols-3  col-span-full gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Overall Rating <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Overall Rating"]}
                handleSetState={handleSetState}
                keys="Overall Rating"
                hoverValue={hoverValues["Overall Rating"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Overall Rating"],
                hoverValues["Overall Rating"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Work-Life balance
                <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Work-Life balance"]}
                handleSetState={handleSetState}
                keys="Work-Life balance"
                hoverValue={hoverValues["Work-Life balance"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Work-Life balance"],
                hoverValues["Work-Life balance"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Salary & Benefits
                <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Salary & Benefits"]}
                handleSetState={handleSetState}
                keys="Salary & Benefits"
                hoverValue={hoverValues["Salary & Benefits"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Salary & Benefits"],
                hoverValues["Salary & Benefits"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Promotions / Appraisal
                <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Promotions / Appraisal"]}
                handleSetState={handleSetState}
                keys="Promotions / Appraisal"
                hoverValue={hoverValues["Promotions / Appraisal"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Promotions / Appraisal"],
                hoverValues["Promotions / Appraisal"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Job Security
                <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Job Security"]}
                handleSetState={handleSetState}
                keys="Job Security"
                hoverValue={hoverValues["Job Security"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Job Security"],
                hoverValues["Job Security"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Skill Development / Learning
                <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Skill Development / Learning"]}
                handleSetState={handleSetState}
                keys="Skill Development / Learning"
                hoverValue={hoverValues["Skill Development / Learning"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Skill Development / Learning"],
                hoverValues["Skill Development / Learning"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Work Satisfaction
                <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Work Satisfaction"]}
                handleSetState={handleSetState}
                keys="Work Satisfaction"
                hoverValue={hoverValues["Work Satisfaction"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Work Satisfaction"],
                hoverValues["Work Satisfaction"]
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-20 justify-between items-center  text-thm_secondary_color">
              <p>
                Company Culture <span className=" text-red-500">*</span>
              </p>
              <Rating
                value={rateValue["Company Culture"]}
                handleSetState={handleSetState}
                keys="Company Culture"
                hoverValue={hoverValues["Company Culture"]}
                setHoverValue={setHoverValue}
              />
              {handleSetReviewTextAndIcon(
                rateValue["Company Culture"],
                hoverValues["Company Culture"]
              )}
            </div>
          </label>
          <label className="p-2 flex flex-col col-span-full lg:col-span-3 gap-2 font-medium">
            <p>
              What do you like about working at your company?
              <span className="text-red-500">*</span>
            </p>
            <textarea
              type="text"
              placeholder="Likes"
              className="p-2 border-2 relative rounded-md ring-thm_root1_color"
            />
          </label>
          <label className="p-2 flex flex-col col-span-full lg:col-span-3 gap-2 font-medium">
            <p>
              What do you dislike about working at your company?{" "}
              <span className="text-red-500">*</span>
            </p>
            <textarea
              type="text"
              placeholder="Dislikes"
              className="p-2 border-2 relative rounded-md ring-thm_root1_color"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
