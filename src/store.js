import { configureStore } from "@reduxjs/toolkit";

import { boardSlice } from "@/features/board/boardSlice";

const store = configureStore({
  reducer: { board: boardSlice.reducer },
});
export default store;
