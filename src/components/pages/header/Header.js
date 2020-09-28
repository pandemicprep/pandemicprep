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
    searchObject,
    setSearchObject,
    useHistory,
    NavLink,
    promotedProducts,
    setPageType
    setView
}) => {
    const history = useHistory();
    const [searchString, setSearchString] = useState('');

    const handleSearchString = (event) => {
        setSearchString(event.target.value)
        // console.log(searchObject)
    }

    function searchProducts(event) {
        event.preventDefault();
        setPageType('search');
        if (searchString) {
        getProductsByQuery(searchString, 1)
            .then(queryProducts => {
                setSearchObject({pageCount: queryProducts[0], string: searchString})
                setProducts(queryProducts[1])
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
                <input value={searchString} onChange={handleSearchString} type="text" className="searchTerm" placeholder="What are you looking for?" contentEditable='true' />
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


