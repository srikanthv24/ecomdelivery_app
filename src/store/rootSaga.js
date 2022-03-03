import { all } from "redux-saga/effects";
import { ordersSaga, updateOrderSaga, deliveriesListSaga } from "./saga";

export default function* rootSaga() {
  yield all([
     ordersSaga(), 
     updateOrderSaga(),
     deliveriesListSaga()
  ]);
}
