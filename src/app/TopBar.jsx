import React, { useEffect, useRef, useState } from "react";
import socket from "./socket";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "images/logo.png";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { iconStyle } from "styles/icon.style";
import { MegaMenu } from "primereact/megamenu";
import { APP_MENU_ITEM } from "constants/appPath";
import NotificationList from "./NotificationList";

// const notifications = [];

const TopBar = (props) => {
  const history = useHistory();
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/node/notifications");
      const data = await res.json();

      setNotifications((prevState) => prevState.concat(data));
    })()

    document.addEventListener("click", () => {
      setVisible(false);
    })
  }, [])

  useEffect(() => {
    socket.on("res_notification", (data) => {
      // console.log("@ gmail.com", data);

      setNotifications((prevState) => prevState.concat(data));
    });
  }, []);

  const menu = useRef(null);
  const itemsAccount = [
    {
      label: "Thông tin tài khoản",
      icon: "pi pi-external-link",
      url: "https://reactjs.org/",
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

  const handleClick = (e) => {
    e.stopPropagation();

    setVisible(!visible);
  }

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
          <li style={{ position: "relative", cursor: "pointer" }}>
            <i onClick={handleClick} className="pi pi-bell p-overlay-badge" style={iconStyle}>
              <Badge value={notifications.length} />
            </i>
            {visible && <NotificationList notifications={notifications} />}
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
