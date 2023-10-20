import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jabedahmed.pythonanywhere.com",
  }),
  tagTypes: ["Team-Management"],
  endpoints: () => ({}),
});

export default apiSlice;
