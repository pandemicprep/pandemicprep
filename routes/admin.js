const express = require('express');
const adminRouter = express.Router();

const {
    getAllProducts
} = require('../db/singletables/products');

adminRouter.get('/', async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.send(products);
    } catch (error) {
        next(error);
    }
});

module.exports = adminRouter;