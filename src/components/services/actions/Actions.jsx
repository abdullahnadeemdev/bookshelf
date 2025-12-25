import { isLoginT } from "../../../utils/utils";
import { isLoginF } from "../../../utils/utils";
import { addItemsToCart } from "../../../utils/utils";
import { removeItemsFromCart } from "../../../utils/utils";
import { addItemsDuplicate } from "../../../utils/utils";

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
