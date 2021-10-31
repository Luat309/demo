import { STATUS_REQUEST } from "constants/app";
import {
  INTERVIEW_FETCH,
  INTERVIEW_INSERT,
  INTERVIEW_UPDATE,
  INTERVIEW_DELETE,
} from "./constant";

const initialState = {
  data: [],
  status: STATUS_REQUEST.IDLE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INTERVIEW_FETCH:
      return {
        status: action.status,
        data: action.payload,
      };

    case INTERVIEW_INSERT:
      break;

    case INTERVIEW_UPDATE:
      break;

    case INTERVIEW_DELETE:
      break;

    default:
      return state;
  }
};

export default reducer;
