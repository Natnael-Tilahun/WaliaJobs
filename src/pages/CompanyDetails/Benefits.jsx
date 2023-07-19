import React from "react";
import { ReviewData } from "../../../data/reviews";
import { useParams } from "react-router-dom";

export const Benefits = () => {
  const { id } = useParams();
  console.log("searchParams", id);
  const reviewDetail = ReviewData.filter((review) => review.companyId == id);
  const benefits = reviewDetail.length > 0 && reviewDetail[0].benefits;
  //   .filter((benefit) => {
  //     // Retrieve the first key of the benefit object
  //     const key = Object.keys(benefit)[0];
  //     // Retrieve the corresponding value
  //     const value = benefit[key];
  //     // Return true if the value is true
  //     return value === true;
  //   });
  console.log("benefits", reviewDetail, "benefits", benefits["Job Training"]);
  //   console.log("benefits", reviewDetail, benefits);
  return (
    <div className="flex gap-10 md:pb-10 flex-col  py-5  md:px-5 lg:px-20 px-5">
      <h1 className="font-semibold text-2xl text-center">
        {reviewDetail.length > 0 && reviewDetail[0].companyName} Employee
        Benefits
      </h1>

      <div className="grid grid-cols-1 shadow-xl border-[1px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 flex-col gap-6 md:gap-10 lg:gap-16 xl:gap-14 md:flex-row py-5 lg:py-14 px-5">
        {/* {benefits} */}
        <div
          className={` bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["International Relocation"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">International Relocation</h1>
        </div>
        <div
          className={` bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Free Transport"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
          >
            <path d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V12L4.51334 5.29775C4.80607 4.51715 5.55231 4 6.386 4H17.614C18.4477 4 19.1939 4.51715 19.4867 5.29775L22 12V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM4.136 12H19.864L17.614 6H6.386L4.136 12ZM6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17ZM17.5 17C18.3284 17 19 16.3284 19 15.5C19 14.6716 18.3284 14 17.5 14C16.6716 14 16 14.6716 16 15.5C16 16.3284 16.6716 17 17.5 17Z"></path>
          </svg>
          <h1 className="font-medium text-center">Free Transport</h1>
        </div>
        <div
          className={` bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Child Care"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M17.841 15.659L18.017 15.836L18.1945 15.659C19.0732 14.7803 20.4978 14.7803 21.3765 15.659C22.2552 16.5377 22.2552 17.9623 21.3765 18.841L18.0178 22.1997L14.659 18.841C13.7803 17.9623 13.7803 16.5377 14.659 15.659C15.5377 14.7803 16.9623 14.7803 17.841 15.659ZM12 14V22H4C4 17.6651 7.44784 14.1355 11.7508 14.0038L12 14ZM12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1Z"></path>
          </svg>
          <h1 className="font-medium text-center">Child Care</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Gymnasium"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Gymnasium</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Cafeteria"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Cafeteria</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Work From Home"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Work From Home</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Free Food"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Free Food</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Team Outings"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Team Outings</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Education Assistance"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Education Assistance</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Soft Skill Training"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Soft Skill Training</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2 ${
            benefits["Health Insurance"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Health Insurance</h1>
        </div>
        <div
          className={`bg-thm_background shadow-lg p-3 flex flex-col opacity-30 items-center rounded-xl gap-2${
            benefits["Job Training"] ? "opacity-100" : ""
          }`}
        >
          <svg
            className="w-14 h-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M14 8.94737L22 14V16L14 13.4737V18.8333L17 20.5V22L12.5 21L8 22V20.5L11 18.8333V13.4737L3 16V14L11 8.94737V3.5C11 2.67157 11.6716 2 12.5 2C13.3284 2 14 2.67157 14 3.5V8.94737Z"></path>
          </svg>
          <h1 className="font-medium text-center">Job Training</h1>
        </div>
      </div>
    </div>
  );
};
