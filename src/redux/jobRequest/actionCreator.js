import { STATUS_REQUEST } from "constants/app";
import JobRequestService from "services/JobRequestService";
import {
  JOBREQUEST_FETCH,
  JOBREQUEST_INSERT,
  JOBREQUEST_UPDATE,
  JOBREQUEST_DELETE,
} from "./constant";

const service = new JobRequestService();

export const fetchJobRequest = () => async (dispatch) => {
  dispatch({
    type: JOBREQUEST_FETCH,
    status: STATUS_REQUEST.LOADING,
    payload: "PLEASE WAIT...",
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
