import socket from "app/socket";
import { JOBREQUEST } from "constants/appPath";
import { getNameCurrentUser } from "utils/localStorage";

export const checkLogin = (store) => (next) => (action) => {
  if (action.payload === "Token has expired") {
    alert("Phiên đăng nhập đã hết hạn!");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
    return;
  }

  return next(action);
};

export const pushNotification = (store) => (next) => (action) => {

  if(typeof action === "function") {

    if(socket.connected) {
      const currentUser = getNameCurrentUser();

      socket.emit("push_notification", {
        title: currentUser + " đã thêm một yêu cầu tuyển dụng mới",
        path: JOBREQUEST,
        userCreated: currentUser,
      });

      return next(action);
    } else {
      return next(action);
    }
  }
  
  return next(action);
}