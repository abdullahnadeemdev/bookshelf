import { isLoginT } from "../../../utils/utils";
import { isLoginF } from "../../../utils/utils";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("logIn")) || [];
  if (arr.length > 0) {
    return arr;
  } else {
    return false;
  }
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
