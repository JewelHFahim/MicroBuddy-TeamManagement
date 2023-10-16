import apiSlice from "../../api/apiSlice";

const noticeApi = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    getAllNotice: builder.query({
      query: () => "/notice-list/",
      providesTags: ["TeamManagement"],
    }),

  }),

});


export const {getAllNotice} = noticeApi;
export default noticeApi;