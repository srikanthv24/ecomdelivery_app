import React, { useEffect, useState } from "react";
import { DeliveryCard } from "./delivery-card";
// import dummylist from "../OrdersList/delivery_list";
// import { DateInput } from "../../components/DatePicker/datepicker";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getDeliveriesList } from "../../store/actions";
import { Spinner } from "../../components/Spinner/spinner";

export const DeliveriesList = () => {
  const dispatch = useDispatch();
  // const { userDetails } = useSelector((state) => state.auth);
  const { loading, error, list } = useSelector(state => state.deliveriesList);
  const [ Deliveries, setDeliveries] = useState([]);
  const [filters, setFilters] = useState({
    // mobile: userDetails.phone_number.replace("+91", ""),
    mobile:"9550163323",
    fromDate: moment().subtract(2, 'days').format("YYYY-MM-DD"),
    toDate: moment().format("YYYY-MM-DD"),
    type: "all"
  });

  useEffect(() => {
    dispatch(getDeliveriesList(filters));
  }, [filters])
  
  useEffect(() => {
    if(list && list.length > 0){
      setDeliveries(list);
    }
  }, [list]);

  console.log("eve", Deliveries);
  return (
    <div className="container mt-5 p-3">
      <>
        <div className="row">
          <div className="col-6">
            <InputGroup className="my-2">
              {/* <InputGroup.Text>Start Date</InputGroup.Text> */}
              <FormControl
                value={filters.fromDate}
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
        {loading  && (
          <div className="mt-5">
            <Spinner />
          </div>
        )}
        {Deliveries && Deliveries.length === 0 && !loading && (
          <h6 className="mt-5">No Orders Assigned</h6>
        )}
          {Deliveries && Deliveries.length > 0 && Deliveries.map((data, index) => {
            return <DeliveryCard key={index} data={data} />;
          })}
        </div>
      </>
    </div>
  );
};
