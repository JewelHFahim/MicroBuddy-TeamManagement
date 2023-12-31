import apiSlice from "../../api/apiSlice";

const userInfo = JSON.parse(localStorage.getItem("user-info"));
console.log("Token", userInfo?.token);

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // <<========================= QUERIES ========================>>
    getAllTask: builder.query({
      query: () => "/task-list/",
      providesTags: ["Team-Management"],
    }),

    viewTask: builder.query({
      query: (id) => `/task-detail/${id}/`,
      providesTags: ["Team-Management"],
    }),

    getAllQCUser: builder.query({
      query: () => "/qc-user/",
      providesTags: ["Team-Management"],
    }),

    getAllCheckList: builder.query({
      query: () => "/option-list/",
      providesTags: ["Team-Management"],
    }),

    //<<============================= New DB Apis========================>>

    getTaskListByQcId: builder.query({
      query: (id) => `/search-task/?task=${id}`,
      providesTags: ["Team-Management"],
    }),

    getQCTaskListByQcId: builder.query({
      query: (id) => `/search-user-for-qc/?user=${id}`,
      providesTags: ["Team-Management"],
    }),

    getQCStatusByQcId: builder.query({
      query: (id) => `/search-qc/?qc=${id}`,
      providesTags: ["Team-Management"],
    }),

    getAllQCTaskList: builder.query({
      query: () => `/qc-task-list/`,
      providesTags: ["Team-Management"],
    }),

    // <<================ POSTS ===============>>
    createTask: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/task-create/",
        body: data,
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

    // <<================ DELETE APIS ===============>>
    deleteTask: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/task-delete/${id}/`,
      }),
      invalidatesTags: ["Team-Management"],
    }),

    // <<================ UPDATES ===============>>
    updateTask: builder.mutation({
      query: ({ data, id }) => ({
        method: "POST",
        url: `/task-update/${id}/`,
        body: data,
      }),
      invalidatesTags: ["Team-Management"],
    }),

    updateQCUserStatus: builder.mutation({
      query: ({ data, QCID }) => ({
        method: "POST",
        url: `/qc-status-update/${QCID}/`,
        body: data,
      }),
      invalidatesTags: ["Team-Management"],
    }),
  }),
});

export const {
  useGetAllTaskQuery,
  useCreateCheckListMutation,
  useGetAllCheckListQuery,
  useGetAllQCUserQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation,
  useViewTaskQuery,
  useUpdateTaskMutation,
  useUpdateQCUserStatusMutation,
  useGetTaskListByQcIdQuery,
  useGetQCStatusByQcIdQuery,
  useGetAllQCTaskListQuery,
  useGetQCTaskListByQcIdQuery
} = taskApi;
export default taskApi;
