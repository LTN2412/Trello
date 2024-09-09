import { FetchUserAPI } from "@/apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBoard } from "../board/boardSlice";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { dispatch }) => {
    const data = await FetchUserAPI();
    dispatch(fetchBoard(data.boardIds[0]));
    return data;
  }
);

export const usersSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    });
  },
});
export const { userLogout } = usersSlice.actions;
