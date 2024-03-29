const initialState = {
  data: [],
  loading: false,
  error: null,
  cart: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };

    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };

    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "LOAD_STATE_FROM_STORAGE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
