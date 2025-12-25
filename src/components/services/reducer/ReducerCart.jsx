import { addItemsToCart } from "../../../utils/utils";
import { removeItemsFromCart } from "../../../utils/utils";

const getItems = () => {
  const arr = JSON.parse(localStorage.getItem("cart")) || [];
  return arr;
};

const initialState = {
  cartItem: getItems(),
};

const cartData = (state = initialState.cartItem, action) => {
  switch (action.type) {
    case addItemsToCart:
      return [...state, action.item];

    case removeItemsFromCart:
      return action.item;

    default:
      return state;
  }
};

export default cartData;
