import UserService from "services/UserService";
import { STATUS_REQUEST } from "constants/app";
import {
  LOGIN,
  REGISTER,
  GET_LIST_USER,
  GET_DETAIL_USER,
  UPDATE_USER,
  DELETE_USER,
  DISIABLE_USER,
} from "./constant";
import { showMessage } from "redux/messageBox/actionCreator";

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

export const AddUser = (data) => async (dispatch) => {
  try {
    const res = await service.register(data);
    console.log(res, "fdfg");
    dispatch({ type: REGISTER, payload: res.data.data });
    dispatch(showMessage("Thêm user thành công!"));
  } catch (error) {
    dispatch({
      type: REGISTER,
      status: STATUS_REQUEST.ERROR,
      data: error?.response?.data.message,
      currentUser: {},
    });
    dispatch(showMessage("Thêm user thất bại!", error));
  }
};
export const RemoveUser = (id) => async (dispatch) => {
  try {
    await service.deleteUser(id);
    dispatch({ type: DELETE_USER, payload: id });
    dispatch(showMessage("Xoas thành công!"));
  } catch (error) {}
};
export const DisableUser = (id) => (dispatch) => {
  dispatch({
    type: DISIABLE_USER,
    status: STATUS_REQUEST.LOADING,
    data: [],
    currentUser: {},
  });

  service
    .disableMember(id)
    .then((res) => {
      dispatch({
        type: DISIABLE_USER,
        status: STATUS_REQUEST.SUCCEEDED,
        currentUser: {},
      });
    })
    .catch((error) => {
      dispatch({
        type: DISIABLE_USER,
        status: STATUS_REQUEST.ERROR,
        data: error?.response?.data.message,
        currentUser: {},
      });
    });
};
export const updateUser = (data) => async (dispatch) => {
  console.log(data, "vghhjk");
  try {
    const res = await service.updateUser(data);
    dispatch({ type: UPDATE_USER, payload: res.data });
    dispatch(showMessage("Sửa user thành công!"));
  } catch (error) {
    dispatch({
      type: UPDATE_USER,
      status: STATUS_REQUEST.ERROR,
      data: error?.response?.data.message,
      currentUser: {},
    });
    dispatch(showMessage("Sửa user thất bại!", error));
  }
};
