/** @format */

import React, { useState, useEffect, useReducer } from "react";

import "./Orders.css";

import { getOrderHistory } from '../../../../api'


export const Orders = ({
    user
}) => {
    const [orderHistory, setOrderHistory] = useState([])
    const [orderPage, setOrderPage] = useState(1);
    const [orderPageLimit, setOrderPageLimit] = useState(0);

    useEffect(() => {
        getOrderHistory(orderPage, user.token)
            .then((response) => {
                setOrderPageLimit(response[0]);
                setOrderHistory(response[1]);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [orderPage])


    return (
        <div className="orders">
            <h1 className='orders-h1'>Order History</h1>
        </div>
    );
};
