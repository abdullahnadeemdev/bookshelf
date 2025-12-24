import { connect } from "react-redux";
import Card from "../home/bestSellers/Card";

const mapState = (state) => ({
  data: state.isLogin,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Card);
