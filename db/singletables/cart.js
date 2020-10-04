/** @format */

const { client } = require("../client");

/**
 * Assigns a new cart to a user
 * @param {object} status(active, processing, complete) 
 */
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
        newCart.total = parseFloat(newCart.total);

        return newCart;
    } catch (error) { }
}


/**
 * Get users cart history
 * @param {integer} cartId 
 */
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


/**
 * Gets all carts that are being processed
 */
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

/**
 * Gets Active Cart by User ID
 * @param {integer} userId 
 */
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

        activeCart.total = parseFloat(activeCart.total);
        const items = await getProductsCartForACartId(activeCart.id);

        activeCart.items = items;
        return activeCart;
    } catch (error) {
        throw error;
    }
}


/**
 * Adds Product To Cart by userId, productId, cartId, quantity, & unitPrice
 * @param {object} param0 
 */
async function addProductToCart({ userId, productId, cartId, quantity, unitPrice }) {

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
        let total = 0;
        cart.items.map((item) => {
            total = total + item.itemTotal;
            console.log('the item total is ', item.itemTotal);
        })

        await client.query(`
            UPDATE carts
            SET total=${total}
            WHERE id=${cart.id}
            RETURNING *;
        `);

        const newCart = await getActiveCart(userId);

        return newCart;
    } catch (error) {
        throw error;
    }
}


/**
 * Gets an array of Products associated with the cart
 * @param {integer} cartId 
 */
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
            items.forEach((item) => {
                item.unitPrice = parseFloat(item.unitPrice);
                item.itemTotal = parseFloat(item.itemTotal);
            })
            return items;
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
}


/**
 * Gets price & item total for products in the cart (sales report)
 */
async function getAllProductsCart() {
    try {
        const { rows } = await client.query(`
            SELECT * FROM products_carts
            `);
        rows.forEach((item) => {
            item.unitPrice = parseFloat(item.unitPrice);
            item.itemTotal = parseFloat(item.itemTotal);
        })
        return rows;
    } catch (error) {
        throw error;
    }
}


/**
 * Removes a product from an active Cart
 * @param {integer} param0 
 */
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
        if (cart) {
            return cart;
        } else {
            return {};
        }
    } catch (error) {
        throw error;
    }
}


/**
 * Updates product quantity in the cart
 * @param {integer} jointId 
 * @param {integer} quantity 
 */
async function updateProductQuantity(jointId, quantity) {
    try {
        await client.query(`
            
        `);
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
