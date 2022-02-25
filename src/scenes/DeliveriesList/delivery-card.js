import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
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
  } = data;

  return (
    <div className="container" className="p-1">
      <li className="list-group-item">
        <div className="row">
          <div className="col">
              <p className="d-flex mb-0 font-monospace">
                <small>{`#123`}</small>
              </p>
              <p className="d-flex align-middle mb-0 font-monospace">
                <BsPersonSquare />
                <small>{name}</small>
              </p>
              <p className="d-flex mb-0 font-monospace">
                <FaMobileAlt />
                <small>{mobile}</small>
              </p>

              <p className="d-flex mb-0 font-monospace">
              <span className="badge bg-primary p-1">{status || "delivered"}</span>
              </p>
          </div>
        </div>
      </li>
    </div>
  );
};
