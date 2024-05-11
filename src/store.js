import { configureStore } from "@reduxjs/toolkit";

import { boardSlice } from "@/features/board/boardSlice";
import { columnSlice } from "./features/column/columnsSlice";
import { cardsSlice } from "./features/card/cardsSlice";
import { usersSlice } from "./features/user/usersSlice";

const store = configureStore({
  reducer: {
    user: usersSlice.reducer,
    board: boardSlice.reducer,
    column: columnSlice.reducer,
    card: cardsSlice.reducer,
  },
});
export default store;
