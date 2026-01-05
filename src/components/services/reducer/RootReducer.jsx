import isLogin from "./Reducer";
import cartData from "./ReducerCart";
import bookData from "./ReducerBook";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  isLogin,
  cartData,
  bookData,
});
