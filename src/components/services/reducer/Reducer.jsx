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
// console.log("getItem()", getItem());

const logCheck = getItem();
// console.log("getItem()", logCheck);

const initialState = {
  login: logCheck,
};
// console.log("initialState.login()", initialState.login);

const isLogin = (state = initialState.login, action) => {
  if (!logCheck) {
    switch (action.type) {
      case isLoginT: {
        //   console.log("state Reducer", state);
        //   console.log("action Reducer", action);
        //   console.log("action Reducer data", action.data);
        return (state = true);
      }
      case isLoginF: {
        return (state = false);
      }
      default:
        return state;
    }
  } else {
    console.log("I WORK");
  }
};

export default isLogin;
