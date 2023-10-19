import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userInfo = JSON.parse(localStorage.getItem("user-info"));
console.log(userInfo?.username);

const initialState = {
  checkListArray: [],
  addedQCArray: [],
};

export const createCheckList = createAsyncThunk(
  "createCheckList",
  async (body, { dispatch }) => {
    try {
      const response = await fetch("http://192.168.3.36:8000/option-create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(setCheckListId(data));
      } else {
        toast.error("Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed");
      throw error;
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {

    setCheckListId: (state, action) => {
      state.checkListArray.push(action.payload);
      console.log(action.payload)
    },

    addUser: (state, actions ) => {
      state.addedQCArray.push(actions.payload);
      console.log(actions.payload)
    },
  },

  // extraReducers: {
  //   [taskSlice.pending]: (state) => {
  //     state.isLoading = true;
  //   },

  //   [taskSlice.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload.error;
  //     state.message = payload.status;
  //   },

  //   [taskSlice.fulfilled]: (state) => {
  //     state.isLoading = false;
  //   },
  // },
});

export const { setCheckListId, addUser } = taskSlice.actions;
export default taskSlice.reducer;
