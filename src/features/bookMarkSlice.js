import { createSlice } from "@reduxjs/toolkit";

const getBooks = () => {
  const arr = JSON.parse(localStorage.getItem("bookmarks")) || [];
  return arr;
};
const initialState = {
  bookMark: getBooks(),
};

export const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      state.bookMark.push(action.payload);
    },
  },
});

export default bookMarkSlice.reducer;
export const { addBookMark } = bookMarkSlice.actions;
