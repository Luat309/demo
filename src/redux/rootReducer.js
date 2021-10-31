import { combineReducers } from "redux";
import jobRequestReducer from "./jobRequest/reducer";
import reducerCandidate from "./candidate/reducer"
import reducerCandidateInterview from './candidateInterview/reducer'

const rootReducer = combineReducers({
    cadidate: reducerCandidate,
    jobRequest: jobRequestReducer,
    candidateInterview: reducerCandidateInterview
});

export default rootReducer;