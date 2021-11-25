import { STATUS_REQUEST } from "constants/app";
import {
  LOGIN,
  REGISTER,
  GET_LIST_USER,
  GET_DETAIL_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./constant";

const initialState = {
  data: [],
  currentUser: {},
  status: STATUS_REQUEST.IDLE,
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;

    case GET_LIST_USER:
      return {
        data: action.data,
        status: action.status,
        message: action.message,
      };
    case REGISTER:
      return {
        data: action.data,
        status: action.status,
        message: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
