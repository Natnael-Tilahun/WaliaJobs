import * as Yup from 'yup';

export const achievementsValidationSchema = Yup.object().shape({
  achievementDetails: Yup.string()
    .required('Achievement details are Requred!')
    .min(15, 'Must be at least 20 characters!')
    .max(600, 'Too long!'),
});
