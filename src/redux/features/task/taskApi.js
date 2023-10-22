import apiSlice from "../../api/apiSlice";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

console.log("Token", userInfo?.token);

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // <<================ QUERIES ===============>>

    getAllTask: builder.query({
      query: () => "/task-list/",
      headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      providesTags: ["Team-Management"],
    }),

    viewTask: builder.query({
      query: (id) => `/task-detail/${id}/`,
      headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      providesTags: ["Team-Management"],
    }),

    getAllQCUser: builder.query({
      query: () => "/qc-user/",
      providesTags: ["Team-Management"],
    }),

    getAllCheckList: builder.query({
      query: () => "/option-list/",
      headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      providesTags: ["Team-Management"],
    }),

    // <<================ POSTS ===============>>
    createTask: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/task-create/",
        body: data,
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      }),
      invalidatesTags: ["Team-Management"],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/task-delete/${id}/`,
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      }),
      invalidatesTags: ["Team-Management"],
    }),


    // check list create
    createCheckList: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/option-create/",
        body: data,
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      }),
      invalidatesTags: ["Team-Management"],
    }),

        // <<================ UPDATES ===============>>
        updateTask: builder.mutation({
          query: ({data, id}) => ({
            method: "POST",
            url: `/task-update/${id}/`,
            body: data,
            headers: {
              "content-type": "application/json",
              Authorization: `Token ${userInfo?.token}`,
            },
          }),
          invalidatesTags: ["Team-Management"],
        }),

        updateQCUser: builder.mutation({
          query: ({data, mappedqc}) => ({
            method: "POST",
            url: `/qc-update/${mappedqc}/`,
            body: data,
            headers: {
              "content-type": "application/json",
              Authorization: `Token ${userInfo?.token}`,
            },
          }),
          invalidatesTags: ["Team-Management"],
        }),
  }),
});

export const { useGetAllTaskQuery, useCreateCheckListMutation, useGetAllCheckListQuery, useGetAllQCUserQuery, useDeleteTaskMutation, useCreateTaskMutation, useViewTaskQuery, useUpdateTaskMutation, useUpdateQCUserMutation} = taskApi;
export default taskApi;
