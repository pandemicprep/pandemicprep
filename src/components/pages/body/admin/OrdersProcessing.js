/** @format */

import React, { useState, useEffect } from "react";
// import users from '../../../../../db/singletables/users';

import "./OrdersProcessing.css";


export const OrdersProcessing = () => {


    return (
        <div id='all-processing' >
            <h1 id="ordersH1">Orders Processing:</h1>
            <div className='order-list' >
                <div id='initial-titles' >
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Total $:</p>
                    <p id="date">Date Placed:</p>
                </div>

                <div className='order-content' >

                    <div id='initial-details' >
                        <p>Name</p>
                        <p>Email</p>
                        <p>Price</p>
                        <p>Date</p>
                        <p id='dropdown-arrow' >ˇ</p>
                        <button className='processing-button' >Finalize</button>

                    </div>

                    <div id='hidden-details'>

                        <div id='hidden-titles' >
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>

                        <div id='each-hidden-item' >
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>

                    </div>

                </div>
                <div className='order-content' >

                    <div id='initial-details' >
                        <p>Name</p>
                        <p>Email</p>
                        <p>Price</p>
                        <p>Date</p>
                        <p id='dropdown-arrow' >ˇ</p>
                        <button className='processing-button' >Finalize</button>

                    </div>

                    <div id='hidden-details'>

                        <div id='hidden-titles' >
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>

                        <div id='each-hidden-item' >
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>

                    </div>

                </div>
                <div className='order-content' >

                    <div id='initial-details' >
                        <p>Name</p>
                        <p>Email</p>
                        <p>Price</p>
                        <p>Date</p>
                        <p id='dropdown-arrow' >ˇ</p>
                        <button className='processing-button' >Finalize</button>

                    </div>

                    <div id='hidden-details'>

                        <div id='hidden-titles' >
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>

                        <div id='each-hidden-item' >
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    );
};
