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
    meal_type: mealType,
  } = data;

  const handleClick = (e) => {
    let data = { myId: sid};
    handleOrderData(data);
    dispatch(filterOrder(sid));
  }
  return (
    <div className="container" className="p-1">
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            {/* <div className="row">
              <p className="d-flex mb-0 font-monospace">
                <small>{`# ${sid}`}</small>
              </p>
            </div> */}
            <div>
              <p className="d-flex align-middle mb-0 font-monospace">
                <BsPersonSquare />
                <small>{name}</small>
              </p>
            </div>
            <div className="d-flex justify-content-start">
              <p className="d-flex mb-0 font-monospace">
                <FaMobileAlt />
                <small>{mobile}</small>
              </p>
            </div>
            <div className="d-flex justify-content-start">
              <p>
                <GiMeal />
                <small className="font-monospace">{`${
                  mealType.length &&
                  Sessions.filter((obj) => obj.value == mealType)[0].label
                }`}</small>
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-end align-bottom">
            <div>
              <button type="button" className="btn btn-secondary" onClick={handleClick}>
                <BsPencil />
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
