import axios from 'axios';

export async function addNewReview(newReview) {
    try {
        const { data } = await axios.post('/api/reviews', newReview);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getReviewsByProductId(productId) {
    try {
        const { data } = await axios.get(`/api/reviews/${productId}`);

        return data;
    } catch (error) {
        throw error;
    }
}