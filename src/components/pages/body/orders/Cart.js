/** @format */

import React, { useState } from "react";

import "./Cart.css";

import {
    addNewCart,
    removeProductFromCart,
    patchCartItemQuantity,
    deactivateCart,
} from "../../../../api";
// import { Product } from '../products/Product';
import { removeProductFromGuestCart } from "../../../utils";

export const Cart = ({ cart, setCart, cartSize, setCartSize, user }) => {
    console.log("current cart ", cart);
    const [shipping, setShipping] = useState(5);

    const removeHandler = (product) => {
        const productId = product.id;
        if (user.firstName !== "Guest") {
            removeProductFromCart({ cartId: cart.id, products_cartsId: productId }, user.token)
                .then((response) => {
                    setCart(response);
                    setCartSize(response.cartQuantity);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            removeProductFromGuestCart(cart, product).then((result) => {
                setCart(result);
                setCartSize(result.quantity);
                localStorage.setItem("panprepCart", JSON.stringify(result));
            });
        }
    };

    const ticker = (product, direction) => {
        const { jointId, productId, quantity, unitPrice } = product;
        if (quantity + direction > 0) {
            if (user.firstName !== "Guest") {
                patchCartItemQuantity(
                    {
                        userId: user.id,
                        jointId: jointId,
                        quantity: quantity + direction,
                        unitPrice: unitPrice,
                    },
                    user.token
                )
                    .then((result) => {
                        setCart(result);
                        setCartSize(result.cartQuantity);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                const newCart = { ...cart };
                let newQuantity = 0;
                let newTotal = 0;
                newCart.items.map((item) => {
                    if (item.id === product.id) {
                        item.quantity = item.quantity + direction;
                        item.itemTotal = item.price * item.quantity;
                    }
                    newQuantity = newQuantity + item.quantity;
                    newTotal = newTotal + parseFloat(item.itemTotal);
                });
                newCart.cartQuantity = newQuantity;
                newCart.total = newTotal;
                setCart(newCart);
                setCartSize(newQuantity);
                localStorage.setItem("panprepCart", JSON.stringify(cart));
            }
        } else {
            if (user.firstName !== "Guest") {
                removeProductFromCart({ cartId: cart.id, products_cartsId: jointId }, user.token)
                    .then((response) => {
                        setCart(response);
                        setCartSize(response.cartQuantity);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                removeProductFromGuestCart(cart, product).then((result) => {
                    setCart(result);
                    setCartSize(result.quantity);
                    localStorage.setItem("panprepCart", JSON.stringify(result));
                });
            }
        }
    };

    const checkoutHandler = () => {
        if (cartSize > 0) {
            deactivateCart({ userId: user.id, cartId: cart.id }, user.token)
                .then((response) => {
                    setCart(response);
                    setCartSize(response.cartQuantity);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div id="cart-component">
            {cart.cartQuantity > 0 ? (
                <h1>{user.firstName !== "Guest" ? user.firstName + "'s" : ""} Cart</h1>
            ) : (
                <h1>Empty Cart</h1>
            )}
            <div id="tables-outer-container">
                <div id="cart-container">
                    {cart.cartQuantity > 0 ? (
                        <div className="cart-titles">
                            <span className="cart-title">Product</span>
                            <span className="cart-quantity">Quantity</span>
                            <span className="cart-price">Price</span>
                            <span className="cart-total">Total</span>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div className="cart-grid">
                        {cart.items.length > 0
                            ? cart.items.map((product, i) => {
                                  return (
                                      <div key={i} id="cart-row-container">
                                          <img
                                              className="cart-image cart-field"
                                              src={process.env.PUBLIC_URL + product.image}
                                          />
                                          <label className="cart-field cart-product-title">
                                              {product.title}
                                          </label>
                                          <label className="cart-field cart-product-quantity">
                                              {product.quantity}
                                          </label>
                                          <div className="cart-buttons">
                                              <button
                                                  className="uptick cart-field tick"
                                                  onClick={() => {
                                                      ticker(product, 1);
                                                  }}
                                              >
                                                  &#11014;
                                              </button>
                                              <button
                                                  className="downtick cart-field tick"
                                                  onClick={() => {
                                                      ticker(product, -1);
                                                  }}
                                              >
                                                  &#11015;
                                              </button>
                                          </div>
                                          <label className="cart-field cart-product-price">
                                              {product.unitPrice}
                                          </label>
                                          <label className="cart-field cart-product-total">
                                              {product.itemTotal}
                                          </label>
                                          <button
                                              className="cart-field cart-delete"
                                              onClick={() => {
                                                  removeHandler(product);
                                              }}
                                          >
                                              remove
                                          </button>
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                </div>
                <div id="total-outer-container">
                    <div id="total-container">
                        <span className="total-title total">Cart Summary</span>
                        <span className="total-label total">Sub-Total:</span>
                        <span className="total-amount total">
                            $ {parseFloat(cart.total).toFixed(2)}
                        </span>
                        <span className="total-label total">Shipping:</span>
                        <span className="total-shipping total">
                            $ {parseFloat(cart.total) > 0 ? shipping.toFixed(2) : "0.00"}
                        </span>
                        <span className="total-label total">Total:</span>
                        <span className="total-total total">
                            ${" "}
                            {parseFloat(cart.total) > 0
                                ? (parseFloat(cart.total) + shipping).toFixed(2)
                                : "0.00"}
                        </span>
                    </div>
                    <button id="check" className="checkout-button" onClick={checkoutHandler}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
