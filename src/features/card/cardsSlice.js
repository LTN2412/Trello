import { CreateNewCardAPI } from "@/apis";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { addCardIds } from "@/features/column/columnsSlice";

const cardsAdapter = createEntityAdapter();

export const createNewCard = createAsyncThunk(
  "card/createCard",
  async (cardData, { dispatch }) => {
    const data = await CreateNewCardAPI(cardData);
    dispatch(addCardIds({ id: data.id, columnId: data.columnId }));
    return data;
  }
);

export const cardsSlice = createSlice({
  name: "card",
  initialState: cardsAdapter.getInitialState({ test: false }),
  reducers: {
    setAllCards(state, action) {
      cardsAdapter.setAll(state, action.payload);
    },
    updateCard(state, { payload }) {
      cardsAdapter.updateOne(state, {
        id: payload.id,
        changes: {
          columnId: payload.columnId,
        },
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewCard.fulfilled, (state, action) => {
      cardsAdapter.addOne(state, action.payload);
    });
  },
});

export const { setAllCards, updateCard } = cardsSlice.actions;

export const cardsSelector = cardsAdapter.getSelectors((state) => state.card);

export const selectAllCardByColumnId = createSelector(
  [(state) => cardsSelector.selectAll(state), (_, columnId) => columnId],
  (cards, columnId) => cards.filter((card) => card.columnId == columnId)
);
