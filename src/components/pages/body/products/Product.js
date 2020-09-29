/** @format */

import React, { useState, useEffect } from "react";

import "./Product.css";

import {
    getProductsByQuery
} from '../../../../api/products'


export const Product = ({
    name,
    price,
    description,
    imageURL,
    searchString,
    setSearchString,
    product
}) => {
    

    return (
        <>
            
                <div key={product.id} className="product">
                <div className="info">
                    <p className="header">
                        {product.title}
                    </p>
                    <p className="image">
                        {product.imageURL}
                    </p>
                    <p className="description">
                        {product.description}
                    </p>
                    <p className="price">
                        {product.price}
                    </p>
                    <button>Add to Cart</button>
                </div>
    
                
            </div>
            
           
        </>
    );
}

