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
    NavLink,

    setView,
    promotedProducts

}) => {
    const history = useHistory();

    const handleSearchString = (event) => {
        setSearchString({rowCount: 0, string: event.target.value})
        // console.log(searchString)
    }

    function searchProducts(event) {
        event.preventDefault();
        if (searchString) {
        getProductsByQuery(searchString, 1)
            .then(queryProducts => {
                setSearchString({rowCount: queryProducts[0].rowCount, string: searchString.string})
                setProducts(queryProducts[1])
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
            <NavLink to='/' onClick={() => {setProducts(promotedProducts)}}>
                <img id="headLogo" src={process.env.PUBLIC_URL + '/styleimages/PANPREPLOGO.png'} />
            </NavLink>
            <form onSubmit={searchProducts} className='searchForm'>
                <input value={searchString} onChange={handleSearchString} type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" id="search" className="searchButton">
                    Search
                </button>
            </form>

            <button id="login" onClick={() => {
                setView('login');
                history.push('/login')
                }} >login</button>
            <button id="signup" onClick={() => {
                setView('register');
                history.push('/register')
                }} >Sign Up</button>
            <button id="cart" onClick={() => history.push('/cart')} >Cart</button>
            <div className="dropdown">
                <button className="dropbtn">Welcome!</button>
                <div className="dropdown-content">
                    <a href="#" onClick={() => history.push('/orders')} >Admin</a>
                    <a href="#" onClick={() => {
                        setView('edit');
                        history.push('/edit-user')}} >Edit Profile</a>
                    <a href="#" onClick={() => history.push('/orders')} >Orders</a>
                    <a href="#">Log Out</a>
                    <a href="#" onClick={() => {
                        setView('guest');
                        history.push('/guest')
                    }} >Guest checkout (temporarty)</a>
                    <a href="#">Whatever</a>
                    <a href="#">Whatever</a>
                </div>
            </div>
        </div>
        
    );
};


