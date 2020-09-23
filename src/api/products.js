import axios from 'axios';

export async function getProductsByQuery(query) {
    try {
        const { data } = await axios.get(`/api/products/${query}`);

        return data;
    } catch (error) {
        throw error;
    }
}