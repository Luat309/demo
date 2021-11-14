import PERMISSION_BUTTON from "constants/permissionButton";
import { Button } from "primereact/button";
import { getRoleCurrentUser } from "utils/localStorage";

const PermissionButton = ({ name, ...rest }) => {
  let button = <></>;

  const role = getRoleCurrentUser();

  if (PERMISSION_BUTTON[name]) {
    const check = PERMISSION_BUTTON[name].indexOf(role);

    if (check !== -1) {
      button = <Button {...rest} />;
    }
  }

  return button;
};

export default PermissionButton;
