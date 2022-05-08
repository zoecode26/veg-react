import React from "react";
import {
    useParams
  } from "react-router-dom";
import OrderPage from "./OrderPage";

function OrderData() {
    const { id } = useParams();

    return (
        <div>
            <OrderPage id={id} />
        </div>
    );
}

export default OrderData;