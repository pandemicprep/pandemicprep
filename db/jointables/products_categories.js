/** @format */

const { client } = require("../client");
const Promise = require('bluebird');

const {
    getProductById
} = require('../singletables/products');

async function addProduct_Categories(prodId, catId) {
    try {
        if (prodId > 0 && catId > 0) {
            const {
                rows: [product_categoriesItem],
            } = await client.query(
                `
                    INSERT INTO products_categories ("productId", "categoryId")
                    VALUES ($1, $2);
                    `,
                [prodId, catId]
            );
            if (product_categoriesItem) {
                return product_categoriesItem;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
}

// async function getProductsByCategory(category) {
//     try {
//         const {
//             rows: productIds
//         } = await client.query(`
//             SELECT products.id
//             FROM products
//             JOIN products_categories ON products.id = products_categories."productId"
//             JOIN categories ON categories.id = products_categories."categoryId"
//             WHERE categories.name = $1;
//         `, [category]);

//         return await Promise.mapSeries(productIds, async function(product, index, length) {
//             await getProductById(product.id);
//         })
//     } catch (error) {
//         throw error;
//     }
// }

module.exports = { 
    addProduct_Categories, 
    // getProductsByCategory 
};
