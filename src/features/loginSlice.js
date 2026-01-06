import { createSlice } from "@reduxjs/toolkit";

const getLogin = () => {
  const arr = JSON.parse(localStorage.getItem("login")) || {};
  return arr;
};
const initialState = {
  isAuth: getLogin(),
};

export const loginSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    loginTrue: (state, action) => {
      state.isAuth = true;
    },
    loginFalse: (state, action) => {
      state.isAuth = false;
    },
  },
});

export default loginSlice.reducer;
export const { loginTrue, loginFalse } = loginSlice.actions;
