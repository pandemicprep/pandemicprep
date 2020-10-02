/** @format */

const express = require("express");
const cartRouter = express.Router();

const { addProductCart } = require("../db/jointables/products_carts");
const { getActiveCart } = require("../db");

cartRouter.post("/", async (req, res, next) => {
    console.log("getting to the cart router", req.body);
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

module.exports = cartRouter;
