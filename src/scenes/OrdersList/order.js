import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { FaMobileAlt, FaHashtag, FaLandmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterOrder } from "../../store/actions";

// const Sessions = [
//   { label: "breakfast", value: "B" },
//   { label: "lunch", value: "L" },
//   { label: "dinner", value: "D" },
// ];

export const Order = ({ data, handleOrderData }) => {
  const dispatch = useDispatch();
  const {
    sed_id: sid,
    customer_name: name,
    customer_mobile: mobile,
    customer_address: address,
    // meal_type: mealType,
  } = data;

  const handleClick = (e) => {
    let data = { myId: sid };
    handleOrderData(data);
    dispatch(filterOrder(sid));
  };
  return (
    <div className="container mb-1">
      <div className="row border border-dark1 rounded p-2">
        <div className="row m-0 p-0">
          <div className="col p-0 text-start">
          <p className="d-flex mb-0 normal-txt" style={{alignItems:"center"}}>
            <FaHashtag className="me-2" />
            <small>{`143`}</small>
          </p>
          </div>
          <div className="col p-0 text-end">
            <p className="badge bg-secondary p-1 mb-0">yet to deliver</p>
          </div>
        </div>
        <div className="p-0 text-start">
          <p className="d-flex mb-0 normal-txt" style={{alignItems:"center"}}>
            <BsPersonSquare className="me-2" />
            <small>{name}</small>
          </p>
        </div>
        <div className="p-0 text-start">
          <p
            className="d-flex mb-0 txt"
            style={{ alignItems: "top", textAlign: "start" }}
          >
            <FaLandmark className="me-2 mt-1" style={{ fontSize: "20px" }} />

            <small>{address}</small>
          </p>
        </div>
        <div className="row m-0 p-0">
          <div className="col d-flex justify-content-start p-0">
            <p className="mb-0 txt" style={{ alignItems: "center" }}>
              <FaMobileAlt className="me-2" />
              <small>{mobile}</small>
            </p>
          </div>
          <div className="col d-flex justify-content-end p-0">
            <button
              type="button"
              className="btn bg-btn btn-sm view-btn"
              style={{ color: "#ffffff" }}
              onClick={handleClick}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
