import apiSlice from "../../api/apiSlice";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

console.log("Token", userInfo?.token);

const noticeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    
    // <<================ QUERIES ===============>>
    getAllNotice: builder.query({
      query: () => "/notice-list/",
      providesTags: ["Team-Management"],
    }),

    viewNotice: builder.query({
      query: (id) => `/notice-detail/${id}/`,
      providesTags: ["Team-Management"],
    }),

    // <<================ MUTATIONS ===============>>
    createNotice: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/notice-create/",
        body: data,
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      }),
      invalidatesTags: ["Team-Management"],
    }),

    deleteNotice: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/notice-delete/${id}/`,
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      }),
      invalidatesTags: ["Team-Management"],
    }),

    updateNotice: builder.mutation({
      query: ({data, id}) => ({
        method: "POST",
        url: `/notice-update/${id}/`,
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

export const {
  useGetAllNoticeQuery,
  useCreateNoticeMutation,
  useViewNoticeQuery,
  useDeleteNoticeMutation,
  useUpdateNoticeMutation,
} = noticeApi;
export default noticeApi;
