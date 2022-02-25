import { types } from "../constants";

const initialState = {
  loading: false,
  error: false,
  message: "",
  open: false,
  status : false 
};

export const updateOrder = (state = initialState, action) => {
  switch (action.type) {
     case types.CHANGE_EVENT_TYPE:
      return {
        ...state,
        loading: true,
      };
    case types.CHANGE_EVENT_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        open: true,
        status : true
      };
    case types.CHANGE_EVENT_TYPE_FAILURE:
      return {
        ...state,
        loading: false, 
        error: true, 
        message: action.payload,
        open: true, 
        status : false
      };
    case types.CHANGE_EVENT_TYPE_MODAL_CLOSE:
      return {
        ...state,
        loading: false, 
        error: false, 
        message: action.payload, 
        open: false, 
        status: false 
      };
    default:
      return state;
  }
};
