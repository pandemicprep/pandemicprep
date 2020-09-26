const express = require('express');
const productsRouter = express.Router();

const {
    getProductsByQuery,
    addProduct,
    getProductById,
    getProductsByCategory
} = require('../db/singletables/products');

// gets product(s) by sending a searchString to the db
productsRouter.get('/search/:query', async (req, res, next) => {
    try {
        const { query } = req.params;
        const queryProducts = await getProductsByQuery(query);

        res.send(queryProducts);
    } catch (error) {
       next(error);
    }
});

// adds a new product
productsRouter.post('/', async (req, res, next) => {
    try {
        const product = req.body;
        const newProduct = await addProduct(product);

        res.send(newProduct);
    } catch (error) {
        next(error);
    }
});

// gets a product by id (to be used in other functions)
productsRouter.get('/:productId', async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await getProductById(productId);

        res.send(product);
    } catch (error) {
        next(error);
    }
});

// gets all products in a specific category
productsRouter.get('/category/:categoryName', async (req, res, next) => {
    try {
        const { categoryName } = req.params;
        const products = await getProductsByCategory(categoryName);

        res.send(products);
    } catch (error) {
        next(error);
    }
}) 


module.exports = productsRouter;