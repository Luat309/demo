import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { LAYOUT, THEME } from "constants/app";
import { Button } from "primereact/button";
import Content from "./Content";
import SideBar from "./SideBar";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";

function App() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ?? "";
  });
  const [visibleRight, setVisibleRight] = useState(false);
  const [layout, setLayout] = useState(() => {
    const layout = JSON.parse(localStorage.getItem("layout"));
    return layout ?? { name: "Vertical", code: "VERTICAL" };
  });

  useEffect(() => {
    let themeLink = document.getElementById("app-theme");
    if (themeLink && theme) {
      themeLink.href = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme, layout]);

  const onLayoutChange = (e) => {
    setLayout(e.value);
    localStorage.setItem("layout", JSON.stringify(e.value));
  };

  return (
    <div className="layout-wrapper">
      <TopBar layout={layout} />
      {layout.name === "Vertical" && <SideBar />}
      <Content layout={layout} />

      {/* Sidebar setting */}
      <Button
        icon="pi pi-cog"
        onClick={() => setVisibleRight(true)}
        className="p-mr-2 p-button-lg button-change-theme"
      />
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <h3>Choose Theme</h3>
        {THEME.map((theme) => {
          return (
            <Button
              key={theme.href}
              onClick={() => setTheme(theme.href)}
              className="p-button-text"
              label={
                <img width="50px" src={theme.img} alt="Bootstrap Light Blue" />
              }
            />
          );
        })}

        <h3>Layout</h3>
        <Dropdown
          value={layout}
          options={LAYOUT}
          onChange={onLayoutChange}
          optionLabel="name"
          placeholder="Select Layout"
          style={{
            width: "100%",
          }}
        />
      </Sidebar>
    </div>
  );
}

export default App;
