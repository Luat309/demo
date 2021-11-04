import { combineReducers } from "redux";
import jobRequestReducer from "./jobRequest/reducer";
import interviewReducer from "./interview/reducer";
import messageBoxReducer from "./messageBox/reducer";
import confirmBoxReducer from "./confirmBox/reducer";

const rootReducer = combineReducers({
  jobRequest: jobRequestReducer,
  interview: interviewReducer,
  messageBox: messageBoxReducer,
  confirmBox: confirmBoxReducer,
});

export default rootReducer;
