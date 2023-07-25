import React, { useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { skillsValidationSchema } from "../../validations/skillsSchema";
import { Formik, Form, ErrorMessage } from "formik";
import { ErrorMessageComponent } from "../../components/ErrorMessage";

export const SkillSection = () => {
  const navigate = useNavigate();

  const quillRef = useRef(null);

  const handleSubmit = (values) => {
    // Handle form submission and access form values
    console.log(values.skillDetails);
    navigate("/CV-Details/1/Summary-Section");
  };

  const handleBack = navigate(-1);

  return (
    <div
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 md:px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your skills{" "}
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          Now, let's showcase your best skills for the job.{" "}
        </p>
      </div>
      <Formik
        initialValues={{
          skillDetails: "",
        }}
        validationSchema={skillsValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className=" w-full  h-40 mb-3">
              <ReactQuill
                ref={quillRef}
                value={formik.values.skillDetails}
                onChange={(value) =>
                  formik.setFieldValue("skillDetails", value)
                }
                onBlur={formik.handleBlur}
                className="lg:h-full h-1/2"
              />
            </div>
            <ErrorMessage
              render={(msg) => <ErrorMessageComponent msg={msg} />}
              name="skillDetails"
            />
            <button
              onClick={handleBack}
              className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Back
            </button>
            <button
              type="submit"
              className="border-2 self-center text-center uppercase bg-thm_root1_color text-white font-bold px-5  md:px-20 py-2 lg:my-5 rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Continue
            </button>
            {/* <div
          className="w-full prose"
          dangerouslySetInnerHTML={{ __html: editorValue }}
        /> */}
            {/* <FormattedTextDisplay value={quillValue} /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
