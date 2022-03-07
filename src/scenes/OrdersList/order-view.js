import React from "react";
import { Button, Modal } from "react-bootstrap";

export const OrderView = ({
  show,
  handleDeliverBtn,
  handleCancelBtn,
  handleClose,
  OrderData,
}) => {
  const {
    order_id: orderId,
    customer_address: address,
    customer_mobile: mobile,
    customer_name: name,
    event_type,
    meal_type,
    product: items,
    sed_id,
  } = OrderData;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`#${orderId}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>{name}</h6>
        <h6>{mobile}</h6>
        <h6>{address}</h6>
        <div className="border border-dark rounded p-2">
          <h6>Order Details</h6>
          {items && items.length > 0 && items.map(item => {
            return (
              <div class="row">
              <div class="col-9">
              <small className="mb-0">{item.display_name}</small>
              </div>
              <div class="col-3">
              <small className="mb-0">-{item.qty}No's</small>
              </div>
            </div> 
            )
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleDeliverBtn}>
          Deliver
        </Button>
        <Button variant="danger" onClick={handleCancelBtn}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
