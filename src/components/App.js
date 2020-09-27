/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, useHistory } from "react-router-dom";


import { Header, Footer, Categories, Productlist, Profile, Cart, Product, Orders, Userlist, Sales } from "./index";

import { getPromotedProducts } from '../api/products';

import './App.css';


const App = () => {
    const [products, setProducts] = useState([]);
    const [promotedProducts, setPromotedProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [searchString, setSearchString] = useState('');
    const [category, setCategory] = useState('');    // const history = useHistory();


    useEffect(() => {
        getPromotedProducts()
            .then((response) => {
                setPromotedProducts(response)
                setProducts(response)
            })
            .catch((error) => {
                console.error(error)
            })
        
    }, []);


    return (
        <Router>
        <div className="App">
            <Header products={products} setProducts={setProducts}
            searchString={searchString} setSearchString={setSearchString} useHistory={useHistory} 
            NavLink={NavLink} promotedProducts={promotedProducts} />
            <Switch>
                <Route exact path='/' >
                        <Productlist products={products} setProducts={setProducts} setProduct={setProduct} NavLink={NavLink} 
                        searchString={searchString} category={category} />
                        <Categories setProducts={setProducts} NavLink={NavLink} setCategory={setCategory}/>
                    </Route>
                    <Route path='/register'>
                        <Profile view='register'/>
                    </Route>
                    <Route path='/login' render={() => 
                        <Profile view='login' />
                    } >
                    </Route>
                    <Route path='/guest'>
                        <Profile view='guest' />
                    </Route>
                    <Route path='/edit-user'>
                        <Profile view='edit' />
                    </Route>
                    <Route path='/product' >
                        <Product product={product} setProduct={setProduct} />
                        <Categories setProducts={setProducts} NavLink={NavLink} setCategory={setCategory}/>
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
            <Footer />
        </div>
        </Router>
    );
};

export default App;
