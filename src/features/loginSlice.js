import { createSlice } from "@reduxjs/toolkit";

const getLogin = () => {
  const obj = JSON.parse(localStorage.getItem("login")) || {};
  Object.keys(obj).length > 0 ? { obj } : null;
};
const initialState = {
  user: null,
  userList: [],
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.userList.push(action.payload);
    },
    login: (state, action) => {
      const { email, pw } = action.payload;
      const userData = state.userList?.find((item) => item?.email === email);

      if (!userData) {
        console.log("show toast user not found");
      }

      if (userData && !userData.pw === pw) {
        console.log("show toast invalid creds");
      }

      if (userData) {
        state.user = userData;
      } else {
        state.user = null;
      }
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export default loginSlice.reducer;
export const { login, signUp, logout } = loginSlice.actions;
