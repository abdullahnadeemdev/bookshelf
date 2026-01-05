import { isLoginT } from "../../../utils/utils";
import { isLoginF } from "../../../utils/utils";

import { addItemsToCart } from "../../../utils/utils";
import { removeItemsFromCart } from "../../../utils/utils";
import { addItemsDuplicate } from "../../../utils/utils";

import { addBooksToCart } from "../../../utils/utils";
import { removeBooksFromCart } from "../../../utils/utils";
import { addBooksDuplicate } from "../../../utils/utils";

export const loginTrue = (data) => {
  return {
    type: isLoginT,
    data: data,
  };
};

export const loginFalse = (data) => {
  return {
    type: isLoginF,
    data: data,
  };
};

export const addItem = (item) => {
  return {
    type: addItemsToCart,
    item: item,
  };
};
export const addDuplicateItem = (item) => {
  return {
    type: addItemsDuplicate,
    item: item,
  };
};

export const removeItem = (item) => {
  return {
    type: removeItemsFromCart,
    item: item,
  };
};

export const addBook = (item) => {
  return {
    type: addBooksToCart,
    item: item,
  };
};
export const addDuplicateBook = (item) => {
  return {
    type: addBooksDuplicate,
    item: item,
  };
};

export const removeBooks = (item) => {
  return {
    type: removeBooksFromCart,
    item: item,
  };
};
