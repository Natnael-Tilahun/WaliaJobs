import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { loginFormValidationSchema } from "../validations/loginFormSchema";
import { ErrorMessageComponent } from "../components/ErrorMessage";
import { useDispatch } from "react-redux";
import { SET_USER } from "../features/users/authSlice";
import { useLoginMutation } from "../app/AuthApi";
import { toast } from "react-toastify";

export const Profile = () => {
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
    <div className="w-full md:w-[80%] lg:w-[90%] xl:w-[80%] min-h-[96]  text-left md:py-10 bg-thm_secondary_background py-5 flex-col mx-auto  items-center my-0 flex md:my-0 px-5 md:px-3 lg:px-20 gap-2 lg:gap-10">
      <div className="w-full h-96 bg-thm_card gap-10 border-[1px] shadow-sm flex flex-col  p-10 rounded-xl">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={loginFormValidationSchema}
        >
          {(form) => (
            <Form className="grid md:grid-cols-2 w-full gap-6">
              <div className="w-full col-span-full flex justify-between pb-4">
                <div>
                  <h1 className="text-2xl  font-medium">Profile</h1>
                  <p className="text-sm text-thm_secondary_color">
                    Update your profile{" "}
                  </p>
                </div>
                <button
                  type="submit"
                  className={`bg-thm_root1_color h-fit py-2 px-4 text-sm rounded-lg font-medium text-white flex justify-center items-center gap-  ${
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
                    Save Changes{" "}
                  </span>
                  <span
                    className={`${
                      !isLoginLoading && "hidden"
                    } text-thm_secondary_color`}
                  >
                    Loging
                  </span>
                </button>
              </div>
              <div className="flex  flex-col col-span-full gap-3">
                <label htmlFor="profilePicture">Profile Picture </label>
                <Field
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  className=" border-2 border-thm_root1_color rounded-md py-1 px-5 w-fit focus:border-thm_root1_color focus:outline-none"
                  placeholder="Select your photo"
                />
              </div>
              <div className="flex  flex-col gap-3">
                <label htmlFor="email">Full Name </label>
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
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email">Email Address </label>
                <Field
                  type="email"
                  id="email"
                  disabled
                  name="email"
                  className=" border-2 rounded-md py-1 px-5 focus:border-thm_root1_color focus:outline-none"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <ErrorMessageComponent msg={msg} />}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
