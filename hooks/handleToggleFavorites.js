import { addToFavorites, removeFromFavorites } from "../redux/actions";

const handleToggleFavorites = (
  id,
  image,
  price,
  name,
  description,
  favorites,
  dispatch
) => {
  const isFavorite = favorites.find((item) => item.id === id);
  if (isFavorite) {
    dispatch(removeFromFavorites(id));
  } else {
    dispatch(addToFavorites({ id, image, price, name, description }));
  }
};
export default handleToggleFavorites;
