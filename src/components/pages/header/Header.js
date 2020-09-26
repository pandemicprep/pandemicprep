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
    setSearchString,
    useHistory,
    NavLink
}) => {
    const history = useHistory();

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
            history.push('/');
        } else {
            alert('Must enter search term(s)');
        }
    }

    
    

    return (
        
        <div className="headerContainer">
            <NavLink to='/'>
                <img id="headLogo" src={process.env.PUBLIC_URL + '/styleimages/PANPREPLOGO.png'} />
            </NavLink>
            <form onSubmit={searchProducts} className='searchForm'>
                <input value={searchString} onChange={handleSearchString} type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" id="search" className="searchButton">
                    Search
                </button>
            </form>

            <button id="login" onClick={() => history.push('/login')} >login</button>
            <button id="signup" onClick={() => history.push('/register')} >Sign Up</button>
            <button id="cart" onClick={() => history.push('/cart')} >Cart</button>
            <div className="dropdown">
                <button className="dropbtn">Welcome!</button>
                <div className="dropdown-content">
                    <a href="#" onClick={() => history.push('/orders')} >Admin</a>
                    <a href="#" onClick={() => history.push('/orders')} >Profile</a>
                    <a href="#" onClick={() => history.push('/orders')} >Orders</a>
                    <a href="#">Log Out</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                </div>
            </div>
        </div>
        
    );
};


