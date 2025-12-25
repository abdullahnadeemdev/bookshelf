import { connect } from "react-redux";
import CartRow from "../cart/CartRow";
import { removeItem } from "../services/actions/Actions";

const mapState = (state) => ({
  cartItems: state.cartData,
});

const mapDispatch = (dispatch) => ({
  cartItemsDelete: (updatedCart) => dispatch(removeItem(updatedCart)),
});

export default connect(mapState, mapDispatch)(CartRow);
