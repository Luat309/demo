import { APPROVAL_STATUS } from "constants/app";
import moment from "moment";

export const getJobRequest = (state) =>
  Array.isArray(state.jobRequest.data) &&
  state.jobRequest.data.map((item) => {
    return {
      ...item,
      status: moment(item.deadline).isBefore()
        ? 2
        : item.status === null
        ? 3
        : item.status,
    };
  });

export const getStatusJobRequest = (state) => state.jobRequest.status;

export const getJobRequestById = (id) => (state) =>
  state.jobRequest.data.find((item) => Number(item.id) === Number(id));

export const getNewJobRequest = (state) =>
  state.jobRequest.data.filter((item) => item.status === null);

export const getRejectJobRequest = (state) =>
  state.jobRequest.data.filter(
    (item) => item.status === APPROVAL_STATUS.CHUA_DUYET
  );

export const getApprovedJobRequest = (state) =>
  state.jobRequest.data.filter(
    (item) => item.status === APPROVAL_STATUS.DA_DUYET
  );
