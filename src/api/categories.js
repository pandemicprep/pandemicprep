import axios from 'axios';

//Gets all Categories
export async function getAllCategories() {
    try {
        const { data } = await axios.get('/api/categories');

        return data;
    } catch (error) {
        throw error;
    }
}