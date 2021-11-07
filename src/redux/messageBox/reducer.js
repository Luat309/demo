import { HIDE_MESSAGE, SHOW_MESSAGE } from "./constant";

const initialState = {
  visible: false,
  message: null,
  type: "SUCCESS",
  callback: () => { console.log("OK") }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        visible: true,
        message: action.message,
        callback: action.callback
      };

    case HIDE_MESSAGE:
      return {
        visible: false,
        message: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
