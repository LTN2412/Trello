import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { fetchBoardAPI, DndColumnAPI } from "@/apis";
import { refreshColumn, setAllColumns } from "@/features/column/columnsSlice";
import { setAllCards } from "@/features/card/cardsSlice";

const boardsAdapter = createEntityAdapter((board) => board.id);

export const fetchBoard = createAsyncThunk(
  "board/fetchBoard",
  async (boardId, { dispatch }) => {
    const data = await fetchBoardAPI(boardId);
    dispatch(
      setAllColumns({
        columns: data.columns,
        columnOrderIds: data.columnOrderIds,
      })
    );
    dispatch(setAllCards(data.columns.map((column) => column.cards).flat()));
    delete data.columns;
    return [data];
  }
);

export const dndColumnAsync = createAsyncThunk(
  "board/dnd",
  async (dndData, { dispatch }) => {
    dispatch(dndColumn(dndData));
    dispatch(refreshColumn(dndData.columnOrderIds));
    await DndColumnAPI(dndData);
  }
);

export const boardSlice = createSlice({
  name: "board",
  initialState: boardsAdapter.getInitialState(),
  reducers: {
    addColumnIds(state, { payload }) {
      const { id, boardId } = payload;
      const thisBoard = { ...state.entities[boardId] };
      boardsAdapter.updateOne(state, {
        id: boardId,
        changes: {
          columnOrderIds: [...thisBoard.columnOrderIds, id],
        },
      });
    },
    dndColumn(state, { payload }) {
      const { boardId, columnOrderIds } = payload;
      boardsAdapter.updateOne(state, {
        id: boardId,
        changes: {
          columnOrderIds: columnOrderIds,
        },
      });
      // return (state.entities[boardId].columnOrderIds = columnOrderIds);
    },
    // newActiveCard(state, action) {
    //   const { activeCardId, activeColumnId } = action.payload;
    //   state.board.columns
    //     .find((column) => column.id == activeColumnId)
    //     .cards.filter((card) => card.id != activeCardId);
    //   state.board.columns
    //     .find((column) => column.id == activeColumnId)
    //     .cardOrderIds.filter((card) => card != activeCardId);
    // },
    // newOverCard(state, action) {
    //   const { newCardIndex, overColumnId } = action.payload;
    //   const column = state.board.columns.find(
    //     (column) => column.id == overColumnId
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      boardsAdapter.setAll(state, action.payload);
    });
  },
});

export default boardSlice.reducer;

export const { addColumnIds, dndColumn } = boardSlice.actions;

export const boardsSelector = boardsAdapter.getSelectors(
  (state) => state.board
);
