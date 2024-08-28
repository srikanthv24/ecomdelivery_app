import { types } from "../constants";

export const getOrders = (data) => {
    return {
        type: types.FETCH_ORDERS,
        payload: data
    }
}

export const filterOrder = (id) => {
    return {
        type: types.FILTER_ORDER,
        payload: id,
    }
}