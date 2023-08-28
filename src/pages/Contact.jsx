import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { contactFormValidationSchema } from "../validations/contactFormSchema";
import { ErrorMessageComponent } from "../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { SET_EMAIL, SET_MESSAGE, SET_NAME } from "../redux/contactFormSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

export const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSumbit = (values, { resetForm }) => {
    dispatch(SET_NAME(values.name));
    dispatch(SET_EMAIL(values.email));
    dispatch(SET_MESSAGE(values.message));
    // toast('Thank you for reaching out to us. We will get back to you soon.');
    toast.success(
      "Thank you for reaching out to us. We will get back to you very soon.",
      {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      }
    );
    resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background py-5 flex-col  justify-center items-center my-0 flex md:my-0 px-5 md:px-3 lg:px-20 gap-2 lg:gap-5">
      <ToastContainer />
      <NavLink
        to="/"
        className="font-black  basis-full md:basis-auto text-[#f8451d] self-center text-xl md:text-3xl -order-1 md:-order-none"
        style={({ isActive }) => {
          return {
            borderBottom: isActive ? "3px solid #fa6d4d" : "",
          };
        }}
      >
        Walia Jobs
      </NavLink>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[30%] shadow-md gap-1 bg-thm_card flex flex-col justify-center py-10 px-7 md:px-10 rounded-md">
        <h1 className="text-xl pb-2 font-medium text-thm_primary_color">
          Send us a message
        </h1>
        <p className=" text-thm_secondary_color">
          Got questions? We’ve got answers! Please provide us with as many
          details as you can, and we will get back to you.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={contactFormValidationSchema}
          onSubmit={handleSumbit}
        >
          {(values) => (
            <Form className="flex flex-col w-full gap-3 pt-7">
              <label htmlFor="name">
                Name
                <span className="text-red-500 font-medium text-lg"> *</span>
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className=" border-2 rounded-md py-1 px-5"
                placeholder="Enter your name"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="name"
              />
              <label htmlFor="email">
                Email Address{" "}
                <span className="text-red-500 font-medium text-lg"> *</span>
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className=" border-2 rounded-md py-1 px-5"
                placeholder="Enter your email address"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="email"
              />
              <label htmlFor="message">
                Your message
                <span className="text-red-500 font-medium text-lg"> *</span>
              </label>
              <Field
                type="textarea"
                id="message"
                name="message"
                className=" border-2 rounded-md py-1 px-5 w-full h-24"
                placeholder="Enter your message"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="message"
              />
              <button
                type="submit"
                className="bg-thm_root1_color py-2 mt-4 rounded-lg font-medium text-white"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
