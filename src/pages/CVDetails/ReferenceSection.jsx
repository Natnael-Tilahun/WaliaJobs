import React from "react";
import { useNavigate, useParams } from "react-router";
import { referenceValidationSchema } from "../../validations/referenceSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import {
  SET_REFERENECES,
  UPDATE_REFERENECE,
} from "../../features/cv/referenceInfoSlice";
import { SET_COMPLETED } from "../../features/cv/cvCompletionInfoSlice";
import { FormSections } from "../../utils/FormSections";

export const ReferenceSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = () => navigate(-1);
  const { id: referenceId } = useParams();
  const references = useSelector((state) => state.referenceInfo);
  let filteredReference;
  let initialValues = {
    fullName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
  };

  if (referenceId) {
    filteredReference = references.filter((ref) => ref.id == referenceId)[0];
    filteredReference && (initialValues = filteredReference);
  }

  const handleSubmit = (values, { resetForm }) => {
    if (referenceId > 0) {
      dispatch(UPDATE_REFERENECE({ values: values, id: referenceId }));
      dispatch(SET_COMPLETED(FormSections.REFERENCES));
      navigate(`/CV-Details/1/Reference-Review`);
    } else {
      const referenceId = references.length + 1;
      values.id = referenceId;
      dispatch(SET_REFERENECES(values));
      dispatch(SET_COMPLETED(FormSections.REFERENCES));
      navigate("/CV-Details/1/Reference-Review");
    }
  };
  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your references
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          List all references you’ve
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validateOn
        validationSchema={referenceValidationSchema}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
              <label htmlFor="fullName">Full Name</label>
              <Field
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Natnael Tilahun"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="fullName"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="jobTitle">Job Title</label>
              <Field
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Software Engineer"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="jobTitle"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="companyName">Company Name</label>
              <Field
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Commercial bank of Ethiopia"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="companyName"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="natnaeltilahun97@gmail.com"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="email"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="phone">Phone</label>
              <Field
                type="phone"
                name="phone"
                id="phone"
                placeholder="0933654654"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="phone"
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
