const { client } = require('../client');


/**
 * Adds user review for a product
 * @param {object} param0 
 */
async function addReview({
    creatorId,
    productId,
    score,
    description
}) {
    try {
        const {
            rows: [review]
        } = await client.query(`
            INSERT INTO reviews ("creatorId", "productId", score, description)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `, [creatorId, productId, score, description]);

        return review;
    } catch (error) {
        throw error;
    }
}


/**
 * Gets reviews by Product ID
 * @param {integer} productId 
 */
async function getReviewsByProductId(productId) {
    try {
        const {
            rows
        } = await client.query(`
            SELECT * FROM reviews
            WHERE "productId"=$1;
        `, [productId]);

        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addReview,
    getReviewsByProductId
};