import React from "react";
import { BsPencil, BsPersonSquare } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { filterOrder } from "../../store/actions";

const Sessions = [
  { label: "breakfast", value: "B" },
  { label: "lunch", value: "L" },
  { label: "dinner", value: "D" },
];

export const Order = ({ data, handleOrderData }) => {
  const dispatch = useDispatch();
  const {
    sed_id: sid,
    customer_name: name,
    customer_mobile: mobile,
    customer_address: address,
    meal_type: mealType,
  } = data;

  const handleClick = (e) => {
    let data = { myId: sid };
    handleOrderData(data);
    dispatch(filterOrder(sid));
  };
  return (
    <div className="container mb-2">
      <div className="row border border-dark rounded p-2">
        <div className="p-0">
          <div class="row">
            <div class="col" style={{textAlign:"start"}}>
              <small className="txt">{`# 143`}</small>
            </div>
            <div class="col">
              <p className="d-flex mb-0" style={{display:"flex", justifyContent:"flex-end", alignItems:"middle"}}>
                <span className="badge bg-secondary p-1">{"yet to deliver"}</span>
              </p>
            </div>
          </div>
          <div></div>
          <div>
            <p className="d-flex mb-0 txt" style={{ alignItems: "center" }}>
              <BsPersonSquare className="m-1" />
              <small>{name}</small>
            </p>
          </div>
          <div>
            <p
              className="d-flex mb-0 Addtxt"
              style={{ alignItems: "top", textAlign: "start" }}
            >
              <BsPersonSquare className="m-1" />

              <small>{address.toString()}</small>
            </p>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-start">
              <p className="mb-0 txt" style={{ alignItems: "center" }}>
                <FaMobileAlt className="m-1" />
                <small>{mobile}</small>
              </p>
            </div>
            <div className="col d-flex justify-content-end">
              <button
                type="button"
                className="btn bg-btn btn-sm"
                style={{ color: "#ffff" }}
                onClick={handleClick}
              >
                {/* <BsPencil /> */}
                View
              </button>
            </div>
          </div>

          {/* <div className="d-flex justify-content-start">
              <p>
                <GiMeal />
                <small className="font-monospace">{`${
                  mealType.length &&
                  Sessions.filter((obj) => obj.value == mealType)[0].label
                }`}</small>
              </p>
            </div> */}
        </div>
      </div>
    </div>
  );
};
