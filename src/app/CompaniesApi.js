import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CompaniesApi = createApi({
  reducerPath: "companies",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1",
  }),

  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => "/companies",
    }),
    // searchJobs: builder.query({
    //   query: (searchValue) => `/job/search/${searchValue}`,
    // }),
  }),
});

export const { useGetCompaniesQuery } = CompaniesApi;
