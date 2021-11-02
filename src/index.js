import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "styles/index.css";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import Login from "features/user/Login";
import { Provider } from "react-redux";
import store from "redux/store";
import CustomMessageBox from "components/CustomMessageBox";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomMessageBox />
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact={true} />
          <PrivateRoute path="/" component={App} exact={false} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
