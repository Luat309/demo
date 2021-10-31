import { CANDIDATE_INTERVIEW_CREATE, CANDIDATE_INTERVIEW_EDIT } from "constants/apiPath";
import CandidateInterviewService from "services/CandidateInterview"
import { CANDIDATE_INTERVIEW_LIST } from "./constant";

const servicer = new CandidateInterviewService()
export const getCandidateInterview = () => async dispatch => {
    try {
        const res = await servicer.CandidateInterviewList();
        dispatch({ type: CANDIDATE_INTERVIEW_LIST, payload: res.data })
    } catch (error) {

    }
}
export const createCandidateInterview = (item) => async dispatch => {
    try {
        const res = await servicer.createCandidateInterview(item);
        dispatch({ type: CANDIDATE_INTERVIEW_CREATE, payload: res.data })
    } catch (error) {

    }
}
export const editCandidateInterview = (item) => async dispatch => {
    try {
        const res = await servicer.editCandidateInterview(item.id, item);
        dispatch({ type: CANDIDATE_INTERVIEW_EDIT, payload: res.data })
    } catch (error) {

    }
}