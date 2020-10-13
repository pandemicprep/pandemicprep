const express = require('express');
const ordersRouter = express.Router();
const stripe = require('stripe')('sk_test_51HbAonE4JzAJB7t2idVGZHl8r5tInb2TseIYxrPXXR37hePbl8MEt2aZsLmBmAiNUWmq1aBn8XAPkQLu6suKNbDj00CleQPnYb');

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

ordersRouter.post('/create-checkout-session', async (req, res) => {
   
  const {cart} = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        cart
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/',
    });
  
    res.send({ id: session.id });
    
  });

module.exports = ordersRouter;