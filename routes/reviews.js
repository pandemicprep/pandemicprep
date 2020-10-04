const express = require('express');
const reviewsRouter = express.Router();

const {
    addReview,
    getReviewsByProductId
} = require('../db/singletables/reviews');

//Add New Review
reviewsRouter.post('/', async (req, res, next) => {
    try {
        const review = req.body;
        const newReview = await addReview(review);

        res.send(newReview);
    } catch (error) {
        next(error);
    }
});

//Gets Reviews by ProductId
reviewsRouter.get('/:productId', async (req, res, next) => {
    try {
        const { productId } = req.params;
        const reviewsByProductId = await getReviewsByProductId(productId);

        res.send(reviewsByProductId);
    } catch (error) {
        next(error);
    }
})

module.exports = reviewsRouter;