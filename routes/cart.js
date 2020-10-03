/** @format */

const express = require("express");
const cartRouter = express.Router();

const { addProductToCart, removeProductFromCart } = require("../db/singletables/cart");
const { getActiveCart } = require("../db");


//Add product to cart
cartRouter.post("/", async (req, res, next) => {
    console.log('body ', req.body)
    if (req.user) {
        if (req.user.isUser) {
            try {
                const newProductCart = await addProductToCart({...req.body});
                res.send(newProductCart);
            } catch (error) {
                throw error;
            }
        } else {
            next({ message: "Must be signed in to add a product to your cart" });
        }
    } else {
        next({ message: "Must be signed in to add a product to your cart" });
    }
});

//remove product from cart
cartRouter.delete("/:cartId/product/:products_cartsId", async (req, res, next) => {
    console.log("getting to delete at router ", req.params);
    if (req.user) {
        if (req.user.isUser) {
            try {
                const newItems = await removeProductFromCart({
                    userId: req.user.id,
                    cartId: req.params.cartId,
                    products_cartsId: req.params.products_cartsId,
                });
                res.send(newItems);
            } catch (error) {
                throw error;
            }
        } else {
            next({ message: "Must be signed in to remove a product from your cart" });
        }
    } else {
        next({ message: "Must be signed in to remove a product from your cart" });
    }
});

module.exports = cartRouter;
