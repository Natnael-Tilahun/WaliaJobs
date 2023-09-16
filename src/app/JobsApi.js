import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const JobsApi = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1",
  }),

  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "/job",
    }),
  }),
});

export const { useGetJobsQuery } = JobsApi;
