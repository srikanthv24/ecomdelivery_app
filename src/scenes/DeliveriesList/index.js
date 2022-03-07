import React, { useEffect, useState } from "react";
import { DeliveryCard } from "./delivery-card";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getDeliveriesList } from "../../store/actions";
import { Spinner } from "../../components/Spinner/spinner";
import "./styles.css";

export const DeliveriesList = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const { loading, error, list } = useSelector((state) => state.deliveriesList);
  const [Deliveries, setDeliveries] = useState([]);
  const [filters, setFilters] = useState({
    mobile: userDetails.phone_number.replace("+91", ""),
    fromDate: moment().format("YYYY-MM-01"),
    toDate: moment().format("YYYY-MM-DD"),
    type: "all",
  });

  useEffect(() => {
    dispatch(getDeliveriesList(filters));
  }, [filters]);

  useEffect(() => {
    if (list && list.length > 0) {
      setDeliveries(list);
    } else {
      setDeliveries([]);
    }
  }, [list]);

  return (
    <div className="container mt-5 p-3">
      <>
        <div className="row">
          <div className="col-6">
            <InputGroup className="my-2">
              {/* <InputGroup.Text>Start Date</InputGroup.Text> */}
              <FormControl
                value={filters.fromDate}
                // min={moment().format("YYYY-MM-DD") < filters.toDate}
                max={moment().format("YYYY-MM-DD")}
                size="sm"
                type="date"
                placeholder="Disabled input"
                style={{ padding: "3px" }}
                onChange={(e) => {
                  setFilters({ ...filters, fromDate: e.target.value });
                }}
              />
            </InputGroup>
          </div>
          <div className="col-6">
            <InputGroup className="my-2">
              {/* <InputGroup.Text>Start Date</InputGroup.Text> */}
              <FormControl
                value={filters.toDate}
                // min={ moment().format("YYYY-MM-DD") > filters.fromDate ? }
                max={moment().format("YYYY-MM-DD")}
                size="sm"
                type="date"
                placeholder="Disabled input"
                style={{ padding: "3px" }}
                onChange={(e) => {
                  setFilters({ ...filters, toDate: e.target.value });
                }}
              />
            </InputGroup>
          </div>
          <div className="row">
            <div className="col-6 mt-2 mb-2">
              <Form.Select
                value={filters.type}
                size="sm"
                onChange={(e) => {
                  setFilters({ ...filters, type: e.target.value });
                }}
              >
                <option value="all">All Orders</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div>
          {loading && (
            <div className="mt-5">
              <Spinner />
            </div>
          )}
          {Deliveries && Deliveries.length === 0 && !loading && (
            <div className="feedback-container">
              <h6>No Deliveries</h6>
            </div>
          )}
          {!loading &&
            Deliveries &&
            Deliveries.length > 0 &&
            Deliveries.map((data, index) => {
              return <DeliveryCard key={index} data={data} />;
            })}
        </div>
      </>
    </div>
  );
};
