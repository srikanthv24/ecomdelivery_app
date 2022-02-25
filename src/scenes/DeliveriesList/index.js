import React from "react";

import { DeliveryCard } from "./delivery-card";
import dummylist from "../OrdersList/delivery_list";

export const DeliveriesList = () => {
  return (
    <div className="container mt-5 p-3">
      {dummylist.map((data, index) => {
        return <DeliveryCard key={index} data={data} />;
      })}
    </div>
  );
};
