/** @format */

import React, { useState } from "react";

import "./Cart.css";

import { addNewCart } from '../../../../api';


export const Cart = () => {
    const [status, setStatus] = useState('');
    const [lastUpdated, setLastUpdated] = useState('');
    const [total, setTotal] = useState('');
    const [userId, setUserId] = useState('');
    

    const handleStatus = (event) => {
        setStatus(event.target.value);
    }

    const handleLastUpdated = (event) => {
        setLastUpdated(event.target.value);
    }

    const handleTotal = (event) => {
        setTotal(event.target.value);
    }

    const handleUserId = (event) => {
        setUserId(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('getting into Cart form submit...');

        const newCart = await addNewCart({
            status,
            lastUpdated,
            total,
            userId
        });

        console.log('the new cart is: ', newCart);
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder='status'
            value={status}
            onChange={handleStatus}
            />

            <input
            placeholder='lastUpdated'
            value={lastUpdated}
            onChange={handleLastUpdated}
            />

            <input
            placeholder='total'
            value={total}
            onChange={handleTotal}
            />

            <input
            placeholder='userId'
            value={userId}
            onChange={handleUserId}
            />

            <button/>
        </form>
    );
};
