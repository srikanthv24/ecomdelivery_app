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
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Cancel Order
        </Modal.Title> */}
        <h4 className="mb-0">Reason for cancellation?</h4>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" disabled={feedback.length> 0 ? false : true} onClick={handleConfirmCancel}>Submit</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};
