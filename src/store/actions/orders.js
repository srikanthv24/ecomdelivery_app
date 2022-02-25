import { types } from "../constants";

export const getOrders = (id) => {
    return {
        type: types.FETCH_ORDERS,
        payload: id
    }
}

export const filterOrder = (id) => {
    return {
        type: types.FILTER_ORDER,
        payload: id,
    }
}