import * as Yup from "yup";

export const experienceDetailValidationSchema = Yup.object().shape({
  experienceDetails: Yup.string()
    .required("Experience details are Requred!")
    .min(20, "Must be at least 25 characters!")
    .max(600, "Too long!"),
});
