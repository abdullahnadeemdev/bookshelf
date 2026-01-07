import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state?.cartItems?.push(action.payload);
    },
    updateBookQuantity: (state, action) => {
      let { id, type } = action.payload;
      let book = state.cartItems.find((item) => item.id === id);
      if (book.quantity >= 1) {
        if (type === "+") {
          book.quantity += 1;
        } else if (type === "-") {
          book.quantity -= 1;
        } else if (type === "delt") {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, updateBookQuantity } = cartSlice.actions;
