import { types } from "../constants";
import { takeEvery, call, put } from "redux-saga/effects";
import { DeliveriesList } from "../../services/api";

function* deliveriesList(action) {
  const response = yield call(DeliveriesList.getDeliveriesList, action);
  try {
    if (response.body && Object.keys(response).length) {
      yield put({
        type: types.FETCH_LIST_SUCCESS,
        payload: response.body,
      });
    } else if (response.message == "The incoming token has expired") {
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
        type: types.FETCH_LIST_FAILURE,
      });
    }
  } catch (error) {
    yield put({
      type: types.FETCH_LIST_FAILURE,
    });
  }
}

export function* deliveriesListSaga() {
  yield takeEvery(types.FETCH_LIST, deliveriesList);
}
