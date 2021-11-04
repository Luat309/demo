import { STATUS_REQUEST } from "constants/app";
import {
  JOBREQUEST_FETCH,
  JOBREQUEST_INSERT,
  JOBREQUEST_UPDATE,
  JOBREQUEST_DELETE,
} from "./constant";

const initialState = {
  data: [],
  status: STATUS_REQUEST.IDLE,
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
        message: action.message,
        data: [...state.data, action.payload],
      }

    case JOBREQUEST_UPDATE:
      break;

    case JOBREQUEST_DELETE:
      break;

    default:
      return state;
  }
};

export default reducer;
