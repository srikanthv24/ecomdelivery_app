import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Order } from "./order";
import { CancelOrder } from "./cancel-order";
import { OrderView } from "./order-view";
import { Spinner } from "../../components/Spinner/spinner";
import { DissmisibleAlert } from "../../components/Alert/alert";
import { changeEventType, getOrders } from "../../store/actions";
import { closeFeedbackSnackbar } from "../../store/actions";
import "./styles.css";

export const OrdersList = () => {
  const dispatch = useDispatch();
  const {
    loading: ordersLoading,
    error: ordersError,
    orderslist,
    filterOrder,
  } = useSelector((state) => state.orders);
  const { userDetails, tokenList } = useSelector((state) => state.auth);
  const { loading, error, message, open, status } = useSelector(
    (state) => state.updateOrder
  );

  const [list, setList] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [show, setShow] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  useEffect(() => {
    return () => {
      dispatch(closeFeedbackSnackbar());
    };
  }, []);

  const handleUpdateOrder = () => {
    setShow(false);
    dispatch(
      changeEventType({
        endPoint: "kotorder/markasdelivered",
        payload: { sed_id: [currentOrder.sed_id] },
        filters: {
          mobile: userDetails.phone_number.replace("+91", ""),
          startDate: moment().format("YYYY-MM-DD"),
        },
      })
    );
  };

  const handleCancelModal = () => {
    setCancelModal(true);
    setShow(false);
  };

  const handleOrderCancel = (data) => {
    setCancelModal(false);
    dispatch(
      changeEventType({
        endPoint: "deliverypartner/cancelorder",
        payload: { sed_id: [currentOrder.sed_id], comments: data },
        filters: {
          mobile: userDetails.phone_number.replace("+91", ""),
          startDate: moment().format("YYYY-MM-DD"),
        },
      })
    );
  };

  useEffect(async () => {
    const token = await sessionStorage.getItem("id_token");

    if (userDetails.phone_number && userDetails.phone_number?.length) {
      let mobNum = userDetails.phone_number.replace("+91", "");
      let sDate = moment().format("YYYY-MM-DD");
      dispatch(
        getOrders({
          mobile: mobNum,
          startDate: sDate,
        })
      );
      setList([]);
    }
  }, [userDetails.phone_number, tokenList?.accessToken]);

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
        onClose={() => dispatch(closeFeedbackSnackbar())}
      />
      <div className="d-flex justify-content-between align-items-center">
        <h3>Deliverables </h3>
        <small>
          Orders <span className="badge bg-btn">{list.length || 0}</span>
        </small>
      </div>
      <div className="d-flex justify-content-end"></div>
      <ol className="list-group">
        {ordersLoading || loading ? (
          <div className="mt-5">
            <Spinner />
          </div>
        ) : null}
        {list && list.length === 0 && !ordersLoading && (
          <div className="feedback-container">
            <h6>No Orders Assigned</h6>
          </div>
        )}
        {list &&
          !ordersLoading &&
          !loading &&
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
