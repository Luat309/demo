import { combineReducers } from "redux";
import jobRequestReducer from "./jobRequest/reducer";
import interviewReducer from "./interview/reducer";
import messageBoxReducer from "./messageBox/reducer";

const rootReducer = combineReducers({
  jobRequest: jobRequestReducer,
  interview: interviewReducer,
  messageBox: messageBoxReducer
});

export default rootReducer;
