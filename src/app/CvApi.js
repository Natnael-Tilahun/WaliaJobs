import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CvApi = createApi({
  reducerPath: "cvs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getAllCv: builder.query({
      query: () => "/cv",
    }),
    getCv: builder.query({
      query: (cvId) => `/cv/${cvId}`,
    }),
    postCv: builder.mutation({
      query: (cvData) => ({
        url: "/cv",
        method: "POST",
        body: cvData,
      }),
    }),
    // searchJobs: builder.query({
    //   query: (searchValue) => `/job/search/${searchValue}`,
    // }),
  }),
});

export const { useGetAllCvQuery, usePostCvMutation, useGetCvQuery } = CvApi;
