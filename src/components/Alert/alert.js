import React, { useState } from "react";
import { Alert, Button, CloseButton } from "react-bootstrap";

export const DissmisibleAlert = ({ show, status, message, onClose }) => {
  return (
    <Alert
      show={show}
      variant={`${status ? "success" : "danger"}`}
      onClose={() => onClose()}
      dismissible 
    >
      <p className="mb-0">{message}</p>
    </Alert>
  );
};
