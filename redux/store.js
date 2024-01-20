import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./reducer";
import { watchFetchProducts } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const loadInitialState = async () => {
  try {
    const storedState = await AsyncStorage.getItem("reduxState");
    return storedState ? JSON.parse(storedState) : undefined;
  } catch (error) {
    console.error("Error loading state from AsyncStorage:", error);
    return undefined;
  }
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(function* rootSaga() {
  yield watchFetchProducts();
});

loadInitialState().then((initialState) => {
  if (initialState) {
    store.dispatch({ type: "LOAD_STATE_FROM_STORAGE", payload: initialState });
  }
});

store.subscribe(() => {
  const { cart, favorites } = store.getState();
  AsyncStorage.setItem("reduxState", JSON.stringify({ cart, favorites }));
});

export default store;
