import { HIDE_MESSAGE, SHOW_MESSAGE } from "./constant";

export const showMessage = (
  message,
  // type = "SUCCESS",
  callback = () => {
    console.log("OK");
  }
) => ({
  type: SHOW_MESSAGE,
  message: message,
  // type: type,
  callback: callback,
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
  message: null,
});
