import apiSlice from "../../api/apiSlice";

const historyApi = apiSlice.injectEndpoints({


  endpoints: (builder) => ({

    // <<================ QUERIES ===============>>
    historyList: builder.query({
      query: () => `/task-history-list/`,
      providesTags: ["Team-Management"],
    }),
  }),

  
});

export const { useHistoryListQuery } = historyApi;
export default historyApi;
