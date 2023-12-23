import React from "react";

const HorizontalLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span style={{ background: "#e2e6e9", padding: "0 10px" }}>{text}</span>
    </div>
  );
};

export default HorizontalLine;
