import React from "react";
import Content from "./Content";

function MenuBar({ children }) {
  return (
    <div style={{ backgroundColor: "goldenrod" }}>
      <Content>{children}</Content>
    </div>
  );
}

export default MenuBar;
