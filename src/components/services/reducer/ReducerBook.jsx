import { addBooksToCart } from "../../../utils/utils";
import { removeBooksFromCart } from "../../../utils/utils";

const getBooks = () => {
  const arr = JSON.parse(localStorage.getItem("bookmarks")) || [];
  return arr;
};

const initialState = {
  cartBooks: getBooks(),
};

const bookData = (state = initialState.cartBooks, action) => {
  switch (action.type) {
    case addBooksToCart:
      return action.item;

    case removeBooksFromCart:
      return action.item;

    default:
      return state;
  }
};

export default bookData;
