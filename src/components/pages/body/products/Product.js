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
    searchString
}) => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        getProductsByQuery(searchString)
            .then(queryProducts => {
                console.log(queryProducts)
                setProducts(queryProducts)
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <>
            {products.map(({id, name, imageURL, description, price}) => (
                <div key={id} className="product">
                <div className="info">
                    <p className="header">
                        {name}
                    </p>
                    <p className="image">
                        {imageURL}
                    </p>
                    <p className="description">
                        {description}
                    </p>
                    <p className="price">
                        {price}
                    </p>
                    <button>Add to Cart</button>
                </div>
    
                
            </div>
            ))}
           
        </>
    );
}

