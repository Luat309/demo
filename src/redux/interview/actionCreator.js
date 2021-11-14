import { STATUS_REQUEST } from "constants/app";
import { showMessage } from "redux/messageBox/actionCreator";
import InterviewService from "services/InterviewService";
import {
    INTERVIEW_FETCH,
    INTERVIEW_INSERT
} from "./constant";

const service = new InterviewService();

export const fetchInterview = () => async(dispatch) => {
    dispatch({
        type: INTERVIEW_FETCH,
        status: STATUS_REQUEST.LOADING,
        payload: [],
    });

    service
        .fetchInterview()
        .then((res) => {
            dispatch({
                type: INTERVIEW_FETCH,
                status: STATUS_REQUEST.SUCCEEDED,
                payload: res.data,
            });
        })
        .catch((error) => {
            dispatch({
                type: INTERVIEW_FETCH,
                status: STATUS_REQUEST.ERROR,
                payload: error.message,
            });
        });
};

export const createInterview = (data, callback) => async(dispatch) => {
    dispatch({
        type: INTERVIEW_INSERT,
        status: STATUS_REQUEST.LOADING,
        payload: [],
    });

    service
        .createInterview(data)
        .then((res) => {
            dispatch({
                type: INTERVIEW_INSERT,
                message: "Tạo lịch phỏng vấn thành công!",
                payload: res.data,
                status: STATUS_REQUEST.SUCCEEDED,
            });

            dispatch(showMessage("Tạo lịch phỏng vấn thành công!", callback));
        })
        .catch((error) => {
            dispatch({
                type: INTERVIEW_INSERT,
                message: error.message,
                status: STATUS_REQUEST.ERROR,
            });

            dispatch(showMessage(error.message));
        });
};