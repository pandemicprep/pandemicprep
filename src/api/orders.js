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

export async function getOrderHistory(pageNumber, token) {
    try {
        const { data } = await axios.get(`/api/orders/${pageNumber}`,  {headers: {Authorization: 'Bearer ' + token}});
        return data;
    } catch (error) {
        throw error;
    }
}