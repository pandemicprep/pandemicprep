/** @format */

import axios from "axios";

export async function addProductToCart(product, token) {
    console.log('getting to addProduct to cart at api with ', product);
    try {
        const { data: addedProduct } = await axios.post("/api/cart/", product, {
            headers: { Authorization: "Bearer " + token },
        });
        return addedProduct;
    } catch (error) {
        console.error(error);
    }
}

export async function removeProductFromCart({ cartId, products_cartsId }, token) {
    console.log("getting to remove at api ", cartId, products_cartsId);
    const query = cartId + "/product/" + products_cartsId;
    try {
        const { data: newItems } = await axios.delete("/api/cart/" + query, {
            headers: { Authorization: "Bearer " + token },
        });
        return newItems;
    } catch (error) {
        console.error(error);
    }
}

export async function patchCartItemQuantity(body, token) {
    try {
        const { data: cart } = await axios.patch('/api/cart/quantity', body, {
            headers: { Authorization: "Bearer " + token }
        });
        return cart;
    } catch (error) {
        console.error(error);
    }
}

export async function deactivateCart(body, token) {
    try {
        const { data: newCart } = await axios.patch('/api/cart/status', body, {
            headers: { Authorization: "Bearer " + token }
        });
        return newCart;
    } catch (error) {
        console.error(error);
    }
}
