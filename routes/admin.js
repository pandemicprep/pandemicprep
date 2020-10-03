const express = require('express');
const adminRouter = express.Router();

const {
    getAllProducts,
    updateProduct,
    getAllUsers
} = require('../db');

// get all products
adminRouter.get('/products/:pageNumber', async (req, res, next) => {
    try {
        const { pageNumber } = req.params;
        if (req.user) {
            if (req.user.isAdmin) {
                const products = await getAllProducts(pageNumber);
                res.send(products);
            } else {
                res.send({message: 'You must be an admin to get all products!'});
            }
        } else {
            res.send({message: 'You must be an admin to get all products!'});
        }
    } catch (error) {
        next(error);
    }
});

// get all users
adminRouter.get("/users/:pageNumber", async (req, res, next) => {
    try {
        console.log(req.user, 'making it into getall users api')

        const pageNumber = req.params;
        if (req.user) {
            if (req.user.isAdmin) {
                const allUsers = await getAllUsers(pageNumber);
                res.send(allUsers);
            } else {
                res.send({message: 'You must be an admin to get all users!'});
            }
        } else {
            res.send({message: 'You must be an admin to get all users!'});
        }
    } catch (error) {
        throw error;
    }
});

adminRouter.patch('/', async (req, res, next) => {
    try {
        const id = req.body.id;
        const fields = req.body.fields;
        console.log(id, fields, 'destructure check at the route level')

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