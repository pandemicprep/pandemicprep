/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, useHistory } from "react-router-dom";

import { Header, MainBody, Categories, Footer } from "./index";

import { getSomething } from "../api";

const App = () => {
    const [products, setProducts] = useState([]);
    const [searchString, setSearchString] = useState('');
    const history = useHistory();

    return (
        <div className="App">
            <Header products={products} setProducts={setProducts}
            searchString={searchString} setSearchString={setSearchString} history={history} />
            <MainBody products={products} setProducts={setProducts}
            searchString={searchString} setSearchString={setSearchString}/>
            <Footer />
        </div>
    );
};

export default App;
