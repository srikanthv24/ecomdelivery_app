import { types } from "../constants";
import { UpdateOrder } from "../../services/api";
import { takeLatest, put, call } from "redux-saga/effects";

function* updateOrder(action) {
  const response = yield call(UpdateOrder.updateOrder, action.payload);
  if (response.body && !response.body.error) {
    yield put({
      type: types.CHANGE_EVENT_TYPE_SUCCESS,
      payload: response.body,
    });
    yield put({
      type: types.FETCH_ORDERS,
      payload: action.payload.filters,
    });
  } else if (response.message === "The incoming token has expired") {
    yield put({
      type: types.SESSION_EXPIRED,
      payload: [
        {
          error: true,
          errorType: "UnauthorizedException",
          message: response.message,
        },
      ],
    });
  } else {
    yield put({
      type: types.CHANGE_EVENT_TYPE_FAILURE,
      payload: response.message,
    });
  }
}

export function* updateOrderSaga() {
  yield takeLatest(types.CHANGE_EVENT_TYPE, updateOrder);
}
