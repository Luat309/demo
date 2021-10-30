import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
    combineReducers(rootReducer), composeWithDevTools(applyMiddleware(...middleware))
);

export default store;