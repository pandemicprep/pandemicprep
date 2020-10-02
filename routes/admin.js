const express = require('express');
const adminRouter = express.Router();

const {
    getAllProducts,
    updateProduct
} = require('../db/singletables/products');

adminRouter.get('/:pageNumber', async (req, res, next) => {
    try {
        const { pageNumber } = req.params;
        const products = await getAllProducts(pageNumber);
        res.send(products);
    } catch (error) {
        next(error);
    }
});

adminRouter.patch('/', async (req, res, next) => {
    try {
        const id = req.body.id;
        const fields = req.body;

        if (req.user) {
            if (req.user.isAdmin) {
                const updatedProduct = await updateProduct(id, fields);
                res.send(updatedProduct);
            } else {
                res.send({message: 'You must be an admin to update a product!'});
            }
        } else {
            res.send({message: 'You must be an admin to update a product!'});
        }

        
    } catch (error) {
        next(error);
    }
})

module.exports = adminRouter;