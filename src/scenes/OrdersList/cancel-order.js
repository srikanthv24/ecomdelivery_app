import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const CancelOrder = ({ showModal, handleClose, handleOrderCancel }) => {
    const [feedback, setFeedback] = useState("");

    const handleConfirmCancel = () => {
      handleOrderCancel(feedback);
    }

  return (
    <Modal
      size="sm"
      show={showModal}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cancel Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>May I know the reason for Reason?</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleConfirmCancel}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};
