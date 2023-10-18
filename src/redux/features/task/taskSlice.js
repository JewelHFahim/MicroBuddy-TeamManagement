import { createSlice } from "@reduxjs/toolkit";

const initialState = {addQC:  []}


export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
   
    addQCChecker: (state, actions) => {
      state.addQC.push(actions.payload);
      console.log(actions.payload)
    }
   
  },
});

export const {  addQCChecker } = taskSlice.actions;
export default taskSlice.reducer;