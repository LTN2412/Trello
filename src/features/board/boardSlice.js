import {
  CreateNewColumnAPI,
  CreateNewCardAPI,
  fetchBoardAPI,
  DndColumnAPI,
} from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: {},
  status: "idle",
  error: "",
};

export const fetchBoard = createAsyncThunk(
  "board/fetchBoard",
  async (boardId) => {
    const res = await fetchBoardAPI(boardId);
    return res;
  }
);

export const createNewColumn = createAsyncThunk(
  "column/createColumn",
  async (columnData) => {
    const res = await CreateNewColumnAPI(columnData);
    return res;
  }
);

export const createNewCard = createAsyncThunk(
  "card/createCard",
  async (cardData) => {
    const res = await CreateNewCardAPI(cardData);
    return res;
  }
);

export const dndColumn = createAsyncThunk("column/dnd", async (dndData) => {
  await DndColumnAPI(dndData);
});

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      state.board = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchBoard.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    });
    builder.addCase(createNewColumn.fulfilled, (state, action) => {
      state.board.columns.push(action.payload);
      state.board.columnOrderIds.push(action.payload.id);
      state.status = "fulfilled";
    });
    builder.addCase(createNewColumn.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    });
    builder.addCase(createNewCard.fulfilled, (state, action) => {
      const existingColumn = state.board.columns.find(
        (column) => column.id == action.payload.columnId
      );
      if (existingColumn) {
        existingColumn.cards.push(action.payload);
        existingColumn.cardOrderIds.push(action.payload.id);
      }
    });
    builder.addCase(createNewCard.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    });
    builder.addCase(dndColumn.fulfilled, (state, action) => {
      state.board.columnOrderIds = action.meta.arg.columnOrderIds;
      state.status = "fulfilled";
    });
    builder.addCase(dndColumn.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "rejected";
    });
  },
});

export const selectBoard = (state) => state.board.board;

export const selectBoardId = (state) => state.board.board.id;

export const selectColumns = (state) => state.board.board.columns;

export const selectColumnById = (state, columnId) =>
  state.board.board.columns.find((column) => column.id == columnId);
