const { client } = require('../client');

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