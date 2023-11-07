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

    // <<================ TARGET POINT ===============>>

    viewDetailTargetpoint: builder.query({
      query: (id) => `/user/target-filter/?user=${id}`,
      providesTags: ["Team-Management"],
    }),

    updateTargetpoint: builder.mutation({
      query: ({ data, id }) => ({
        method: "POST",
        url: `/user/target-update/${id}/`,
        body: data,
      }),
      invalidatesTags: ["Team-Management"],
    }),


    // <<================ CHNAGE PASSWORD ===============>>

  changePassword: builder.mutation({
      query: ({ data }) => ({
        method: "POST",
        url: `/user/change-password/`,
        body: data,
      }),
      invalidatesTags: ["Team-Management"],
    }),

  }),
});

export const {
  useGetAllUserQuery,
  useUserDetailsQuery,
  useUpdateTargetpointMutation,
  useViewDetailTargetpointQuery,
  useChangePasswordMutation
} = userApi;
export default userApi;
