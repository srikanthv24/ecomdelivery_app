import React, { useState } from "react";
import { Alert, Button, CloseButton } from "react-bootstrap";

export const DissmisibleAlert = ({ show, status, message, handleClose }) => {
  // const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant={`${status ? "success" : "danger"}`}
      // dismissible 
    >
      <p>{message}</p>
      <div className="d-flex justify-content-end">
          <Button onClick={handleClose} variant={`${status ? "outline-success" : "outline-danger"}`}>
           Ok
          </Button>
        </div>
    </Alert>
  );
};
