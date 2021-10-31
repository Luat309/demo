import { combineReducers } from "redux";
import jobRequestReducer from "./jobRequest/reducer";
import interviewReducer from "./interview/reducer";

const rootReducer = combineReducers({
  jobRequest: jobRequestReducer,
  interview: interviewReducer
});

export default rootReducer;
