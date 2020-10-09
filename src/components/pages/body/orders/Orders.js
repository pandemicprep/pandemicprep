/** @format */

import React, { useState, useEffect, useReducer } from "react";

import "./Orders.css";

import { getOrderHistory } from "../../../../api";

export const Orders = ({ user }) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [orderPage, setOrderPage] = useState(1);
    const [orderPageLimit, setOrderPageLimit] = useState(0);
    const [clickedIndex, setClickedIndex] = useState(-1);

    useEffect(() => {
        getOrderHistory(orderPage, user.token)
            .then((response) => {
                console.log(response, "response in orders");
                setOrderPageLimit(response[0]);
                setOrderHistory(response[1]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [orderPage]);

    const toggleDetails = (index) => {
        setClickedIndex(index);
    };

    return (
        <div className="orders">
            <h1 className="orders-h1">Order History</h1>

            <div className="orders-list">
                <div className="history-titles">
                    <p>Date Placed</p>
                    <p>Number Of Items</p>
                    <p>Order Total</p>
                    <p>Status</p>
                </div>

                {orderHistory.map((order, index) => {
                    if (order.status === "active") {
                        return "";
                    } else {
                        return (
                            <div key={index} className="first-map-div">
                                <div className="history-initial">
                                    <p>{order.lastUpdated}</p>
                                    <p>{order.cartQuantity}</p>
                                    <p>{order.total.toFixed(2)}</p>
                                    <p>{order.status}</p>
                                </div>
                                <button id="dropdown-arrow" onClick={() => toggleDetails(index)}>
                                    ˇ
                                </button>

                                {clickedIndex === index ? (
                                    <div className="hidden-details ">
                                        <div id="hidden-titles">
                                            <p>Product</p>
                                            <p>Quantity</p>
                                            <p>Price</p>
                                            <p>Total</p>
                                        </div>

                                        {order.items.map((item, i) => {
                                            return (
                                                <div key={i} id="each-hidden-item">
                                                    <p>{item.title}</p>
                                                    <p>{item.quantity}</p>
                                                    <p>{item.price}</p>
                                                    <p>{(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="hidden-details hidden-processing">
                                        <div id="hidden-titles">
                                            <p>Product</p>
                                            <p>Quantity</p>
                                            <p>Price</p>
                                            <p>Total</p>
                                        </div>

                                        {order.items.map((item, i) => {
                                            return (
                                                <div key={i} id="each-hidden-item">
                                                    <p>{item.title}</p>
                                                    <p>{item.quantity}</p>
                                                    <p>{item.price}</p>
                                                    <p>{item.price * item.quantity}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
