import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ErrorMessageComponent } from "../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { SET_USER } from "../features/users/authSlice";
import { useLoginMutation } from "../app/AuthApi";
import { toast } from "react-toastify";
import { forgotPasswordFormSchema } from "../validations/forgotPasswordFormSchema";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/reset-password";
  const initialValues = {
    email: "",
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
    };

    // login(credentials)
    //   .unwrap() // Ensure you're unwrapping the result for easier access to response data
    //   .then((response) => {
    //     console.log("Forgot Password in successfully:", response.data);
    //     // dispatch(
    //     //   SET_USER({ userId: response.data.userId, name: response.data })
    //     // );
    //     // Perform any actions upon successful data submission
    //     toast.success(
    //       `We have sent password recovery email successfully.  ${response.data}.`,
    //       {
    //         position: toast.POSITION.TOP_CENTER,
    //       }
    //     );
    //     resetForm();
    //     navigate(from, { replace: true });
    //   })
    //   .catch((err) => {
    //     console.error(
    //       "Error logging user:",
    //       err?.data?.message || loginError?.message
    //     );
    //     toast.error(`${err?.data?.message || loginError?.message} `, {
    //       position: toast.POSITION.TOP_CENTER,
    //     });
    //     // Handle errors here
    //   });

    toast.success(`We have sent password recovery email successfully. `, {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate(from, { replace: true });
  };

  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background py-5 flex-col  justify-center items-center my-0 flex md:my-0 px-5 md:px-3 lg:px-20 lg:py-20 gap-2 lg:gap-5">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[35%] shadow-sm gap-8 bg-thm_card flex flex-col justify-center py-8 px-10 rounded-md">
        <p className="text-xl  tracking-wider uppercase text-center font-bold ">
          FORGOT YOUR PASSWORD?
        </p>
        <hr />
        <p className="text-sm text-gray-400 text-center">
          Please enter your email address and we'll send you a link to reset
          your password right away!
        </p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={forgotPasswordFormSchema}
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
                className=" border-[1px] rounded-md py-2 border-thm_input px-5 focus:border-thm_root1_color focus:outline-none"
                placeholder="Enter your email address"
              />
              <ErrorMessage
                name="email"
                render={(msg) => <ErrorMessageComponent msg={msg} />}
              />

              <button
                type="submit"
                className={`bg-thm_root1_color uppercase py-2 my-3 rounded-lg font-medium text-white flex justify-center items-center gap-4  ${
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
                  Reset My Password
                </span>
                <span
                  className={`${
                    !isLoginLoading && "hidden"
                  } text-thm_secondary_color`}
                >
                  Resetting
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
