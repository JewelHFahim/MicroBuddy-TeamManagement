import apiSlice from "../../api/apiSlice";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

console.log("Token", userInfo?.token);

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // <<================ QUERIES ===============>>

    getAllUser: builder.query({
      query: () => "/user/list-user/",
      providesTags: ["Team-Management"],
    }),


    userDetails: builder.query({
      query: (id) => `/user/user-detail/${id}/`,
      providesTags: ["Team-Management"],
    }),
  }),
});

export const { useGetAllUserQuery, useUserDetailsQuery } = userApi;
export default userApi;
