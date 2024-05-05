import { configureStore } from "@reduxjs/toolkit";

import { boardSlice } from "@/features/board/boardSlice";
import { columnSlice } from "./features/column/columnsSlice";
import { cardsSlice } from "./features/card/cardsSlice";

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    column: columnSlice.reducer,
    card: cardsSlice.reducer,
  },
});
export default store;
