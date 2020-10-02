/** @format */

import axios from "axios";

export async function addProductToCart(product, token) {
    console.log("getting to the cart api");
    try {
        const { data: addedProduct } = await axios.post("/api/cart/", product, {
            headers: { Authorization: "Bearer " + token },
        });
        return addedProduct;
    } catch (error) {
        throw error;
    }
}
