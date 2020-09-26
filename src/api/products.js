import axios from 'axios';

export async function getProductsByQuery(query) {
    try {
        const { data } = await axios.get(`/api/products/search/${query}`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function addNewProduct(newProduct) {
    try {
        const { data } = await axios.post('/api/products', newProduct);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getProductById(productId) {
    try {
        const { data } = await axios.get(`/api/products/${productId}`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getProductsByCategory(categoryName) {
    try {
        const { data } = await axios.get(`/api/products/category/${categoryName}`);

        return data;
    } catch (error) {
        throw error;
    }
}