import { types } from "../constants"

const initialState = {
    loading: false,
    error: false,
    orderslist: [],
    filterOrder: []
}


export const orders = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ORDERS:
            return {
                ...state, 
                loading: true
            }
        case types.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orderslist: action.payload
            }
        case types.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                orderslist: [],
                error: true
            }
        case types.FILTER_ORDER: 
            return {
                ...state,
                filterOrder: state.orderslist.filter(orders => orders.sed_id == action.payload)
            }
        default:
          return state;
    }
}