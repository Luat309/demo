export const checkLogin = (store) => (next) => (action) => {
  if (action.payload?.message === "Chua dang nhap") {
    alert("Phiên đăng nhập đã hết hạn!");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
    return;
  }

  next(action);
};
