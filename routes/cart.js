/** @format */

const express = require("express");
const cartRouter = express.Router();

const { addProductCart, removeProductFromCart } = require("../db/jointables/products_carts");
const { getActiveCart } = require("../db");

cartRouter.post("/", async (req, res, next) => {
    if (req.user) {
        if (req.user.isUser) {
            try {
                const newProductCart = await addProductCart(req.body);
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

cartRouter.delete("/:cartId/product/:products_cartsId", async (req, res, next) => {
    console.log("getting to delete at router ", req.params);
    if (req.user) {
        if (req.user.isUser) {
            try {
                const newItems = await removeProductFromCart({
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
