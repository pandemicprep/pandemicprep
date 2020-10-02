/** @format */

const { client } = require("../client");

// const { getCartHistoryStatus } = require("../singletables/cart");

// const { getProductsForCartHistory } = require("../singletables/products");

async function addProductCart({ productId, cartId, quantity, unitPrice }) {
    try {
        const itemTotal = quantity * unitPrice;
        const {
            rows: [prodCart],
        } = await client.query(
            `
              INSERT INTO products_carts ("productId", "cartId", quantity, "unitPrice", "itemTotal")
              VALUES ($1, $2, $3, $4, $5)
              RETURNING *;
          `,
            [productId, cartId, quantity, unitPrice, itemTotal]
        );
        const items = await getProductsCartForACartId(cartId);
        return items;
    } catch (error) {
        throw error;
    }
}

async function getProductsCartForACartId(id) {
    try {
        const { rows: items } = await client.query(
            `
      SELECT *
      FROM products_carts
      INNER JOIN products
      ON products_carts."productId" = products.id
      WHERE products_carts."cartId"=$1;
    `,
            [id]
        );
        if (items) {
            return items;
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
}

async function getAllProductsCart() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM products_carts
            `);
        return rows;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    addProductCart,
    getAllProductsCart,
    getProductsCartForACartId,
};
