import { connect } from "react-redux";
import Navbar from "../shared/navBar/navBar";
import { loginFalse } from "../services/actions/Actions";

const mapState = (state) => ({
  data: state.isLogin,
  item: state.cartData,
});

const mapDispatch = (dispatch) => ({
  userLogOut: (data) => {
    return dispatch(loginFalse(data));
  },
});

export default connect(mapState, mapDispatch)(Navbar);
