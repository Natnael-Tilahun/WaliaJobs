import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ReviewsApi = createApi({
  reducerPath: "reviews",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1",
  }),

  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/reviews",
    }),
    // searchJobs: builder.query({
    //   query: (searchValue) => `/job/search/${searchValue}`,
    // }),
  }),
});

export const { useGetReviewsQuery } = ReviewsApi;
