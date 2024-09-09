import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { CreateNewColumnAPI, DndCardAPI, UpdateCardAPI } from "@/apis";
import { addColumnIds } from "@/features/board/boardSlice";
import orderedArray from "@/utils/orderedArray";
import { updateCard } from "../card/cardsSlice";

const columnsApdapter = createEntityAdapter();

export const createNewColumn = createAsyncThunk(
  "column/createColumn",
  async (columnData, { dispatch }) => {
    const data = await CreateNewColumnAPI(columnData);
    dispatch(addColumnIds({ id: data.id, boardId: data.boardId }));
    return data;
  }
);

export const dndCardAsync = createAsyncThunk(
  "column/dndSameColumn",
  async (cardData, { dispatch }) => {
    dispatch(
      dndCard({
        columnId: cardData.columnId,
        cardOrderIds: cardData.cardOrderIds,
      })
    );
    await DndCardAPI(cardData);
  }
);

export const dndCardOther = createAsyncThunk(
  "column/dndOtherColumn",
  async (data, { dispatch }) => {
    dispatch(
      updateOrderColumn({
        columnId: data.activeColumnId,
        cardOrderIds: data.nextActiveColumn,
      })
    );
    dispatch(
      updateOrderColumn({
        columnId: data.overColumnId,
        cardOrderIds: data.nextOverColumn,
      })
    );
    dispatch(
      updateCard({
        id: data.activeCardId,
        columnId: data.overColumnId,
      })
    );
    await DndCardAPI({
      columnId: data.activeColumnId,
      cardOrderIds: data.nextActiveColumn,
    });
    await DndCardAPI({
      columnId: data.overColumnId,
      cardOrderIds: data.nextOverColumn,
    });
    await UpdateCardAPI({
      id: data.activeCardId,
      columnId: data.overColumnId,
    });
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
    updateOrderColumn(state, { payload }) {
      columnsApdapter.updateOne(state, {
        id: payload.columnId,
        changes: {
          cardOrderIds: payload.cardOrderIds,
        },
      });
    },
    dndCard(state, { payload }) {
      const { columnId, cardOrderIds } = payload;
      columnsApdapter.updateOne(state, {
        id: columnId,
        changes: {
          cardOrderIds: cardOrderIds,
        },
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewColumn.fulfilled, (state, action) => {
      columnsApdapter.addOne(state, action.payload);
    });
  },
});

export const {
  setAllColumns,
  addCardIds,
  refreshColumn,
  updateOrderColumn,
  dndCard,
} = columnSlice.actions;

export const columnsSelector = columnsApdapter.getSelectors(
  (state) => state.column
);
