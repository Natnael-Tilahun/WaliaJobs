import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const educationFormValidationSchema = Yup.object().shape({
  institution: Yup.string().required("Institution is Requred!"),
  city: Yup.string().required("City is Requred!"),
  qualification: Yup.string().required("Qualification is Requred!"),
  fieldOfStudy: Yup.string().required("Field of stydy is Requred!"),
  graduationYear: Yup.string().required("Year of graduation is Requred!"),
});

export const EducationSection = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };
  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 md:px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your education
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          List all qualifications or degrees you’ve earned or in progress
        </p>
      </div>
      <div className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
        <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            name="jobtiinstitutiontle"
            id="institution"
            placeholder="Addis Abeba University"
            className="p-2 border-2 rounded-md"
            onChange={(e) => e.target.value}
          />
        </div>
        <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
          <label htmlFor="city">City - State</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Addis Abeba"
            className="p-2 border-2 rounded-md"
          />
        </div>
        <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            name="qualification"
            id="qualification"
            placeholder="Bachelor's Degree"
            className="p-2 border-2 rounded-md"
          />
        </div>
        <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
          <label htmlFor="fieldofstudy">Field Of Study</label>
          <input
            type="text"
            name="fieldofstudy"
            id="fieldofstudy"
            placeholder="Management"
            className="p-2 border-2 rounded-md"
          />
        </div>
        <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
          <label htmlFor="yearofgraduation">Year of Graduation</label>
          <input
            type="date"
            name="yearofgraduation"
            id="yearofgraduation"
            placeholder="10/10/2020"
            className="p-2 border-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2"></div>

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
    </div>
  );
};
