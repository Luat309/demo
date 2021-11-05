import { STATUS_REQUEST } from "constants/app";
import {
  JOBREQUEST_FETCH,
  JOBREQUEST_INSERT,
  JOBREQUEST_UPDATE,
  JOBREQUEST_DELETE,
  JOBREQUEST_APPROVAL,
  JOBREQUEST_REJECT,
} from "./constant";

const initialState = {
  data: [],
  status: STATUS_REQUEST.IDLE,
  message: "",
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
        data: action?.payload ? [...state.data, action.payload] : state.data,
        status: action.status,
      };

    case JOBREQUEST_UPDATE:
      return {
        message: action.message,
        data: action?.payload
          ? state.data.map((item) => {
              if (item.id === action.payload.id) {
                return action.payload;
              }

              return item;
            })
          : state.data,
        status: action.status,
      };

    case JOBREQUEST_DELETE:
      return {
        message: action.message,
        data: action?.payload
          ? action.payload.filter((item) => item.id !== action.payload.id)
          : state.data,
        status: action.status,
      };

    default:
      return state;
  }
};

export default reducer;
