import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkLogin } from "./middleware";

import { fetchJobRequest } from "./jobRequest/actionCreator";
import { fetchInterview } from "./interview/actionCreator";
import { getListUsers } from "./user/actionCreator";

import { getCandidate } from "./candidate/action";
import { getRoleCurrentUser } from "utils/localStorage";
import { HR_MANAGER, HR, INTERVIEWER, MANAGER } from "constants/app";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, checkLogin))
);

if (localStorage.getItem("currentUser")) {
	const role = getRoleCurrentUser();

	switch (role) {
		case HR_MANAGER:
			store.dispatch(getListUsers());
			store.dispatch(fetchJobRequest());
			store.dispatch(fetchInterview());
			store.dispatch(getCandidate());
			break;

		case HR:
			store.dispatch(fetchJobRequest());
			store.dispatch(fetchInterview());
			store.dispatch(getCandidate());
			break;

		case MANAGER:
		case INTERVIEWER:
			store.dispatch(fetchJobRequest());
			store.dispatch(fetchInterview());
			break;

		default:
			break;
	}
}

export default store;
