import { types } from "../constants";

const initialState = {
  loading: false,
  error: false,
  list: [],
};

export const deliveriesList = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case types.FETCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: true,
      };
    default:
      return state;
  }
};
