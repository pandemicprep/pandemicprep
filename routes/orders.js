const express = require('express');
const ordersRouter = express.Router();

const {
    addCart
} = require('../db/singletables/cart');

ordersRouter.post('/', async (req, res, next) => {
    try {
        const cart = req.body;
        const newCart = await addCart(cart);

        res.send(newCart);
    } catch (error) {
        next(error);
    }
});

module.exports = ordersRouter;