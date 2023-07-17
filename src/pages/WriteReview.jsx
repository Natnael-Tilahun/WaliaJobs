import React, { useState } from "react";
import { Rating } from "../components/Rating";

export const WriteReview = () => {
  return (
    <div className="w-full h-full  bg-thm_secondary_background  flex-col  my-0 flex md:my-0  gap-2 lg:gap-10">
      <div className="flex bg-thm_background md:py-10  py-5 flex-col  my-0  md:my-0 md:px-3 lg:px-20   border-b-2 gap-3 md:gap-2 px-5   w-full">
        <h1 className="text-xl md:text-3xl text-center uppercase font-bold">
          Rate your company, anonymously!
        </h1>
        <p className="text-sm text-thm_secondary_color md:text-lg text-center">
          Your voice matters, make it heard.{" "}
        </p>
      </div>
      <div className="flex gap-10 md:pb-10 flex-col text-lg py-5  md:px-5 lg:px-20 px-5">
        <div className="grid bg-thm_background grid-cols-1 shadow-xl border-[1px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 flex-col gap-6 md:gap-10 lg:gap-16 lg:gap-y-8 xl:gap-14 md:flex-row py-5 lg:py-14 px-10">
          <label className="p-2 flex flex-col gap-2 col-span-2 font-medium">
            <p>
              Company Name <span className="text-lg text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 border-2 relative rounded-md ring-thm_root1_color"
            />
          </label>
          <label className="p-2 flex flex-col col-span-2 gap-2 font-medium">
            <p>
              Designation / Job Title
              <span className="text-lg text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 border-2 relative rounded-md ring-thm_root1_color"
            />
          </label>
          <label className="p-2 flex flex-col gap-2 col-span-full font-medium">
            <p>
              Do you currently work here?
              <span className="text-lg text-red-500">*</span>
            </p>
            <div className="flex gap-20">
              <div className="w-full flex flex-col gap-5">
                <label
                  htmlFor="yes"
                  className="w-full text-lg flex gap-3 rounded-lg p-1 bg-blue-100"
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
                    Started working on{" "}
                    <span className="text-lg text-red-500">*</span>
                  </p>
                  <input
                    type="date"
                    placeholder="Company Name"
                    className="p-2 border-2 relative rounded-md ring-thm_root1_color"
                  />
                </label>
              </div>
              <div className="w-full flex flex-col gap-5">
                <label
                  htmlFor="no"
                  className="w-full text-lg flex gap-3 rounded-lg p-1 bg-blue-100"
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
                    <span className="text-lg text-red-500">*</span>
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
          <label className="p-2 flex flex-col gap-5 col-span-4 text-lg font-medium">
            <p>Rate the company on the following criteria</p>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Overall Rating <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Overall Rating" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Work-Life balance
                <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys=" Work-Life balance" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Salary & Benefits
                <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Salary & Benefits" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Promotions / Appraisal
                <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Promotions / Appraisal" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Job Security
                <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Job Securityl" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Skill Development / Learning
                <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Skill Development / Learning" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Work Satisfaction
                <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Work Satisfaction" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-20 justify-between items-center text-lg text-thm_secondary_color">
              <p>
                Company Culture <span className="text-lg text-red-500">*</span>
              </p>
              <Rating keys="Company Culture" />
              <div className="flex gap-2 items-center">
                <p>Excellent</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8"
                >
                  <path
                    className="fill-green-600"
                    d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
