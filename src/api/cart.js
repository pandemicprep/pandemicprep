/** @format */

import axios from "axios";

/**
 * Adds Product to Cart
 * @param {object} product 
 * @param {string} token 
 */
export async function addProductToCart(product, token) {
    try {
        const { data: addedProduct } = await axios.post("/api/cart/", product, {
            headers: { Authorization: "Bearer " + token },
        });
        return addedProduct;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Removes Product from Cart
 * @param {object} param0 
 * @param {string} token 
 */
export async function removeProductFromCart({ cartId, products_cartsId }, token) {
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


/**
 * Adjusts Item QTY in Cart
 * @param {integer} jointId 
 * @param {integer} quantity 
 * @param {string} token 
 */

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
