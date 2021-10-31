import { combineReducers } from "redux";
import jobRequestReducer from "./jobRequest/reducer";
import reducerCandidate from "./candidate/reducer"
import reducerCandidateInterview from './candidateInterview/reducer'
import reducerInterview from './interview/reducer'

const rootReducer = combineReducers({
    cadidate: reducerCandidate,
    jobRequest: jobRequestReducer,
    candidateInterview: reducerCandidateInterview,
    interview: reducerInterview
});

export default rootReducer;