import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkLogin } from "./middleware";
import { fetchJobRequest } from "./jobRequest/actionCreator";
import { fetchInterview } from "./interview/actionCreator";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, checkLogin))
);

if (localStorage.getItem("currentUser")) {
  store.dispatch(fetchJobRequest());
  store.dispatch(fetchInterview())
}

export default store;
