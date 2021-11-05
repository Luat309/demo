import { STATUS_REQUEST } from "constants/app";
import JobRequestService from "services/JobRequestService";
import {
  JOBREQUEST_FETCH,
  JOBREQUEST_INSERT,
  JOBREQUEST_UPDATE,
  JOBREQUEST_DELETE,
  RESET_STATUS,
} from "./constant";

const service = new JobRequestService();

export const fetchJobRequest = () => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_FETCH,
    status: STATUS_REQUEST.LOADING,
    payload: [],
  });

  const res = await service.fetchJobRequest();

  if (res.status === 200) {
    dispatch({
      type: JOBREQUEST_FETCH,
      status: STATUS_REQUEST.SUCCEEDED,
      payload: res.data,
    });
  } else {
    dispatch({
      type: JOBREQUEST_FETCH,
      status: STATUS_REQUEST.ERROR,
      payload: "SOMETHING WENT WRONG...",
    });
  }
};

export const insertJobRequest = (data) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_INSERT,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  const res = await service.createJobRequest(data);

  if (res.status === 200) {
    dispatch({
      type: JOBREQUEST_INSERT,
      message: "Thêm yêu cầu thành công!",
      payload: res.data,
      status: STATUS_REQUEST.SUCCEEDED,
    });
  } else {
    dispatch({
      type: JOBREQUEST_INSERT,
      message: "Thêm yêu cầu không thành công!",
      payload: [],
      status: STATUS_REQUEST.ERROR,
    });
  }
};

export const updateJobRequest = (data) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_UPDATE,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  const res = await service.editJobRequest(data);

  if (res.status === 200) {
    dispatch({
      type: JOBREQUEST_UPDATE,
      message: "Cập nhật thành công!",
      payload: res.data,
      status: STATUS_REQUEST.SUCCEEDED,
    });
  } else {
    dispatch({
      type: JOBREQUEST_UPDATE,
      message: "Cập nhật không thành công!",
      payload: [],
      status: STATUS_REQUEST.ERROR,
    });
  }
};

export const deleteJobRequest = (id) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_DELETE,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  const res = await service.deleteJobRequest(id);

  if (res.status === 200) {
    dispatch({
      type: JOBREQUEST_DELETE,
      message: "Xóa thành công!",
      payload: res.data,
      status: STATUS_REQUEST.SUCCEEDED,
    });
  } else {
    dispatch({
      type: JOBREQUEST_DELETE,
      message: "Xóa không thành công!",
      payload: [],
      status: STATUS_REQUEST.ERROR,
    });
  }
};

export const approvalJobRequest = (data) => async (dispatch) => {};

export const rejectJobRequest = (data) => async (dispatch) => {};

export const resetStatus = () => {
  return {
    type: RESET_STATUS,
  };
};
