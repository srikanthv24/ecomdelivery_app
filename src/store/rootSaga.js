import { all } from "redux-saga/effects";
import { ordersSaga, updateOrderSaga } from "./saga";

export default function* rootSaga() {
  yield all([
     ordersSaga(), 
     updateOrderSaga()
  ]);
}
