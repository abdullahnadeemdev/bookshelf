import { connect } from "react-redux";
import Card from "../products/main/Card";
import { addBook } from "../services/actions/Actions";

const mapState = (state) => ({
  book: state.bookData,
});

const mapDispatch = (dispatch) => ({
  bookInfo: (item) => {
    return dispatch(addBook(item));
  },
});

export default connect(mapState, mapDispatch)(Card);
