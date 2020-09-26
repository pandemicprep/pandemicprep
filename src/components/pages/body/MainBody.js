/** @format */



import {BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import React, { useEffect } from "react";

import { getPromotedProducts } from '../../../api/products';


import "./MainBody.css";
import { Categories, Productlist, Profile, Cart, Product, Orders, Userlist, Sales } from "../../index";

export const MainBody = ({products, setProducts, searchString, setSearchString}) => {
    // const [bathCat, setBathCat] = useState([bathCat]);
    // const [search, setSearch] = useState([searcResults]);

    useEffect(() => {
        getPromotedProducts()
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <Router>
            <div className="bodyContainer">
                <Switch>
                <Route exact path='/' >
                        <>
                        <Productlist products={products} />
                        <Categories />
                        </>
                    </Route>
                    <Route path='/register'>
                        <Profile view='register'/>
                    </Route>
                    <Route path='/login'>
                        <Profile view='login' />
                    </Route>
                    <Route path='/guest'>
                        <Profile view='guest' />
                    </Route>
                    <Route path='/edit-user'>
                        <Profile view='edit' />
                    </Route>
                    <Route path='/product' >
                        <>
                        <Product />
                        <Categories />
                        </>
                    </Route>
                    <Route path='/cart' >
                        <Cart />
                    </Route>
                    <Route path='/orders' >
                        <Orders />
                    </Route>
                    <Route path='/user-list' >
                        <Userlist />
                    </Route>
                    <Route path='/sales' >
                        <Sales />
                    </Route>
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};
