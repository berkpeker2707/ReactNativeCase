export const fetchProductsRequest = () => ({
  type: "FETCH_PRODUCTS_REQUEST",
});

export const fetchProductsSuccess = (data) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: data,
});

export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: error,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const addToFavorites = (product) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: product,
  };
};

export const removeFromFavorites = (productId) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: productId,
  };
};
