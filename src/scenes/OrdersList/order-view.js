import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export const OrderView = ({show, handleDeliverBtn, handleCancelBtn, handleClose, OrderData}) => {
    const { customer_address, customer_mobile, customer_name, event_type, meal_type, product, sed_id} = OrderData;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ID #</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>{customer_name}</h1>
        <h2>{customer_mobile}</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancelBtn}>
          Cancel Order
        </Button>
        <Button variant="primary" onClick={handleDeliverBtn}>
          Delivered
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
