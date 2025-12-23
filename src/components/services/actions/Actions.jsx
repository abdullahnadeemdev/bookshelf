import { isLoginT } from "../../../utils/utils";
import { isLoginF } from "../../../utils/utils";

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
