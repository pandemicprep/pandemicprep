/** @format */

import React, { useState, useEffect } from "react";

import "./Product.css";

import { addProductToCart, patchCartItemQuantity } from "../../../../api/cart";

export const Product = ({ product, setCart, cart, user, setCartSize }) => {
    const addToCartHandler = () => {
        console.log('user id from product ', user);
        
        const alreadyPresent = cart.items.find((item => {
            return item.id === product.id;
        }))

        if (!alreadyPresent) {
        addProductToCart(
            {
                userId: user.id,
                productId: product.id,
                cartId: cart.id,
                quantity: 1,
                unitPrice: parseFloat(product.price),
            },
            user.token
        )
            .then((response) => {
                console.log('cart coming back from add product ', response);
                setCart(response);
                setCartSize(response.items.length);
            })
            .catch((error) => {
                console.error(error);
            });
        } else {
            patchCartItemQuantity(
				{
					userId: user.id,
					jointId: alreadyPresent.jointId,
					quantity: alreadyPresent.quantity + 1,
					unitPrice: alreadyPresent.unitPrice,
				},
				user.token,
			).then((result) => {
				setCart(result);
				setCartSize(result.cartQuantity);
			}).catch(error => {
                console.error(error);
            });
        }
    };

    return (
        <>
            <div key={product.id} className="product1">
                <img className="image" src={process.env.PUBLIC_URL + product.image}></img>
                <div className="info">
                    <p className="header">{product.title}</p>
                    <p className="description1">{product.description}</p>
                    <p className="price">{product.price}</p>
                    <button id="addToCart" onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};
