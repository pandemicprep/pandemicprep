/** @format */

const { client } = require("../client");
const { getProductsCartForACartId } = require("../jointables/products_carts");

async function addCart({ status, lastUpdated, total, userId }) {
    console.log("getting into add cart with ", status, lastUpdated, total, userId);
    try {
        const {
            rows: [newCart],
        } = await client.query(
            `
        INSERT INTO carts (status, "lastUpdated", total, "userId")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `,
            [status, lastUpdated, total, userId]
        );

        console.log("newCart in cart.js: ", newCart);
        return newCart;
    } catch (error) {}
}

async function getCartHistoryStatus(id) {
    try {
        const { rows } = await client.query(
            `
        SELECT * FROM carts
        WHERE (status = 'processing' OR status = 'shipped' OR status = 'cancelled') AND "userId" = $1;
        `,
            [id]
        );
        return rows;
    } catch (error) {
        throw error;
    }
}
async function getCartHistoryStatusAdmin() {
    try {
        const { rows } = await client.query(
            `
          SELECT * FROM carts
          WHERE status = 'processing' OR status = 'shipped' OR status = 'cancelled';
          `
        );
        return rows;
    } catch (error) {
        throw error;
    }
}
async function getActiveCart(id) {
    try {
        const {
            rows: [activeCart],
        } = await client.query(
            `
          SELECT * FROM carts
          WHERE status = 'active' AND "userId" = $1;
          `,
            [id]
        );
        const items = await getProductsCartForACartId(activeCart.id);
        activeCart.items = items;
        return activeCart;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    addCart,
    getCartHistoryStatus,
    getActiveCart,
    getCartHistoryStatusAdmin,
};
