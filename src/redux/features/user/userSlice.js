import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  username: "",
  isLoading: false,
  token: "",
  error: "",
  message: null
};

// export const loginUser = createAsyncThunk("loginUser", async (body) => {
//     const res = await fetch("http://192.168.3.36:8000/user/login/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });
//     console.log(res);
//     return await res.json();
//   });

export const loginUser = createAsyncThunk("loginUser", async (body, { dispatch }) => {
  try {
    const response = await fetch("http://192.168.3.36:8000/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log(response)

    if (response.ok) {
      const data = await response.json();
      dispatch(setToken(data.token));
      // dispatch(setEmail(data.user.email));
      // dispatch(setUsername(data.user.username));

      localStorage.setItem("token", JSON.stringify(data.token));
      toast.success("Login Success");
    } else {
      toast.error("Login Failed");
    }
  } catch (error) {
    console.error(error);
    toast.error("Login Failed");
    throw error;
  }
});





export const registerUser = createAsyncThunk("loginUser", async (body) => {
    const res = await fetch("http://192.168.3.36:8000/user/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log(res.status);


    return await res.json();
  });
  

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {

    addLogout: (state) => {
      state.token = null;
      state.user= null;
      state.email = null;
      localStorage.clear();
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
    // setEmail: (state, action) => {
    //   state.email = action.payload;
    // },
    // setUsername: (state, action) => {
    //   state.username = action.payload;
    // },

  
  },

  // extraReducers: {
  //   [loginUser.pending]: (state) => {
  //     state.isLoading = true;
  //   },

  //   [loginUser.rejected]: (state, { payload }) => {
  //     state.isLoding = false;
  //     state.error = payload.error;
  //     state.message = payload.status;
  //   },

  //   [loginUser.fulfilled]: (state, action) => {
  //     if (action.error) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //       state.message = 404
  //     } else {
  //       state.token = action.payload.token;
  //       state.email = action.payload.user.email;
  //       state.username = action.payload.user.username;
  //       state.isLoading = false;
  //       localStorage.setItem("token", JSON.stringify(state.token));
  //       const gotToken = localStorage.getItem("token");
  //       state.token = gotToken;
  //     }
  //   },
  // },

  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },

    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
      state.message = payload.status;
    },

    [loginUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },

});

export const { addToken, addEmail, addLogout, setToken, setEmail, setUsername } = userSlice.actions;
export default userSlice.reducer;