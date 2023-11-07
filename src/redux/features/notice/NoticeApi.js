import apiSlice from "../../api/apiSlice";

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
      }),
      invalidatesTags: ["Team-Management"],
    }),

    deleteNotice: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/notice-delete/${id}/`,
      }),
      invalidatesTags: ["Team-Management"],
    }),

    updateNotice: builder.mutation({
      query: ({data, id}) => ({
        method: "POST",
        url: `/notice-update/${id}/`,
        body: data,
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
