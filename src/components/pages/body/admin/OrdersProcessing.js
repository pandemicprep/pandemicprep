/** @format */

import React, { useState, useEffect } from "react";
// import users from '../../../../../db/singletables/users';

import "./OrdersProcessing.css";


export const OrdersProcessing = () => {

    
    return (
        <div id='all-processing' >
            <div className='single-order' >
                <div className='order-content' >
                    <div id='initial-details' >
                        <p>Name: name</p>
                        <p>Email: email</p>
                        <p>Number of items: #</p>
                        <p>Date Placed: date</p>
                        <p id='dropdown-arrow' >ˇ</p>
                    </div>
                    <div id='hidden-details'>
                        <div id='each-hidden-item' >

                        </div>
                    </div>
                </div>
                <button>Finalize</button>
            </div>
        </div>
    );
};
