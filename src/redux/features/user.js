import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userToken: "",
  isLoading: true,
  userData: {},
};
const defaultToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoianc3dE1aNElHRUJyOGo2V09lYXIiLCJpYXQiOjE2MzUxNTExNjEsImV4cCI6MTY2NjY4NzE2MX0.yDzipzJ3pqxIZRruulRi-NPrl1dQgtFmUP3Yih_Ap0o";
//working
export const createUser = createAsyncThunk(
  "user/createUser",
  async (body, { dispatch, getState }) => {
    return axios
      .post("/app/user-registration", JSON.parse(body))
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log("error in createUser api", error));
  }
);
export const editUser = createAsyncThunk(
  "user/editUser",
  async (body, { dispatch, getState }) => {
    const state = getState();
    const { id, token } = state.user.userData;
    console.log("id for api", id);
    return axios
      .put("/app/edit-user/jw7tMZ4IGEBr8j6WOear", JSON.parse(body), {
        headers: {
          Authorization: `Bearer ${defaultToken}`,
        },
      })
      .then((res) => {
        console.log("api res", res);
        return res.data;
      });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    deleteToken: (state) => {
      state.userToken = "";
      state.userData = initialState.userData;
      localStorage.removeItem("user");
    },
    addUser: (state, { payload }) => {
      state.userData = payload;
    },
    Toggleloader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    // create user
    [createUser.pending]: (state, action) => {
      console.log("status pending");
    },
    [createUser.fulfilled]: (state, { payload }) => {
      console.log("status fulfilled");
      state.userData = payload.data;
      localStorage.setItem("user", JSON.stringify(payload.data));
    },
    [createUser.rejected]: (error) => {
      console.log("status rejected", error);
    },
    // edit user
    [editUser.pending]: (state, action) => {
      console.log("status pending");
    },
    [editUser.fulfilled]: (state, { payload }) => {
      console.log("status fulfilled", payload);
      state.userData = payload.data;
    },
    [editUser.rejected]: (state, { error }) => {
      console.log("status rejected", error);
    },
  },
});

export const { updateToken, deleteToken, Toggleloader, setIdToken, addUser } =
  userSlice.actions;
export default userSlice.reducer;
