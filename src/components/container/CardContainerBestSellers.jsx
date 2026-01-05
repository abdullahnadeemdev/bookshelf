import { connect } from "react-redux";
import Card from "../home/bestSellers/Card";
import { addBook } from "../services/actions/Actions";

const mapState = (state) => ({
  data: state.isLogin,
  book: state.bookData,
});

const mapDispatch = (dispatch) => ({
  booksInfo: (item) => {
    return dispatch(addBook(item));
  },
});

export default connect(mapState, mapDispatch)(Card);
