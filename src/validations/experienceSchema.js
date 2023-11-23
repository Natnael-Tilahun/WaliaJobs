import * as Yup from "yup";
import { isPast } from "date-fns";

export const experienceValidationSchema = Yup.object().shape({
  expJobTitle: Yup.string().required("Institution is Requred!"),
  employer: Yup.string().required("City is Requred!"),
  expCity: Yup.string().required("Qualification is Requred!"),
  country: Yup.string().required("Field of stydy is Requred!"),
  exStartDate: Yup.date()
    .required("Job starting date is Requred!")
    .test("past-date", "Date must be in the past", (value) => isPast(value))
    .min(new Date(1970, 0, 1), "Too early!"),
  currentlyWorkHere: Yup.boolean(),
  expEndDate: Yup.date()
    .typeError("You must specify a date")
    .when("currentlyWorkHere", {
      is: true,
      then: (schema) => schema.nullable(),
      otherwise: (schema) =>
        schema
          .required("End Date is required when not currently working there")
          .test("past-date", "Date must be in the past", (value) =>
            isPast(value)
          )
          .test(
            "end-date-after-start",
            "End Date must be after Start Date",
            function (expEndDate) {
              // Access the values of startDate and endDate for the comparison
              const { exStartDate } = this.parent;
              return (
                expEndDate === null ||
                exStartDate === null ||
                expEndDate >= exStartDate
              );
            }
          ),
    }),
});
