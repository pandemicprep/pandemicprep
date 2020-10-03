// // const { get } = require('../../routes/cart');
// /** @format */

// const { client } = require("../client");

// const { getActiveCart } = require('../singletables/cart')

// // const { getCartHistoryStatus } = require("../singletables/cart");

// // const { getProductsForCartHistory } = require("../singletables/products");

// async function addProductToCart({ userId, productId, cartId, quantity, unitPrice }) {
//     console.log('getting to the back end');
//     try {
//         const itemTotal = quantity * unitPrice;
//         await client.query(
//             `
//               INSERT INTO products_carts ("productId", "cartId", quantity, "unitPrice", "itemTotal")
//               VALUES ($1, $2, $3, $4, $5)
//               RETURNING *;
//           `,
//             [productId, cartId, quantity, unitPrice, itemTotal]
//         );
//         const cart = await getActiveCart(userId);
//         return cart;
//     } catch (error) {
//         throw error;
//     }
// }

// async function getProductsCartForACartId(id) {
//     try {
//         const { rows: items } = await client.query(
//             `
//       SELECT *
//       FROM products_carts
//       JOIN products
//       ON products_carts."productId" = products.id
//       WHERE products_carts."cartId"=$1;
//     `,
//             [id]
//         );
//         if (items) {
//             return items;
//         } else {
//             return [];
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// async function getAllProductsCart() {
//     try {
//         const { rows } = await client.query(`
//             SELECT * FROM products_carts
//             `);
//         return rows;
//     } catch (error) {
//         throw error;
//     }
// }

// async function removeProductFromCart({ userId, cartId, products_cartsId }) {
//     try {
//         await client.query(
//             `
//             DELETE FROM products_carts
//             WHERE "jointId"=$1;
//         `,
//             [products_cartsId]
//         );
//         const cart = await getActiveCart(userId);
//         if (items) {
//             return cart;
//         } else {
//             return {};
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// module.exports = {
//     addProductToCart,
//     getAllProductsCart,
//     getProductsCartForACartId,
//     removeProductFromCart,
// };
