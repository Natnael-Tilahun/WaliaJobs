import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { experienceValidationSchema } from "../../validations/experienceSchema";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_EXPERIENCE,
  UPDATE_EXPERIENCE,
} from "../../features/cv/experienceInfoSlice";
import { SET_COMPLETED } from "../../features/cv/cvCompletionInfoSlice";
import { FormSections } from "../../utils/FormSections";

export const ExperienceSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: experienceId } = useParams();
  const experiences = useSelector((state) => state.experienceInfo);

  let filterdExperience;
  let initialValues = {
    expJobTitle: "",
    employer: "",
    expCity: "",
    country: "",
    exStartDate: "",
    expEndDate: "",
    currentlyWorkHere: false,
  };
  if (experienceId) {
    filterdExperience = experiences.filter((exp) => exp.id == experienceId)[0];
    filterdExperience && (initialValues = filterdExperience);
  }

  const handleSubmit = (values, { resetForm }) => {
    if (values.currentlyWorkHere) {
      values.expEndDate = "";
    }
    if (experienceId > 0) {
      dispatch(UPDATE_EXPERIENCE({ values: values, id: experienceId }));
      dispatch(SET_COMPLETED(FormSections.EXPERIENCE));
      navigate(`/CV-Details/1/Experience-Detail/${experienceId}`);
    } else {
      let experienceId = experiences.length + 1;
      values.id = experienceId;
      dispatch(SET_EXPERIENCE(values));
      dispatch(SET_COMPLETED(FormSections.EXPERIENCE));
      navigate(`/CV-Details/1/Experience-Detail/${experienceId}`);
    }
  };
  const handleBack = () => navigate(-1);

  return (
    <div
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your experience
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          Start with your most recent job first. You can also add voluntary
          work, internships or extracurricular activities.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={experienceValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
              <label htmlFor="expJobTitle">Job Title</label>
              <Field
                type="text"
                name="expJobTitle"
                id="expJobTitle"
                placeholder="Developer"
                className="p-2 border-2 rounded-md"
                // defaultValue={filterdExperience?.jobTitle}
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="expJobTitle"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="employer">Employer</label>
              <Field
                type="text"
                name="employer"
                id="employer"
                placeholder="Dagi's Spa"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="employer"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="expCity">City - State</label>
              <Field
                type="text"
                name="expCity"
                id="expCity"
                placeholder="Addis Abeba"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="expCity"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="country">Country</label>
              <Field
                type="text"
                name="country"
                id="country"
                placeholder="Ethiopia"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="country"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="exStartDate">Start Date</label>
              <Field
                type="date"
                name="exStartDate"
                id="exStartDate"
                placeholder="Start Date"
                className="p-2 border-2 w-full rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="exStartDate"
              />
            </div>
            <div
              className={`flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2`}
            >
              <label htmlFor="expEndDate">End Date</label>
              <Field
                type="date"
                name="expEndDate"
                id="expEndDate"
                placeholder="End Date"
                disabled={formik.values.currentlyWorkHere}
                className="p-2 border-2 focus:border-thm_root1_color focus:outline-none w-full rounded-md disabled:cursor-not-allowed"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="expEndDate"
              />
            </div>
            <div className="basis-full justify-end flex gap-3 items-center">
              <Field
                type="checkbox"
                id="currentlyWorkHere"
                name="currentlyWorkHere"
                className="w-6 h-6"
              />
              <label htmlFor="currentlyWorkHere">I Currently Work Here</label>
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="currentlyWorkHere"
              />
            </div>
            <button
              onClick={handleBack}
              className="z-50 text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-2  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Back
            </button>
            <button
              type="submit"
              className="border-2 z-50 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
