import PERMISSION_BUTTON from "constants/permissionButton";
import { Button } from "primereact/button";

const PermissionButton = ({ name, ...rest }) => {
  let button = <></>;

  const {
    user: { role },
  } = JSON.parse(localStorage.getItem("currentUser"));

  if (PERMISSION_BUTTON[name]) {
    const check = PERMISSION_BUTTON[name].indexOf(role);

    if (check !== -1) {
      button = <Button {...rest} />;
    }
  }

  return button;
};

export default PermissionButton;
