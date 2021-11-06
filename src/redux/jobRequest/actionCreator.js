import { STATUS_REQUEST } from "constants/app";
import { showMessage } from "redux/messageBox/actionCreator";
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

  service
    .fetchJobRequest()
    .then((res) => {
      dispatch({
        type: JOBREQUEST_FETCH,
        status: STATUS_REQUEST.SUCCEEDED,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_FETCH,
        status: STATUS_REQUEST.ERROR,
        payload: error.message,
      });
    });
};

export const insertJobRequest = (data) => (dispatch) => {
  dispatch({
    type: JOBREQUEST_INSERT,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  service
    .createJobRequest(data)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_INSERT,
        message: "Thêm yêu cầu thành công!",
        payload: res.data,
        status: STATUS_REQUEST.SUCCEEDED,
      });

      dispatch(showMessage("Thêm yêu cầu thành công!"));
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_INSERT,
        message: error.message,
        status: STATUS_REQUEST.ERROR,
      });

      dispatch(showMessage(error.message));
    });
};

export const updateJobRequest = (data) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_UPDATE,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  service
    .editJobRequest(data)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_UPDATE,
        message: "Cập nhật thành công!",
        payload: data,
        status: STATUS_REQUEST.SUCCEEDED,
      });

      dispatch(showMessage("Cập nhật thành công!"));
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_UPDATE,
        message: error.message,
        status: STATUS_REQUEST.ERROR,
      });

      dispatch(showMessage(error.message));
    });
};

export const deleteJobRequest = (id) => (dispatch) => {
  dispatch({
    type: JOBREQUEST_DELETE,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  service
    .deleteJobRequest(id)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_DELETE,
        message: "Xóa thành công!",
        payload: id,
        status: STATUS_REQUEST.SUCCEEDED,
      });
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_DELETE,
        message: error.message,
        status: STATUS_REQUEST.ERROR,
      });
    });
};

export const approvalJobRequest = (id) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_DELETE,
    message: "Đang xử lý",
    status: STATUS_REQUEST.LOADING,
  });

  service
  .deleteJobRequest(id)
  .then((res) => {
    dispatch({
      type: JOBREQUEST_DELETE,
      message: "Phê duyệt thành công!",
      payload: id,
      status: STATUS_REQUEST.SUCCEEDED,
    });
  })
  .catch((error) => {
    dispatch({
      type: JOBREQUEST_DELETE,
      message: error.message,
      status: STATUS_REQUEST.ERROR,
    });
  });
};

export const rejectJobRequest = (data) => async (dispatch) => {};
