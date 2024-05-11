import { FetchUserIdAPI } from "@/apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBoard } from "../board/boardSlice";

export const fetchBoardId = createAsyncThunk(
  "user/fetchBoardId",
  async (_, { dispatch }) => {
    const data = await FetchUserIdAPI();
    dispatch(fetchBoard(data[0].id));
    return data;
  }
);

export const usersSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
  },
  reducers: {
    setId(state, { payload }) {
      const { id } = payload;
      state.id = id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoardId.fulfilled, (state, action) => {
      state.id = action.payload.id;
    });
  },
});
export const { setId } = usersSlice.actions;
