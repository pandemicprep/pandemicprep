const express = require('express');
const productsRouter = express.Router();

const {
    getProductsByQuery
} = require('../db/singletables/products');

productsRouter.get('/:query', async (req, res, next) => {
    try {
        const { query } = req.params;
        const queryProducts = await getProductsByQuery(query);

        res.send(queryProducts);
    } catch (error) {
       next(error);
    }
});

module.exports = productsRouter;