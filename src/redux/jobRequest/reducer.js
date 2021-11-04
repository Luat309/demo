import { STATUS_REQUEST } from "constants/app";
import {
  JOBREQUEST_FETCH,
  JOBREQUEST_INSERT,
  JOBREQUEST_UPDATE,
  JOBREQUEST_DELETE,
  RESET_STATUS,
} from "./constant";

const initialState = {
  data: [],
  status: STATUS_REQUEST.IDLE,
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBREQUEST_FETCH:
      return {
        status: action.status,
        data: action.payload,
      };

    case JOBREQUEST_INSERT:
      return {
        ...state,
        message: action.message,
        data: action.payload ?? state.data,
        status: action.status
      };

    case JOBREQUEST_UPDATE:
      return {
        ...state,
        message: action.message,
        data: action.payload ?? state.data,
        status: action.status
      };

    case JOBREQUEST_DELETE:
      break;

    case RESET_STATUS:
      return {
        ...state,
        status: STATUS_REQUEST.IDLE,
        message: ""
      };

    default:
      return state;
  }
};

export default reducer;
