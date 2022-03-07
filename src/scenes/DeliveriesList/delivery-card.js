import moment from "moment";
import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { FaHashtag, FaMobileAlt } from "react-icons/fa";
import './styles.css';

const Sessions = [
  { label: "breakfast", value: "B" },
  { label: "lunch", value: "L" },
  { label: "dinner", value: "D" },
];

export const DeliveryCard = ({ data }) => {
  const {
    sed_id: sid,
    customer_name: name,
    customer_mobile: mobile,
    status: status,
    event_type: eventType,
    order_id: orderId,
    upd_on: updatedOn,
    // customer_address: address
  } = data;

  return (
    <div className="container mb-1">
      <div className="row border border-dark1 rounded p-2">
      <div className="row m-0 p-0">
        <div className="col p-0" style={{ textAlign: "start" }}>
          <p className="d-flex mb-0 normal-txt" style={{alignItems:"center"}}>
            <FaHashtag className="m-1" />
            <small>{`${orderId}`}</small>
          </p>
        </div>
        <div className="col p-0">
            <p
              className="mb-0 txt"
              style={{ alignItems: "center", textAlign: "end" }}
            >
              <span className="badge bg-primary p-1">
              { moment(updatedOn + '+00:00').local().format("DD-MMM-YYYY hh:mm A")}
              </span>
            </p>
          </div>
      </div>
        <div className="p-0">
          <p className="d-flex mb-0 txt" style={{ alignItems: "center" }}>
            <BsPersonSquare className="m-1" />
            <small>{name}</small>
          </p>
        </div>
        <div className="row m-0 p-0">
          <div className="col p-0">
            <p
              className="mb-0 txt"
              style={{ alignItems: "center", textAlign: "start" }}
            >
              <FaMobileAlt className="m-1" />
              <small>{mobile}</small>
            </p>
          </div>
          <div className="col p-0">
            <p
              className="mb-0 txt"
              style={{ alignItems: "center", textAlign: "end" }}
            >
              <span className={`${status === "C" ? "badge bg-danger p-1" : eventType === "DC" ? "badge bg-success p-1" : "badge bg-secondary p-1"}`}>
                {status === "C" ? "cancelled" : eventType === "DC" ? "delivered": "yet to deliver"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
