/** @format */

const { client } = require("../client");
const Promise = require("bluebird");
const LIMIT = 20;

/**
 * Assigns a new cart to a user
 * @param {object} status(active, processing, complete)
 */
async function addCart({ status, lastUpdated, total, userId }) {
    // lastUpdated = getDate();
    try {
        const {
            rows: [newCart],
        } = await client.query(
            `
        INSERT INTO carts (status, "lastUpdated", total, "userId")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `,
            [status, getDate(), total, userId]
        );
        newCart.total = parseFloat(newCart.total);

        newCart.items = [];

        return newCart;
    } catch (error) {}
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
        console.log("carts for order ", rows);
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
 * Gets all carts where status is processing
 */
async function getProcessingCarts(pageNumber = 1) {
    try {
        const OFFSET = LIMIT * (pageNumber - 1);

        const { rowCount } = await client.query(
            `
          SELECT * FROM carts
          WHERE status = 'processing';
          `
        );

        const { rows: carts } = await client.query(
            `
          SELECT * FROM carts
          WHERE status = 'processing'
          LIMIT $1 OFFSET $2;
          `,
            [LIMIT, OFFSET]
        );

        await Promise.mapSeries(carts, async function (cart, index, length) {
            cart.total = parseFloat(cart.total);
            const items = await getProductsCartForACartId(cart.id);
            cart.items = items;
            const user = await getUserById(cart.userId);
            cart.user = user;
            cart.index = index;
        });

        const pageCount = Math.ceil(rowCount / LIMIT);
        return [pageCount, carts];
    } catch (error) {
        throw error;
    }
}

// brought get user by id into this file to add the user info onto processing cart
async function getUserById(id) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
		SELECT * FROM users
        WHERE id = $1;
        `,
            [id]
        );
        if (user) {
            return user;
        } else {
            return { message: "no user by that id" };
        }
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
        let cartQuantity = 0;
        cart.items.map((item) => {
            total = total + item.itemTotal;
            cartQuantity = cartQuantity + item.quantity;
        });

        await client.query(
            `
            UPDATE carts
            SET total=$1,
            "cartQuantity"=$2
            WHERE id=$3
            RETURNING *;
        `,
            [total, cartQuantity, cartId]
        );

        await lastUpdated(cartId);

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
            });
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
        });
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
    console.log("getting to remove product from cart");
    try {
        const date = getDate();
        const deleted = await client.query(
            `
            DELETE FROM products_carts
            WHERE "jointId"=$1;

        `,
            [products_cartsId]
        );

        console.log("item was deleted ", deleted);
        const cart = await getActiveCart(userId);
        console.log("got the cart without it ", cart);
        let total = 0;
        let cartQuantity = 0;
        cart.items.map((item) => {
            total = total + item.itemTotal;
            cartQuantity = cartQuantity + item.quantity;
        });

        const { rows: newUpdatedCart } = await client.query(
            `
            UPDATE carts
            SET total=$1,
            "cartQuantity"=$2
            WHERE id=$3
            RETURNING *;
        `,
            [total, cartQuantity, cartId]
        );
        console.log("got updated cart ", newUpdatedCart);
        await lastUpdated(cartId);

        const newCart = await getActiveCart(userId);

        if (newCart) {
            return newCart;
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

async function updateProductQuantity({ userId, jointId, quantity, unitPrice }) {
    const itemTotal = unitPrice * quantity;

    try {
        await client.query(
            `
            UPDATE products_carts
            SET quantity=$1, 
            "unitPrice"=$2, 
            "itemTotal"=$3
            WHERE "jointId"=$4;
        `,
            [quantity, unitPrice, itemTotal, jointId]
        );

        const cart = await getActiveCart(userId);

        let total = 0;
        let cartQuantity = 0;
        cart.items.map((item) => {
            total = total + item.itemTotal;
            cartQuantity = cartQuantity + item.quantity;
        });

        await client.query(
            `
            UPDATE carts
            SET total=$1,
            "cartQuantity"=$2
            WHERE id=$3
            RETURNING *;
        `,
            [total, cartQuantity, cart.id]
        );

        await lastUpdated(cart.id);

        const newCart = await getActiveCart(userId);

        return newCart;
    } catch (error) {
        throw error;
    }
}

//change cart status from active to processing, creates and returns a new empty cart
async function deactivateCart({ userId, cartId }) {
    try {
        await client.query(
            `
            UPDATE carts
            SET status='processing'
            WHERE id=$1;
        `,
            [cartId]
        );

        await lastUpdated(cartId);

        const newCart = addCart({ status: "active", lastUpdated: getDate(), total: 0, userId });

        return newCart;
    } catch (error) {
        throw error;
    }
}

// Change cart status from processing to complete
async function completeCart(cartId) {
    try {
        const {
            rows: [completedOrder],
        } = await client.query(
            `
            UPDATE carts 
            SET status='complete'
            WHERE id=$1
            RETURNING *;
        `,
            [cartId]
        );

        await lastUpdated(cartId);

        return completedOrder;
    } catch (error) {
        throw error;
    }
}

// Gets carts of all status for an individual user
async function getUserOrderHistory(userId, pageNumber = 1) {
    try {
        const OFFSET = LIMIT * (pageNumber - 1);

        const { rowCount } = await client.query(
            `
          SELECT * FROM carts
          WHERE "userId"=$1;
          `,
            [userId]
        );

        const { rows: carts } = await client.query(
            `
          SELECT * FROM carts
          WHERE "userId"=$1
          LIMIT $2 OFFSET $3;
          `,
            [userId, LIMIT, OFFSET]
        );

        await Promise.mapSeries(carts, async function (cart, index, length) {
            cart.total = parseFloat(cart.total);
            const items = await getProductsCartForACartId(cart.id);
            cart.items = items;
            const user = await getUserById(cart.userId);
            cart.user = user;
            cart.index = index;
        });

        console.log("products comming from the back ", carts);
        const pageCount = Math.ceil(rowCount / LIMIT);
        return [pageCount, carts];
    } catch (error) {
        throw error;
    }
}

// gets order history for all users
async function getOrderHistory(pageNumber = 1) {
    try {
        const OFFSET = LIMIT * (pageNumber - 1);

        const { rowCount } = await client.query(
            `
          SELECT * FROM carts;
          `
        );

        const { rows: carts } = await client.query(
            `
          SELECT * FROM carts
          LIMIT $1 OFFSET $2;
          `,
            [LIMIT, OFFSET]
        );

        await Promise.mapSeries(carts, async function (cart, index, length) {
            cart.total = parseFloat(cart.total);
            const items = await getProductsCartForACartId(cart.id);
            cart.items = items;
            const user = await getUserById(cart.userId);
            cart.user = user;
            cart.index = index;
        });

        const pageCount = Math.ceil(rowCount / LIMIT);
        return [pageCount, carts];
    } catch (error) {
        throw error;
    }
}

async function lastUpdated(cartId) {
    console.log("got to lastUpdated function");
    try {
        const date = getDate();
        await client.query(
            `
            UPDATE carts
            SET "lastUpdated"=$1
            WHERE id=$2;
        `,
            [date, cartId]
        );
    } catch (error) {
        throw error;
    }
}

function getDate() {
    const newDate = new Date();
    let dateString =
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDate() +
        " @ " +
        newDate.getHours() +
        ":" +
        newDate.getMinutes() +
        ":" +
        newDate.getSeconds();

    return dateString;
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
    deactivateCart,
    updateProductQuantity,
    getProcessingCarts,
    completeCart,
    getUserOrderHistory,
    getOrderHistory,
};
