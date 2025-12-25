import { addItemsToCart } from "../../../utils/utils";
import { removeItemsFromCart } from "../../../utils/utils";
// import { addDuplicateItem } from "../../../utils/utils";

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
      return action.item;

    case removeItemsFromCart:
      return action.item;

    // case addDuplicateItem:
    //   return action.item;

    default:
      return state;
  }
};

export default cartData;
