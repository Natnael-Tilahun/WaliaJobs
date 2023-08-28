import React from "react";
import { useNavigate, useParams } from "react-router";
import { certificationValidationSchema } from "../../validations/certificationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_CERTIFICATION,
  UPDATE_CERTIFICATE,
} from "../../redux/certificationInfoSlice";
import { ErrorMessageComponent } from "../../components/ErrorMessage";
import { SET_COMPLETED } from "../../redux/cvCompletionInfoSlice";
import { FormSections } from "../../utils/FormSections";
import CvBuildRouterHandler from "../../utils/helperFunctions/CvBuildRouterHandler";

export const CertificationSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: certificateId } = useParams();
  const handleBack = () => navigate(-1);
  const certificates = useSelector((state) => state.certificationInfo);
  let filteredCertificate;

  let initialValues = {
    certificationName: "",
    certificateIssuedBy: "",
    certificateIssuedDate: "",
  };

  if (certificateId) {
    filteredCertificate = certificates.filter(
      (cert) => cert.id == certificateId
    )[0];
    filteredCertificate && (initialValues = filteredCertificate);
    console.log("certifications", filteredCertificate, initialValues);
  }

  const cvCompletionInfo = useSelector((state) => state.cvCompletionInfo);

  const handleSubmit = (values, { resetForm }) => {
    if (certificateId > 0) {
      dispatch(UPDATE_CERTIFICATE({ values: values, id: certificateId }));
      dispatch(SET_COMPLETED(FormSections.CERTIFICATIONS));
      navigate(`/CV-Details/1/Certification-Review`);
    } else {
      let certificateId = certificates.length + 1;
      values.id = certificateId;
      dispatch(SET_CERTIFICATION(values));
      dispatch(SET_COMPLETED(FormSections.CERTIFICATIONS));
      navigate("/CV-Details/1/Certification-Review");
    }
  };
  return (
    <div className="basis-full md:basis-[40%] lg:basis-1/2 flex flex-col gap-8 px-5 lg:p-5">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-medium">
          Add your certifications
        </h1>
        <p className="text-sm md:text-base text-thm_secondary_color">
          List all certifications you’ve earned
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validateOn
        validationSchema={certificationValidationSchema}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form className="flex  justify-between gap-3 md:gap-5 lg:gap-10 flex-wrap w-full">
            <div className="flex flex-col gap-1 md:gap-2 basis-[100%] lg:basis-[45%]">
              <label htmlFor="certificationName">Certification Name</label>
              <Field
                type="text"
                name="certificationName"
                id="certificationName"
                placeholder="CISCO Networking and Routing"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="certificationName"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="certificateIssuedBy">Certificate Issued By</label>
              <Field
                type="text"
                name="certificateIssuedBy"
                id="certificateIssuedBy"
                placeholder="CISCO Net Academy"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="certificateIssuedBy"
              />
            </div>
            <div className="flex flex-col basis-[100%] lg:basis-[45%] gap-1 md:gap-2">
              <label htmlFor="certificateIssuedDate">
                Certificate Issued Date
              </label>
              <Field
                type="date"
                name="certificateIssuedDate"
                id="certificateIssuedDate"
                placeholder="10/10/2020"
                className="p-2 border-2 rounded-md focus:border-thm_root1_color focus:outline-none"
              />
              <ErrorMessage
                render={(msg) => <ErrorMessageComponent msg={msg} />}
                name="certificateIssuedDate"
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
