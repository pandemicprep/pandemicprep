/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";

import { Header, MainBody, Categories, Footer } from "./index";

import { getSomething } from "../api";

const App = () => {
    // useEffect(() => {
    //   getSomething()
    //     .then(response => {
    //       setMessage(response.message);
    //     })
    //     .catch(error => {
    //       setMessage(error.message);
    //     });
    // });

    return (
        <div className="App">
            <Header />
            <MainBody />
            <Categories />
            <Footer />
        </div>
    );
};

export default App;
