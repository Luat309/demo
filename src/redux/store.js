import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkLogin } from "./middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, checkLogin))
);

export default store;
