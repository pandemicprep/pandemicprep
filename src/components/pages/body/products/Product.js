/** @format */

import React from "react";

import "./Product.css";


export const Product = ({
    name,
    price,
    description,
    imageURL
}) => {
    return (
        <div className="product">
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

    );
}

