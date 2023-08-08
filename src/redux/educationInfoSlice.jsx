import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
// const initialState = {
//   data: {
//     personalInformation: {
//       firstname: 'Natnael',
//       lastname: 'Tilahun',
//       position: 'Software Engineer',
//     },
//     contactInformation: {
//       city: 'Addis Abeba',
//       country: 'Ethiopia',
//       postcode: '0000',
//       phone: '0933654654',
//       email: 'natnaeltilahun97@gmail.com',
//     },
//     education: {
//       degree: 'Bachelor of Science in Computer Science',
//       university: 'University of ABC',
//       location: 'City, Country',
//       graduationYear: '2016',
//     },
//     skills: ['html', 'css', 'javascript'],
//     awards: ['Best Employee of the Year', 'Outstanding Achievement Award'],
//     workExperience: [
//       {
//         company: 'ABC Company',
//         jobTitle: 'Software Engineer',
//         location: 'City, Country',
//         startDate: '2018',
//         endDate: 'Present',
//         responsibilities: [
//           'Developed and maintained web applications using React and Node.js.',
//           'Collaborated with cross-functional teams to deliver high-quality software solutions.',
//           'Implemented efficient algorithms to optimize application performance.',
//         ],
//       },
//       {
//         company: 'XYZ Corporation',
//         jobTitle: 'Frontend Developer',
//         location: 'City, Country',
//         startDate: '2016',
//         endDate: '2018',
//         responsibilities: [
//           'Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.',
//           'Worked closely with UI/UX designers to create visually appealing and user-friendly web applications.',
//           'Performed code reviews and provided technical guidance to junior developers.',
//         ],
//       },
//     ],
//     personalProjects: [
//       'Personal Blog - Built a blog website using React and Express.',
//       'Portfolio Website - Developed a portfolio website to showcase my projects.',
//     ],
//     languages: ['English', 'Spanish'],
//     interests: ['Reading', 'Traveling', 'Playing guitar'],
//     references: ['Available upon request'],
//     profileSummary:
//       'Experienced software engineer with a focus on web development and a passion for creating scalable and efficient applications.',
//   }, // TODO define type of CV object here or use interface?
// };
const actionTypes = (() => {
  const SET_EDUCATION = 'SET_EDUCATION';
  const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
  const DELETE_EDUCATION = 'DELETE_EDUCATION';
  const CLEAR_CV_DATA = 'CLEAR_CV_DATA';
  return {
    SET_EDUCATION,
    UPDATE_EDUCATION,
    DELETE_EDUCATION,
    CLEAR_CV_DATA,
  };
})();
const educationInfoSlice = createSlice({
  name: 'educationInfo',
  initialState,
  reducers: {
    [actionTypes.SET_EDUCATION](state, action) {
      alert('set education info');
      state.push(action.payload);
    },
    [actionTypes.UPDATE_EDUCATION](state, action) {
      const { id, values } = action.payload;
      const index = state.findIndex((edu) => edu.id == id);
      state[index] = values;
      return state;
    },
    [actionTypes.DELETE_EDUCATION](state, action) {
      // alert(action.payload);
      const index = state.findIndex((exp) => exp.id === action.payload);
      return state.filter((_, i) => i !== index); // payload is index
    },
    [actionTypes.CLEAR_CV_DATA](state) {
      return { ...initialState };
    },
  },
});

export const {
  SET_EDUCATION,
  UPDATE_EDUCATION,
  DELETE_EDUCATION,
  CLEAR_CV_DATA,
} = educationInfoSlice.actions;
export default educationInfoSlice.reducer;
