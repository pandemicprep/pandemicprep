import axios from 'axios';

/**
 * Adds new Review
 * @param {string} newReview 
 */
export async function addNewReview(newReview) {
    try {
        const { data } = await axios.post('/api/reviews', newReview);

        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * Gets Reviews by Product Id
 * @param {integer} productId 
 */
export async function getReviewsByProductId(productId) {
    try {
        const { data } = await axios.get(`/api/reviews/${productId}`);

        return data;
    } catch (error) {
        throw error;
    }
}