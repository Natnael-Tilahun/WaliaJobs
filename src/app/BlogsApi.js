import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BlogsApi = createApi({
  reducerPath: "blogs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1",
  }),

  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    // searchJobs: builder.query({
    //   query: (searchValue) => `/job/search/${searchValue}`,
    // }),
  }),
});

export const { useGetBlogsQuery } = BlogsApi;
