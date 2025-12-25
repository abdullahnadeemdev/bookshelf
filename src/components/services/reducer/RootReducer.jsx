import isLogin from "./Reducer";
import cartData from "./ReducerCart";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  isLogin,
  cartData,
});
