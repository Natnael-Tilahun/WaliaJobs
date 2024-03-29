import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { interestsValidationSchema } from "../../validations/interestsSchema";
import { Formik, Form, ErrorMessage } from "formik";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { SET_INTERESTS } from "../../features/cv/interestsInfoSlice";
import { SET_COMPLETED } from "../../features/cv/cvCompletionInfoSlice";
import { FormSections } from "../../utils/FormSections";
import CvBuildRouterHandler from "../../utils/helperFunctions/CvBuildRouterHandler";

export const InterestsSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: CVId } = useParams();

  const quillRef = useRef(null);
  const { interests } = useSelector((state) => state.interestsInfo);
  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);

  let initialValues = {
    interestsDetails: "",
  };

  if (interests) {
    initialValues.interestsDetails = interests;
  }

  const handleQuillBlur = (formik) => {
    // Trigger blur manually
    formik.setFieldTouched("interestsDetails");
  };

  const handleSubmit = (values) => {
    // Handle form submission and access form values
    dispatch(SET_INTERESTS(DOMPurify.sanitize(values.interestsDetails)));
    dispatch(SET_COMPLETED(FormSections.INTERESTS));
    navigate(
      CvBuildRouterHandler(FormSections.INTERESTS, cvCompletionInfo, CVId)
    );
  };

  const handleBack = navigate(-1);

  return (
    <div
      action=""
      className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-3 md:px-5 lg:p-5"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your Interests and Hobbies
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          Now, let's showcase your interests and hobbies
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={interestsValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className=" w-full  h-40 mb-3">
              <ReactQuill
                ref={quillRef}
                value={formik.values.interestsDetails}
                onChange={(value) =>
                  formik.setFieldValue("interestsDetails", value)
                }
                onBlur={() => handleQuillBlur(formik)}
                className="lg:h-full h-1/2"
              />
            </div>
            <ErrorMessage
              render={(msg) => <ErrorMessageComponent msg={msg} />}
              name="interestsDetails"
            />
            <button
              onClick={handleBack}
              className="z-50 text-center mr-auto self-center border-2 uppercase border-thm_primary_color font-bold w-auto px-10  md:px-20 py-1 my-5 md:my-0 md:mt-5  rounded-md basis-[40%] md:basis-[100%] lg:basis-[45%] xl:basis-[25%]"
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
