import axios from 'axios';

export async function getProductsByQuery(query, pageNumber) {
    try {
        const { data } = await axios.get(`/api/products/${query}/${pageNumber}`);

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
        console.log('getting to product by id api', productId);
        const { data } = await axios.get(`/api/products/${productId}`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getProductsByCategory(categoryName, pageNumber) {
    try {
        const { data } = await axios.get(`/api/products/category/${categoryName}/${pageNumber}`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getPromotedProducts() {
    try {
        const { data } = await axios.get('/api/products');

        return data;
    } catch (error) {
        throw error;
    }
}