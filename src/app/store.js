import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../features/bookMarkSlice";
import cartReducer from "../features/cartSlice";
import loginReducer from "../features/loginSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//   reducer: {
//     reducerBookmark: bookmarkReducer,
//     reducerCart: cartReducer,
//     reducerLogin: loginReducer,
//   },
// });

const reducers = combineReducers({
  reducerBookmark: bookmarkReducer,
  reducerCart: cartReducer,
  auth: loginReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };
