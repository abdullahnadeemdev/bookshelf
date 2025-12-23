import { isLogin } from "../../../utils/utils";
import { isLogOut } from "../../../utils/utils";

export const loginTrue = (data) => {
  return {
    type: isLogin,
    data: data,
  };
};

export const loginFalse = (data) => {
  return {
    type: isLogOut,
    data: data,
  };
};
