import * as Yup from "yup";

export const summaryValidationSchema = Yup.object().shape({
  summaryDetails: Yup.string()
    .required("Summary details are Requred!")
    .min(20, "Must be at least 20 characters!")
    .max(600, "Too long!"),
});
