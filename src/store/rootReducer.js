import { combineReducers } from 'redux';
import {
    AuthReducer,
    orders,
    updateOrder,
    deliveriesList,
    sessionExpireReducer
} from './reducers';

const rootReducer = combineReducers({
    auth: AuthReducer,
    orders : orders,
    updateOrder,
    deliveriesList,
    sessionExpire: sessionExpireReducer
})

export default rootReducer;