import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import apiSlice from "./api/apiSlice";

const store = configureStore({
  reducer: {
    // menu: menuReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, thunk),
});

export default store;