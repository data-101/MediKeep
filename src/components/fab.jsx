import React from "react";
import Icon from "../images/FAB/icon.svg";

const FAB = () => {
  return (
    <>
      <div
        onClick={() => navigate("/addreport")}
        style={{
          position: "absolute",
          textAlign: "center",
          borderRadius: "50%",
          padding: "1.1em",
          background: "#333333",
          bottom: "5%",
          right: "5%",
        }}
      >
        <img src={Icon} style={{ margin: 0 }} />
      </div>
    </>
  );
};

export default FAB;
