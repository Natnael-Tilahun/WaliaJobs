import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1/user",
  }),

  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/profile",
    }),
    getUser: builder.query({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    postUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    // searchJobs: builder.query({
    //   query: (searchValue) => `/job/search/${searchValue}`,
    // }),
  }),
});

export const { useGetUserQuery, usePostUserMutation, useGetProfileQuery } =
  UsersApi;
