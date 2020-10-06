const express = require('express');
const categoriesRouter = express.Router();

const {
    getAllCategories
} = require('../db/singletables/categories');

//Gets all categories
categoriesRouter.get('/', async (req, res, next) => {
    try {
        const categories = await getAllCategories();

        res.send(categories);
    } catch (error) {
        next(error);
    }
})

module.exports = categoriesRouter;