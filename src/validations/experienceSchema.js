import * as Yup from 'yup';
import { isPast } from 'date-fns';

export const experienceValidationSchema = Yup.object().shape({
  jobTitle: Yup.string().required('Institution is Requred!'),
  employer: Yup.string().required('City is Requred!'),
  city: Yup.string().required('Qualification is Requred!'),
  country: Yup.string().required('Field of stydy is Requred!'),
  startDate: Yup.date()
    .required('Job starting date is Requred!')
    .test('past-date', 'Date must be in the past', (value) => isPast(value))
    .min(new Date(1970, 0, 1), 'Too early!'),
  isCurrentlyWorkingThere: Yup.boolean(),
  endDate: Yup.date()
    .typeError('You must specify a date')
    .when('isCurrentlyWorkingThere', {
      is: true,
      then: (schema) => schema.nullable(),
      otherwise: (schema) =>
        schema
          .required('End Date is required when not currently working there')
          .test('past-date', 'Date must be in the past', (value) =>
            isPast(value)
          )
          .test(
            'end-date-after-start',
            'End Date must be after Start Date',
            function (endDate) {
              // Access the values of startDate and endDate for the comparison
              const { startDate } = this.parent;
              return (
                endDate === null || startDate === null || endDate >= startDate
              );
            }
          ),
    }),
});
