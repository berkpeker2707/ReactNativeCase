import { removeFromCart } from "../redux/actions";

const handleRemoveFromCart = (productId, dispatch) => {
  dispatch(removeFromCart(productId));
};

export default handleRemoveFromCart;
