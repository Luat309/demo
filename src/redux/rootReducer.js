import { combineReducers } from "redux";
import jobRequestReducer from "./jobRequest/reducer";

const rootReducer = combineReducers({
  jobRequest: jobRequestReducer,
});

export default rootReducer;
