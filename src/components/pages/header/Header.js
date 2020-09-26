/** @format */

import React, { useState } from "react";

import "./Header.css";

import { getProductsByQuery } from '../../../api/products';

import { Login, Register } from "../../index";

//NEED LOG IN PAGE
//NEED SIGN UP PAGE
//NEED LOG OUT BUTTON
//NEED ADMIN BUTTON
export const Header = ({
    products,
    setProducts,
    searchString,
    setSearchString
}) => {

    const handleSearchString = (event) => {
        setSearchString(event.target.value)
        // console.log(searchString)
    }

    function searchProducts(event) {
        event.preventDefault();
        if (searchString) {
        getProductsByQuery(searchString)
            .then(queryProducts => {
                console.log(queryProducts)
                setProducts(queryProducts)
                console.log(products, 'products in header')
            })
            .catch(error => {
                setProducts(error.message);
            })
        } else {
            alert('Must enter search term(s)');
        }
    }

    return (
        <div className="headerContainer">
            <img id="headLogo" src={process.env.PUBLIC_URL + '/styleimages/PANPREPLOGO.png'} />

            <form onSubmit={searchProducts} className='searchForm'>
                <input value={searchString} onChange={handleSearchString} type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" id="search" className="searchButton">
                    Search
                </button>
            </form>

            <button id="login">Login</button>
            <button id="signup">Sign Up</button>
            <button id="cart">Cart</button>
            <div class="dropdown">
                <button class="dropbtn">Welcome!</button>
                <div class="dropdown-content">
                    <a href="#">Admin</a>
                    <a href="#">Profile</a>
                    <a href="#">Orders</a>
                    <a href="#">Log Out</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                </div>
            </div>
        </div>
    );
};


