import { addToCart } from "../redux/actions";

const handleAddToCart = (id, image, price, name, dispatch) => {
  dispatch(addToCart({ id, image, price, name }));
};
export default handleAddToCart;
