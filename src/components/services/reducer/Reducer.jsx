import { isLoginT } from "../../../utils/utils";
import { isLoginF } from "../../../utils/utils";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("Login")) || [];
  return arr;
};

const logCheck = getItem();

const initialState = {
  login: logCheck,
};

export default function isLogin(state = initialState.login, action) {
  switch (action.type) {
    case isLoginT: {
      //   console.log("state Reducer", state);
      //   console.log("action Reducer", action);
      //   console.log("action Reducer data", action.data);
      return (state = true);
    }
    case isLoginF: {
      //   console.log("state Reducer", state);
      //   console.log("action Reducer", action);
      //   console.log("action Reducer data", action.data);
      return (state = false);
    }
    default:
      return state;
  }
}
