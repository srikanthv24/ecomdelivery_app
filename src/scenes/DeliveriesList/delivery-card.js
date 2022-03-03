import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

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
    // customer_address: address
  } = data;

  return (
    <div className="container mb-1">
      <div className="row border border-dark rounded p-2">
        <div className="p-0" style={{ textAlign: "start" }}>
          <small className="txt">{`# 143`}</small>
        </div>
        <div className="p-0">
          <p className="d-flex mb-0 txt" style={{ alignItems: "center" }}>
            <BsPersonSquare className="m-1" />
            <small>{name}</small>
          </p>
        </div>
        <div className="row">
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
              <span className="badge bg-primary p-1">
                {status || "delivered"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
