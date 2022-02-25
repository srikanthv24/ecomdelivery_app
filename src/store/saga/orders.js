import { types } from '../constants';
import { takeEvery, call, all, put } from 'redux-saga/effects';
import { Orders } from '../../services/api';

function* orders(action) {
    const response = yield call(Orders.getOrders, action);
    console.log("response_in_saga", response);
    try {
        if (response.body && Object.keys(response).length) {
            yield put({
                type: types.FETCH_ORDERS_SUCCESS,
                payload: response.body
            });
        } else {
            yield put({
                type: types.FETCH_ORDERS_FAILURE,
            });
        }
    } catch (error) {
        yield put({
            type: types.FETCH_ORDERS_FAILURE,
        });
    }
}

export function* ordersSaga() {
    yield takeEvery(types.FETCH_ORDERS, orders)
}
