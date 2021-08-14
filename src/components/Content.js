import React from "react";

function Content({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <div style={{ maxWidth: 400 }}>{children}</div>
    </div>
  );
}

export default Content;
