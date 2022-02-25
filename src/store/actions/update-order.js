import { types } from "../constants";

export const changeEventType = (data) => {
    return {
        type: types.CHANGE_EVENT_TYPE,
        payload: data
    }
}

export const closeFeedbackSnackbar = () => {
    return {
        type: types.CHANGE_EVENT_TYPE_MODAL_CLOSE,
    }
}