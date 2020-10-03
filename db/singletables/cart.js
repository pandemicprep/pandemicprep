/** @format */

const { client } = require("../client");


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

// NUMBER ONE RULE OF CODE (THINGS GO WRONG)
async function getActiveCart(userId) {
    try {
        const {
            rows: [activeCart],
        } = await client.query(
            `
          SELECT * FROM carts 
          WHERE status = 'active' AND "userId" = $1;
          `,
            [userId]
        );

        //TODO Null check active cart
        const items = await getProductsCartForACartId(activeCart.id);
        activeCart.items = items;
        return activeCart;
    } catch (error) {
        throw error;
    }
}

//joint products_carts

async function addProductToCart({ userId, productId, cartId, quantity, unitPrice }) {
    console.log('getting to the back end');
    try {
        const itemTotal = quantity * unitPrice;
        await client.query(
            `
              INSERT INTO products_carts ("productId", "cartId", quantity, "unitPrice", "itemTotal")
              VALUES ($1, $2, $3, $4, $5)
              RETURNING *;
          `,
            [productId, cartId, quantity, unitPrice, itemTotal]
        );
        const cart = await getActiveCart(userId);
        return cart;
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
      JOIN products
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

async function removeProductFromCart({ userId, cartId, products_cartsId }) {
    try {
        await client.query(
            `
            DELETE FROM products_carts
            WHERE "jointId"=$1;
        `,
            [products_cartsId]
        );
        const cart = await getActiveCart(userId);
        if (items) {
            return cart;
        } else {
            return {};
        }
    } catch (error) {
        throw error;
    }
}


module.exports = {
    addCart,
    getCartHistoryStatus,
    getActiveCart,
    getCartHistoryStatusAdmin,
    addProductToCart,
    getAllProductsCart,
    getProductsCartForACartId,
    removeProductFromCart,
};
