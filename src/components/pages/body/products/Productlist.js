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


export const Productlist = ({products, setProducts}) => {


    return (
        <div className="productList">
            <p>List of Products</p>
            <h1>MainBody</h1>
            <container className="productContainer">
                {products.map((product, i) => {
                    return <Product 
                    key={i}
                    product={product} 
                    class='product' />
                })}
                
            </container>
            
            
        </div>
    );
};
