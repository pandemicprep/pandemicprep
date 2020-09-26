/** @format */

import React, { useState, useEffect } from "react";

// import "./Productlist.css";
import '../MainBody.css';

import { Product } from './Product'

import {
    getProductsByQuery,
    addNewProduct,
    getProductById,
    getProductsByCategory
} from '../../../../api/products';


export const Productlist = () => {


    return (
        <div className="productList">
            <p>List of Products</p>
            <h1>MainBody</h1>
            <container className="productContainer">
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                <Product class='product' />
                
            </container>
            
            
        </div>
    );
};
