import { connect } from "react-redux";
import Description from "../products/productDesc/Description";

const mapState = (state) => ({
  data: state.isLogin,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Description);
