import React, { useState, useEffect } from "react";
import { Order } from "./order";
import { CancelOrder } from "./cancel-order";
import { OrderView } from "./order-view";
import { changeEventType, getOrders } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
//import dummylist from "./delivery_list";
import { DissmisibleAlert } from "../../components/Alert/alert";
import { closeFeedbackSnackbar } from "../../store/actions";
import moment from "moment";
import { Spinner } from "../../components/Spinner/spinner";

export const OrdersList = () => {
  const dispatch = useDispatch();
  const {
    loading: ordersLoading,
    error: ordersError,
    orderslist,
    filterOrder,
  } = useSelector((state) => state.orders);
  const { userDetails } = useSelector((state) => state.auth);
  const { loading, error, message, open, status } = useSelector(
    (state) => state.updateOrder
  );

  const [list, setList] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [show, setShow] = useState(false);

  const handleUpdateOrder = () => {
    setShow(false);
    dispatch(
      changeEventType({
        endPoint: "markasdelivered",
        payload: { sed_id: [currentOrder.sed_id] },
        filters: {
          mobile: userDetails.phone_number.replace("+91", ""),
          fromDate: moment().format("YYYY-MM-DD"),
          toDate: moment().add(1, "days").format("YYYY-MM-DD"),
        },
      })
    );
  };

  const [cancelModal, setCancelModal] = useState(false);

  const handleCancelModal = () => {
    setCancelModal(true);
    setShow(false);
  };

  const handleOrderCancel = (data) => {
    setCancelModal(false);
    dispatch(
      changeEventType({
        endPoint: "cancelorder",
        payload: { sed_id: [currentOrder.sed_id], comments: data },
        filters: {
          mobile: userDetails.phone_number.replace("+91", ""),
          fromDate: moment().format("YYYY-MM-DD"),
          toDate: moment().add(1, "days").format("YYYY-MM-DD"),
        },
      })
    );
  };

  console.log("myOrders", orderslist);
  console.log("userDEtails", userDetails);

  useEffect(() => {
    if (userDetails.phone_number && userDetails.phone_number?.length) {
      let mobNum = userDetails.phone_number.replace("+91", "");
      let fDate = moment().format("YYYY-MM-DD");
      let tDate = moment().add(1, "days").format("YYYY-MM-DD");
      // let mobNum = "9951882523"
      dispatch(
        getOrders({
          mobile: mobNum,
          fromDate: fDate,
          toDate: tDate,
        })
      );
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

  // const closeDismisibleModal = () => {
  //   dispatch(closeFeedbackSnackbar())
  // }

  console.log("listXXX", list);

  return (
    <div className="container mt-5 p-3">
      <OrderView
        show={show}
        OrderData={currentOrder}
        handleDeliverBtn={handleUpdateOrder}
        handleCancelBtn={handleCancelModal}
        handleClose={() => setShow(false)}
      />
      <CancelOrder
        showModal={cancelModal}
        handleOrderCancel={handleOrderCancel}
        handleClose={() => setCancelModal(false)}
      />
      <DissmisibleAlert
        show={open}
        message={message}
        status={status}
        handleClose={() => dispatch(closeFeedbackSnackbar())}
      />
      <div className="d-flex justify-content-center">
        <h3>Deliverables</h3>
      </div>
      <div className="d-flex justify-content-end">
        <h6>
          Orders <span className="badge bg-btn">{list.length || 0}</span>
        </h6>
      </div>
      <ol className="list-group">
        {ordersLoading || loading ? <div className="mt-5"><Spinner /></div> : null}
        {list && list.length === 0 && !ordersLoading && (
          <h6 className="mt-5">No Orders Assigned</h6>
        )}
        {list &&
          list.length > 0 &&
          list.map((data, index) => {
            return (
              <Order
                key={index}
                data={data}
                handleOrderData={handleOrderData}
              />
            );
          })}
      </ol>
    </div>
  );
};
