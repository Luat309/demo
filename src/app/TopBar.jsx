import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "images/logo.png";
// import { ProgressSpinner } from "primereact/progressspinner";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { iconStyle } from "styles/icon.style";
import { MegaMenu } from "primereact/megamenu";
import { APP_MENU_ITEM, INFO_USER } from "constants/appPath";

const TopBar = (props) => {
  const history = useHistory();

  const menu = useRef(null);
  const itemsAccount = [
    {
      label: "Thông tin tài khoản",
      icon: "pi pi-external-link",
      command: (e) => {
        history.push("/admin/user/infomation");
      },
    },
    {
      label: "Đăng xuất",
      icon: "pi pi-upload",
      command: (e) => {
        localStorage.removeItem("currentUser");
        history.push("/login");
      },
    },
  ];

  return (
    <>
      <div className="layout-topbar">
        <Link to="/">
          <img src={logo} alt="SSKPI" />
        </Link>
        <span
          className="p-input-icon-left"
          style={{
            marginLeft: "60px",
          }}
        >
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
        </span>

        <ul className="topbar-menu">
          <li>
            <i className="pi pi-globe" style={iconStyle}></i>
          </li>
          <li>
            <i className="pi pi-bell" style={iconStyle}></i>
          </li>
          <li>
            <i className="pi pi-question-circle" style={iconStyle}></i>
          </li>
          <li>
            <Menu model={itemsAccount} popup ref={menu} id="popup_menu" />
            <Button
              label="A"
              onClick={(event) => menu.current.toggle(event)}
              aria-controls="popup_menu"
              aria-haspopup
            />
          </li>
        </ul>
      </div>
      {props.layout.name === "Horizontal" && (
        <MegaMenu
          style={{
            padding: "5px",
          }}
          model={APP_MENU_ITEM}
        />
      )}
    </>
  );
};

export default React.memo(TopBar);
