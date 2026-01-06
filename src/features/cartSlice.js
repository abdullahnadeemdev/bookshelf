import { createSlice } from "@reduxjs/toolkit";

const getCart = () => {
  const arr = JSON.parse(localStorage.getItem("cart")) || [];
  return arr;
};
const initialState = {
  cartItems: getCart(),
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { updateCart } = cartSlice.actions;
