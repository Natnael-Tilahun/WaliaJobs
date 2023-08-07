import * as Yup from 'yup';
import { isPast } from 'date-fns';

export const certificationValidationSchema = Yup.object().shape({
  certificationName: Yup.string().required('Certification name is Requred!'),
  certificateIssuedBy: Yup.string().required('Certificate issuer is Requred!'),
  certificateIssuedDate: Yup.date()
    .required('Certificate Issued Date is Requred!')
    .test('past-date', 'Date must be in the past', (value) => isPast(value))
    .min(new Date(1990, 0, 1), 'Too early!'),
});
