import { APPROVAL_STATUS } from "constants/app";

export const getJobRequest = (state) => state.jobRequest.data;

export const getStatusJobRequest = (state) => state.jobRequest.status;

export const getJobRequestById = (id) => (state) =>
  state.jobRequest.data.find((item) => item.id === id);

export const getUnapprovedJobRequest = (state) =>
  state.jobRequest.data.filter(
    (item) => item.status === APPROVAL_STATUS.CHUA_DUYET
  );

export const getApprovedJobRequest = (state) =>
  state.jobRequest.data.filter(
    (item) => item.status === APPROVAL_STATUS.DA_DUYET
  );
