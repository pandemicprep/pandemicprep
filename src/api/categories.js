import axios from 'axios';

export async function getAllCategories() {
    try {
        const { data } = await axios.get('/api/categories');

        return data;
    } catch (error) {
        throw error;
    }
}