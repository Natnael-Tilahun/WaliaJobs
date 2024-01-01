import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { loginFormValidationSchema } from "../validations/loginFormSchema";
import { ErrorMessageComponent } from "../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { SET_USER } from "../features/users/authSlice";
import { useLoginMutation } from "../app/AuthApi";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const initialValues = {
    email: "",
    password: "",
  };

  const [
    login,
    { isLoading: isLoginLoading, isError: isLoginError, error: loginError },
  ] = useLoginMutation();

  const handleSubmit = (values, { resetForm }) => {
    // dispatch(SET_EMAIL(values.email));
    // dispatch(SET_PASSWORD(values.password));

    const credentials = {
      email: values.email,
      password: values.password,
    };

    login(credentials)
      .unwrap() // Ensure you're unwrapping the result for easier access to response data
      .then((response) => {
        console.log("User logged in successfully:", response.data);
        //         const cookies = new Cookies();
        // const checkToken = cookies.get("checkToken");
        // console.log("cookie: ", )
        dispatch(
          SET_USER({ userId: response.data.userId, name: response.data })
        );
        // Perform any actions upon successful data submission
        toast.success(`Welcome back ${response.data}.`, {
          position: toast.POSITION.TOP_CENTER,
        });
        resetForm();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(
          "Error logging user:",
          err?.data?.message || loginError?.message
        );
        toast.error(`${err?.data?.message || loginError?.message} `, {
          position: toast.POSITION.TOP_CENTER,
        });
        // Handle errors here
      });
  };

  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background py-5 flex-col  justify-center items-center my-0 flex md:my-0 px-5 md:px-3 lg:px-20 gap-2 lg:gap-5">
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
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[30%] shadow-md gap-6 bg-thm_card flex flex-col justify-center py-10 px-10 rounded-md">
        <h1 className="text-lg pb-2 font-medium text-thm_secondary_color">
          Sign in to your account.
        </h1>
        {/* <p className="text-lg text-thm_secondary_color">
          Sign in to your account.
        </p> */}
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={loginFormValidationSchema}
        >
          {(form) => (
            <Form className="flex flex-col w-full gap-3">
              <label htmlFor="email">
                Email Address{" "}
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
              <label htmlFor="password">
                Password
                <span className="text-red-500 font-medium text-lg"> *</span>
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                render={(msg) => <ErrorMessageComponent msg={msg} />}
              />
              <button
                type="submit"
                className={`bg-thm_root1_color py-2 my-3 rounded-lg font-medium text-white flex justify-center items-center gap-4  ${
                  isLoginLoading
                    ? "disabled cursor-not-allowed bg-thm_secondary_background"
                    : ""
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 h-6 fill-thm_secondary_color animate-spin ${
                      !isLoginLoading && "hidden"
                    }`}
                  >
                    <path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path>
                  </svg>
                </span>
                <span className={`${isLoginLoading && "hidden"}`}>
                  Login with email{" "}
                </span>
                <span
                  className={`${
                    !isLoginLoading && "hidden"
                  } text-thm_secondary_color`}
                >
                  Loging
                </span>
              </button>

              <p className="text-sm md:text-base text-thm_secondary_color">
                Don't have an account yet?{" "}
                <NavLink
                  to="/signup"
                  className="text-thm_root1_color text-base font-medium"
                >
                  Sign up Now
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
        <div className="flex items-center gap-4 self-center">
          <hr className="w-36" />
          <p className="text-thm_secondary_color text-xxs whitespace-nowrap uppercase border-2 rounded-full p-2 font-medium">
            or Continue with
          </p>
          <hr className="w-36" />
        </div>
        <div className="flex flex-col gap-4 py-5 text-sm">
          <NavLink className="border-[1px] rounded-md  px-5 font-medium text-center md:px-10 py-2 text-thm_primary_color  flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
            </svg>
            <span>Continue with Google</span>
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 py-2 text-thm_primary_color flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
            </svg>
            <span>Continue with Facebook</span>
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 py-2 text-thm_primary_color flex items-center justify-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
            </svg>
            <span>Continue with LinkedIn</span>
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-10 py-2 text-thm_primary_color flex items-center justify-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
            <span>Continue with Github</span>
          </NavLink>
        </div>
        <p className="text-xs text-thm_secondary_color">
          By clicking continue, you agree to our{" "}
          <span>
            <NavLink to="/" className="underline">
              Terms of Service
            </NavLink>
          </span>{" "}
          and{" "}
          <span>
            <NavLink to="/" className="underline">
              Privacy Policy
            </NavLink>
            .
          </span>
        </p>
      </div>
    </div>
  );
};
