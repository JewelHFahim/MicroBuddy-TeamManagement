import apiSlice from "../../api/apiSlice";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

console.log("Token", userInfo?.token);

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // <<================ QUERIES ===============>>
    getAllTask: builder.query({
      query: () => "/task-list/",
      providesTags: ["Team-Management"],
    }),


    

    getAllCheckList: builder.query({
      query: () => "/option-list/",
      providesTags: ["Team-Management"],
    }),

    // <<================ MUTATIONS ===============>>


    // check list create
    createCheckList: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/option-create/",
        body: data,
        // headers: {
        //   "content-type": "application/json",
        //   Authorization: `Token ${userInfo?.token}`,
        // },
      }),
      invalidatesTags: ["Team-Management"],
    }),
  }),
});

export const { useGetAllTaskQuery, useCreateCheckListMutation, useGetAllCheckListQuery } = taskApi;
export default taskApi;
