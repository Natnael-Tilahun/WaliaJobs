import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { educationValidationSchema } from "../../validations/educationSchema";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import {
  SET_EDUCATION,
  UPDATE_EDUCATION,
} from "../../redux/educationInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { SET_COMPLETED } from "../../redux/cvCompletionInfoSlice";
import { FormSections } from "../../utils/FormSections";

export const EducationSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: educaitonId } = useParams();

  let filterdEducation;
  const educations = useSelector((state) => state.educationInfo);
  let initialValues = {
    qualification: "",
    fieldOfStudy: "",
    institution: "",
    location: "",
    graduationYear: "",
  };

  if (educaitonId) {
    filterdEducation = educations.filter((edu) => edu.id == educaitonId)[0];
    filterdEducation && (initialValues = filterdEducation);
  }

  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);

  const handleSubmit = (values, { resetForm }) => {
    if (educaitonId > 0) {
      dispatch(UPDATE_EDUCATION({ values: values, id: educaitonId }));
      dispatch(SET_COMPLETED(FormSections.EDUCATION));
      navigate("/CV-Details/1/Education-Review");
    } else {
      const educationId = educations.length + 1;
      values.id = educationId;
      dispatch(SET_EDUCATION(values));
      dispatch(SET_COMPLETED(FormSections.EDUCATION));
      navigate("/CV-Details/1/Education-Review");
    }
  };

  const handleBack = () => navigate(-1);
  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your education
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          List all qualifications or degrees you’ve earned or in progress
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validateOn
        validationSchema={educationValidationSchema}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
              <label htmlFor="institution">Institution</label>
              <Field
                type="text"
                name="institution"
                id="institution"
                placeholder="Addis Abeba University"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="institution"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="location">City - State</label>
              <Field
                type="text"
                name="location"
                id="location"
                placeholder="Addis Abeba"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="location"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="qualification">Qualification</label>
              <Field
                type="text"
                name="qualification"
                id="qualification"
                placeholder="Bachelor's Degree"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="qualification"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="fieldOfStudy">Field Of Study</label>
              <Field
                type="text"
                name="fieldOfStudy"
                id="fieldOfStudy"
                placeholder="Management"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="fieldOfStudy"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="graduationYear">
                Year of Graduation / expected graduation date
              </label>
              <Field
                type="date"
                name="graduationYear"
                id="graduationYear"
                placeholder="10/10/2020"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="graduationYear"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2"></div>
            <button
              onClick={handleBack}
              className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-2  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Back
            </button>
            <button
              type="submit"
              className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
