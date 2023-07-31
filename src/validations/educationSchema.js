import * as Yup from 'yup';
import { isPast } from 'date-fns';

export const educationValidationSchema = Yup.object().shape({
  institution: Yup.string().required('Institution is Requred!'),
  location: Yup.string().required('Location is Requred!'),
  qualification: Yup.string().required('Qualification is Requred!'),
  fieldOfStudy: Yup.string().required('Field of stydy is Requred!'),
  graduationYear: Yup.date()
    .required('Year of graduation is Requred!')
    .test('past-date', 'Date must be in the past', (value) => isPast(value))
    .min(new Date(1990, 0, 1), 'Too early!'),
});
