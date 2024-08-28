import {types} from '../constants';


export const getDeliveriesList = (filters) => {
    return {
        type: types.FETCH_LIST,
        payload: filters
    }
}