import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import apiSlice from "./api/apiSlice";
import userSlice from "./features/user/userSlice";
import taskSlice from "./features/task/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, thunk),
});

export default store;