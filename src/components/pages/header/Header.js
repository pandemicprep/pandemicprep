/** @format */

import React from "react";

import "./Header.css";

import { Login, Register } from "../../index";

//NEED LOG IN PAGE
//NEED SIGN UP PAGE
//NEED LOG OUT BUTTON
//NEED ADMIN BUTTON
export const Header = () => {
    return (
        <div className="headerContainer">
            <img id="headLogo" src={process.env.PUBLIC_URL + '/styleimages/PANPREPLOGO.png'} />

            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" id="search" className="searchButton">
                Search
            </button>

            <button id="login">Login</button>
            <button id="signup">Sign Up</button>
            <button id="cart">Cart</button>
            <div class="dropdown">
                <button class="dropbtn">Welcome!</button>
                <div class="dropdown-content">
                    <a href="#">Admin</a>
                    <a href="#">Profile</a>
                    <a href="#">Orders</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                </div>
            </div>
        </div>
    );
};
