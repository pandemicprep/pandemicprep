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


export const Productlist = ({products, setProducts, setProduct, NavLink}) => {


    return (
        <div className="productList">
            <p>List of Products</p>
            <h1>MainBody</h1>
            <div className="productContainer">
                {products.map((singleProduct, i) => {
                    return (
                        <NavLink  to='/product' onClick={(event) => {setProduct(singleProduct)}}>
                            <div key={singleProduct.id} className="product" singleProduct={singleProduct} >
                                <div className="info">
                                    <p className="header">
                                        {singleProduct.title}
                                    </p>
                                    <p className="image">
                                        {singleProduct.imageURL}
                                    </p>
                                    <p className="price">
                                        {singleProduct.price}
                                    </p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
                
            </div>
            
            
        </div>
        
    );
};
