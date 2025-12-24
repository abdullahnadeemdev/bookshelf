import { isLoginT } from "../../../utils/utils";
import { isLoginF } from "../../../utils/utils";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("Login")) || false;
  return arr;
};

const logCheck = getItem();

const initialState = {
  login: logCheck,
};

const isLogin = (state = initialState.login, action) => {
  switch (action.type) {
    case isLoginT: {
      return (state = true);
    }
    case isLoginF: {
      return (state = false);
    }
    default:
      return state;
  }
};

export default isLogin;
