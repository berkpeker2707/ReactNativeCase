import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer from "../redux/reducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Redux Reducer Tests", () => {
  it("should handle FETCH_PRODUCTS_REQUEST", () => {
    const initialState = {
      data: [],
      loading: false,
      error: null,
      cart: [],
      favorites: [],
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: null,
    };

    const action = { type: "FETCH_PRODUCTS_REQUEST" };
    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
