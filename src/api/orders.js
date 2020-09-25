import axios from 'axios';

export async function addNewCart(newCart) {
    try {
        const { data } = await axios.post('/api/orders', newCart);

        return data;
    } catch (error) {
        throw error;
    }
}