import * as Yup from 'yup';
import { isPast } from 'date-fns';

export const languageValidationSchema = Yup.object().shape({
  languageName: Yup.string().required('Language name is Requred!'),
  proficiencyLevel: Yup.string().required('Proficiency level is Requred!'),
});
