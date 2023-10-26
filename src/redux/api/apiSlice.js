import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.3.36:8000",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${userInfo?.token}`,
    },
  }),
  tagTypes: ["Team-Management"],
  endpoints: () => ({}),
});

export default apiSlice;
