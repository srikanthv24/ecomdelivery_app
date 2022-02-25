import React, { useState, useEffect } from "react";
import { Order } from "./order";
import { CancelOrder } from "./cancel-order";
import { OrderView } from "./order-view";
import { changeEventType, getOrders } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import dummylist from "./delivery_list";

export const OrdersList = () => {
  const dispatch = useDispatch();
  const { orderslist, filterOrder } = useSelector((state) => state.orders);
  const { userDetails } = useSelector((state) => state.auth);

  const [list, setList] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [show, setShow] = useState(false);

  const handleUpdateOrder = () => {
    setShow(false);
    console.log("ORDER_DELIVERED")
    dispatch(
      changeEventType({
        endPoint: "markasdelivered",
        payload: { sed_id: [currentOrder.sed_id] },
      })
    );
  };

  const [cancelModal, setCancelModal] = useState(false);

  const handleCancelModal = () => {
    setCancelModal(true);
    setShow(false);
  }

  const handleOrderCancel = (data) => {
    setCancelModal(false);
    console.log("ORDER_CANCELLED", data)
    dispatch(
      changeEventType({
        endPoint: "cancelorder",
        payload: { sed_id: [currentOrder.sed_id], comments: data },
      })
    );
  };

  console.log("myOrders", orderslist);
  console.log("userDEtails", userDetails);

  useEffect(() => {
    if (userDetails.phone_number && userDetails.phone_number?.length) {
      let mobNum = userDetails.phone_number.replace("+91", "");
      // let mobNum = "9951882523"
      dispatch(getOrders(mobNum));
    }
  }, [userDetails.phone_number]);

  useEffect(() => {
    if (filterOrder && filterOrder.length) {
      setCurrentOrder(filterOrder[0]);
    }
  }, [filterOrder]);

  useEffect(() => {
    if (orderslist && orderslist.length > 0) {
      setList(orderslist);
    } else {
      setList([]);
    }
  }, [orderslist]);

  const handleOrderData = (data) => {
    setShow(true);
  };

  console.log("listXXX", list);

  return (
    <div className="container mt-5 p-3">
      <OrderView
        show={show}
        OrderData={currentOrder}
        handleDeliverBtn={handleUpdateOrder}
        handleCancelBtn={handleCancelModal}
      />
      <CancelOrder
        showModal={cancelModal}
        handleOrderCancel={handleOrderCancel}
        handleClose={() => setCancelModal(false)}
      />
<div className="alert alert-warning d-flex align-items-center" role="alert">
  <div>
    Order is Delivered
  </div>
</div>

      <div className="d-flex justify-content-center">
        <h3>Todays Deliveries</h3>
      </div>
      <div className="d-flex justify-content-end">
        <h6>
          Orders <span className="badge bg-primary">{list.length || 0}</span>
        </h6>
      </div>
      <ol className="list-group">
        {list && list.length === 0 && (
          <h6 className="mt-5">No Orders Assigned</h6>
        )}
        {list && list.length>0 && list.map((data, index) => {
        {/* {dummylist.map((data, index) => { */}
          return (
            <Order key={index} data={data} handleOrderData={handleOrderData} />
          );
        })}
      </ol>
    </div>
  );
};
