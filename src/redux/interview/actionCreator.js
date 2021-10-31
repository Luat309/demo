import { STATUS_REQUEST } from "constants/app";
import Interview from "services/Interview";
import {
    INTERVIEW_FETCH,
    INTERVIEW_INSERT,
    INTERVIEW_UPDATE,
    INTERVIEW_DELETE,
} from "./constant";

const service = new Interview();

export const getInterview = () => async(dispatch) => {
    dispatch({
        type: INTERVIEW_FETCH,
        status: STATUS_REQUEST.LOADING,
        payload: "PLEASE WAIT...",
    });

    const res = await service.interviewList();

    if (res.status === 200) {
        dispatch({
            type: INTERVIEW_FETCH,
            status: STATUS_REQUEST.SUCCEEDED,
            payload: res.data,
        });
    } else {
        dispatch({
            type: INTERVIEW_FETCH,
            status: STATUS_REQUEST.ERROR,
            payload: "SOMETHING WENT WRONG...",
        });
    }
};