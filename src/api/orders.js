import axios from 'axios';

/**
 * Adds New Cart
 * @param {object} newCart 
 */
export async function addNewCart(newCart) {
    try {
        const { data } = await axios.post('/api/orders', newCart);

        return data;
    } catch (error) {
        throw error;
    }
}