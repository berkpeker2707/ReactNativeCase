import { put, takeLatest, call } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchProductsSuccess, fetchProductsFailure } from "./actions";

const fetchProductsApi = async () => {
  try {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    const products = await response.json();
    return products;
  } catch (err) {
    throw err;
  }
};

function* fetchProducts() {
  try {
    const products = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
    yield call(AsyncStorage.setItem, "products", JSON.stringify(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest("FETCH_PRODUCTS_REQUEST", fetchProducts);
}
