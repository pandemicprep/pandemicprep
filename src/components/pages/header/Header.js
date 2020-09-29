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
    setPageType,
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
                    setSearchObject({ pageCount: queryProducts[0], string: searchString })
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
        <div>
            <div id="headerWrap" className="StreamsHero-image"><h1 id="prepared">Are you prepared for</h1>
                <h1 id="doomsday">DOOMSDAY?</h1>
            </div>
            <div className="headerContainer">

                <NavLink to='/' onClick={() => { setProducts(promotedProducts) }}>
                    <img id="headLogo" src={process.env.PUBLIC_URL + '/styleimages/PANPREPLOGO.png'} />
                </NavLink>

                <form onSubmit={searchProducts} className='searchForm'>
                    <input value={searchString} onChange={handleSearchString} type="text" className="searchTerm" placeholder="What are you looking for?" contentEditable='true' />

                    <button type="submit" id="search" className="searchButton">
                        <img id="sbtn" src={process.env.PUBLIC_URL + '/styleimages/search.png'} />
                    </button>
                </form>

                <button className="button" id="login" onClick={() => {
                    setView('login');
                    history.push('/login')
                }} >Login</button>

                <button className="button" id="signup" onClick={() => {
                    setView('register');
                    history.push('/register')
                }} >Sign Up</button>

                <button className="button" id="cart" onClick={() => history.push('/cart')} >
                    <img id="cartLogo" src={process.env.PUBLIC_URL + '/styleimages/cart.png'} />
                </button>

                <div className="dropdown">
                    <button className="dropbtn">Welcome!</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => history.push('/orders')} ><img id="dropdownIcon" src={process.env.PUBLIC_URL + '/styleimages/admin.png'} />Admin</a>
                        <a href="#" onClick={() => {
                            setView('edit');
                            history.push('/edit-user')
                        }} ><img id="dropdownIcon" src={process.env.PUBLIC_URL + '/styleimages/settings.png'} />Edit Profile</a>
                        <a href="#" onClick={() => history.push('/orders')} ><img id="dropdownIcon" src={process.env.PUBLIC_URL + '/styleimages/shop.png'} />Orders</a>
                        <a href="#"><img id="dropdownIcon" src={process.env.PUBLIC_URL + '/styleimages/logout.png'} />Log Out</a>
                        <a href="#" onClick={() => {
                            setView('guest');
                            history.push('/guest')
                        }} >Guest checkout (temporarty)</a>
                    </div>
                </div>

            </div>
        </div>
    );
};


