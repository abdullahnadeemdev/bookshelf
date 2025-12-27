import { isLoginT, isLoginF } from "../../../utils/utils";

const getItem = () => {
  const user = JSON.parse(localStorage.getItem("logIn"));

  if (user && user.isLogin === true) {
    return true;
  }
  return false;
};

const initialState = getItem();

const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case isLoginT:
      return true;
    case isLoginF:
      return false;
    default:
      return state;
  }
};

export default isLogin;
