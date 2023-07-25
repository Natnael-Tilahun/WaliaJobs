import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import { personalInfoValidationSchema } from "../../validations/personalInfoSchema";

export const ContactSection = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    navigate("/CV-Details/1/Education-Section");
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 md:px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Let's start with your header
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          Include your full name and at least one way for employers to contact
          you.
        </p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          position: "",
          city: "",
          country: "",
          postCode: "",
          phone: "",
          email: "",
        }}
        validationSchema={personalInfoValidationSchema}
        onSubmit={handleSubmit}
        className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full"
      >
        {(values) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
              <label htmlFor="firstName">FirstName</label>
              <Field
                type="text"
                name="firstName"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="firstName"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                name="lastName"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="lastName"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="position">Position</label>
              <Field
                type="text"
                name="position"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="position"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="city">City</label>
              <Field
                type="text"
                name="city"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="city"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="country">Country/Region</label>
              <Field
                type="text"
                name="country"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="country"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="postCode">PostCode</label>
              <Field
                type="text"
                name="postCode"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="postCode"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="phone">Phone</label>
              <Field
                type="phone"
                name="phone"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="phone"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="email"
              />
            </div>
            <button
              onClick={handleBack}
              className=" text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-1  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
            >
              Back
            </button>
            <button
              // to="/CV-Details/1/Experience-Section"
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
