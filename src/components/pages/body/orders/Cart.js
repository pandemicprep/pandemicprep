/** @format */

import React, { useState } from "react";

import "./Cart.css";

import { addNewCart } from "../../../../api";
import { Product } from "../products/Product";

export const Cart = ({ cart, setCart, user }) => {
    const [status, setStatus] = useState("");
    const [lastUpdated, setLastUpdated] = useState("");
    const [total, setTotal] = useState("");
    const [userId, setUserId] = useState("");

    const product = cart.items[0];

    const handleStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleLastUpdated = (event) => {
        setLastUpdated(event.target.value);
    };

    const handleTotal = (event) => {
        setTotal(event.target.value);
    };

    const handleUserId = (event) => {
        setUserId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("getting into Cart form submit...");

        const newCart = await addNewCart({
            status,
            lastUpdated,
            total,
            userId,
        });

        console.log("the new cart is: ", newCart);
    };

    return (
        <div id="cart-container">
            <h1>{user.firstName !== "Guest" ? user.firstName + "'s" : ""} Cart</h1>
            <div className="cart">
                <img className="image cart-field" src={process.env.PUBLIC_URL + product.image} />
                <section className="title cart-field">{product.title}</section>
                <label for="quantity">Quantity:</label>
                <select name="quantity" id="quantity">
                    onLoad=
                    {() => {
                        for (let i = 1; i < 101; i++) {
                            return (
                                <option key="i" value={i}>
                                    {i}
                                </option>
                            );
                        }
                    }}
                </select>
                <section className="quantity cart-field">{product.quantity}</section>
                <section className="price cart-field">{product.price}</section>
                <section className="total cart-field">{product.total}</section>
            </div>
        </div>
    );
};
