import { HIDE_MESSAGE, SHOW_MESSAGE } from "./constant";

export const showMessage = (message) => ({
  type: SHOW_MESSAGE,
  message: message,
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
  message: null,
});
