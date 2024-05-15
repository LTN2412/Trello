import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { boardSlice } from "@/features/board/boardSlice";
import { columnSlice } from "./features/column/columnsSlice";
import { cardsSlice } from "./features/card/cardsSlice";
import { usersSlice } from "./features/user/usersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: usersSlice.reducer,
  board: boardSlice.reducer,
  column: columnSlice.reducer,
  card: cardsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
