import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProfileApi = createApi({
  reducerPath: "profiles",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://walia-jobs-server.onrender.com/api/v1/user",
    credentials: "include",

  }),

  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/profile",
    }),
  }),
});

export const {  useGetProfileQuery } =
ProfileApi;
