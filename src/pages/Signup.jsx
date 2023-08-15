import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorMessageComponent } from '../components/ErrorMessage';
import { signupFormValidationSchema } from '../validations/singupFormSchema';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  SET_CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_FULLNAME,
  SET_PASSWORD,
  SET_PHONE,
} from '../redux/signupFormSlice';

const customId = 'custom-id-yes';

export const Signup = () => {
  const dispatch = useDispatch();

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(SET_FULLNAME(values.fullName));
    dispatch(SET_EMAIL(values.email));
    dispatch(SET_PHONE(values.phone));
    dispatch(SET_PASSWORD(values.password));
    dispatch(SET_CONFIRM_PASSWORD(values.confirmPassword));
    toast.success(`Thank you ${values.fullName} for registering.`, {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId,
    });
    resetForm();
    console.log('Thank you for signed up', values);
  };

  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background py-5 flex-col  justify-center items-center my-0 flex md:my-0 px-5 md:px-3 lg:px-20 gap-2 lg:gap-5">
      <ToastContainer />
      <NavLink
        to="/"
        className="font-black  basis-full md:basis-auto text-[#f8451d] self-center text-xl md:text-3xl -order-1 md:-order-none"
        style={({ isActive }) => {
          return {
            borderBottom: isActive ? '3px solid #fa6d4d' : '',
          };
        }}
      >
        Walia Jobs
      </NavLink>

      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[60%] shadow-md gap-1 bg-thm_background flex flex-col justify-center py-10 px-10 rounded-md">
        <h1 className="text-xl pb-2 font-medium text-thm_primary_color">
          Ready to take the next step?
        </h1>
        <p className="text-lg text-thm_secondary_color">Create an account.</p>
        <p className="text-thm_secondary_color text-sm">
          By continuing, you agree to our{' '}
          <span className="text-thm_root1_color underline">Terms of Use</span>{' '}
          and{' '}
          <span className="text-thm_root1_color underline">Privacy Policy</span>
          .
        </p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={signupFormValidationSchema}
        >
          {(form) => (
            <Form className="flex flex-col md:flex-row gap-8 py-5 w-full">
              <div className="flex flex-col w-full gap-3 basis-1/2">
                <label htmlFor="fullName">
                  Full name
                  <span className="text-red-500 font-medium text-lg"> *</span>
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                  placeholder="Enter your full name"
                />
                <ErrorMessage
                  name="fullName"
                  render={(msg) => <ErrorMessageComponent msg={msg} />}
                />
                <label htmlFor="email">
                  Email Address
                  <span className="text-red-500 font-medium text-lg"> *</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <ErrorMessageComponent msg={msg} />}
                />
                <label htmlFor="phone">
                  Phone Number
                  <span className="text-red-500 font-medium text-lg"> *</span>
                </label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phone"
                  render={(msg) => <ErrorMessageComponent msg={msg} />}
                />
                <label htmlFor="password">
                  Create a password
                  <span className="text-red-500 font-medium text-lg"> *</span>
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                  placeholder="Create new password"
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => <ErrorMessageComponent msg={msg} />}
                />
                <label htmlFor="confirmPassword">
                  Confirm Password
                  <span className="text-red-500 font-medium text-lg"> *</span>
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  render={(msg) => <ErrorMessageComponent msg={msg} />}
                />
                <button
                  type="submit"
                  className="bg-thm_root1_color py-2 my-3 rounded-lg font-medium text-white"
                >
                  Register with email
                </button>
                <p className="text-sm md:text-base text-thm_secondary_color">
                  Already have an account?{' '}
                  <NavLink
                    to="/login"
                    className="text-thm_root1_color text-base md:text-lg font-semibold"
                  >
                    Login
                  </NavLink>
                </p>
              </div>
              <div className="md:flex hidden flex-col items-center gap-4 self-center">
                <div className="w-[1px] h-40 bg-thm_secondary_color" />
                <p className="text-thm_secondary_color text-lg border-2 rounded-full p-2 font-medium">
                  or
                </p>
                <div className="w-[1px] h-40 bg-thm_secondary_color" />
              </div>
              <div className="flex md:hidden items-center gap-4 self-center">
                <hr className="w-28" />
                <p className="text-thm_secondary_color text-lg border-2 rounded-full p-2 font-medium">
                  or
                </p>
                <hr className="w-28" />
              </div>
              <div className="flex flex-col gap-4 py-5 items-center justify-center">
                <NavLink className="border-[1px] rounded-md text-center font-medium px-5 md:px-10 w-full py-1 text-thm_primary_color md:text-lg">
                  Register with google
                </NavLink>
                <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 w-full py-1 text-thm_primary_color md:text-lg">
                  Register with facebook
                </NavLink>
                <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 w-full py-1 text-thm_primary_color md:text-lg">
                  Register with linkedin
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
