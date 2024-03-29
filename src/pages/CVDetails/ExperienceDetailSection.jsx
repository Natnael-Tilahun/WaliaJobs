import React, { useState, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Formik, Form, ErrorMessage } from "formik";
import { experienceDetailValidationSchema } from "../../validations/experienceDetailSchema";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { SET_EXPERIENCE_DETAILS } from "../../features/cv/experienceInfoSlice";
import DOMPurify from "dompurify";

export const ExperienceDetailSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quillRef = useRef(null);
  const { id: experienceId } = useParams();
  let filterdExperience;

  let initialValues = {
    experienceDetails: "",
  };

  const experiences = useSelector((state) => state.experienceInfo);

  if (experienceId) {
    filterdExperience = experiences.filter((exp) => exp.id == experienceId)[0];
    filterdExperience &&
      (initialValues.experienceDetails = filterdExperience.responsibilities);
  }

  const handleQuillBlur = (formik) => {
    // Trigger blur manually
    formik.setFieldTouched("experienceDetails");
  };

  const handleSubmit = (values) => {
    dispatch(
      SET_EXPERIENCE_DETAILS({
        values: values.experienceDetails,
        id: experienceId,
      })
    );
    // }
    navigate("/CV-Details/1/Experience-Review");
  };

  const handleBack = () => navigate(-1);

  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-3 md:px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Tell us what you did as a Full-Stack Developer
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          Use the recommended phrases below or write your own.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={experienceDetailValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className=" w-full  h-40 mb-3">
              <ReactQuill
                ref={quillRef}
                value={formik.values.experienceDetails}
                onChange={
                  (value) => formik.setFieldValue("experienceDetails", value)
                  // handleHtml(value)
                }
                onBlur={(event) => {
                  handleQuillBlur(formik);
                }}
                className="lg:h-full h-1/2 focus:border-thm_root1_color focus:outline-none"
              />
            </div>
            <ErrorMessage
              render={(msg) => <ErrorMessageComponent msg={msg} />}
              name="experienceDetails"
            />
            <button
              onClick={handleBack}
              className="z-50 text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-1  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
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
