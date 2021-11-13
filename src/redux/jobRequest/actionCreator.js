import { showMessage } from "redux/messageBox/actionCreator";
import JobRequestService from "services/JobRequestService";
import {
  JOBREQUEST_FETCH,
  JOBREQUEST_INSERT,
  JOBREQUEST_UPDATE,
  JOBREQUEST_DELETE,
  JOBREQUEST_REJECT,
  JOBREQUEST_APPROVAL,
} from "./constant";

const service = new JobRequestService();

export const fetchJobRequest = () => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_FETCH,
    data: "loading",
    message: "Đang tải dữ liệu..."
  });

  service
    .fetchJobRequest()
    .then((res) => {
      dispatch({
        type: JOBREQUEST_FETCH,
        data: res.data,
        message: null
      });
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_FETCH,
        data: "error",
        message: error?.response?.data.message
      });
    });
};

export const insertJobRequest = (data, callback) => (dispatch) => {
  dispatch({
    type: JOBREQUEST_INSERT,
    message: "Đang xử lý",
  });

  service
    .createJobRequest(data)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_INSERT,
        message: "Thêm yêu cầu thành công!",
        payload: res.data,
      });

      dispatch(showMessage("Thêm yêu cầu thành công!"));
      callback();
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_INSERT,
        message: error.message,
      });

      dispatch(showMessage(error.message, "ERROR"));
    });
};

export const updateJobRequest = (data) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_UPDATE,
    message: "Đang xử lý",
  });

  service
    .editJobRequest(data)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_UPDATE,
        message: "Cập nhật thành công!",
        payload: data,
      });

      dispatch(showMessage("Cập nhật thành công!"));
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_UPDATE,
        message: error.message,
      });

      dispatch(showMessage(error.message, "ERROR"));
    });
};

export const deleteJobRequest = (id) => (dispatch) => {
  dispatch({
    type: JOBREQUEST_DELETE,
    message: "Đang xử lý",
  });

  service
    .deleteJobRequest(id)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_DELETE,
        message: "Xóa thành công!",
        payload: id,
      });

      dispatch(showMessage("Xóa thành công!"));
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_DELETE,
        message: error.message,
      });

      dispatch(showMessage(error.message, "ERROR"));
    });
};

export const approvalJobRequest = (id) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_APPROVAL,
    message: "Đang xử lý",
  });

  service
    .approvalJobRequest(id)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_APPROVAL,
        message: "Phê duyệt thành công!",
        payload: id,
      });

      dispatch(showMessage("Phê duyệt thành công!"));
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_APPROVAL,
        message: error.message,
      });

      dispatch(showMessage(error.message, "ERROR"));
    });
};

export const rejectJobRequest = (id) => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_REJECT,
    message: "Đang xử lý",
  });

  service
    .rejectJobRequest(id)
    .then((res) => {
      dispatch({
        type: JOBREQUEST_REJECT,
        message: "Từ chối thành công!",
        payload: id,
      });

      dispatch(showMessage("Từ chối thành công!"));
    })
    .catch((error) => {
      dispatch({
        type: JOBREQUEST_REJECT,
        message: error.message,
      });

      dispatch(showMessage(error.message, "ERROR"));
    });
};
