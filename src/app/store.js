import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../features/bookMarkSlice";
import cartReducer from "../features/cartSlice";
import loginReducer from "../features/loginSlice";

export const store = configureStore({
  reducerBookmark: bookmarkReducer,
  reducerCart: cartReducer,
  reducerLogin: loginReducer,
});
