import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { CreateNewColumnAPI } from "@/apis";
import { addColumnIds } from "@/features/board/boardSlice";
import orderedArray from "@/utils/orderedArray";

const columnsApdapter = createEntityAdapter();

export const createNewColumn = createAsyncThunk(
  "column/createColumn",
  async (columnData, { dispatch }) => {
    const data = await CreateNewColumnAPI(columnData);
    dispatch(addColumnIds({ id: data.id, boardId: data.boardId }));
    return data;
  }
);

export const columnSlice = createSlice({
  name: "column",
  initialState: columnsApdapter.getInitialState(),
  reducers: {
    setAllColumns(state, { payload }) {
      const { columns, columnOrderIds } = payload;
      //sort before set
      const orderedColumns = orderedArray(columns, columnOrderIds, "id");
      columnsApdapter.setAll(state, orderedColumns);
    },
    addCardIds(state, { payload }) {
      const { id, columnId } = payload;
      const thisColumn = { ...state.entities[columnId] };
      columnsApdapter.updateOne(state, {
        id: columnId,
        changes: {
          cardOrderIds: [...thisColumn.cardOrderIds, id],
        },
      });
    },
    refreshColumn(state, { payload }) {
      state.ids = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewColumn.fulfilled, (state, action) => {
      columnsApdapter.addOne(state, action.payload);
    });
  },
});

export const { setAllColumns, addCardIds, refreshColumn } = columnSlice.actions;

export const columnsSelector = columnsApdapter.getSelectors(
  (state) => state.column
);
