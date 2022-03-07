import React from "react";

export const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
