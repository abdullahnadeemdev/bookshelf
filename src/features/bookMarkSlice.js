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
    updateBookmark: (state, action) => {
      state.bookMark = action.payload;
    },
  },
});

export default bookMarkSlice.reducer;
export const { updateBookmark } = bookMarkSlice.actions;
