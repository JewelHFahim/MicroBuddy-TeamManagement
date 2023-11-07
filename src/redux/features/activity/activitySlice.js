import apiSlice from "../../api/apiSlice";

const activityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // <<================ QUERIES ===============>>
    activityList: builder.query({
      query: (id) => `/activity/${id}/`,
      providesTags: ["Team-Management"],
    }),
  }),
});

export const {useActivityListQuery} = activityApi;
export default activityApi;
