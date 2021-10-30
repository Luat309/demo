import { LOGIN } from "constants/apiPath";
import { Utils } from "./util";

export default class UserService {
  login(data) {
      return Utils.post(LOGIN, data)
  }
}
