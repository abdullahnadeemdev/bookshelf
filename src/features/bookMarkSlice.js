import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookMarkSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.items.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default bookMarkSlice.reducer;
export const { addBookmark, removeBookmark } = bookMarkSlice.actions;
