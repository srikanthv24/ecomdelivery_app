import { combineReducers } from 'redux';
import {
    AuthReducer,
    orders,
    updateOrder
} from './reducers';

const rootReducer = combineReducers({
    auth: AuthReducer,
    orders : orders,
    updateOrder
})

export default rootReducer;