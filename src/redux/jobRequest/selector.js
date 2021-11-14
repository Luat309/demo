import { APPROVAL_STATUS } from "constants/app";
import moment from "moment";

export const getJobRequest = (state) => {
  if (Array.isArray(state.jobRequest.data)) {
    return state.jobRequest.data.map((item) => {
      return {
        ...item,
        petitioner: item.petitioner.name,
        status: moment(item.deadline).isBefore()
          ? APPROVAL_STATUS.HET_HAN
          : item.status !== null && item.status !== undefined
          ? item.status
          : APPROVAL_STATUS.CHO_DUYET,
      };
    });
  } else {
    return state.jobRequest.data;
  }
};

export const getStatusJobRequest = (state) => state.jobRequest.status;

export const getMessageJobRequest = (state) => state.jobRequest.message;

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
