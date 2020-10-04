const express = require('express');
const adminRouter = express.Router();

const {
    getAllProducts,
    updateProduct,
    getAllUsers
} = require('../db');

//Gets all products (requires admin status)
adminRouter.get('/products/:pageNumber', async (req, res, next) => {
    try {
        const { pageNumber } = req.params;
        if (req.user) {
            if (req.user.isAdmin) {
                const products = await getAllProducts(pageNumber);
                res.send(products);
            } else {
                res.send({ message: 'You must be an admin to get all products!' });
            }
        } else {
            res.send({ message: 'You must be an admin to get all products!' });
        }
    } catch (error) {
        next(error);
    }
});

//Gets all users (requires admin status)
adminRouter.get("/users/:pageNumber", async (req, res, next) => {
    try {

        const { pageNumber } = req.params;
        if (req.user) {
            if (req.user.isAdmin) {
                const allUsers = await getAllUsers(pageNumber);
                res.send(allUsers);
            } else {
                res.send({ message: 'You must be an admin to get all users!' });
            }
        } else {
            res.send({ message: 'You must be an admin to get all users!' });
        }
    } catch (error) {
        throw error;
    }
});

//Updates products (requires admin status)
adminRouter.patch('/', async (req, res, next) => {
    console.log('getting to admin patch', req.body)
    try {
        const id = req.body.id;
        const fields = req.body.fields;

        if (req.user) {
            if (req.user.isAdmin) {
                const updatedProduct = await updateProduct(id, fields);
                res.send(updatedProduct);
            } else {
                res.send({ message: 'You must be an admin to update a product!' });
            }
        } else {
            res.send({ message: 'You must be an admin to update a product!' });
        }


    } catch (error) {
        next(error);
    }
})

module.exports = adminRouter;