import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jabedahmed.pythonanywhere.com",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${userInfo?.token}`,
    },
  }),
  tagTypes: ["Team-Management"],
  endpoints: () => ({}),
});

export default apiSlice;
