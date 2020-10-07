const express = require('express');
const ordersRouter = express.Router();

const {
    addCart,
    getUserOrderHistory
} = require('../db/singletables/cart');

// Gets carts of all status for a particular user
ordersRouter.get('/:pageNumber', async (req, res, next) => {
    try {
        const {pageNumber} = req.params;
        if (req.user) {
            const orderHistory = await getUserOrderHistory(req.user.id, pageNumber);
            res.send(orderHistory)
        } else {
            res.send({message: 'Must be correct user to retrieve this order history!'})
        }
    } catch (error) {
        next(error);
    }
})

//Creates new cart
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