import UserService from "services/UserService";
import { STATUS_REQUEST } from "constants/app";
import {
  LOGIN,
  REGISTER,
  GET_LIST_USER,
  GET_DETAIL_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./constant";

const service = new UserService();

export const login = (data) => (dispatch) => {
  dispatch({
    type: LOGIN,
    status: STATUS_REQUEST.LOADING,
    data: [],
    currentUser: {},
  });

  service
    .login(data)
    .then((res) => {
      dispatch({
        type: LOGIN,
        status: STATUS_REQUEST.SUCCEEDED,
        data: res.data,
        currentUser: {},
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN,
        status: STATUS_REQUEST.ERROR,
        data: error?.response?.data.message,
        currentUser: {},
      });
    });
};

export const getListUsers = () => (dispatch) => {
  dispatch({
    type: GET_LIST_USER,
    status: STATUS_REQUEST.LOADING,
    data: [],
    currentUser: {},
  });

  service
    .getListUser()
    .then((res) => {
      dispatch({
        type: GET_LIST_USER,
        status: STATUS_REQUEST.SUCCEEDED,
        data: res.data,
        currentUser: {},
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_USER,
        status: STATUS_REQUEST.ERROR,
        data: error?.response?.data.message,
        currentUser: {},
      });
    });
};

export const AddUser = (data) => (dispatch) => {
  dispatch({
    type: REGISTER,
    status: STATUS_REQUEST.LOADING,
    data: [],
    currentUser: {},
  });

  service
    .register(data)
    .then((res) => {
      dispatch({
        type: REGISTER,
        status: STATUS_REQUEST.SUCCEEDED,
        data: res.data,
        currentUser: {},
      });
    })
    .catch((error) => {
      dispatch({
        type: REGISTER,
        status: STATUS_REQUEST.ERROR,
        data: error?.response?.data.message,
        currentUser: {},
      });
    });
};
export const RemoveUser = (id) => (dispatch) => {
  dispatch({
    type: DELETE_USER,
    status: STATUS_REQUEST.LOADING,
    data: [],
    currentUser: {},
  });

  service
    .deleteUser(id)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        status: STATUS_REQUEST.SUCCEEDED,
        currentUser: {},
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_USER,
        status: STATUS_REQUEST.ERROR,
        data: error?.response?.data.message,
        currentUser: {},
      });
    });
};
