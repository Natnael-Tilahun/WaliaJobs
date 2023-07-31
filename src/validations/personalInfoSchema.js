import * as Yup from 'yup';
export const personalInfoValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('FirstName Required'),
  lastName: Yup.string().required('LastName Required'),
  position: Yup.string().required('Position Required'),
  city: Yup.string().required('City Required'),
  country: Yup.string().required('Country Required'),
  postCode: Yup.string(),
  phone: Yup.string()
    .min(9, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Phone Number Required!'),
  email: Yup.string().email('Invalid Email').required('Required'),
});
