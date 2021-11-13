import STATUS_REQUEST from "constants/app";
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
      break;

    default:
      return state;
  }
};
