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
  }),
});

export const { useGetAllTaskQuery } = taskApi;
export default taskApi;
