import { connect } from "react-redux";
import Description from "../products/productDesc/Description";
import { addItem } from "../services/actions/Actions";

const mapState = (state) => ({
  data: state.isLogin,
  item: state.cartData,
});

const mapDispatch = (dispatch) => ({
  cartItemsInfo: (item) => {
    return dispatch(addItem(item));
  },
});

export default connect(mapState, mapDispatch)(Description);
