import { Redirect, Route } from "react-router";
// import { isLogin } from "../services/authenticate";

const isLogin = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return Boolean(currentUser?.email && currentUser?.accessToken);
};

const PrivateRoute = (props) => {
  return isLogin() ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
