// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  endpoints: (builder) => ({
    getProcessors: builder.query({
      query: () => "/processors",
    }),
  }),
});

export const { useGetProcessorsQuery } = apiSlice;
