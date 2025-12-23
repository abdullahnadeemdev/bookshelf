import { connect } from "react-redux";
import Login from "../../pages/loginPage/Login";
import { loginTrue } from "../services/actions/Actions";

const mapState = (state) => ({
  data: state.isLogin,
});

const mapDispatch = (dispatch) => ({
  userLogin: (data) => {
    console.log("data container", data);
    return dispatch(loginTrue(data));
  },
});

export default connect(mapState, mapDispatch)(Login);
