import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginFormValidationSchema } from "../validations/loginFormSchema";
import { ErrorMessageComponent } from "../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { SET_EMAIL, SET_PASSWORD } from "../features/users/loginFormSlice";
import { useLoginMutation } from "../app/UsersApi";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, isError, error: loginError }] = useLoginMutation();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(SET_EMAIL(values.email));
    dispatch(SET_PASSWORD(values.password));
    const userData = {
      email: values.email,
      password: values.password,
    };
    login(userData)
      .unwrap() // Ensure you're unwrapping the result for easier access to response data
      .then((response) => {
        console.log("User logged in successfully:", response);
        // Perform any actions upon successful data submission
        // toast.success(`Thank you ${values.fullName} for registering.`, {
        //   position: toast.POSITION.TOP_CENTER,
        //   toastId: customId,
        // });
        resetForm();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging user:", error);
        toast.error(`${error.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
          toastId: customId,
        });
        // Handle errors here
      });

    navigate("/");
    resetForm();
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
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[30%] shadow-md gap-1 bg-thm_card flex flex-col justify-center py-10 px-10 rounded-md">
        <h1 className="text-xl pb-2 font-medium text-thm_primary_color">
          Sign in to your account.
        </h1>
        {/* <p className="text-lg text-thm_secondary_color">
          Sign in to your account.
        </p> */}
        <div className="flex flex-col gap-4 py-5">
          <NavLink className="border-[1px] rounded-md  px-5 font-medium text-center md:px-20 py-1 text-thm_primary_color md:text-lg">
            Continue with google
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-20 py-1 text-thm_primary_color md:text-lg">
            Continue with facebook
          </NavLink>
          <NavLink className="border-[1px] rounded-md px-5 text-center font-medium md:px-20 py-1 text-thm_primary_color md:text-lg">
            Continue with linkedin
          </NavLink>
        </div>
        <div className="flex items-center gap-4 self-center">
          <hr className="w-36" />
          <p className="text-thm_secondary_color text-lg border-2 rounded-full p-2 font-medium">
            or
          </p>
          <hr className="w-36" />
        </div>

        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "" }}
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
                className={`bg-thm_root1_color py-2 mt-4 rounded-lg font-medium text-white ${
                  isLoading ? "disabled cursor-not-allowed bg-gray-300" : ""
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 h-6 fill-thm_primary_color animate-spin ${
                      !isLoading && "hidden"
                    }`}
                  >
                    <path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path>
                  </svg>
                </span>
                <span className={`${isLoading && "hidden"}`}>
                  Login with email{" "}
                </span>
                <span className={`${!isLoading && "hidden"}`}>Loging</span>
              </button>
              <p className="text-sm md:text-base text-thm_secondary_color">
                Don't have an account yet?{" "}
                <NavLink
                  to="/signup"
                  className="text-thm_root1_color text-base md:text-lg font-semibold"
                >
                  Sign up Now
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
