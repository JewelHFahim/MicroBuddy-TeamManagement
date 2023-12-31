import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const userInfo = JSON.parse(localStorage.getItem("user-info"));

const initialState = {
  email: "" || userInfo?.email,
  username: "" || userInfo?.username,
  userId: "" || userInfo?.id,
  type: "" || userInfo?.type,
  isLoading: false,
  token: "" || userInfo?.token,
  error: "",
  message: null,
};

export const loginUser = createAsyncThunk(
  "loginUser",
  async (body, { dispatch }) => {
    try {
      const response = await fetch(
        "https://jabedahmed.pythonanywhere.com/user/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(setToken(data.token));
        dispatch(setEmail(data?.user?.email));
        dispatch(setUsername(data?.user?.username));
        dispatch(setUserId(data?.user?.id));
        dispatch(setUserType(data?.user?.type));

        const info = {
          token: data.token,
          email: data.user.email,
          username: data.user.username,
          type: data.user.type,
          id: data.user.id,
        };
        localStorage.setItem("user-info", JSON.stringify(info));
        toast.success("Login Success");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk("loginUser", async (body) => {
  const res = await fetch(
    "https://jabedahmed.pythonanywhere.com/user/register/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  return await res.json();
});

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addLogout: (state) => {
      state.token = null;
      state.user = null;
      state.email = null;
      localStorage.clear();
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserType: (state, action) => {
      state.type = action.payload;
    },
  },

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

export const {
  addToken,
  addEmail,
  addLogout,
  setToken,
  setEmail,
  setUsername,
  setUserId,
  setUserType,
} = userSlice.actions;
export default userSlice.reducer;
