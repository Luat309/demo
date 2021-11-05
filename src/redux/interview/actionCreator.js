import { STATUS_REQUEST } from "constants/app";
import InterviewService from "services/InterviewService";
import {
    INTERVIEW_FETCH,
    INTERVIEW_INSERT,
    INTERVIEW_UPDATE,
    INTERVIEW_DELETE,
} from "./constant";

const service = new InterviewService();

export const fetchInterview = () => async(dispatch) => {
    dispatch({
        type: INTERVIEW_FETCH,
        status: STATUS_REQUEST.LOADING,
        payload: [],
    });

    const res = await service.fetchInterview();

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